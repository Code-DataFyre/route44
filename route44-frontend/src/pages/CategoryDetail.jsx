import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import { CATEGORIES, getCategoryBySlug } from "../data/categories";

function CategoryDetail() {
  const mainRef = usePageTransition();
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const navTrackRef = useRef(null);

  const scrollNav = (direction) => {
    navTrackRef.current?.scrollBy({ left: 220 * direction, behavior: "smooth" });
  };

  if (!category) {
    return (
      <main ref={mainRef} className="pt-28 pb-16 page-fade-in min-h-[60vh]">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-3">
            Category Not Found
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant mb-6">
            The category you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="bg-primary text-on-primary px-6 py-3 font-label-md text-label-md font-bold hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const { detail } = category;
  const otherCategories = CATEGORIES.filter((cat) => cat.slug !== slug);

  return (
    <main ref={mainRef} className="pt-20 page-fade-in">
      {/* ── Banner ── */}
      <section className="relative h-[300px] md:h-[340px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={category.title}
            className="w-full h-full object-cover"
            src={category.image}
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 technical-grid opacity-30" />
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full pb-8">
          <h1 className="font-display-lg text-[22px] sm:text-[26px] md:text-display-lg text-white mb-2">
            {category.title}
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 max-w-lg">
            {category.tagline}
          </p>
        </div>
      </section>

      {/* ── Category Nav ── */}
      <nav
        aria-label="All categories"
        className="w-full bg-glass-fill backdrop-blur-md border-b border-outline-variant/30 sticky top-24 z-30"
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop flex items-center gap-3 py-2.5">
          <button
            type="button"
            onClick={() => scrollNav(-1)}
            aria-label="Scroll categories left"
            className="flex-none w-7 h-7 rounded-[9999px] border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <span className="material-symbols-outlined text-[14px]">
              chevron_left
            </span>
          </button>

          <div
            ref={navTrackRef}
            className="flex items-center gap-5 overflow-x-auto no-scrollbar scroll-smooth flex-1"
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/categories/${cat.slug}`}
                className={`font-label-md text-[10px] uppercase tracking-wide whitespace-nowrap flex-none transition-colors duration-200 ${
                  cat.slug === slug
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant font-normal hover:text-primary"
                }`}
              >
                {cat.title}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollNav(1)}
            aria-label="Scroll categories right"
            className="flex-none w-7 h-7 rounded-[9999px] border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
          </button>
        </div>
      </nav>

      {detail ? (
        <>
          {/* ── Intro ── */}
          <section className="py-16 bg-surface">
            <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/5 rounded-2xl -z-10 hidden lg:block" />
                <img
                  alt={detail.intro.heading}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl border border-outline-variant/30"
                  src={detail.intro.image}
                />
              </div>
              <div>
                <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                  {detail.intro.heading}
                </h2>
                <div className="space-y-3">
                  {detail.intro.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-body-md text-sm text-on-surface-variant leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Video / Commitment ── */}
          {detail.video && (
            <section className="py-16 bg-surface-container-low">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
                <h2 className="font-headline-xl text-headline-xl text-secondary mb-3 max-w-xl mx-auto">
                  {detail.video.heading}
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant max-w-xl mx-auto mb-8">
                  {detail.video.body}
                </p>
                <div className="relative max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                  <img
                    alt={detail.video.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={detail.video.thumbnail}
                  />
                  <div className="absolute inset-0 bg-inverse-surface/30 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-[9999px] bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        play_arrow
                      </span>
                    </span>
                  </div>
                </div>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-3">
                  {detail.video.caption}
                </p>
              </div>
            </section>
          )}

          {/* ── Keep Ahead ── */}
          {detail.keepAhead && (
            <section className="py-16 bg-surface">
              <div className="max-w-2xl mx-auto px-6 md:px-margin-desktop text-center">
                <h2 className="font-headline-xl text-headline-xl text-primary mb-5">
                  {detail.keepAhead.heading}
                </h2>
                <div className="space-y-3">
                  {detail.keepAhead.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-body-md text-sm text-on-surface-variant leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Service Levels ── */}
          {detail.serviceLevels && (
            <section className="py-16 bg-surface-container-low">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
                <div className="max-w-xl mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                    {detail.serviceLevels.heading}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {detail.serviceLevels.intro}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {detail.serviceLevels.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="glass-panel p-5 border-l-4 border-primary"
                    >
                      <h3 className="font-headline-md text-headline-md text-primary mb-1.5">
                        {tier.name}
                      </h3>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-2">
                        {tier.tagline}
                      </p>
                      {tier.blurb && (
                        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-3">
                          {tier.blurb}
                        </p>
                      )}
                      {tier.bullets && (
                        <ul className="space-y-1.5">
                          {tier.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">
                                check_circle
                              </span>
                              <span className="text-on-surface-variant">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Sustainability ── */}
          {detail.sustainability && (
            <section className="py-16 bg-inverse-surface text-surface">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <img
                  alt={detail.sustainability.heading}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl order-2 lg:order-1"
                  src={detail.sustainability.image}
                />
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      eco
                    </span>
                    <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">
                      Sustainability
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg mb-4">
                    {detail.sustainability.heading}
                  </h2>
                  <div className="space-y-3 mb-5">
                    {detail.sustainability.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="font-body-md text-sm text-surface-variant leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {detail.sustainability.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                          check_circle
                        </span>
                        <span className="font-body-md text-sm text-surface-variant">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* ── Solutions ── */}
          {detail.solutions && (
            <section className="py-16 bg-surface">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
                <div className="text-center max-w-lg mx-auto mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                    {detail.solutions.heading}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {detail.solutions.subheading}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {detail.solutions.items.map((item) =>
                    item.desc ? (
                      <div
                        key={item.title}
                        className="group w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] rounded-xl overflow-hidden bg-surface shadow-sm border border-outline-variant/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="relative h-36 overflow-hidden">
                          <img
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            src={item.image}
                          />
                        </div>
                        <div className="p-4">
                          <span className="block w-6 h-[3px] bg-secondary rounded-full mb-2" />
                          <h3 className="font-headline-md text-headline-md text-on-surface mb-1.5 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={item.title}
                        className="group relative w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] h-48 rounded-xl overflow-hidden shadow-sm cursor-pointer"
                      >
                        <img
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={item.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-l-4 border-secondary">
                          <h3 className="font-headline-md text-headline-md text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ── Value Added Services ── */}
          {detail.valueAdded && (
            <section className="py-16 bg-surface-container-low">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                    {detail.valueAdded.heading}
                  </h2>
                  <div className="space-y-3 mb-5">
                    {detail.valueAdded.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="font-body-md text-sm text-on-surface-variant leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {detail.valueAdded.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">
                          check_circle
                        </span>
                        <span className="font-body-md text-sm text-on-surface-variant">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  alt={detail.valueAdded.heading}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl"
                  src={detail.valueAdded.image}
                />
              </div>
            </section>
          )}

          {/* ── Specialized Goods ── */}
          {detail.specialized && (
            <section className="py-16 bg-surface">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <img
                  alt={detail.specialized.heading}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl order-2 lg:order-1"
                  src={detail.specialized.image}
                />
                <div className="order-1 lg:order-2">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                    {detail.specialized.heading}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-5">
                    {detail.specialized.intro}
                  </p>
                  <ul className="space-y-2">
                    {detail.specialized.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">
                          check_circle
                        </span>
                        <span className="font-body-md text-sm text-on-surface-variant">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* ── The Route 44 Difference ── */}
          {detail.difference && (
            <section className="py-16 bg-inverse-surface text-surface">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
                <div className="flex flex-col items-center mb-8">
                  {detail.difference.icon && (
                    <span className="material-symbols-outlined text-secondary text-[30px] mb-3">
                      {detail.difference.icon}
                    </span>
                  )}
                  <h2 className="font-headline-lg text-headline-lg text-center">
                    {detail.difference.heading}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {detail.difference.columns.map((col) => (
                    <div key={col.title}>
                      <h3 className="font-headline-md text-headline-md text-secondary-fixed-dim mb-2">
                        {col.title}
                      </h3>
                      <p className="font-body-md text-sm text-surface-variant leading-relaxed">
                        {col.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Portal Banner ── */}
          {detail.portal && (
            <section className="py-16 bg-primary text-on-primary">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-4">
                    {detail.portal.heading}
                  </h2>
                  <p className="font-body-md text-sm opacity-80 mb-5">
                    {detail.portal.body}
                  </p>
                  <button className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md font-bold coral-glow hover:brightness-110 transition-all">
                    {detail.portal.cta}
                  </button>
                </div>
                <img
                  alt={detail.portal.heading}
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl"
                  src={detail.portal.image}
                />
              </div>
            </section>
          )}

          {/* ── Facts & Figures ── */}
          {detail.facts && (
            <section className="py-12 bg-surface-container">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
                {detail.facts.image && (
                  <img
                    alt={detail.facts.heading}
                    className="w-full max-w-xl mx-auto aspect-[16/7] object-cover rounded-xl shadow-md mb-6"
                    src={detail.facts.image}
                  />
                )}
                <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-6 text-center">
                  {detail.facts.heading}
                </h2>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-2xl mx-auto text-center">
                  {detail.facts.stats.map((stat) => (
                    <div key={stat.label} className="w-28 sm:w-32">
                      {stat.icon && (
                        <span className="material-symbols-outlined text-primary text-[22px] mb-1 block">
                          {stat.icon}
                        </span>
                      )}
                      <p className="font-display-lg text-display-lg text-primary">
                        {stat.value}
                      </p>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase mt-1">
                        {stat.label}
                      </p>
                      {stat.sub && (
                        <p className="font-body-md text-xs text-on-surface-variant">
                          {stat.sub}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Case Studies ── */}
          {detail.caseStudies && (
            <section className="py-16 bg-surface">
              <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
                <div className="max-w-xl mb-8">
                  <h2 className="font-headline-lg text-headline-lg text-primary mb-3">
                    {detail.caseStudies.heading}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {detail.caseStudies.intro}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {detail.caseStudies.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl overflow-hidden bg-surface shadow-sm border border-outline-variant/20 group cursor-pointer hover:shadow-lg transition-all"
                    >
                      <div className="h-36 overflow-hidden">
                        <img
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={item.image}
                        />
                      </div>
                      <div className="p-4">
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                          Case Study
                        </span>
                        <h3 className="font-headline-md text-headline-md text-on-surface mt-1.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ── Simple CTA ── */}
          {detail.cta && (
            <section className="py-16 bg-inverse-surface text-center">
              <div className="max-w-xl mx-auto px-6 md:px-margin-desktop">
                <h2 className="font-headline-lg text-headline-lg text-white mb-3">
                  {detail.cta.heading}
                </h2>
                <p className="font-body-md text-sm text-white/70 mb-6">
                  {detail.cta.body}
                </p>
                <Link
                  to={detail.cta.buttonTo}
                  className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md font-bold coral-glow hover:brightness-110 transition-all inline-flex items-center gap-2"
                >
                  {detail.cta.buttonLabel}
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </section>
          )}
        </>
      ) : (
        /* ── Fallback for categories without full detail content yet ── */
        <section className="py-16 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="max-w-xl mb-8">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                {category.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                {category.desc}
              </p>
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-6 py-3 font-label-md text-label-md font-bold hover:brightness-110 transition-all inline-flex items-center gap-2"
              >
                Speak to a Specialist
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="max-w-lg mb-5">
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-1.5">
                Explore
              </h3>
              <p className="font-headline-md text-headline-md text-on-surface">
                Other categories you might be interested in
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherCategories.slice(0, 4).map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/categories/${cat.slug}`}
                  className="group rounded-xl overflow-hidden bg-surface shadow-sm border border-outline-variant/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={cat.image}
                    />
                  </div>
                  <div className="p-3.5">
                    <h4 className="font-headline-md text-[13px] text-on-surface group-hover:text-primary transition-colors">
                      {cat.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default CategoryDetail;
