import { useEffect, useRef, useState } from "react";

const AUTOPLAY_DELAY = 4000;

const TESTIMONIALS = [
  {
    title: "Best decision",
    quote:
      "Route 44's precision is unmatched. The Qargo visibility platform has reduced our tracking inquiries by 60% while improving our delivery window accuracy.",
    name: "James Dalton",
    role: "Operations Director, GlobalTech",
    initials: "JD",
  },
  {
    title: "Game changer",
    quote:
      "Switching to Route 44's neural routing has optimized our retail shipping lanes across Europe. The real-time data integration is a game changer for our B2B partners.",
    name: "Sarah Meyer",
    role: "Supply Chain Lead, Retail-X",
    initials: "SM",
  },
  {
    title: "Seamless partnership",
    quote:
      "Onboarding was seamless and the account team genuinely understands our compliance requirements. Route 44 feels like an extension of our own operations team.",
    name: "Michael Osei",
    role: "Head of Procurement, Aero-Mfg",
    initials: "MO",
  },
  {
    title: "Zero missed windows",
    quote:
      "We moved our entire chilled distribution network to Route 44 within a quarter. Zero missed windows since go-live, and full visibility the whole way through.",
    name: "Laura Bennett",
    role: "Logistics Manager, Euro-Ship",
    initials: "LB",
  },
];

function TestimonialsCarousel() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const step = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-card]");
    if (!card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "16");
    const cardStep = card.offsetWidth + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (direction > 0 && track.scrollLeft + cardStep >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && track.scrollLeft - cardStep <= 4) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      track.scrollBy({ left: cardStep * direction, behavior: "smooth" });
    }
  };

  const restartAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => step(1), AUTOPLAY_DELAY);
  };

  useEffect(() => {
    restartAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateProgress = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      setProgress(maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0);
    };

    updateProgress();
    track.addEventListener("scroll", updateProgress, { passive: true });
    return () => track.removeEventListener("scroll", updateProgress);
  }, []);

  const handleArrow = (direction) => {
    step(direction);
    restartAutoplay();
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2"
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            data-card
            className="flex-none snap-start w-[85%] sm:w-[360px] bg-surface-container-low rounded-2xl p-6 flex flex-col"
          >
            <span className="material-symbols-outlined text-[32px] text-on-surface-variant/40 mb-4">
              person
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
              {t.title}
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-5 flex-1">
              {t.quote}
            </p>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span>By</span>
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[10px] text-white font-bold flex-none">
                {t.initials}
              </span>
              <span className="font-label-md text-label-md text-on-surface">
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-6">
        <div className="flex-1 h-1 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleArrow(-1)}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-[9999px] border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">
              chevron_left
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleArrow(1)}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-[9999px] border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
