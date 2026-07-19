import { usePageTransition } from "../hooks/usePageTransition";

function Analytics() {
  const mainRef = usePageTransition();

  return (
    <main
      ref={mainRef}
      className="neural-grid min-h-screen bg-surface pt-24 md:pt-32 pb-12 md:pb-16 page-fade-in"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8 lg:px-12">
        {/* Dashboard Header */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="font-headline font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tighter text-on-surface mb-1.5">
              STRATEGIC ANALYTICS
            </h1>
            <p className="text-sm text-on-surface-variant uppercase tracking-widest font-label">
              Q4 Performance Window ⚡ Live Data Feed Active
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              notifications
            </button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              settings
            </button>
          </div>
        </div>

        {/* Bento Grid Dashboard */}
        <div className="grid grid-cols-12 gap-4">
          {/* Global Heatmap - Main Visualization */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden relative h-[380px]">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-30 mix-blend-multiply"
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1800&h=1000&fit=crop"
                alt="Global logistics network visualization"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-10"></div>
            <div className="absolute top-5 left-5 right-5 z-20">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline font-extrabold text-lg tracking-tighter mb-1.5 text-on-surface">
                    GLOBAL HEATMAP
                  </h3>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                    Real-time distribution intensity
                  </p>
                </div>
                <div className="bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-md shadow-lg">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1.5">
                    Network Status
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold">
                      All Systems Operational
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-20 flex gap-3">
              <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg shadow-lg flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  In-Transit Assets
                </p>
                <p className="text-2xl font-black font-headline text-on-surface">
                  1,402
                </p>
              </div>
              <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-lg shadow-lg flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                  On-Time Reliability
                </p>
                <p className="text-2xl font-black font-headline text-green-600">
                  99.4%
                </p>
              </div>
            </div>
          </div>

          {/* Carbon Footprint Widget */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl p-5 flex flex-col justify-between border-b-4 border-primary/20">
            <div>
              <span
                className="material-symbols-outlined text-primary text-3xl mb-3"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
              <h3 className="font-headline font-extrabold text-lg tracking-tighter mb-1.5">
                CARBON FOOTPRINT
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 italic">
                Precision sustainability monitoring across the ROUTE 44 network.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Efficiency Goal
                  </span>
                  <span className="text-primary font-bold">82%</span>
                </div>
                <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-secondary w-[82%]"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-container-low p-3 rounded">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Reduced CO2
                  </p>
                  <p className="text-base font-black font-headline">14.2t</p>
                </div>
                <div className="bg-surface-container-low p-3 rounded">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Bio-Fuel %
                  </p>
                  <p className="text-base font-black font-headline text-secondary">
                    38%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fleet Performance - Secondary Visualization */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container-low rounded-xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-headline font-extrabold text-lg tracking-tighter">
                FLEET UPTIME
              </h3>
              <span className="material-symbols-outlined text-slate-400">
                more_horiz
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-surface-container-high"
                    cx="64"
                    cy="64"
                    fill="transparent"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="10"
                  ></circle>
                  <circle
                    className="text-primary"
                    cx="64"
                    cy="64"
                    fill="transparent"
                    r="56"
                    stroke="currentColor"
                    strokeDasharray="352"
                    strokeDashoffset="35"
                    strokeWidth="10"
                  ></circle>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-black font-headline">92%</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                    Optimal
                  </span>
                </div>
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div>
                    <p className="text-xs font-bold">Heavy Haulage</p>
                    <p className="text-[10px] text-slate-500 uppercase">
                      98% Utilization
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <div>
                    <p className="text-xs font-bold">Express Air</p>
                    <p className="text-[10px] text-slate-500 uppercase">
                      84% Utilization
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="text-xs font-bold">Ocean Freight</p>
                    <p className="text-[10px] text-slate-500 uppercase">
                      72% Utilization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipment History Table */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-[0_10px_40px_rgba(26,28,28,0.06)] overflow-hidden">
            <div className="px-5 py-4 bg-surface-container-low flex justify-between items-center">
              <h3 className="font-headline font-extrabold text-lg tracking-tighter">
                LATEST SHIPMENTS
              </h3>
              <button className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-surface-container-high">
                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Reference
                    </th>
                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Origin/Dest
                    </th>
                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Status
                    </th>
                    <th className="px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      ETA
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-5 py-3.5 font-bold text-sm">#KN-92831</td>
                    <td className="px-5 py-3.5 text-sm">ROT → SIN</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded">
                        ON TIME
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium">
                      Oct 24, 08:30
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-5 py-3.5 font-bold text-sm">#KN-92842</td>
                    <td className="px-5 py-3.5 text-sm">HKG → LAX</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded">
                        IN TRANSIT
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium">
                      Oct 25, 14:00
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-5 py-3.5 font-bold text-sm">#KN-92855</td>
                    <td className="px-5 py-3.5 text-sm">BER → DXB</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded">
                        DELAYED
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium">
                      Oct 26, 12:45
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Predictive Analytics Widgets */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary to-primary-container p-5 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-20">
                <span className="material-symbols-outlined text-5xl">
                  trending_up
                </span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3 opacity-70">
                Predictive Modeling
              </p>
              <h4 className="font-headline font-bold text-base mb-1.5">
                Demand Forecast
              </h4>
              <p className="text-2xl font-black mb-3">+12.4%</p>
              <p className="text-xs opacity-80 leading-relaxed">
                Projected volume increase for the APAC region over the next 14
                operational days.
              </p>
            </div>
            <div className="bg-surface-container-high p-5 rounded-xl border-l-4 border-secondary">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3">
                Route Optimization
              </p>
              <h4 className="font-headline font-bold text-base mb-1.5 text-on-surface">
                Efficiency Gains
              </h4>
              <p className="text-2xl font-black text-secondary mb-3">-$4.2k</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily fuel savings realized through AI-driven pathfinding and
                weight distribution.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant/20">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-3">
                Risk Mitigation
              </p>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="material-symbols-outlined text-amber-600 text-sm">
                  warning
                </span>
                <h4 className="font-headline font-bold text-base text-on-surface">
                  Weather Alert
                </h4>
              </div>
              <p className="text-xs font-bold text-slate-900 mb-3">
                North Atlantic Storm Warning
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Rerouting 12 active vessels to southern corridors. Estimated 4h
                delay buffer required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Analytics;
