import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageTransition } from "../hooks/usePageTransition";
import CategoriesCarousel from "../components/layout/CategoriesCarousel";
import ServicesTabs from "../components/layout/ServicesTabs";
import TestimonialsCarousel from "../components/layout/TestimonialsCarousel";
import heroBg from "../assets/hero bg.png";
import leadershipImg from "../assets/Route 44 executive leadership team.png";

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
      <section className="relative h-[80vh] min-h-[560px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Route 44 precision logistics fleet on highway"
            className="w-full h-full object-cover"
            src={heroBg}
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 technical-grid opacity-30" />
        </div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 mb-4">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary font-mono-data text-mono-data tracking-widest uppercase">
                Live Global Network Active
              </span>
            </div>
            <h1 className="font-display-lg text-[26px] sm:text-[30px] md:text-display-lg leading-tight text-white mb-4">
              Precision Logistics.
              <br />
              <span className="text-secondary">Global Scale.</span>
            </h1>
            <p className="text-white/80 font-body-lg text-body-lg mb-6 max-w-md">
              Harnessing neural routing algorithms and a specialized fleet to
              deliver mission-critical cargo across the UK and Europe.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="bg-secondary text-on-secondary px-6 py-3 font-label-md text-label-md font-bold coral-glow hover:brightness-110 transition-all flex items-center gap-2"
              >
                About Us
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/services"
                className="border border-white/30 text-white px-6 py-3 font-label-md text-label-md font-bold hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability Bar ── */}
      <div className="w-full bg-surface/10 backdrop-blur-md border-y border-outline-variant/20 py-4 relative z-20">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop flex flex-wrap justify-between items-center gap-6">
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

      {/* ── Services Tabs ── */}
      <ServicesTabs />

      {/* ── Categories Carousel ── */}
      <CategoriesCarousel />

      {/* ── Fleet Capacity HUD ── */}
      <section className="bg-inverse-surface py-14 overflow-hidden relative">
        <div className="absolute inset-0 technical-grid opacity-10" />
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="flex flex-wrap justify-center divide-x divide-white/10">
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
                className="flex flex-col items-center text-center px-6 sm:px-10 first:pl-0 last:pr-0"
              >
                <span
                  className={`font-mono-data text-mono-data ${labelColor} mb-2 tracking-tighter uppercase whitespace-nowrap`}
                >
                  {label}
                </span>
                <div className="text-4xl font-bold text-white mb-1.5">
                  {value}
                  {valueSuffix && (
                    <span className="text-secondary">{valueSuffix}</span>
                  )}
                </div>
                <p className="text-white/60 font-label-sm text-label-sm uppercase tracking-widest whitespace-nowrap">
                  {sub}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
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
      <section className="py-20 px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-xl">
              <img
                alt="Route 44 executive leadership team"
                className="w-full h-full object-cover grayscale contrast-125"
                src={leadershipImg}
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            {/* Quote box — absolute on lg+, inline below image on mobile */}
            <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 glass-panel p-4 lg:p-6 lg:max-w-xs border-l-4 border-l-secondary">
              <span className="material-symbols-outlined text-secondary text-[24px] lg:text-[30px] mb-2 lg:mb-3">
                format_quote
              </span>
              <p className="font-headline-md text-headline-md italic leading-tight text-on-surface mb-2 lg:mb-3">
                "We're not just moving cargo; we're optimizing the neural
                pathways of global commerce."
              </p>
              <cite className="font-label-sm text-label-sm uppercase tracking-widest block not-italic text-on-surface-variant">
                The Executive Leadership
              </cite>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-3">
              Vision &amp; Leadership
            </h2>
            <h3 className="font-display-lg text-display-lg text-primary mb-5">
              Architects of Logistics
            </h3>
            <div className="space-y-4 text-on-surface-variant font-body-lg">
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
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-bold text-primary mb-1">RHA</p>
                <p className="text-xs uppercase tracking-widest text-outline">
                  Compliance Partner
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary mb-1">ISO</p>
                <p className="text-xs uppercase tracking-widest text-outline">
                  9001:2015 Registered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted Clients ── */}
      <section className="py-12 border-t border-outline-variant/20 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <p className="font-label-sm text-label-sm text-outline uppercase tracking-[0.2em] text-center mb-6">
            Trusted by Industry Leaders Across the UK &amp; Europe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-6">
            {[
              "GLOBALTECH",
              "AERO-MFG",
              "RETAIL-X",
              "EURO-SHIP",
              "PRIME-LOG",
            ].map((name, i) => (
              <div
                key={name}
                className={`px-8 md:px-10 ${i > 0 ? "md:border-l md:border-outline-variant/30" : ""}`}
              >
                <span className="font-display-lg text-headline-md text-on-surface-variant grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-primary transition-all duration-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="max-w-xl mb-10">
            <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3">
              Client Success
            </h2>
            <p className="font-headline-lg text-headline-lg text-on-surface">
              Trusted to deliver, every time.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── Latest Insights ── */}
      <section className="py-16 bg-surface-container-low">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3">
                Insights
              </h2>
              <p className="font-headline-lg text-headline-lg text-on-surface">
                Latest from the network.
              </p>
            </div>
            <Link
              to="/media"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
            >
              View Archive{" "}
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Featured */}
            <Link
              to="/media"
              className="md:col-span-2 group relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                alt="Autonomous freight hub on a UK motorway at dusk"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1708193203896-ba0630862bb6?w=1200&h=800&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              <div className="relative z-10 h-full p-5 flex flex-col">
                <span className="self-start bg-primary text-on-primary px-2.5 py-1 font-label-sm text-label-sm uppercase tracking-widest">
                  Industry Report
                </span>
                <div className="mt-auto">
                  <h4 className="font-headline-lg text-headline-lg text-white mb-2 leading-tight">
                    The Future of Autonomous Freight Hubs: 2025 Outlook
                  </h4>
                  <p className="text-sm text-white/75 mb-3 line-clamp-2 max-w-md">
                    How neural logistics is paving the way for semi-autonomous
                    long-haul corridors across the UK arterial network.
                  </p>
                  <div className="flex items-center gap-3 text-white/70 font-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        calendar_month
                      </span>
                      Oct 24, 2024
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">
                        schedule
                      </span>
                      12 min read
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {[
              {
                tag: "Company News",
                title: "Fleet Expansion: 10 New Scania Super Units Arrive",
                date: "Oct 22, 2024",
                image:
                  "https://images.unsplash.com/photo-1724556271642-e9acaf03ac23?w=1200&h=800&fit=crop",
                alt: "Fleet of trucks parked in a logistics yard",
              },
              {
                tag: "Compliance",
                title: "RHA 2024 Updates: What You Need to Know",
                date: "Oct 18, 2024",
                image:
                  "https://images.unsplash.com/photo-1764231467852-b609a742e082?w=1200&h=800&fit=crop",
                alt: "Hands signing a compliance document",
              },
            ].map(({ tag, title, date, image, alt }) => (
              <Link
                to="/media"
                key={title}
                className="group relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                <div className="relative z-10 h-full p-4 flex flex-col">
                  <span className="self-start bg-white/15 backdrop-blur-sm text-white px-2 py-1 font-label-sm text-label-sm uppercase tracking-widest">
                    {tag}
                  </span>
                  <div className="mt-auto">
                    <h4 className="font-headline-md text-[14px] leading-snug text-white mb-2">
                      {title}
                    </h4>
                    <div className="flex items-center justify-between text-white/70">
                      <span className="flex items-center gap-1 font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[13px]">
                          calendar_month
                        </span>
                        {date}
                      </span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Capture CTA ── */}
      <section className="py-20 bg-inverse-surface relative overflow-hidden">
        <div className="absolute inset-0 technical-grid opacity-5" />
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: pitch + trust signals */}
            <div>
              <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-3">
                Get Started
              </h2>
              <h3 className="font-display-lg text-display-lg text-white mb-4">
                Scale Your Logistics Today
              </h3>
              <p className="text-white/60 font-body-lg text-body-lg mb-6 max-w-md">
                Get a custom quote and technical breakdown of how Route 44 can
                streamline your distribution network.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Response from our team within 2 business hours",
                  "GDPR-compliant, ISO 9001:2015 registered operations",
                  "No long-term contract required to get a quote",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-white mb-1">RHA</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Compliance Partner
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary mb-1">ISO</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    9001:2015 Registered
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              {submitted ? (
                <div className="bg-white/5 backdrop-blur-xl p-6 border border-white/10 rounded-xl shadow-xl text-center">
                  <span className="material-symbols-outlined text-secondary text-[36px] mb-3">
                    check_circle
                  </span>
                  <h3 className="font-headline-md text-headline-md text-white mb-3">
                    Request Submitted
                  </h3>
                  <p className="text-white/60 text-sm font-body-md">
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/5 backdrop-blur-xl p-6 border border-white/10 rounded-xl shadow-xl"
                  aria-label="Request a logistics quote"
                >
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
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
                          className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm rounded transition-all placeholder:text-white/30"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-1.5">
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
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm rounded transition-all placeholder:text-white/30"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
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
                        className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm rounded transition-all placeholder:text-white/30"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-1.5">
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
                          setFormData({
                            ...formData,
                            inquiry: e.target.value,
                          })
                        }
                        className="w-full bg-white/10 border border-white/20 text-white focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm rounded transition-all appearance-none"
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
                      className="w-full bg-secondary text-on-secondary py-3 font-label-md text-label-md font-bold coral-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      Initialize Consultation
                      <span className="material-symbols-outlined text-[18px]">
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
