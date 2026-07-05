import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";

const FILTERS = [
  "All Intelligence",
  "Supply Chain Trends",
  "Fleet Dispatch",
  "Whitepapers",
];

const articles = [
  {
    id: 1,
    category: "Sustainability",
    tag: "primary",
    title: "Hydrogen-Cell Long Haul: The 2025 Roadmap",
    desc: "Evaluating the infrastructure requirements for zero-emission heavy haulage across the Route 44 network.",
    ref: "REPORT #884",
  },
  {
    id: 2,
    category: "Fleet Dispatch",
    tag: "secondary",
    title: "Managing Peak-Season Volatility",
    desc: "How Route 44's elastic fleet scaling models handle a 400% surge in e-commerce demand.",
    ref: "GUIDE #212",
  },
  {
    id: 3,
    category: "Global Trends",
    tag: "primary",
    title: "Navigating the Suez: An In-Depth Resilience Case Study",
    desc: "Analysing the ripple effects of maritime blockages on UK-bound overland freight schedules.",
    ref: "CASE #009",
  },
];

function Media() {
  const mainRef = usePageTransition();
  const [activeFilter, setActiveFilter] = useState("All Intelligence");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="min-h-screen w-full neural-grid page-fade-in">
      <main
        ref={mainRef}
        className="pt-36 pb-24 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full"
      >
        {/* ── Hero HUD ── */}
        <section className="mb-16">
          <div className="glass-panel p-12 border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 pointer-events-none select-none">
              <span className="font-mono-data text-mono-data uppercase tracking-tighter">
                System Latency: 42ms
              </span>
              <span className="font-mono-data text-mono-data uppercase tracking-tighter">
                Fleet Status: Operational
              </span>
            </div>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 mb-6">
                <span className="w-2 h-2 bg-secondary animate-pulse" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest">
                  Neural Insights Live
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-primary mb-6">
                Media Hub &amp; Neural Insights
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Navigating the global trade arteries with real-time dispatch
                data and deep analytical forecasts. Explore our latest supply
                chain breakthroughs and internal fleet developments.
              </p>
              <div className="flex-1 glass-panel border-outline-variant/30 flex items-center px-4 py-3 focus-within:ring-2 focus-within:ring-primary/20 transition-all max-w-lg">
                <span className="material-symbols-outlined text-outline">
                  search
                </span>
                <input
                  type="search"
                  aria-label="Search insights"
                  className="bg-transparent border-none focus:outline-none focus:ring-0 w-full ml-3 text-on-surface placeholder:text-outline/60 font-body-md"
                  placeholder="Search insights, reports, fleet logs..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Filters & Stats ── */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div
            className="flex flex-wrap gap-3"
            role="group"
            aria-label="Filter articles by category"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 font-label-md text-label-md transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-on-primary shadow-sm"
                    : "glass-panel text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex gap-8 border-l border-outline-variant/30 pl-8">
            <div className="text-right">
              <p className="font-label-sm text-label-sm text-outline uppercase">
                Active Fleet
              </p>
              <p className="font-headline-md text-headline-md text-primary">
                1,402
              </p>
            </div>
            <div className="text-right">
              <p className="font-label-sm text-label-sm text-outline uppercase">
                Avg Delivery
              </p>
              <p className="font-headline-md text-headline-md text-secondary">
                22.4h
              </p>
            </div>
          </div>
        </div>

        {/* ── Featured Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24">
          {/* Major Feature */}
          <article className="md:col-span-8 group cursor-pointer">
            <div className="glass-panel h-full overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300">
              <div className="relative h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpFKzjpOg722PmyuT5bhZep27_9PRFJr1y33Zvn4ZuyBqXIbf6dnjJGQXy0SCqVRdesdv-CV9qrn2Lfogf3hFoQl3zt8d_4i1az9c-YTD8T1Agi2pxg2HSzSLatQOomvT18OJitR3RWd3L0SdjUY1Qi0hP6xmsb4rkKTnUr1b-fuW1YO4SVVkfWtr6ns3H9IRUNhSJiGSyIc1ac2cDeCIXGKDjQ1CiF4_P846A-JGFLLcJh-diG3WEXMOo3OA3itJyqF4OjbzxE8Sb"
                  alt="AI-driven route optimization in trans-continental haulage"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 bg-primary text-on-primary text-label-sm font-label-sm uppercase">
                    Trends
                  </span>
                  <span className="px-3 py-1 bg-surface/90 backdrop-blur text-on-surface text-label-sm font-label-sm uppercase">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 font-mono-data text-mono-data text-outline uppercase">
                  <span>Oct 24, 2024</span>
                  <span className="w-1 h-1 rounded-full bg-outline" />
                  <span>12 Min Read</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-primary mb-6 group-hover:text-secondary transition-colors">
                  The Neural Path: AI-Driven Route Optimisation in
                  Trans-Continental Haulage
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 line-clamp-3">
                  Predictive logistics is no longer a luxury; it's the
                  operational standard. Route 44 explores how machine learning
                  models are reshaping the efficiency of European supply
                  arteries, reducing carbon footprints by 22% while accelerating
                  dispatch times.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ700Cn10_OTHdlrfBKuYK_GHa8KM4x826vVmWSl1fuF6E6z9gs5QADnL6N6zHCSmgUvLDkl84GXuHVLTeggKBYNEcZdEaaKsM2uFKUNiPALKT8HG-Q-d75h0dVOptH25D15e2hSEUbPpMCyStAbIukKNzTqYLtyG79q07MSaWyXVc8AmFw970V6vpU-e5_AhkWq6FTbmWffMQTVKglORmhIZzThBchZejHMfhqnPEJ-ktR56F8Mzi9jtqQhElsfh3V9MNX_66dOAJ"
                        alt="Dr. Elias Vance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        Dr. Elias Vance
                      </p>
                      <p className="font-label-sm text-label-sm text-outline">
                        Chief Technology Officer
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Side Articles */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            {[
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtcE-sLHUynh9pp9NvwHwcPUPdX_hAeI5PodGxPAuYKjN3_N6acQ15VWeShl9iLli9O-R5-Gscm9I095wo6D4ddVmylhGR72JbXQYpG617pz47vsUuxBflRenxMqgEuUKpp6Zp6un1GsNbjHYNwAh7FZ7auzfxNsnJjBlIdubLctDuHPKnOOwASKHjQCqjKT5Mt-N5q1bN8U-6p-xSx0LjBHywbh1QLQal_BZksymlC6dgxVW90koXQ4cA1oD7vJKIZ5ceX1aQW7t5",
                label: "Fleet News",
                labelColor: "bg-secondary text-on-secondary",
                read: "5 Min Read",
                title: "Qargo Track 2.0 Deployment: Real-time Telemetry",
                desc: "Our entire UK fleet is now equipped with second-generation sensor suites for extreme visibility.",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_VnpHKSoR3FtVaB-Er9xiet-IGvgW5t9HHj_ARlJcmFRRdNYbly4PWto18e_k-aF7N9-cQdFdtku48JCrqfvnN3CofCAsYeAGOycWGR-WPUBE4c5RoG9XpyWn4dWC8tNutskenEzWUc0O2iVF078tLTY-nSmNu0MR0GZw4hKjvI7MUWU6vVPPOMmGOYDKO8-roY3cEtVLAJ38Skuos8rsiQ6S3vB-a4lpjR3iYRG5FfVNdMEBXLJBH8A6wQxCy2-JlDwHiSqvjLt",
                label: "Internal",
                labelColor: "bg-primary text-on-primary",
                read: "8 Min Read",
                title: "Route 44 Internal Hub: Empowering Dispatchers",
                desc: "Inside the new command centre dashboard that simplified over 400 daily task workflows.",
              },
            ].map(({ src, label, labelColor, read, title, desc }) => (
              <article
                key={title}
                className="glass-panel overflow-hidden group cursor-pointer hover:border-secondary/40 transition-all flex flex-col flex-1"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={src}
                    alt={title}
                  />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-label-sm font-label-sm uppercase ${labelColor}`}
                  >
                    {label}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono-data text-mono-data text-outline uppercase mb-2">
                    {read}
                  </p>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                    {title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── Latest Dispatch Intelligence ── */}
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8 border-l-4 border-secondary pl-6">
          Latest Dispatch Intelligence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-24">
          {articles.map(({ id, category, tag, title, desc, ref }) => (
            <div
              key={id}
              className={`glass-panel overflow-hidden group hover:border-${tag} transition-all border-l-4 border-l-${tag}`}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`text-label-sm font-label-sm text-${tag} uppercase tracking-widest bg-${tag}/10 px-2 py-1`}
                  >
                    {category}
                  </span>
                  <button
                    aria-label="Bookmark article"
                    className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                  >
                    bookmark_add
                  </button>
                </div>
                <h3
                  className={`font-headline-md text-headline-md text-${tag} mb-4`}
                >
                  {title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {desc}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                  <span className="font-mono-data text-mono-data text-outline">
                    {ref}
                  </span>
                  <button
                    className={`text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all`}
                  >
                    READ MORE{" "}
                    <span className="material-symbols-outlined text-[18px]">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Newsletter CTA ── */}
        <section>
          <div className="bg-inverse-surface p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary mb-6">
                  <span className="w-2 h-2 bg-secondary animate-pulse" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest">
                    Dispatch Alerts
                  </span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-surface-container-lowest mb-4">
                  Stay Ahead of the Network.
                </h2>
                <p className="font-body-md text-body-md text-surface-variant">
                  Weekly neural logistics briefings — supply chain data, fleet
                  updates, and regulatory changes delivered to your inbox.
                </p>
              </div>
              {subscribed ? (
                <div className="text-center">
                  <span className="material-symbols-outlined text-secondary text-[48px]">
                    check_circle
                  </span>
                  <p className="font-headline-md text-headline-md text-white mt-4">
                    You're subscribed.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                  aria-label="Subscribe to dispatch alerts"
                >
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary min-w-[280px]"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-secondary text-on-secondary font-label-md font-bold coral-glow hover:brightness-110 transition-all whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Media;
