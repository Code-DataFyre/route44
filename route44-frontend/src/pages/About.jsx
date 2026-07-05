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
      <section className="relative px-6 md:px-margin-desktop py-24 overflow-hidden">
        <div className="grid-pattern absolute inset-0 -z-10 grid-bg" />
        <div className="max-w-container-max mx-auto flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              About Route 44
            </span>
          </div>
          <h1 className="font-display-lg text-[30px] sm:text-[40px] md:text-display-lg text-primary max-w-3xl">
            The Neural Network of Global Logistics.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Established in 2012, Route 44 has evolved from a local haulage firm
            into a sophisticated logistics integrator, leveraging real-time data
            and automated routing to redefine supply chain efficiency.
          </p>
        </div>
      </section>

      {/* ── Directors Profile ── */}
      <section className="px-6 md:px-margin-desktop py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 scale-95 group-hover:scale-100 transition-transform duration-500" />
              <img
                alt="James Arkwright and Sarah Chen, Joint Managing Directors of Route 44"
                className="w-full aspect-square object-cover rounded-xl shadow-2xl border border-outline-variant/30"
                src={leadershipImg}
              />
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 border-l-4 border-secondary">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  The Leadership
                </h3>
                <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">
                  Innovation &amp; Strategy
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-headline-xl text-headline-xl text-primary mb-4">
                  James Arkwright &amp; Sarah Chen
                </h2>
                <p className="font-label-md text-label-md text-on-surface-variant font-bold mb-6">
                  Joint Managing Directors
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Since the company's inception, James and Sarah have maintained
                  a singular vision: to treat every shipment as a critical data
                  point in a larger, living network. James brings twenty years
                  of operational excellence from the traditional haulage sector,
                  while Sarah's background in systems engineering drives our
                  proprietary "Neural Logistics" platform.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Their joint leadership has navigated Route 44 through
                  explosive growth, ensuring that while the scale increases, the
                  precision of our delivery remains unmatched.
                </p>
              </div>
              <div className="flex gap-4">
                {[
                  { label: "Est.", value: "2012", color: "text-primary" },
                  { label: "Assets", value: "500+", color: "text-secondary" },
                  { label: "Reach", value: "Global", color: "text-primary" },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="px-4 py-3 bg-surface-container-highest rounded-lg flex flex-col"
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
      <section className="px-6 md:px-margin-desktop py-32 overflow-hidden bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-headline-xl text-headline-xl text-primary">
              Evolutionary Milestone
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4">
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
                    <div key={year} className="flex gap-5 pb-10 last:pb-0">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className={`w-4 h-4 rounded-full ${colorClass.bg} ${colorClass.ring} ring-4 mt-1 ${pulse ? "animate-pulse" : ""}`}
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
                        <p className="text-sm text-on-surface-variant mt-2 italic">
                          {subtitle}
                        </p>
                        <div
                          className={`glass-panel p-5 mt-4 rounded-xl border-l-4 ${colorClass.border}`}
                        >
                          <p className="font-body-md text-body-md">{body}</p>
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
                      className={`relative mb-24 last:mb-0 flex items-center justify-between ${reverse ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-[45%] ${reverse ? "text-left pl-12" : "text-right pr-12"}`}
                      >
                        <h3
                          className={`font-display-lg text-display-lg ${colorClass.textMuted}`}
                        >
                          {year}
                        </h3>
                        <h4
                          className={`font-headline-md text-headline-md ${colorClass.text} mt-[-20px]`}
                        >
                          {title}
                        </h4>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-4 italic">
                          {subtitle}
                        </p>
                      </div>
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${colorClass.bg} ring-8 ${colorClass.ring} ${pulse ? "animate-pulse" : ""}`}
                      />
                      <div className={`w-[45%] ${reverse ? "pr-12" : "pl-12"}`}>
                        <div
                          className={`glass-panel p-6 rounded-xl ${reverse ? `border-r-4 ${colorClass.border} text-right` : `border-l-4 ${colorClass.border}`}`}
                        >
                          <p className="font-body-md text-body-md">{body}</p>
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
      <section className="px-6 md:px-margin-desktop py-24 bg-inverse-surface text-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-6">
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
              <h2 className="font-headline-xl text-headline-xl mb-6">
                Fortified Logistics Infrastructure.
              </h2>
              <p className="font-body-md text-body-md text-surface-variant mb-8">
                We don't just move cargo; we manage risk. Our compliance
                framework is the most rigorous in the industry, ensuring your
                assets are protected by law and technology.
              </p>
              <button className="px-8 py-4 bg-secondary text-on-secondary font-headline-md rounded hover:brightness-110 coral-glow transition-all">
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
                  className="p-8 bg-surface/5 border border-surface/10 rounded-xl hover:bg-surface/10 transition-colors group"
                >
                  <span
                    className="material-symbols-outlined text-secondary text-4xl mb-6"
                    style={{ fontVariationSettings: "'wght' 300" }}
                  >
                    {icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-secondary-fixed-dim transition-colors">
                    {title}
                  </h3>
                  <p className="font-body-md text-body-md text-surface-variant">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "12+", label: "Years of Operation" },
            { value: "1.4M", label: "Neural Routes Calculated" },
            { value: "100%", label: "RHA Compliance" },
            { value: "24/7", label: "Fleet Monitoring" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-display-lg text-display-lg">{value}</span>
              <span className="font-label-md text-label-md uppercase opacity-70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
