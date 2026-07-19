import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../data/categories";

const AUTOPLAY_DELAY = 5000;

function CategoriesCarousel() {
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
    <section className="py-16 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
        <div className="max-w-xl mb-8">
          <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-3">
            Categories
          </h2>
          <p className="font-headline-lg text-headline-lg text-on-surface">
            Scalable solutions designed for modern enterprise demands.
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-2"
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/categories/${cat.slug}`}
              data-card
              className="group snap-start flex-none w-[82%] sm:w-[48%] md:w-[33%] lg:w-[calc(20%-10px)] rounded-xl overflow-hidden bg-surface shadow-sm border border-outline-variant/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden rounded-t-xl">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <span className="block w-6 h-[3px] bg-secondary rounded-full mb-2" />
                <h3 className="font-headline-md text-[14px] leading-snug text-on-surface mb-1.5 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </Link>
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
              aria-label="Previous category"
              className="w-8 h-8 rounded-[9999px] border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">
                chevron_left
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleArrow(1)}
              aria-label="Next category"
              className="w-8 h-8 rounded-[9999px] border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesCarousel;
