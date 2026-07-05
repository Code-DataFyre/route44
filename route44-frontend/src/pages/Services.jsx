import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="pt-48 grid-bg">
      {/* ── Hero ── */}
      <section className="pb-24 px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-label-sm mb-6">
              <span className="w-2 h-2 bg-primary animate-pulse mr-2" />
              NEURAL LOGISTICS NETWORK ACTIVE
            </span>
            <h1 className="font-display-lg text-display-lg mb-8 text-on-surface leading-tight">
              Precision-Engineered{" "}
              <span className="text-primary">Transport Solutions.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Route 44 combines Tier-1 physical infrastructure with real-time
              telemetry. From general haulage to specialist NRP frameworks, we
              provide the backbone for global commerce.
            </p>
            <a
              href="#directory"
              className="px-8 py-4 bg-secondary text-on-secondary font-label-md inline-flex items-center coral-glow hover:brightness-110 transition-all"
            >
              Explore Service Directory
              <span className="material-symbols-outlined ml-2">
                arrow_downward
              </span>
            </a>
          </div>
          <div className="relative h-[500px] glass-panel p-4 overflow-hidden group">
            <img
              alt="Route 44 modern semi-trailer fleet at distribution hub"
              className="w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida/AB6AXuB4Rj33UBcqhx6tK7lIv2paop_VUXjJWAm4L_7_ebo1_mcstSwbaynDSc7mvD34o8WgOzectdD4FXizz5w_lKEU-2YtLqMQ0JDBbNmuL5fWq0xkJA8SAmQq6_wDkmzkry0h2tbk3xKhYbA2oagN3khOgenKlJiqzWn2wi1bE_FOLKFwZmiWPDcDF891ZcO8F-Ql38xDY81GTMuKtz4KMEVGuA2KkxMx_Xq6bGcoWJrm69nEB9bg46ABmyc3w32LXuqhLa9EzkzUME_d"
            />
            <div className="absolute bottom-8 left-8 p-6 glass-panel border-l-4 border-primary">
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

      {/* ── Service Directory ── */}
      <section className="py-24 bg-surface-container-low" id="directory">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-xl text-headline-xl mb-4">
                Service Directory
              </h2>
              <p className="font-body-md text-on-surface-variant">
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
                href: "#specialist",
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
                className={`group p-8 glass-panel hover:bg-surface-container-high transition-all border-l-4 border-${color}`}
              >
                <span
                  className={`material-symbols-outlined text-${color} mb-6 text-3xl`}
                >
                  {icon}
                </span>
                <h3
                  className={`font-headline-md text-headline-md mb-2 group-hover:text-${color} transition-colors`}
                >
                  {title}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  {desc}
                </p>
                <span
                  className={`font-label-md text-${color} flex items-center`}
                >
                  View Specs{" "}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    east
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contract & General Haulage ── */}
      <section className="py-32" id="haulage">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-primary" />
                <span className="font-label-md text-primary uppercase tracking-widest">
                  Core Infrastructure
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl mb-8">
                Contract &amp; General{" "}
                <span className="text-primary">Haulage</span>
              </h2>
              <p className="font-body-lg text-body-lg mb-8 text-on-surface-variant">
                Our contract haulage division provides dedicated fleet solutions
                for enterprise partners. By integrating our neural tracking
                system, we offer unparalleled transparency into transit times
                and fuel efficiency.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-surface-container-low border-l-2 border-primary">
                  <h4 className="font-label-md text-primary mb-2">
                    Payload Capacity
                  </h4>
                  <p className="font-body-md font-bold">Up to 44 Tonnes GCW</p>
                </div>
                <div className="p-6 bg-surface-container-low border-l-2 border-primary">
                  <h4 className="font-label-md text-primary mb-2">
                    Fleet Composition
                  </h4>
                  <p className="font-body-md font-bold">
                    Euro VI Compliant Units
                  </p>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {[
                  "24/7 Centralised Traffic Command Centre monitoring",
                  "Real-time POD (Proof of Delivery) digital integration",
                  "Sustainable fuel-routing algorithms for lower carbon footprints",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="material-symbols-outlined text-primary mr-3 text-xl">
                      check_circle
                    </span>
                    <span className="font-body-md text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="glass-panel p-2 rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Route 44 distribution hub aerial view"
                  className="rounded-lg w-full h-auto"
                  src="https://lh3.googleusercontent.com/aida/AB6AXuDMjh9MIljJQ1Ud5qw1OR4a8fD7MAshobpJ2QHYNJ6qwnvqJfUDUpL7enJ3hHpDdVO40X7j_IZe3DyD_ghVR8dV-JQ-097juOBwjTEwWCVZSWhP9saVX71_1p_M46INO0yfCILkN__0Slc13cuiEoMUiw1lN9mEFZqVnCaRG5l3kkRcvEeRVCYS_jIpPGvmbcdMApi4fW3bowKXupYgfGgMfVrM3iP4dsjajaN7uMGv3dRlXlqPoGtTu5W5oY7_XB31AYBO7IOGfL_q"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialist Transport ── */}
      <section
        className="py-32 bg-inverse-surface text-surface"
        id="specialist"
      >
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-20">
            <span className="font-label-md text-secondary-fixed-dim uppercase tracking-widest block mb-4">
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
                className="p-8 border border-outline/20 bg-white/5 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">
                    {icon}
                  </span>
                </div>
                <h3
                  className={`font-headline-md text-headline-md mb-4 ${titleColor}`}
                >
                  {title}
                </h3>
                <p className="font-body-md text-surface-variant mb-8">{desc}</p>
                <div className="pt-6 border-t border-outline/30">
                  <p className="font-mono-data text-mono-data text-surface-variant mb-2">
                    TECH SPEC:
                  </p>
                  <p className="font-body-md">{spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warehousing ── */}
      <section className="py-32 overflow-hidden" id="warehousing">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
                <img
                  alt="Northampton Moulton Park warehousing facility interior"
                  className="rounded-xl shadow-2xl relative z-10 w-full"
                  src="https://lh3.googleusercontent.com/aida/AB6AXuBYY0H-zBRSR337Vhne08d4Y4Rfrb_vEsfepzcP8XofxyjgKYmnSaH8ceohAKjQOEA1zFu-rKD-dQNLLdmBM_95Sz-tPIRDyZry8c7VAwoeNwUz9mAzhVP4yfyisJGM5qs8SmDgze6vXNHm68KWoGlJIPqqO0m3uXBK9mp5rlEL4FhE34SlysjR5jM3KDYzmhLoYU9ovrqKP_czK3Zbg1BrDfwvyAn6P6Ig7UeuJpthppfbdwbFhDekV5pycrhDYq6xkyPpQX-3dSm6"
                />
                <div className="absolute -top-6 -right-6 p-6 glass-panel border border-outline-variant/30 z-20">
                  <span className="font-mono-data text-primary text-headline-md">
                    85,000+
                  </span>
                  <p className="font-label-md text-on-surface-variant">
                    Square Feet Active
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-label-md text-primary uppercase tracking-widest block mb-4">
                Regional Hub: Northampton
              </span>
              <h2 className="font-headline-xl text-headline-xl mb-8">
                Moulton Park <span className="text-primary">Storage Hub</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                Strategically located in the heart of the Golden Triangle, our
                Moulton Park facility serves as a primary consolidation point
                for national distribution.
              </p>
              <div className="space-y-6">
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
                    className="flex gap-4 p-4 glass-panel border-l-4 border-primary"
                  >
                    <span className="material-symbols-outlined text-primary text-3xl">
                      {icon}
                    </span>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-sm">
                        {title}
                      </h4>
                      <p className="font-body-md text-on-surface-variant">
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

      {/* ── Stats ── */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
          {[
            { value: "99.8%", label: "On-Time Performance" },
            { value: "2.4M", label: "Miles Covered Monthly" },
            { value: "150+", label: "Full-Time Operatives" },
            { value: "24/7", label: "Telemetry Monitoring" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display-lg text-display-lg text-primary">
                {value}
              </p>
              <p className="font-label-md text-on-surface-variant uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-xl text-headline-xl text-primary mb-6">
            Ready to Optimise Your Supply Chain?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Speak to our logistics engineers and get a tailored solution for
            your business.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md font-bold hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            Request a Quote{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
