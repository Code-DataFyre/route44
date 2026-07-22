import { Link, useParams } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import { getServiceVerticalBySlug } from "../data/serviceVerticals";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { useQuoteModal } from "../context/useQuoteModal";

function ServiceVerticalDetail() {
  const mainRef = usePageTransition();
  const { slug } = useParams();
  const vertical = getServiceVerticalBySlug(slug);
  const { open: openQuoteModal } = useQuoteModal();

  if (!vertical) {
    return (
      <main ref={mainRef} className="pt-32 pb-24 page-fade-in min-h-[60vh]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
            Service Not Found
          </h1>
          <p className="font-body-md text-sm text-on-surface-variant mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-primary text-on-primary px-6 py-3 font-label-md text-sm font-bold hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const { detail } = vertical;

  return (
    <main ref={mainRef} className="pt-20 page-fade-in">
      {/* ── Banner ── */}
      <section className="relative h-[300px] md:h-[340px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={vertical.title}
            className="w-full h-full object-cover"
            src={vertical.image}
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 technical-grid opacity-30" />
        </div>
        <div className="relative z-10 px-6 md:px-12 max-w-[1440px] mx-auto w-full pb-8">
          <div className="mb-3">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/#directory" },
                { label: vertical.title },
              ]}
            />
          </div>
          <h1 className="font-headline-xl text-[22px] sm:text-[26px] md:text-headline-xl text-white mb-3">
            {vertical.title}
          </h1>
          <p className="font-body-md text-sm text-white/80 max-w-lg">
            {vertical.tagline}
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 px-6 md:px-12 bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            {detail.intro.heading}
          </h2>
          {detail.intro.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-body-md text-sm text-on-surface-variant leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── Why Us ── */}
      {detail.whyUs && (
        <section className="py-16 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3 block">
                  Why Route 44
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                  {detail.whyUs.heading}
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {detail.whyUs.intro}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8 divide-y divide-outline-variant/25">
              {detail.whyUs.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 sm:gap-6 py-5 first:pt-0"
                >
                  <span className="font-mono-data text-headline-md text-outline-variant group-hover:text-primary transition-colors flex-none w-9 sm:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-headline-md text-[15px] mb-1.5 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Capability Stats ── */}
      {detail.stats && (
        <section className="py-16 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-xl mb-8">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3 block">
                Built For The Job
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {detail.stats.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/20 rounded-xl overflow-hidden border border-outline-variant/20">
              {detail.stats.items.map((item) => (
                <div
                  key={item.label}
                  className="group bg-surface p-4 flex items-start gap-3 hover:bg-surface-container-low transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-none group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[16px]">
                      {item.icon}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-label-md text-[11px] text-on-surface uppercase tracking-wide mb-0.5">
                      {item.label}
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-snug">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Geography ── */}
      {detail.geography && (
        <section className="py-16 px-6 md:px-12 bg-surface">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/5 rounded-xl -z-10 hidden lg:block" />
              <img
                alt={detail.geography.heading}
                className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl border border-outline-variant/30"
                src={detail.geography.image}
              />
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-3">
                {detail.geography.heading}
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-5">
                {detail.geography.subheading}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {detail.geography.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[15px] mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-xs text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── Trailer Spec ── */}
      {detail.trailerSpec && (
        <section className="py-16 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
              <img
                alt={detail.trailerSpec.heading}
                className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl"
                src={detail.trailerSpec.image}
              />
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-3">
                  {detail.trailerSpec.heading}
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {detail.trailerSpec.intro}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {detail.trailerSpec.groups.map((group) => (
                <div key={group.title} className="glass-panel p-5 border-l-4 border-primary">
                  <h3 className="font-headline-md text-[15px] mb-1">
                    {group.title}
                  </h3>
                  <p className="font-label-md text-[11px] text-primary uppercase tracking-wide mb-3">
                    {group.sub}
                  </p>
                  <ul className="space-y-2">
                    {group.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs">
                        <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">
                          check_circle
                        </span>
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Operating Segments ── */}
      {detail.segments && (
        <section className="py-16 px-6 md:px-12 bg-surface">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-xl mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-3">
                {detail.segments.heading}
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant">
                {detail.segments.subheading}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {detail.segments.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl overflow-hidden bg-surface shadow-sm border border-outline-variant/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={item.image}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-headline-md text-[15px] text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Benefits ── */}
      {detail.benefits && (
        <section className="py-16 px-6 md:px-12 bg-inverse-surface text-surface">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-headline-md text-headline-md text-center mb-10">
              {detail.benefits.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {detail.benefits.items.map((item) => (
                <div key={item.title} className="text-center">
                  <span className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-secondary-fixed-dim mx-auto mb-3">
                    <span className="material-symbols-outlined text-[20px]">
                      {item.icon}
                    </span>
                  </span>
                  <h3 className="font-headline-md text-[15px] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs text-surface-variant leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Value Added Services ── */}
      {detail.valueAdded && (
        <section className="py-16 px-6 md:px-12 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-xl mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-3">
                {detail.valueAdded.heading}
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant">
                {detail.valueAdded.subheading}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detail.valueAdded.items.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl overflow-hidden bg-surface shadow-sm border border-outline-variant/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-28 overflow-hidden">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={item.image}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline-md text-[13px] text-on-surface mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 px-6 md:px-12 bg-inverse-surface text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-white mb-3">
            Get a Quote
          </h2>
          <p className="font-body-md text-sm text-white/70 mb-6">
            We handle everything from single shipments to large-scale requests — tell us what you need and we'll tailor a solution for you.
          </p>
          <button
            type="button"
            onClick={() => openQuoteModal(vertical.title)}
            className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-sm font-bold coral-glow hover:brightness-110 transition-all inline-flex items-center gap-2"
          >
            Request a Quote
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default ServiceVerticalDetail;
