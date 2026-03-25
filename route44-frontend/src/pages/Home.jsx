function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-on-surface/40 z-10"></div>
        <img
          alt="Modern heavy truck moving through city at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqhOh-6acDZR5gTaULLHGHMsG_X-_FJAfyaYTXqeky95cHKrmlPFHYS0KaG2vOXZvDLsF1uQXZfzg7rzHb1IBh_BiHp9dVmgbdGWYXsMorKLDc-vSyvhXqcMC93oj8mdJj0x8RONhMTFryr4HyWPVdFEyfi9ATpRHPAjCjcOsk8wShnvG8wRVGqNeLgpXTKlEpqNtbSuyL8pxFYKOmGCoB4OQzxzmfkBG81rUraFXD_smvDMFN1mw5EGJ3x8zxkp-y1NPDXLpnm_F1"
        />
        <div className="relative z-20 px-12 max-w-[1920px] mx-auto w-full">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/90 text-white font-headline text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Pioneering Logistics
            </span>
            <h1 className="text-white font-headline text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-shadow-strong">
              Precision Haulage <br /> <span className="text-primary-fixed">&amp; Distribution.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-xl font-body leading-relaxed mb-10 text-shadow-strong">
              We transform supply chain complexity into competitive advantage through elite fleet management and real-time operational intelligence.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-5 rounded-md font-headline font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
                Partner With Us
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-md font-headline font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all">
                Live Tracking
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col items-end gap-2 text-white/60 font-label text-[10px] uppercase tracking-widest">
          <span>Coordinates: 44.0000° N, 120.0000° W</span>
          <span>Active Fleet: 1,402 Units</span>
        </div>
      </section>

      {/* Capabilities: Bento Grid Style */}
      <section className="py-32 px-12 bg-surface max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-6">Capabilities</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">Engineered for the demands of modern commerce. Our operational frameworks provide the backbone for global distribution networks.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-primary"></div>
            <div className="w-12 h-1 bg-surface-container-high"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[700px]">
          {/* Freight Elite */}
          <div className="md:col-span-8 bg-surface-container-low p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-6xl mb-8">local_shipping</span>
              <h3 className="font-headline text-4xl font-bold tracking-tight mb-4">Freight Elite</h3>
              <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
                White-glove haulage for high-value assets. Climate-controlled environments and redundant security protocols for your most critical inventory.
              </p>
            </div>
            <div className="relative z-10 flex gap-4 mt-8">
              <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Heavy Haulage</span>
              <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">Cold Chain</span>
            </div>
            <img
              alt="Precision cargo loading"
              className="absolute right-[-10%] bottom-[-10%] w-1/2 opacity-10 group-hover:opacity-20 transition-opacity grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96bN2Rv_Cg-wYyEbpQRuaWIA4s_-y8lnAFxr88AwWVM7YGdzuDJj0zxsUKIQ-64RqPNFETAlwshY2hUKuOLjZccN_6OusARj9_iwu2YciwHyX1E5kr-XiF-NVgIGusVCQCgVT-EvfOnY9qoyQLJsbJHfIbm-fSsQCiZRRAYtlgN9UTlNQm7B0Ec1VkLjlhX4fz8nDUhJfxGzkJlq35Z7YA26_ZfhVkhb_lfPavhzrzIz6Fik_MDLVXKAmimIiSd-_lQpsLtzEh1Kr"
            />
          </div>
          {/* Precision Ops */}
          <div className="md:col-span-4 bg-primary text-white p-12 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary-fixed text-6xl mb-8">hub</span>
              <h3 className="font-headline text-4xl font-bold tracking-tight mb-4">Precision Ops</h3>
              <p className="text-primary-fixed/80 text-lg leading-relaxed">
                Algorithmic route optimization reducing transit times by 22% and carbon footprint by 15% across our entire network.
              </p>
            </div>
            <button className="flex items-center gap-3 font-headline text-sm font-bold uppercase tracking-widest group">
              Explore Methodology
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
          {/* Tech Snippet */}
          <div className="md:col-span-12 bg-surface-container-high p-8 flex items-center justify-between border-l-8 border-primary">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-black font-headline text-primary">99.9%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Uptime Rate</div>
              </div>
              <div className="w-px h-12 bg-on-surface/10"></div>
              <div className="text-center">
                <div className="text-3xl font-black font-headline text-primary">24/7</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Ops Support</div>
              </div>
            </div>
            <div className="hidden lg:block text-right">
              <p className="text-sm italic font-medium">"Setting the standard for industrial velocity." — Logistics Weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Status Visualization */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="px-12 max-w-[1920px] mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter mb-2">Fleet Status</h2>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="font-label text-xs uppercase tracking-widest font-bold">Live Network Feed</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tracking Map Preview */}
            <div className="lg:col-span-3 bg-surface-container-lowest h-[500px] relative rounded-lg shadow-sm overflow-hidden border border-on-surface/5">
              <div className="absolute inset-0 grayscale opacity-40">
                <img
                  alt="Logistics map visualization"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi2m3voVi7FvxHx8jvQFyGNkZ0RnlApPbaFVV2Ngj48_wa2frCOInkkC3l77gkExYkxqqbCan7HnzmQ_DBDCByRMZI220eW-4kE3BUREeFPuiHVAoIYa42-LDevExgXw67oSO55GQVwI70kk9kfF2xWZDDoeQZutnLSM6lUSPXkn3Cvzt3PwCT_jNPoAT8CBCammJo3ScedQhPGmOIBtUGPNuwSt6C6ZPA8JbbYyZM9OwmXynH5lN_EtZiWqHhAB7Q5oRAD41vzQbX"
                />
              </div>
              {/* UI Overlays */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <div className="bg-on-surface text-white px-4 py-3 rounded flex items-center gap-4 shadow-xl">
                  <div className="bg-primary p-2 rounded">
                    <span className="material-symbols-outlined text-xs">alt_route</span>
                  </div>
                  <div>
                    <div className="text-[10px] opacity-60 uppercase font-bold tracking-tighter">Route R44-902</div>
                    <div className="text-xs font-bold font-headline">CHI → SEA [ETA: 04:20]</div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-lg flex items-center gap-3 border border-zinc-100">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Congestion Alert: I-80</span>
                </div>
              </div>
            </div>
            {/* Fleet Metrics Dashboard */}
            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-8 flex flex-col justify-center rounded-lg shadow-sm">
                <h4 className="font-label text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">On-Time Performance</h4>
                <div className="text-5xl font-black font-headline text-on-surface">98.4%</div>
                <div className="mt-4 w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98.4%]"></div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 flex flex-col justify-center rounded-lg shadow-sm">
                <h4 className="font-label text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Active Deployments</h4>
                <div className="text-5xl font-black font-headline text-on-surface">412</div>
                <p className="text-xs mt-2 text-on-surface-variant">Units currently in high-velocity transit.</p>
              </div>
              <div className="bg-on-surface text-white p-8 flex flex-col justify-between rounded-lg shadow-sm flex-grow">
                <div>
                  <h4 className="font-label text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Operational Status</h4>
                  <div className="text-xl font-bold font-headline">All Hubs Operational</div>
                </div>
                <button className="mt-8 border border-white/20 px-4 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Detailed System Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="relative h-[600px] flex items-center bg-surface-container-low overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div className="flex flex-col justify-center px-12 lg:px-24">
            <span className="text-primary font-headline font-black text-sm uppercase tracking-[0.3em] mb-6">Our Infrastructure</span>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter mb-8 max-w-lg">The Architecture of Global Trade</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
              Since 1982, Route 44 has expanded from a local hauler into a continental powerhouse. Our state-of-the-art facilities across the West Coast serve as the critical nexus for multi-modal freight.
            </p>
            <div>
              <a className="inline-flex items-center gap-4 text-on-surface font-headline font-bold text-sm uppercase tracking-widest group" href="#">
                Our Story
                <span className="w-12 h-px bg-primary group-hover:w-20 transition-all"></span>
              </a>
            </div>
          </div>
          <div className="relative h-full hidden lg:block">
            <img
              alt="Modern logistics facility warehouse"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq7aWDebe2aGnKp-GJwPs18UnxBcz2nufCQ-IDwGgygXSP_rZXGyNi2eCIWiSsFPGCEJk7ypcvkEvReSAr6lxvzCG-xKmPvGfvCWmySFfG1IplOoT-6QaZ7Nd9-Tnr9JdqHrLeAeTOotxjA3Oe6vuiHAht2FCBhtqd6ikbsfSqWm-e2zllwgo2hR-Y-eFoVx2etBtT_jKlkwJCHI_tTCL0vd40-NfiuDg3-vkQWeG9zRlSFkNEgDQEjKvEUfmVx2XOBUHf7PvLhv6w"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-12 bg-white text-center">
        <h2 className="font-headline text-6xl font-extrabold tracking-tighter mb-8">Ready to Scale?</h2>
        <p className="text-on-surface-variant text-xl max-w-2xl mx-auto mb-12">
          Join the 500+ global brands that rely on Route 44 for precision distribution and uncompromised reliability.
        </p>
        <button className="bg-gradient-to-br from-primary to-primary-container text-white px-12 py-6 rounded-md font-headline font-bold text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
          Request a Logistics Audit
        </button>
      </section>
    </main>
  );
}

export default Home;
