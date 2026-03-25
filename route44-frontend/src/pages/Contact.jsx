function Contact() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Title Section */}
      <header className="px-12 max-w-[1920px] mx-auto mb-20">
        <div className="max-w-4xl">
          <span className="text-primary font-headline font-extrabold uppercase tracking-[0.2em] text-xs mb-4 block">
            Connect with Precision
          </span>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter leading-none mb-8">
            GET IN <span className="text-primary italic">MOTION.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            Our global logistics infrastructure is active 24/7. Whether you require fleet scheduling, complex supply chain consultation, or real-time tracking support, our command center is standing by.
          </p>
        </div>
      </header>

      {/* Main Interaction Section */}
      <section className="px-12 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form Column */}
        <div className="bg-surface-container-low p-12 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
          </div>
          <h2 className="font-headline font-bold text-3xl mb-10 tracking-tight">Send a Message</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                  Full Name
                </label>
                <input
                  className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                  placeholder="Johnathan Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                  placeholder="j.doe@logistics.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                Inquiry Type
              </label>
              <select className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all appearance-none">
                <option>Fleet Inquiry</option>
                <option>Enterprise Partnerships</option>
                <option>Carrier Application</option>
                <option>General Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
                Project Details
              </label>
              <textarea
                className="w-full bg-surface-container-high border-none rounded-md px-4 py-4 focus:ring-1 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all"
                placeholder="Describe your logistics requirements..."
                rows="5"
              ></textarea>
            </div>
            <button
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-full py-5 rounded-md font-headline font-extrabold text-sm uppercase tracking-[0.2em] shadow-lg hover:brightness-110 transition-all active:scale-[0.98]"
              type="submit"
            >
              Initialize Transmission
            </button>
          </form>
        </div>

        {/* Global HQ & Map Column */}
        <div className="space-y-12">
          <div className="bg-surface-container-lowest p-10 shadow-[0_10px_40px_rgba(26,28,28,0.06)] rounded-xl">
            <h2 className="font-headline font-bold text-3xl mb-8 tracking-tight">Global Headquarters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                    location_on
                  </span>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-wide mb-1">Physical Address</p>
                    <p className="text-on-surface-variant leading-relaxed">
                      44 Logistics Plaza, Suite 900
                      <br />
                      Houston, TX 77002
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                    call
                  </span>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-wide mb-1">Direct Line</p>
                    <p className="text-on-surface-variant">+1 (800) 44-ROUTE</p>
                    <p className="text-on-surface-variant">+1 (713) 555-0144</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                    mail
                  </span>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-wide mb-1">Electronic Mail</p>
                    <p className="text-on-surface-variant">ops@route44.com</p>
                    <p className="text-on-surface-variant">press@route44.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>
                    schedule
                  </span>
                  <div>
                    <p className="font-headline font-bold text-sm uppercase tracking-wide mb-1">Operational Hours</p>
                    <p className="text-on-surface-variant">Command Center: 24/7/365</p>
                    <p className="text-on-surface-variant">Admin: 08:00 — 18:00 CST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Integration */}
          <div className="h-[400px] w-full rounded-xl overflow-hidden bg-surface-container-high relative group">
            <img
              alt="Clean minimalist digital map of Houston logistics hub"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzLS3F7DNJTDzjIfKv6Z2PpxtzJiH_fTTxi45Qs9VOaVHbhc18yS9FcHV7rtcw4CkZGxqnYg-y7PAIa3AxAEss1Ay5uwvfPICnKra_8ngFef8nO0uabte7G3sQLanqaroiTLj5JEkV3xNXzG9z7EocefV_usvOdG2Nx0sU6ztB5wYmGPjer64IlcXp2xLAbMWUgJ6iyw0WaFcrSv-dn_zfGq49E968EJkZqEbcIfdVD2VM3qRxtLr7pN-1fnPZUlUYpSeS0jZbM1X"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-surface-container-lowest p-4 rounded-full shadow-2xl animate-pulse">
                <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>
                  location_on
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Infrastructure / Bento Grid */}
      <section className="mt-32 px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline font-black text-4xl tracking-tighter uppercase mb-4">Responsive Infrastructure</h2>
            <p className="text-on-surface-variant">
              Precision reliability built into every mile of our operation. Our network never sleeps.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-tertiary-fixed-dim text-on-tertiary-fixed rounded-full text-xs font-bold uppercase tracking-widest">
              Network Live
            </span>
            <span className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-widest">
              Uptime: 99.9%
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 24/7 Monitoring Card */}
          <div className="md:col-span-2 bg-surface-container-low p-12 rounded-xl flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-primary text-3xl">hub</span>
              </div>
              <h3 className="font-headline font-bold text-3xl mb-4 tracking-tight">Active Command Center</h3>
              <p className="text-on-surface-variant max-w-lg text-lg leading-relaxed">
                Our proprietary monitoring system provides real-time telemetry on every asset in the Route 44 fleet. We track environmental conditions, fuel efficiency, and route optimization metrics in milliseconds.
              </p>
            </div>
            <div className="flex gap-8 mt-12 overflow-x-auto pb-4">
              <div className="flex flex-col">
                <span className="text-3xl font-headline font-black text-primary">12ms</span>
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Telemetry Lag</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-headline font-black text-primary">4.2k</span>
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Active Assets</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-headline font-black text-primary">Global</span>
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Reach</span>
              </div>
            </div>
          </div>
          {/* Global Network Card */}
          <div className="bg-primary p-12 rounded-xl text-on-primary flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">public</span>
              <h3 className="font-headline font-bold text-2xl mb-4">Global Network</h3>
              <p className="text-on-primary-container leading-relaxed">
                Strategically placed logistics hubs across 6 continents ensuring rapid response times regardless of destination.
              </p>
            </div>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 border-b border-primary-container pb-2">
                  <span className="w-2 h-2 bg-on-primary rounded-full"></span>
                  <span className="font-label text-sm font-semibold uppercase tracking-wide">North America Hub</span>
                </li>
                <li className="flex items-center gap-3 border-b border-primary-container pb-2">
                  <span className="w-2 h-2 bg-on-primary rounded-full"></span>
                  <span className="font-label text-sm font-semibold uppercase tracking-wide">Euro-Transit Hub</span>
                </li>
                <li className="flex items-center gap-3 border-b border-primary-container pb-2">
                  <span className="w-2 h-2 bg-on-primary rounded-full"></span>
                  <span className="font-label text-sm font-semibold uppercase tracking-wide">Asia-Pacific Hub</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
