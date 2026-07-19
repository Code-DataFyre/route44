import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import { CATEGORIES } from "../data/categories";

const WHY_CHOOSE_US = [
  {
    icon: "shield_lock",
    title: "Uncompromising Security",
    desc: "TAPA TSR 1 & 2 certified equipment, secure parking, driver screening, and 24/7 monitoring on every route.",
  },
  {
    icon: "bolt",
    title: "Streamlined Efficiency",
    desc: "Dedicated account management, expert support, and seamless data integration into your existing supply chain.",
  },
  {
    icon: "monitoring",
    title: "Stay In Control 24/7",
    desc: "Real-time shipment tracking and proactive issue resolution, so your cargo arrives on time and in full.",
  },
  {
    icon: "public",
    title: "Scale Across Europe",
    desc: "An extensive European network, deep regulatory expertise, and a large fleet of modern trucks and trailers.",
  },
  {
    icon: "savings",
    title: "Optimised Costs",
    desc: "Transparent pricing and flexible service options, letting you control logistics costs without cutting corners.",
  },
  {
    icon: "eco",
    title: "Sustainable By Design",
    desc: "HVO100 fuel, intermodal rail corridors, and route optimisation that lower emissions without slowing you down.",
  },
];

function Categories() {
  const mainRef = usePageTransition();

  return (
    <main ref={mainRef} className="pt-28 neural-grid page-fade-in">
      {/* ── Hero ── */}
      <section className="pb-16">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
              NEURAL LOGISTICS NETWORK ACTIVE
            </span>
            <h1 className="font-display-lg text-[24px] sm:text-[28px] md:text-display-lg mb-5 text-on-surface leading-tight">
              Categories{" "}
              <span className="text-primary">Built Around Your Cargo.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-lg">
              Route 44 combines Tier-1 physical infrastructure with real-time
              telemetry. From air freight to finished vehicle logistics, we
              provide the backbone for every mode of movement.
            </p>
            <a
              href="#directory"
              className="px-6 py-3 bg-secondary text-on-secondary font-label-md text-label-md inline-flex items-center coral-glow hover:brightness-110 transition-all"
            >
              Explore Our Categories
              <span className="material-symbols-outlined text-[18px] ml-2">
                arrow_downward
              </span>
            </a>
          </div>
          <div className="relative h-52 md:h-[380px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 shadow-sm p-4 group">
            <img
              alt="Route 44 modern semi-trailer fleet at distribution hub"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Rj33UBcqhx6tK7lIv2paop_VUXjJWAm4L_7_ebo1_mcstSwbaynDSc7mvD34o8WgOzectdD4FXizz5w_lKEU-2YtLqMQ0JDBbNmuL5fWq0xkJA8SAmQq6_wDkmzkry0h2tbk3xKhYbA2oagN3khOgenKlJiqzWn2wi1bE_FOLKFwZmiWPDcDF891ZcO8F-Ql38xDY81GTMuKtz4KMEVGuA2KkxMx_Xq6bGcoWJrm69nEB9bg46ABmyc3w32LXuqhLa9EzkzUME_d"
            />
            <div className="absolute bottom-4 left-4 p-4 glass-panel border-l-4 border-primary">
              <p className="font-mono-data text-mono-data text-primary uppercase mb-1">
                Live Asset Tracking
              </p>
              <p className="font-headline-md text-headline-md">
                1,420+ Mobile Units
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Grid ── */}
      <section
        className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-surface"
        id="directory"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4">
              Categories
            </h2>
            <p className="font-headline-lg text-headline-lg text-on-surface">
              Scalable solutions designed for modern enterprise demands.
            </p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mx-8 mb-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/categories/${cat.slug}`}
              className="group relative h-56 rounded-2xl overflow-hidden shadow-md border border-outline-variant/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

              <div className="relative z-10 h-full p-4 flex flex-col justify-end">
                <h3 className="font-headline-md text-headline-md text-sm leading-snug text-white mb-1.5">
                  {cat.title}
                </h3>
                <p className="font-body-md text-xs text-white/80 leading-snug mb-2 line-clamp-2">
                  {cat.desc}
                </p>
                <span className="font-label-md text-xs text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-xl mb-10">
            <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </h2>
            <p className="font-headline-lg text-headline-lg text-on-surface">
              A long-term partner that shares your commitment to quality,
              safety, and sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="group glass-panel p-5 border-l-4 border-primary hover:border-secondary transition-all duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                </span>
                <h3 className="font-headline-md text-headline-md mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-surface-container">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
          {[
            { value: "99.8%", label: "On-Time Performance" },
            { value: "2.4M", label: "Miles Covered Monthly" },
            { value: "150+", label: "Full-Time Operatives" },
            { value: "24/7", label: "Telemetry Monitoring" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-[26px] sm:text-[32px] md:font-display-lg md:text-display-lg font-bold text-primary">
                {value}
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
            Not Sure Which Category Fits?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-lg mx-auto">
            Speak to our logistics engineers and get a tailored solution for
            your business.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-7 py-3.5 font-label-md text-label-md font-bold hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            Request a Quote{" "}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Categories;
