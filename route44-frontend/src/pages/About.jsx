function About() {
  return (
    <main>
      <header className="relative h-[819px] flex items-center pt-24 overflow-hidden bg-surface-dim">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            alt="Modern logistics hub with fleet vehicles"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP8r-4uFmiwtKwFYccnKF4lLCksnTIruUQMt6HzWdcQ7f7EDYAeDtcOBrLLKQ4C-64vqJxgaXBEdmtnRGlEy4XqiDRWec4rvyV-TgKOdomFI2i1TooKxlc7ordX2jHSPbpt8NBbLAYhCq78Bl9YOrtl-FR7DLNSZSzSCFVAyPHZi9eztJLyBfC33Zr6COOL_QgSF3gMdJdtaQsq67I2Z-f9Q3WKgM1JC13D5Keqs_5BuJ10BXAjcXq6WsEp2mAh4aipt0nKS4Ai7mX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 mb-6 bg-primary text-white font-label text-xs tracking-widest uppercase rounded-full">
              EST. 1998
            </span>
            <h1 className="font-headline font-extrabold text-7xl md:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8">
              PRECISION <br />
              IN MOTION
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Redefining the standard of logistics through architectural precision and fluid global operations. We don't just move freight; we orchestrate supply chains.
            </p>
          </div>
        </div>
      </header>

      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              <img
                alt="Logistics management team"
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-xl shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmggnYpLLD2fKtFm2_u0-3d3eyUyw7c_y9eInUweCD4lqVbQz_TdlfCLXsBI3RZlP-jr9n34nnQdZicaHIDLpBODduuFI7MiWn19hnq75kjS1nYXXptGItzgltXpYz32mq0ExWSJUPk1qR8BHkEj-9M3WNWE_kXmlktF3kt6QnEQKg3nj8gfLKoMRRN8HzO2_63w_h_S2O6CD_JkAzuO8JJTj02G5DnXN1zvBFo9kpxEEKTiUXUixSVTPpNR--AwuOHZXb9bCnZw9o"
              />
              <div className="absolute -bottom-8 -right-8 z-20 bg-surface-container-lowest p-8 rounded-xl shadow-xl max-w-xs">
                <h3 className="font-headline font-bold text-lg mb-2 text-primary">Mission First</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  To synchronize the world's commerce with zero-friction execution and unmatched reliability.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-headline font-extrabold text-5xl tracking-tighter mb-10 text-on-surface">
                The Story of <span className="text-primary">Route 44</span>
              </h2>
              <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  Founded on the principle that logistics should be as predictable as a heartbeat, Route 44 emerged as a monolith in an industry often defined by fragmentation. We recognized that the modern global economy requires more than just transport—it requires kinetic intelligence.
                </p>
                <p>
                  Our journey began with a single route and a commitment to precision. Today, we command a network that spans continents, powered by proprietary telemetry and a team of logistics architects who view every mile as a mathematical challenge to be optimized.
                </p>
                <div className="pt-6">
                  <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-md font-headline font-bold tracking-tight uppercase text-sm hover:opacity-90 transition-opacity">
                    Our Global Network
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="font-headline font-black text-6xl text-primary tracking-tighter mb-2">1.2M</div>
              <div className="font-label text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold">Miles Annualized</div>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="font-headline font-black text-6xl text-primary tracking-tighter mb-2">450+</div>
              <div className="font-label text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold">Active Assets</div>
            </div>
            <div className="p-8">
              <div className="font-headline font-black text-6xl text-primary tracking-tighter mb-2">99.8%</div>
              <div className="font-label text-xs tracking-[0.2em] uppercase text-zinc-500 font-bold">Precision Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-headline font-extrabold text-5xl tracking-tighter mb-6">The Monolith Principles</h2>
            <p className="text-on-surface-variant">
              Our operations are guided by five core pillars that ensure absolute structural integrity across every transit and transaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-surface-container-lowest border-t-4 border-primary shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">rocket_launch</span>
              <h3 className="font-headline font-bold text-2xl mb-4 tracking-tight">Mission Critical</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Treating every shipment as a vital organ in the client's business body. Failure is not an optional data point.
              </p>
            </div>
            <div className="p-10 bg-surface-container-low shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">visibility</span>
              <h3 className="font-headline font-bold text-2xl mb-4 tracking-tight">Vision Zero</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Pioneering a future of zero-incident operations through predictive modeling and advanced safety protocols.
              </p>
            </div>
            <div className="p-10 bg-surface-container-lowest border-t-4 border-primary shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">analytics</span>
              <h3 className="font-headline font-bold text-2xl mb-4 tracking-tight">Telemetry Integrated</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Real-time data streams provide a 360-degree view of the fleet, enabling proactive adjustments to external variables.
              </p>
            </div>
            <div className="p-10 bg-surface-container-low shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">stream</span>
              <h3 className="font-headline font-bold text-2xl mb-4 tracking-tight">Zero Friction</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Stripping away administrative complexity to provide a seamless interface between supply and demand.
              </p>
            </div>
            <div className="p-10 bg-surface-container-lowest border-t-4 border-primary shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full md:col-span-2 lg:col-span-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
              <h3 className="font-headline font-bold text-2xl mb-4 tracking-tight">Eco-Precision</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Minimizing our carbon footprint through aerodynamic fleet design and AI-driven route optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
