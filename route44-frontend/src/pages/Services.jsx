function Services() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-12 mb-24">
        <div className="max-w-[1920px] mx-auto">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 block">
            Precision In Motion
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter text-on-surface max-w-4xl leading-[0.9]">
            ENGINEERED <br /> LOGISTICS.
          </h1>
          <div className="mt-12 flex flex-col md:flex-row gap-12 items-end">
            <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
              Route 44 redefines the industrial supply chain through high-velocity haulage and intelligence-driven distribution hubs.
            </p>
            <div className="flex-1 h-px bg-outline-variant opacity-20 hidden md:block mb-4"></div>
          </div>
        </div>
      </section>

      {/* Haulage Solutions - Bento Grid */}
      <section className="px-12 py-24 bg-surface-container-low">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Haulage Solutions</h2>
              <p className="text-on-surface-variant max-w-md">
                Multi-modal specialized transport designed for critical cargo infrastructure.
              </p>
            </div>
            <div className="hidden md:block h-px w-1/3 bg-outline-variant opacity-20 mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Interstate Long-Haul */}
            <div className="md:col-span-2 group bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:bg-white shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl mb-8">distance</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Interstate Long-Haul</h3>
              <p className="text-on-surface-variant mb-12 max-w-sm">
                Cross-continental transit with zero-latency handovers and real-time telemetry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded">
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-1">Availability</span>
                  <span className="font-headline font-bold text-lg">24/7/365</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded">
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-1">Avg Lead Time</span>
                  <span className="font-headline font-bold text-lg">&lt; 12 Hours</span>
                </div>
              </div>
            </div>
            {/* Cold Chain */}
            <div className="bg-secondary-container text-on-secondary-container p-10 rounded-xl relative overflow-hidden group">
              <span className="material-symbols-outlined text-4xl mb-8">ac_unit</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Cold Chain</h3>
              <p className="text-on-secondary-container/80 mb-8">
                Climate-precise environment control for sensitive biopharmaceuticals and perishables.
              </p>
              <div className="absolute bottom-[-20%] right-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[200px]">severe_cold</span>
              </div>
            </div>
            {/* Hazmat */}
            <div className="bg-surface-container-lowest p-10 rounded-xl border-l-4 border-primary shadow-sm">
              <span className="material-symbols-outlined text-primary text-4xl mb-8">warning</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Hazmat</h3>
              <p className="text-on-surface-variant mb-6">
                Certified handling of Class 1-9 materials with specialized safety protocols.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-tertiary-fixed-dim rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Level A Cert
                </span>
                <span className="px-3 py-1 bg-tertiary-fixed-dim rounded-full text-[10px] font-bold uppercase tracking-wider">
                  GPS Lock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="px-12 py-24 bg-on-surface text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-[1920px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">The Route 44 Standard</h2>
            <p className="text-zinc-400">Live performance indicators across our global network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-7xl font-black font-headline text-primary-fixed-dim mb-4">1,402</div>
              <div className="uppercase tracking-widest text-xs font-bold text-zinc-500 mb-8">Active Units In-Field</div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary-fixed-dim w-[92%]"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-black font-headline text-white mb-4">
                0.14<span className="text-3xl text-primary-fixed-dim">ms</span>
              </div>
              <div className="uppercase tracking-widest text-xs font-bold text-zinc-500 mb-8">Network Latency</div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[98%]"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-black font-headline text-primary-fixed-dim mb-4">4.98</div>
              <div className="uppercase tracking-widest text-xs font-bold text-zinc-500 mb-8">Carrier Quality Rating</div>
              <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary-fixed-dim w-[99%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-12 py-32">
        <div className="max-w-[1920px] mx-auto bg-surface-container-high rounded-3xl p-16 md:p-24 flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-8">analytics</span>
          <h2 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-8 max-w-3xl">
            Ready to optimize your global operations?
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 max-w-2xl">
            Connect with our systems architects for a deep-dive audit of your current logistics infrastructure.
          </p>
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-5 rounded font-headline font-bold text-lg tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl">
            Request Operations Audit
          </button>
        </div>
      </section>
    </main>
  );
}

export default Services;
