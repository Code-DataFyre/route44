import { useState } from "react";

function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    pickup: "",
    destination: "",
    freightType: "Dry Van",
    weight: "",
    urgency: "Standard",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="neural-grid pt-32 min-h-screen">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-16">
        {/* ── Hero ── */}
        <section className="mb-24 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 bg-secondary animate-pulse" />
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
              Global Support Command
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            Neural Logistics Hub
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Connect with our specialised departments through our unified
            directory or initiate a precision logistics intake below.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* ── Multi-Step Quote Form ── */}
          <div className="lg:col-span-8 glass-panel p-10">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Freight Intake Engine
              </h2>
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center gap-2 font-label-md ${step === 1 ? "text-primary" : "text-outline"}`}
                >
                  <span
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step === 1 ? "border-primary" : "border-outline-variant"}`}
                  >
                    01
                  </span>
                  <span>Origins</span>
                </div>
                <div className="w-12 h-[1px] bg-outline-variant/30" />
                <div
                  className={`flex items-center gap-2 font-label-md ${step === 2 ? "text-primary" : "text-outline"}`}
                >
                  <span
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step === 2 ? "border-primary" : "border-outline-variant"}`}
                  >
                    02
                  </span>
                  <span>Specs</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-primary text-[64px] mb-6">
                  check_circle
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Request Deployed
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Your freight intake has been received. Our logistics team will
                  contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Freight quote request">
                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="pickup"
                          className="font-label-md text-label-md text-on-surface-variant"
                        >
                          Pickup Point (ZIP/City)
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                            location_on
                          </span>
                          <input
                            id="pickup"
                            type="text"
                            required
                            autoComplete="off"
                            placeholder="London, UK (LHR)"
                            value={form.pickup}
                            onChange={(e) =>
                              setForm({ ...form, pickup: e.target.value })
                            }
                            className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="destination"
                          className="font-label-md text-label-md text-on-surface-variant"
                        >
                          Destination Point (ZIP/City)
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                            flag
                          </span>
                          <input
                            id="destination"
                            type="text"
                            required
                            autoComplete="off"
                            placeholder="Rotterdam, NL (RTM)"
                            value={form.destination}
                            onChange={(e) =>
                              setForm({ ...form, destination: e.target.value })
                            }
                            className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary focus:border-transparent rounded-lg transition-all"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border border-primary/10 bg-primary/5">
                      <h3 className="font-label-md text-primary mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">
                          info
                        </span>
                        AI Routing Suggestion
                      </h3>
                      <p className="text-sm text-on-surface-variant">
                        Route 44 Neural Engine suggests{" "}
                        <span className="font-bold text-primary">
                          Channel Tunnel Corridor 4
                        </span>{" "}
                        for optimal transit speed and 12% lower CO₂ emissions.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!form.pickup || !form.destination}
                        className="px-8 py-3 bg-primary text-on-primary font-label-md flex items-center gap-2 hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Specifications{" "}
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="freightType"
                          className="font-label-md text-label-md text-on-surface-variant"
                        >
                          Freight Type
                        </label>
                        <select
                          id="freightType"
                          value={form.freightType}
                          onChange={(e) =>
                            setForm({ ...form, freightType: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary"
                        >
                          <option>Dry Van</option>
                          <option>Refrigerated (Pharma)</option>
                          <option>HazMat (Neural Grade)</option>
                          <option>Oversized/Heavy Lift</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="weight"
                          className="font-label-md text-label-md text-on-surface-variant"
                        >
                          Total Weight (KG)
                        </label>
                        <input
                          id="weight"
                          type="number"
                          min="1"
                          max="44000"
                          placeholder="24000"
                          value={form.weight}
                          onChange={(e) =>
                            setForm({ ...form, weight: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-on-surface-variant">
                          Urgency Level
                        </label>
                        <div className="flex gap-2">
                          {["Standard", "Critical"].map((level) => (
                            <button
                              key={level}
                              type="button"
                              onClick={() =>
                                setForm({ ...form, urgency: level })
                              }
                              className={`flex-1 py-3 font-label-md transition-all ${
                                form.urgency === level
                                  ? "bg-secondary text-white shadow-lg shadow-secondary/20"
                                  : "bg-surface-container-low hover:bg-surface-container-high"
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-6 border-t border-outline-variant/20">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="font-label-md text-outline hover:text-primary transition-colors"
                      >
                        Go Back
                      </button>
                      <button
                        type="submit"
                        className="px-12 py-4 bg-primary text-on-primary font-headline-md shadow-xl shadow-primary/20 hover:brightness-110 transition-all"
                      >
                        Deploy Request
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* ── Support Directory ── */}
          <div className="lg:col-span-4 space-y-gutter">
            <div className="glass-panel p-8">
              <h3 className="font-headline-md text-headline-md text-primary mb-6">
                Support Directory
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "local_shipping",
                    title: "Dispatch Operations",
                    phone: "+44 (0) 20 8444 0901",
                    sub: "24/7 Real-time Tracking & Updates",
                  },
                  {
                    icon: "account_balance_wallet",
                    title: "Accounts & Billing",
                    phone: "+44 (0) 20 8444 0905",
                    sub: "Mon–Fri: 09:00 – 17:30 GMT",
                  },
                  {
                    icon: "hub",
                    title: "General Inquiries",
                    phone: "info@route44.org",
                    sub: "Global HQ Concierge",
                  },
                ].map(({ icon, title, phone, sub }) => (
                  <div key={title} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        {title}
                      </p>
                      <p className="font-mono-data text-mono-data text-primary">
                        {phone}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HQ Visual */}
            <div className="glass-panel overflow-hidden h-80 relative group">
              <img
                alt="Route 44 Global Headquarters, Essex, UK"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida/AB6AXuCJwGzVeQ_t4Tm7D0u-qAnQbIx0ZQuLRXczKDAvPDtHgY6tmDgUXFvm5D0U1DIY7JtQfeol0CrlsFTgNuu97-jf17Z8c7l47WAwqleAuH1vZ0SL9HrLbZwZRvp5s4aJmVGmojbop8QoBpkMJK4xLifavCmUqeMRfOZjFfrs5DlZnjHeKeP4s41E3EWqfzO0LE7ek-7Hdf74JXSebkcYzQsL3Ll4EqXVDS06KzFjarj0_SV5ulb7ywxzx0ZANw9012_k4HctubIFp2eC"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-label-sm uppercase tracking-tighter opacity-80 mb-1">
                  Global Headquarters
                </p>
                <p className="font-headline-md leading-tight">
                  London Gateway Tech Centre,
                  <br />
                  Essex, SS17 9DY, UK
                </p>
              </div>
              <div className="absolute top-6 right-6 font-mono-data text-[10px] text-primary-fixed bg-primary/40 backdrop-blur px-2 py-1">
                LAT: 51.5033° N | LON: 0.4700° E
              </div>
            </div>
          </div>
        </div>

        {/* ── Global Status ── */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Current Network Load",
              value: "87.4%",
              color: "border-primary",
              valueColor: "text-primary",
              bar: 87,
            },
            {
              label: "Active Deliveries",
              value: "4,902",
              color: "border-secondary",
              valueColor: "text-secondary",
              live: true,
            },
            {
              label: "Average Transit",
              value: "14.2 hrs",
              color: "border-primary",
              valueColor: "text-primary",
              sub: "Intra-Europe Fleet",
            },
            {
              label: "Neural Latency",
              value: "12ms",
              color: "border-outline",
              valueColor: "text-on-surface",
              sub: "Direct Cloud Sync",
            },
          ].map(({ label, value, color, valueColor, bar, live, sub }) => (
            <div key={label} className={`glass-panel p-6 border-l-4 ${color}`}>
              <p className="font-label-sm text-on-surface-variant uppercase mb-1">
                {label}
              </p>
              <p className={`font-headline-md ${valueColor}`}>{value}</p>
              {bar && (
                <div className="w-full bg-surface-container-high h-1 mt-2 overflow-hidden">
                  <div
                    className="bg-primary h-full"
                    style={{ width: `${bar}%` }}
                  />
                </div>
              )}
              {live && (
                <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live tracking active
                </p>
              )}
              {sub && (
                <p className="text-xs text-on-surface-variant mt-1">{sub}</p>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Contact;
