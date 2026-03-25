function Tracking() {
  return (
    <main className="min-h-screen flex pt-20 bg-surface-dim">
      {/* Left Sidebar - Shipments List */}
      <aside className="w-80 flex flex-col bg-white border-r border-surface-container-high">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-surface-container-high">
          <h2 className="font-headline font-extrabold text-xl tracking-tighter text-on-surface mb-4">
            ACTIVE SHIPMENTS
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search tracking ID..."
              className="w-full bg-surface-container px-4 py-3 rounded-md text-sm font-label placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
              search
            </span>
          </div>
        </div>

        {/* Shipments List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {/* Active Shipment Card */}
          <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-md cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                IN TRANSIT
              </span>
              <span className="text-[10px] font-label text-on-surface-variant">KN-9421-XB</span>
            </div>
            <h3 className="font-headline font-bold text-sm text-on-surface">Precision Machining Parts</h3>
            <p className="text-xs text-on-surface-variant mt-1">Munich → Stockholm</p>
            <div className="mt-3 pt-3 border-t border-surface-container flex items-center justify-between">
              <span className="text-[10px] text-on-surface-variant uppercase">ETA</span>
              <span className="text-xs font-bold text-primary">4 mins</span>
            </div>
          </div>

          {/* Delayed Shipment Card */}
          <div className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors rounded-md cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-label font-bold tracking-widest text-amber-600 uppercase">
                DELAYED
              </span>
              <span className="text-[10px] font-label text-on-surface-variant">KN-8234-MW</span>
            </div>
            <h3 className="font-headline font-bold text-sm text-on-surface">Pharmaceutical Cold Chain</h3>
            <p className="text-xs text-on-surface-variant mt-1">Lyon → Barcelona</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">emergency_home</span>
              <span className="text-xs font-medium text-on-surface-variant">Weather Alert</span>
            </div>
          </div>

          {/* Queued Shipment Card */}
          <div className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors rounded-md cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-label font-bold tracking-widest text-on-tertiary-fixed-variant uppercase">
                QUEUED
              </span>
              <span className="text-[10px] font-label text-on-surface-variant">KN-5523-WQ</span>
            </div>
            <h3 className="font-headline font-bold text-sm text-on-surface">Automotive Casting Unit</h3>
            <p className="text-xs text-on-surface-variant mt-1">Stuttgart → Turin</p>
          </div>

          {/* In Transit Shipment Card */}
          <div className="p-4 bg-surface-container-low hover:bg-surface-container transition-colors rounded-md cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-label font-bold tracking-widest text-primary uppercase">
                IN TRANSIT
              </span>
              <span className="text-[10px] font-label text-on-surface-variant">KN-0021-LA</span>
            </div>
            <h3 className="font-headline font-bold text-sm text-on-surface">Heavy Machinery Logistics</h3>
            <p className="text-xs text-on-surface-variant mt-1">Rotterdam → Berlin</p>
          </div>
        </div>
      </aside>

      {/* Center: Map View */}
      <section className="flex-1 relative bg-surface-dim overflow-hidden">
        {/* Map Simulation Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
            alt="Aerial satellite map view of major European highway intersection with digital network lines"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOMEgVzx-TXm1WqQRr3Jc5idb6HqI-u_bWqmCb7KqUdNP8xKTmsJkFk80nNpCRB-ojLpmfFSLIRxusB36c9mqYy2sGCXJU0VmEp7Ilq98esWASYFBXoac5CI_5Jlv-YukDhtiV4sBveAcGj7dDIJMFUOzG1Mz9xIE1KRng-0K77eWdI8fWt7yI7-Vsov7pT7u44HflxbjZeFsy2kRhW6-sFsdWKfJHa03if4iIJYSeUwcaw37tjYSd0fIMKeiE85PCIwcDtOVYFIo"
          />
        </div>

        {/* Custom Map Markers (Simulated) */}
        <div className="absolute top-1/4 left-1/3 z-10 flex flex-col items-center group">
          <div className="bg-primary text-white p-2 rounded-md shadow-lg flex items-center gap-2 scale-100 group-hover:scale-105 transition-transform">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_shipping
            </span>
            <span className="text-[10px] font-bold">KN-9421-XB</span>
          </div>
          <div className="w-0.5 h-6 bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-20">
          <button className="w-10 h-10 bg-surface-container-lowest flex items-center justify-center rounded-md shadow-md text-on-surface hover:bg-surface transition-colors">
            <span className="material-symbols-outlined">add</span>
          </button>
          <button className="w-10 h-10 bg-surface-container-lowest flex items-center justify-center rounded-md shadow-md text-on-surface hover:bg-surface transition-colors">
            <span className="material-symbols-outlined">remove</span>
          </button>
          <button className="w-10 h-10 bg-surface-container-lowest flex items-center justify-center rounded-md shadow-md text-primary hover:bg-surface transition-colors mt-4">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              my_location
            </span>
          </button>
        </div>

        {/* Floating Legend */}
        <div className="absolute top-8 right-8 p-4 bg-surface/80 backdrop-blur-xl rounded-md shadow-sm z-20 hidden lg:block">
          <h4 className="font-label text-[10px] font-black tracking-widest text-on-surface-variant uppercase mb-3">
            Live Fleet Status
          </h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-[10px] font-bold">Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <span className="text-[10px] font-bold">Maintenance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-error"></div>
              <span className="text-[10px] font-bold">Alert</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Panel: Detailed Info & Telemetry */}
      <aside className="w-[400px] flex flex-col bg-white overflow-y-auto">
        {/* Header Section */}
        <div className="p-8 border-b border-surface-container-high">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-headline font-extrabold text-2xl tracking-tighter text-red-900">
                KN-9421-XB
              </h2>
              <p className="text-xs font-medium text-on-surface-variant mt-1 uppercase tracking-widest">
                Asset: Scania R730 Heavy Duty
              </p>
            </div>
            <div className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full">LIVE</div>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-md">
            <div className="flex-1">
              <p className="text-[10px] font-label text-on-surface-variant uppercase">Current Speed</p>
              <p className="font-headline font-bold text-xl text-on-surface">
                82 <span className="text-xs font-normal text-on-surface-variant">km/h</span>
              </p>
            </div>
            <div className="w-px h-8 bg-surface-container-high"></div>
            <div className="flex-1">
              <p className="text-[10px] font-label text-on-surface-variant uppercase">Efficiency</p>
              <p className="font-headline font-bold text-xl text-green-700">
                94<span className="text-xs font-normal text-on-surface-variant">%</span>
              </p>
            </div>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="p-8 space-y-8">
          <div>
            <h3 className="font-headline font-bold text-sm tracking-tight mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">analytics</span>
              Telemetry Data
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-md">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Fuel Level</p>
                <div className="flex items-end gap-1">
                  <span className="text-lg font-bold font-headline">68%</span>
                  <div className="flex-1 h-1.5 bg-surface-container-high rounded-full mb-1.5 overflow-hidden">
                    <div className="h-full bg-primary w-[68%]"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface rounded-md">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Cargo Temp</p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-secondary">thermostat</span>
                  <span className="text-lg font-bold font-headline">4.2°C</span>
                </div>
              </div>
              <div className="p-4 bg-surface rounded-md">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Axle Load</p>
                <span className="text-lg font-bold font-headline">22.4 t</span>
              </div>
              <div className="p-4 bg-surface rounded-md">
                <p className="text-[10px] font-label text-on-surface-variant uppercase mb-1">Engine RPM</p>
                <span className="text-lg font-bold font-headline">1,450</span>
              </div>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div>
            <h3 className="font-headline font-bold text-sm tracking-tight mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">route</span>
              Shipment Milestones
            </h3>
            <div className="space-y-6 relative ml-2">
              {/* Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-container-high"></div>

              {/* Milestone - Completed */}
              <div className="relative flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-green-600 ring-4 ring-green-100 z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[10px]">check</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Departed Terminal Munich</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Oct 24, 08:30 AM</p>
                </div>
              </div>

              {/* Milestone - Completed */}
              <div className="relative flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-green-600 ring-4 ring-green-100 z-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[10px]">check</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Customs Clearance - Denmark</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Oct 25, 02:15 PM</p>
                </div>
              </div>

              {/* Milestone - Active */}
              <div className="relative flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">In Transit - Øresund Bridge</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Expected: In 4 mins</p>
                </div>
              </div>

              {/* Milestone - Future */}
              <div className="relative flex items-start gap-4 opacity-40">
                <div className="w-4 h-4 rounded-full bg-surface-container-high z-10"></div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Final Delivery - Stockholm</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">Scheduled: Oct 26, 09:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-headline font-bold rounded-md shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-lg">message</span>
            CONTACT OPERATOR
          </button>
        </div>
      </aside>
    </main>
  );
}

export default Tracking;
