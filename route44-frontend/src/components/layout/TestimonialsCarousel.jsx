const TESTIMONIALS = [
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
  {
    quote:
      "Onboarding was seamless and the account team genuinely understands our compliance requirements. Route 44 feels like an extension of our own operations team.",
    name: "Michael Osei",
    role: "Head of Procurement, Aero-Mfg",
    initials: "MO",
  },
  {
    quote:
      "We moved our entire chilled distribution network to Route 44 within a quarter. Zero missed windows since go-live, and full visibility the whole way through.",
    name: "Laura Bennett",
    role: "Logistics Manager, Euro-Ship",
    initials: "LB",
  },
];

function TestimonialCard({ quote, name, role, initials }) {
  return (
    <div
      data-card
      className="flex-none w-[85vw] sm:w-[420px] glass-panel rounded-2xl p-8 border-l-4 border-l-primary flex flex-col"
    >
      <span className="material-symbols-outlined text-primary/30 text-[36px] mb-4">
        format_quote
      </span>
      <p className="font-body-md text-body-md text-on-surface mb-6 flex-1">
        {quote}
      </p>
      <div className="flex items-center gap-4 pt-5 border-t border-outline-variant/20">
        <div className="w-10 h-10 rounded-[9999px] bg-primary/10 flex items-center justify-center text-primary font-bold flex-none">
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
  );
}

function TestimonialsCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10" />

      <div className="flex gap-6 w-max animate-marquee">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
