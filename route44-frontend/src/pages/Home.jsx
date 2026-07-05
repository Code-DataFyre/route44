import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";

function Home() {
  const mainRef = usePageTransition();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiry: "Contract Haulage",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main ref={mainRef} className="pt-20 page-fade-in">
      {/* ── Cinematic Hero ── */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Route 44 precision logistics fleet on highway"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvdiox0-4FLPVJ8R-UARX0zu7SEOpr5afK4l9XNRHfZBwEDrLTL_erYWboBmp2woqRPwdevaD4rZbJDwrT3mioiXa7g2GdjAEnHQafucYntA5SJZHVWLMc8WY0eO5gxuN1BCAFyAxK2eFSxx8iOjKuc0IuPcN-UQMdId5Cobuq0fB9V_mypzrC7PPEneD3rByZ6Pthg4eh6-Y0A5mPorPAIdZYIV_vzeQuN1ft_aL-ht8cMcb5O2DGNcrp5"
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 technical-grid opacity-30" />
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-mono-data text-mono-data tracking-widest uppercase">
                Live Global Network Active
              </span>
            </div>
            <h1 className="font-display-lg text-[32px] sm:text-[40px] md:text-display-lg leading-tight text-white mb-6">
              Precision Logistics.
              <br />
              <span className="text-secondary">Global Scale.</span>
            </h1>
            <p className="text-white/80 font-body-lg text-body-lg mb-10 max-w-lg">
              Harnessing neural routing algorithms and a specialized fleet to
              deliver mission-critical cargo across the UK and Europe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/tracking"
                className="bg-secondary text-on-secondary px-8 py-4 font-label-md text-label-md font-bold coral-glow hover:brightness-110 transition-all flex items-center gap-2"
              >
                Launch Dashboard
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/services"
                className="border border-white/30 text-white px-8 py-4 font-label-md text-label-md font-bold hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Bar ── */}
      <div className="w-full bg-surface/10 backdrop-blur-md border-y border-outline-variant/20 py-6 relative z-20">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop flex flex-wrap justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              verified
            </span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
              RHA 2024 Member
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">
              workspace_premium
            </span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
              ISO Quality Certified
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">
              monitoring
            </span>
            <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
              Qargo System Tracked
            </span>
          </div>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4">
              Neural Infrastructure
            </h2>
            <p className="font-headline-lg text-headline-lg text-on-surface">
              Scalable solutions designed for modern enterprise demands.
            </p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mx-8 mb-4" />
          <Link
            to="/services"
            className="font-label-md text-label-md text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            Explore All Services{" "}
            <span className="material-symbols-outlined">trending_flat</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Contract Haulage */}
          <div className="glass-panel p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform" />
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[32px]">
                local_shipping
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">
              Contract Haulage
            </h3>
            <p className="text-on-surface-variant font-body-md mb-8">
              High-volume, scheduled distribution networks utilising Euro 6
              compliant tractor units and specialised trailers.
            </p>
            <ul className="space-y-3 font-label-md text-label-md text-on-surface">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check_circle
                </span>
                24/7 National Dispatch
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check_circle
                </span>
                Live GPS Telemetry
              </li>
            </ul>
          </div>

          {/* Specialist Transport */}
          <div className="glass-panel p-8 group hover:border-secondary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform" />
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              <span className="material-symbols-outlined text-[32px]">
                emergency_home
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider border border-secondary/20">
                Hazardous (ADR)
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                Chilled Fleet
              </span>
              <span className="px-2 py-0.5 bg-outline-variant/20 text-on-surface-variant text-[10px] font-bold uppercase tracking-wider border border-outline-variant/30">
                NRP Logistics
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">
              Specialist Transport
            </h3>
            <p className="text-on-surface-variant font-body-md mb-8">
              Handling ADR, temperature-controlled, and high-value cargo with
              rigorous security protocols and certified handlers.
            </p>
            <ul className="space-y-3 font-label-md text-label-md text-on-surface">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check_circle
                </span>
                Hazmat Certified
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check_circle
                </span>
                Escort Services
              </li>
            </ul>
          </div>

          {/* Warehousing */}
          <div className="glass-panel p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform" />
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[32px]">
                warehouse
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4">
              Warehousing
            </h3>
            <p className="text-on-surface-variant font-body-md mb-8">
              Strategic fulfilment centres integrated with our neural tracking
              platform for real-time inventory management.
            </p>
            <ul className="space-y-3 font-label-md text-label-md text-on-surface">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check_circle
                </span>
                Cross-docking Hubs
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check_circle
                </span>
                Bonded Storage
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Fleet Capacity HUD ── */}
      <section className="bg-inverse-surface py-20 overflow-hidden relative">
        <div className="absolute inset-0 technical-grid opacity-10" />
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              {
                label: "Fleet Readiness",
                labelColor: "text-secondary",
                value: "25",
                valueSuffix: "+",
                sub: "Modern Assets",
              },
              {
                label: "Regional Throughput",
                labelColor: "text-primary-fixed-dim",
                value: "Daily",
                sub: "London Connects",
              },
              {
                label: "Network Uptime",
                labelColor: "text-secondary",
                value: "99.8%",
                sub: "Arrival Precision",
              },
              {
                label: "Digital Integration",
                labelColor: "text-primary-fixed-dim",
                value: "API",
                sub: "Real-time Hook",
              },
            ].map(({ label, labelColor, value, valueSuffix, sub }, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start"
              >
                <span
                  className={`font-mono-data text-mono-data ${labelColor} mb-2 tracking-tighter uppercase`}
                >
                  {label}
                </span>
                <div className="text-5xl font-bold text-white mb-2">
                  {value}
                  {valueSuffix && (
                    <span className="text-secondary">{valueSuffix}</span>
                  )}
                </div>
                <p className="text-white/60 font-label-sm text-label-sm uppercase tracking-widest">
                  {sub}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="font-label-sm text-label-sm text-secondary hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest"
            >
              [Join Our Fleet as an HGV Driver →]
            </Link>
          </div>
        </div>
      </section>

      {/* ── Vision & Leadership ── */}
      <section className="py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-2xl">
              <img
                alt="Route 44 executive leadership team"
                className="w-full h-full object-cover grayscale contrast-125"
                src="https://lh3.googleusercontent.com/aida/AP1WRLviAIGEHGbUZfom8yeiRfuH7mYE0JGdfK_YtSTZoXO-dw6Fu48BGffqFelmLvSQ6qtUCMXrWKRtVc2QPiC4j17lJnnGCOoieXhPFXz8w3EjX_Ru-EVsvaQSzTKgDGvH9gX0mFF8PqsQbhVoQhukFEZHZ8z3j1ZgNJbt6FAKwKdpUwqg6k0avJ3jxNPV0uHht2UgbA_0U5_3uWwJiydR0r4cBkHJk2V4czkUzq1yIZ1Vw6_Xzlcnd0EvPJZ6"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            {/* Quote box — absolute on lg+, inline below image on mobile */}
            <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:-right-8 glass-panel p-6 lg:p-8 lg:max-w-xs border-l-4 border-l-secondary">
              <span className="material-symbols-outlined text-secondary text-[32px] lg:text-[40px] mb-3 lg:mb-4">
                format_quote
              </span>
              <p className="font-headline-md text-headline-md italic leading-tight text-on-surface mb-3 lg:mb-4">
                "We're not just moving cargo; we're optimizing the neural
                pathways of global commerce."
              </p>
              <cite className="font-label-sm text-label-sm uppercase tracking-widest block not-italic text-on-surface-variant">
                The Executive Leadership
              </cite>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-4">
              Vision &amp; Leadership
            </h2>
            <h3 className="font-display-lg text-display-lg text-primary mb-8">
              Architects of Logistics
            </h3>
            <div className="space-y-6 text-on-surface-variant font-body-lg">
              <p>
                At Route 44, we believe that logistics is the backbone of the
                global economy. Our managing directors bring over four decades
                of combined experience in haulage and strategic operations.
              </p>
              <p>
                By blending traditional core values of reliability and trust
                with cutting-edge neural routing technology, we've created a
                fleet that is more efficient, more reactive, and more
                transparent than any other in the sector.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">RHA</p>
                <p className="text-xs uppercase tracking-widest text-outline">
                  Compliance Partner
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary mb-1">ISO</p>
                <p className="text-xs uppercase tracking-widest text-outline">
                  9001:2015 Registered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted Clients ── */}
      <section className="py-16 border-t border-outline-variant/20 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <h2 className="font-label-sm text-label-sm text-outline uppercase tracking-[0.2em] text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-50 grayscale">
            {[
              "GLOBALTECH",
              "AERO-MFG",
              "RETAIL-X",
              "EURO-SHIP",
              "PRIME-LOG",
            ].map((name) => (
              <div key={name} className="flex justify-center">
                <span className="font-display-lg text-headline-md">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {[
              {
                quote:
                  "Route 44's precision is unmatched. The Qargo visibility platform has reduced our tracking inquiries by 60% while improving our delivery window accuracy.",
                name: "James Dalton",
                role: "Operations Director, GlobalTech",
                initials: "JD",
              },
              {
                quote:
                  "Switching to Route 44's neural routing has optimized our retail shipping lanes across Europe. The real-time data integration is a game changer for our B2B partners.",
                name: "Sarah Meyer",
                role: "Supply Chain Lead, Retail-X",
                initials: "SM",
              },
            ].map(({ quote, name, role, initials }) => (
              <div
                key={name}
                className="glass-panel p-10 border-l-4 border-l-primary"
              >
                <span className="material-symbols-outlined text-primary/30 text-[40px] mb-6">
                  format_quote
                </span>
                <p className="font-body-lg text-body-lg text-on-surface mb-8">
                  {quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {initials}
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface">
                      {name}
                    </p>
                    <p className="text-xs text-outline uppercase tracking-widest">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Insights (Bento) ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-headline-xl text-headline-xl text-on-surface">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <Link
              to="/media"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
            >
              View Archive{" "}
              <span className="material-symbols-outlined">grid_view</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter md:h-[600px]">
            {/* Featured */}
            <div className="md:col-span-2 md:row-span-2 glass-panel p-10 relative overflow-hidden group cursor-pointer min-h-[400px] md:min-h-0">
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute inset-0 technical-grid" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="bg-primary text-on-primary px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest mb-6 inline-block">
                    Industry Report
                  </span>
                  <h4 className="font-headline-lg text-headline-lg text-on-surface mb-6 leading-tight">
                    The Future of Autonomous Freight Hubs: 2025 Outlook
                  </h4>
                  <p className="text-on-surface-variant max-w-md">
                    How neural logistics is paving the way for semi-autonomous
                    long-haul corridors across the UK arterial network.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant font-label-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      calendar_month
                    </span>
                    Oct 24, 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      schedule
                    </span>
                    12 min read
                  </span>
                </div>
              </div>
            </div>
            {/* Fleet News */}
            <div className="md:col-span-2 glass-panel p-8 group cursor-pointer border-l-4 border-l-secondary">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-4 inline-block">
                    Company News
                  </span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">
                    Fleet Expansion: 10 New Scania Super Units Arrive
                  </h4>
                </div>
                <span className="material-symbols-outlined self-end text-outline group-hover:text-secondary group-hover:translate-x-2 transition-all">
                  arrow_forward
                </span>
              </div>
            </div>
            {/* Compliance */}
            <div className="md:col-span-1 glass-panel p-8 group cursor-pointer">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-4 inline-block">
                    Compliance
                  </span>
                  <h4 className="font-label-md text-label-md text-on-surface">
                    RHA 2024 Updates: What You Need to Know
                  </h4>
                </div>
                <span className="material-symbols-outlined self-end text-outline group-hover:text-primary transition-all">
                  open_in_new
                </span>
              </div>
            </div>
            {/* Whitepaper */}
            <div className="md:col-span-1 glass-panel p-8 group cursor-pointer bg-primary text-on-primary">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest mb-4 inline-block">
                    Whitepaper
                  </span>
                  <h4 className="font-label-md text-label-md text-white">
                    Sustainability in Heavy Haulage
                  </h4>
                </div>
                <span className="material-symbols-outlined self-end text-primary-fixed group-hover:translate-y-1 transition-all">
                  download
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead Capture CTA ── */}
      <section className="py-32 bg-inverse-surface relative overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-5" />
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display-lg text-display-lg text-white mb-6">
              Scale Your Logistics Today
            </h2>
            <p className="text-white/60 font-body-lg text-body-lg">
              Get a custom quote and technical breakdown of how Route 44 can
              streamline your distribution network.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl p-10 border border-white/10 rounded-lg shadow-2xl text-center">
              <span className="material-symbols-outlined text-secondary text-[48px] mb-4">
                check_circle
              </span>
              <h3 className="font-headline-md text-headline-md text-white mb-4">
                Request Submitted
              </h3>
              <p className="text-white/60 font-body-md">
                Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl p-10 border border-white/10 rounded-lg shadow-2xl"
              aria-label="Request a logistics quote"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="home-name"
                      className="font-label-sm text-label-sm text-white/50 uppercase tracking-widest"
                    >
                      Full Name
                    </label>
                    <input
                      id="home-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded transition-all placeholder:text-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="home-company"
                      className="font-label-sm text-label-sm text-white/50 uppercase tracking-widest"
                    >
                      Company
                    </label>
                    <input
                      id="home-company"
                      type="text"
                      required
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded transition-all placeholder:text-white/30"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="home-email"
                    className="font-label-sm text-label-sm text-white/50 uppercase tracking-widest"
                  >
                    Work Email
                  </label>
                  <input
                    id="home-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded transition-all placeholder:text-white/30"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="home-inquiry"
                    className="font-label-sm text-label-sm text-white/50 uppercase tracking-widest"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="home-inquiry"
                    value={formData.inquiry}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiry: e.target.value })
                    }
                    className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded transition-all appearance-none"
                  >
                    <option className="bg-inverse-surface">
                      Contract Haulage
                    </option>
                    <option className="bg-inverse-surface">
                      Specialist Transport
                    </option>
                    <option className="bg-inverse-surface">
                      General Inquiry
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-on-secondary py-4 font-label-md text-label-md font-bold coral-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  Initialize Consultation
                  <span className="material-symbols-outlined text-[20px]">
                    bolt
                  </span>
                </button>
                <p className="text-center text-white/30 text-[10px] uppercase tracking-widest">
                  Secure transmission encrypted with SSL 256-bit.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
