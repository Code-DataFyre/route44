import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import leadershipImg from "../assets/Route 44 executive leadership team.png";

function About() {
  const mainRef = usePageTransition();

  // Color mapping for timeline
  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: "bg-primary",
        ring: "ring-primary/10",
        text: "text-primary",
        textMuted: "text-primary/50",
        border: "border-primary",
      },
      secondary: {
        bg: "bg-secondary",
        ring: "ring-secondary/10",
        text: "text-secondary",
        textMuted: "text-secondary/50",
        border: "border-secondary",
      },
    };
    return colorMap[color];
  };

  return (
    <main ref={mainRef} className="neural-grid pt-20 page-fade-in">
      {/* ── Hero ── */}
      <section className="relative pb-16 overflow-hidden">
        <div className="grid-pattern absolute inset-0 -z-10 grid-bg" />
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
              ABOUT ROUTE 44
            </span>
            <h1 className="font-display-lg text-[24px] sm:text-[28px] md:text-display-lg mb-5 text-on-surface leading-tight">
              The Neural Network{" "}
              <span className="text-primary">of Global Logistics.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-lg">
              Established in 2012, Route 44 has evolved from a local haulage
              firm into a sophisticated logistics integrator, leveraging
              real-time data and automated routing to redefine supply chain
              efficiency.
            </p>
            <a
              href="#leadership"
              className="px-6 py-3 bg-secondary text-on-secondary font-label-md text-label-md inline-flex items-center coral-glow hover:brightness-110 transition-all"
            >
              Meet Our Leadership
              <span className="material-symbols-outlined text-[18px] ml-2">
                arrow_downward
              </span>
            </a>
          </div>
          <div className="relative h-52 md:h-[380px] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/30 shadow-sm p-4 group">
            <img
              alt="Route 44 executive leadership team"
              className="w-full h-full object-cover rounded-lg grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              src={leadershipImg}
            />
            <div className="absolute bottom-4 left-4 p-4 glass-panel border-l-4 border-primary">
              <p className="font-mono-data text-mono-data text-primary uppercase mb-1">
                Est. 2012
              </p>
              <p className="font-headline-md text-headline-md">
                12+ Years of Precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Directors Profile ── */}
      <section className="py-16 bg-surface-container-low" id="leadership">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-xl mb-10">
            <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3">
              Leadership
            </h2>
            <p className="font-headline-lg text-headline-lg text-on-surface">
              The people steering the network.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-primary/5 rounded-2xl -z-10 scale-95 group-hover:scale-100 transition-transform duration-500" />
              <img
                alt="James Arkwright and Sarah Chen, Joint Managing Directors of Route 44"
                className="w-full aspect-square object-cover rounded-xl shadow-xl border border-outline-variant/30"
                src={leadershipImg}
              />
              <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 border-l-4 border-secondary">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  The Leadership
                </h3>
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">
                  Innovation &amp; Strategy
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-headline-xl text-headline-xl text-primary mb-3">
                  James Arkwright &amp; Sarah Chen
                </h2>
                <p className="font-label-md text-label-md text-on-surface-variant font-bold mb-4">
                  Joint Managing Directors
                </p>
                <p className="font-body-md text-sm text-on-surface-variant mb-4 leading-relaxed">
                  Since the company's inception, James and Sarah have maintained
                  a singular vision: to treat every shipment as a critical data
                  point in a larger, living network. James brings twenty years
                  of operational excellence from the traditional haulage sector,
                  while Sarah's background in systems engineering drives our
                  proprietary "Neural Logistics" platform.
                </p>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Their joint leadership has navigated Route 44 through
                  explosive growth, ensuring that while the scale increases, the
                  precision of our delivery remains unmatched.
                </p>
              </div>
              <div className="flex gap-3">
                {[
                  { label: "Est.", value: "2012", color: "text-primary" },
                  { label: "Assets", value: "500+", color: "text-secondary" },
                  { label: "Reach", value: "Global", color: "text-primary" },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="px-3 py-2.5 bg-surface-container-highest rounded-lg flex flex-col"
                  >
                    <span className={`font-mono-data text-mono-data ${color}`}>
                      {label}
                    </span>
                    <span
                      className={`font-headline-md text-headline-md ${color}`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 overflow-hidden bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center mb-12">
            <h2 className="font-headline-xl text-headline-xl text-primary">
              Evolutionary Milestone
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant mt-3">
              Tracking our trajectory from local routes to neural logistics.
            </p>
          </div>

          <div className="relative">
            {/* ── Mobile Timeline (< md) ── */}
            <div className="md:hidden space-y-0">
              {[
                {
                  year: "2012",
                  color: "primary",
                  title: "Foundation",
                  subtitle:
                    "Established in the North West with a fleet of 10 HGVs.",
                  body: "First terminal opened. Focused on regional haulage with a 99.8% on-time rate from day one.",
                  pulse: false,
                },
                {
                  year: "2016",
                  color: "secondary",
                  title: "Digital Pivot",
                  subtitle:
                    "Integration of first-gen telemetry and automated scheduling.",
                  body: "Launch of the 'Route Cloud' portal, giving clients real-time visibility for the first time.",
                  pulse: false,
                },
                {
                  year: "2020",
                  color: "primary",
                  title: "Global Integration",
                  subtitle:
                    "Opening of international customs and freight forwarding hubs.",
                  body: "Acquisition of EuroConnect, expanding our footprint to 12 EU territories.",
                  pulse: false,
                },
                {
                  year: "2024",
                  color: "secondary",
                  title: "Neural Logistics",
                  subtitle: "Full adoption of the Neural Logistics framework.",
                  body: "Implementation of AI-driven predictive maintenance and RHA 2024 compliance automation.",
                  pulse: true,
                },
              ].map(
                ({ year, color, title, subtitle, body, pulse }, idx, arr) => {
                  const colorClass = getColorClasses(color);
                  return (
                    <div key={year} className="flex gap-4 pb-6 last:pb-0">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className={`w-3.5 h-3.5 rounded-full ${colorClass.bg} ${colorClass.ring} ring-4 mt-1 ${pulse ? "animate-pulse" : ""}`}
                        />
                        {idx < arr.length - 1 && (
                          <div className="w-px flex-1 bg-outline-variant/40 mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <span
                          className={`font-mono-data text-mono-data ${colorClass.textMuted} uppercase tracking-tighter text-xs`}
                        >
                          {year}
                        </span>
                        <h4
                          className={`font-headline-md text-headline-md ${colorClass.text} mt-0.5`}
                        >
                          {title}
                        </h4>
                        <p className="text-sm text-on-surface-variant mt-1.5 italic">
                          {subtitle}
                        </p>
                        <div
                          className={`glass-panel p-4 mt-3 rounded-xl border-l-4 ${colorClass.border}`}
                        >
                          <p className="font-body-md text-sm">{body}</p>
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>

            {/* ── Desktop Timeline (md+) ── */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-full timeline-line" />

              {[
                {
                  year: "2012",
                  color: "primary",
                  title: "Foundation",
                  subtitle:
                    "The Genesis: Established in the North West with a fleet of 10 HGVs.",
                  body: "First terminal opened. Focused on regional haulage with a 99.8% on-time rate from day one.",
                  reverse: false,
                },
                {
                  year: "2016",
                  color: "secondary",
                  title: "Digital Pivot",
                  subtitle:
                    "The Shift: Integration of first-gen telemetry and automated scheduling.",
                  body: "Launch of the 'Route Cloud' portal, giving clients real-time visibility for the first time.",
                  reverse: true,
                },
                {
                  year: "2020",
                  color: "primary",
                  title: "Global Integration",
                  subtitle:
                    "The Expansion: Opening of international customs and freight forwarding hubs.",
                  body: "Acquisition of EuroConnect, expanding our footprint to 12 EU territories.",
                  reverse: false,
                },
                {
                  year: "2024",
                  color: "secondary",
                  title: "Neural Logistics",
                  subtitle:
                    "The Standard: Full adoption of the Neural Logistics framework.",
                  body: "Implementation of AI-driven predictive maintenance and RHA 2024 compliance automation.",
                  reverse: true,
                  pulse: true,
                },
              ].map(
                ({ year, color, title, subtitle, body, reverse, pulse }) => {
                  const colorClass = getColorClasses(color);
                  return (
                    <div
                      key={year}
                      className={`relative mb-14 last:mb-0 flex items-center justify-between ${reverse ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-[45%] ${reverse ? "text-left pl-8" : "text-right pr-8"}`}
                      >
                        <h3
                          className={`font-display-lg text-display-lg ${colorClass.textMuted}`}
                        >
                          {year}
                        </h3>
                        <h4
                          className={`font-headline-md text-headline-md ${colorClass.text} mt-[-14px]`}
                        >
                          {title}
                        </h4>
                        <p className="font-body-md text-sm text-on-surface-variant mt-3 italic">
                          {subtitle}
                        </p>
                      </div>
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full ${colorClass.bg} ring-8 ${colorClass.ring} ${pulse ? "animate-pulse" : ""}`}
                      />
                      <div className={`w-[45%] ${reverse ? "pr-8" : "pl-8"}`}>
                        <div
                          className={`glass-panel p-4 rounded-xl ${reverse ? `border-r-4 ${colorClass.border} text-right` : `border-l-4 ${colorClass.border}`}`}
                        >
                          <p className="font-body-md text-sm">{body}</p>
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
            {/* end desktop timeline */}
          </div>
        </div>
      </section>
      <section className="py-16 bg-inverse-surface text-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <span className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">
                  Compliance First
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl mb-4">
                Fortified Logistics Infrastructure.
              </h2>
              <p className="font-body-md text-sm text-surface-variant mb-5">
                We don't just move cargo; we manage risk. Our compliance
                framework is the most rigorous in the industry, ensuring your
                assets are protected by law and technology.
              </p>
              <button className="px-6 py-3 bg-secondary text-on-secondary font-headline-md text-sm rounded hover:brightness-110 coral-glow transition-all">
                Download Audit Reports
              </button>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {[
                {
                  icon: "policy",
                  title: "RHA Conditions of Carriage 2024",
                  desc: "We operate strictly under the latest RHA 2024 standards, providing clear legal frameworks and comprehensive liability coverage for every transit journey.",
                },
                {
                  icon: "license",
                  title: "ISO 9001:2015 Certified",
                  desc: "Audited quality management systems that guarantee consistency, efficiency, and a culture of continuous improvement across our entire global network.",
                },
                {
                  icon: "workspace_premium",
                  title: "FORS Gold Accredited",
                  desc: "The highest level of the Fleet Operator Recognition Scheme, demonstrating our commitment to safety, efficiency, and environmental protection.",
                },
                {
                  icon: "priority_high",
                  title: "ADR Specialist Vetting",
                  desc: "Rigorous background checks and ongoing training for all personnel handling dangerous goods, exceeding standard regulatory requirements.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 bg-surface/5 border border-surface/10 rounded-xl hover:bg-surface/10 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      {icon}
                    </span>
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-3 group-hover:text-secondary-fixed-dim transition-colors">
                    {title}
                  </h3>
                  <p className="font-body-md text-sm text-surface-variant">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-surface-container">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
          {[
            { value: "12+", label: "Years of Operation" },
            { value: "1.4M", label: "Neural Routes Calculated" },
            { value: "100%", label: "RHA Compliance" },
            { value: "24/7", label: "Fleet Monitoring" },
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
            Ready to Partner With Us?
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

export default About;
