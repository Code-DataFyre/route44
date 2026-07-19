import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import ServicesTabs from "../components/layout/ServicesTabs";

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

function Services() {
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
              Precision-Engineered{" "}
              <span className="text-primary">Transport Solutions.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-lg">
              Route 44 combines Tier-1 physical infrastructure with real-time
              telemetry. From e-commerce parcels to temperature-controlled
              pharma, we provide the backbone for global commerce.
            </p>
            <a
              href="#directory"
              className="px-6 py-3 bg-secondary text-on-secondary font-label-md text-label-md inline-flex items-center coral-glow hover:brightness-110 transition-all"
            >
              Explore Our Services
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

      {/* ── Services (Transportation + Value Added tabs) ── */}
      <div id="directory">
        <ServicesTabs standalone />
      </div>

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

      {/* ═══════════════════════════════════════════════════════════════
          The sections below are the previous Service Directory content.
          Kept for reference (not deleted) but disabled — superseded by
          the <ServicesTabs /> directory and Why Choose Us section above.
      ═══════════════════════════════════════════════════════════════ */}
      {/*
      <section className="py-16 bg-surface-container-low" id="directory">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-headline-xl text-headline-xl mb-3">
                Service Directory
              </h2>
              <p className="font-body-md text-sm text-on-surface-variant">
                Our comprehensive logistic framework categorised by operational
                requirements.
              </p>
            </div>
            <div className="font-mono-data text-mono-data text-outline hidden md:block">
              INDEX_REV_2024.01
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                icon: "local_shipping",
                title: "General Haulage",
                desc: "Full and part-load distribution across the UK and Europe.",
                color: "primary",
                href: "#haulage",
              },
              {
                icon: "warning",
                title: "ADR & Hazardous",
                desc: "Certified transport for regulated and dangerous chemicals.",
                color: "secondary",
                href: "#specialist",
              },
              {
                icon: "ac_unit",
                title: "Chilled Logistics",
                desc: "Multi-temp controlled transit for perishables.",
                color: "primary",
                href: "#warehousing",
              },
              {
                icon: "inventory_2",
                title: "Warehousing",
                desc: "Strategic storage solutions at Northampton hub.",
                color: "primary",
                href: "#warehousing",
              },
            ].map(({ icon, title, desc, color, href }) => (
              <a
                key={title}
                href={href}
                className={`group p-5 glass-panel hover:bg-surface-container-high transition-all border-l-4 border-${color}`}
              >
                <span
                  className={`material-symbols-outlined text-${color} mb-4 text-2xl`}
                >
                  {icon}
                </span>
                <h3
                  className={`font-headline-md text-headline-md mb-2 group-hover:text-${color} transition-colors`}
                >
                  {title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-4">
                  {desc}
                </p>
                <span
                  className={`font-label-md text-label-md text-${color} flex items-center`}
                >
                  View Specs{" "}
                  <span className="material-symbols-outlined ml-1 text-sm">
                    east
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="haulage">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[1px] bg-primary" />
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Core Infrastructure
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl mb-5">
                Contract &amp; General{" "}
                <span className="text-primary">Haulage</span>
              </h2>
              <p className="font-body-lg text-body-lg mb-5 text-on-surface-variant">
                Our contract haulage division provides dedicated fleet solutions
                for enterprise partners. By integrating our neural tracking
                system, we offer unparalleled transparency into transit times
                and fuel efficiency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div className="p-4 bg-surface-container-low border-l-2 border-primary">
                  <h4 className="font-label-md text-label-md text-primary mb-1.5">
                    Payload Capacity
                  </h4>
                  <p className="font-body-md text-sm font-bold">Up to 44 Tonnes GCW</p>
                </div>
                <div className="p-4 bg-surface-container-low border-l-2 border-primary">
                  <h4 className="font-label-md text-label-md text-primary mb-1.5">
                    Fleet Composition
                  </h4>
                  <p className="font-body-md text-sm font-bold">
                    Euro VI Compliant Units
                  </p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "24/7 Centralised Traffic Command Centre monitoring",
                  "Real-time POD (Proof of Delivery) digital integration",
                  "Sustainable fuel-routing algorithms for lower carbon footprints",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">
                      check_circle
                    </span>
                    <span className="font-body-md text-sm text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
              <div className="glass-panel p-2 rounded-xl overflow-hidden shadow-xl">
                <img
                  alt="Route 44 distribution hub aerial view"
                  className="rounded-lg w-full h-auto"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjh9MIljJQ1Ud5qw1OR4a8fD7MAshobpJ2QHYNJ6qwnvqJfUDUpL7enJ3hHpDdVO40X7j_IZe3DyD_ghVR8dV-JQ-097juOBwjTEwWCVZSWhP9saVX71_1p_M46INO0yfCILkN__0Slc13cuiEoMUiw1lN9mEFZqVnCaRG5l3kkRcvEeRVCYS_jIpPGvmbcdMApi4fW3bowKXupYgfGgMfVrM3iP4dsjajaN7uMGv3dRlXlqPoGtTu5W5oY7_XB31AYBO7IOGfL_q"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-inverse-surface text-surface"
        id="specialist"
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-12">
            <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-widest block mb-3">
              High-Compliance Operations
            </span>
            <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest">
              Specialist Transport Frameworks
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {[
              {
                icon: "warning",
                title: "ADR & Hazardous",
                titleColor: "text-secondary-fixed-dim",
                desc: "Specialist drivers trained for all ADR classes (excluding Radioactives & Explosives). Rigorous safety protocols for chemical and industrial fluid transit.",
                spec: "Spill-containment equipped, GPS-fenced hazardous routes.",
              },
              {
                icon: "ac_unit",
                title: "Temperature Controlled",
                titleColor: "text-primary-fixed",
                desc: "Precision multi-temp trailers ensuring integrity of cold-chain pharmaceutical and food supply. Integrated thermal telemetry for live auditing.",
                spec: "+/- 0.5°C tolerance, Dual-temp capability, Remote adjustment.",
              },
              {
                icon: "security",
                title: "NRP Frameworks",
                titleColor: "text-tertiary-fixed-dim",
                desc: "Non-Regulated Protected (NRP) transit for high-value assets and electronics. Enhanced security escort and anti-theft telemetry packages.",
                spec: "Level 4 telematics, Hard-shell security, 2-man crews.",
              },
            ].map(({ icon, title, titleColor, desc, spec }) => (
              <div
                key={title}
                className="p-5 border border-outline/20 bg-white/5 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">
                    {icon}
                  </span>
                </div>
                <h3
                  className={`font-headline-md text-headline-md mb-3 ${titleColor}`}
                >
                  {title}
                </h3>
                <p className="font-body-md text-sm text-surface-variant mb-5">{desc}</p>
                <div className="pt-4 border-t border-outline/30">
                  <p className="font-mono-data text-mono-data text-surface-variant mb-1.5">
                    TECH SPEC:
                  </p>
                  <p className="font-body-md text-sm">{spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden" id="warehousing">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
                <img
                  alt="Northampton Moulton Park warehousing facility interior"
                  className="rounded-xl shadow-xl relative z-10 w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYY0H-zBRSR337Vhne08d4Y4Rfrb_vEsfepzcP8XofxyjgKYmnSaH8ceohAKjQOEA1zFu-rKD-dQNLLdmBM_95Sz-tPIRDyZry8c7VAwoeNwUz9mAzhVP4yfyisJGM5qs8SmDgze6vXNHm68KWoGlJIPqqO0m3uXBK9mp5rlEL4FhE34SlysjR5jM3KDYzmhLoYU9ovrqKP_czK3Zbg1BrDfwvyAn6P6Ig7UeuJpthppfbdwbFhDekV5pycrhDYq6xkyPpQX-3dSm6"
                />
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 p-3 sm:p-4 glass-panel border border-outline-variant/30 z-20">
                  <span className="font-mono-data text-primary text-headline-md">
                    85,000+
                  </span>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Square Feet Active
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-3">
                Regional Hub: Northampton
              </span>
              <h2 className="font-headline-xl text-headline-xl mb-5">
                Moulton Park <span className="text-primary">Storage Hub</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Strategically located in the heart of the Golden Triangle, our
                Moulton Park facility serves as a primary consolidation point
                for national distribution.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: "qr_code_scanner",
                    title: "WMS Integration",
                    desc: "Real-time inventory visibility via our proprietary cloud portal.",
                  },
                  {
                    icon: "verified_user",
                    title: "Bonded & Secure",
                    desc: "CCTV monitored, TAPA-standard security, and climate monitoring.",
                  },
                  {
                    icon: "forklift",
                    title: "Pick, Pack & Despatch",
                    desc: "Omnichannel fulfilment from single-unit to full pallet picking.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-3 p-3 glass-panel border-l-4 border-primary"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {icon}
                    </span>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-sm">
                        {title}
                      </h4>
                      <p className="font-body-md text-sm text-on-surface-variant">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

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
            Ready to Optimise Your Supply Chain?
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

export default Services;
