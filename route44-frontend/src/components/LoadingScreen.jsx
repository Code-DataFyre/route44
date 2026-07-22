import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TOTAL_VISIBLE_MS = 4200;
const FADE_OUT_MS = 500;

function LoadingOverlay() {
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadingOut(true), TOTAL_VISIBLE_MS);
    const hideTimer = setTimeout(
      () => setHidden(true),
      TOTAL_VISIBLE_MS + FADE_OUT_MS,
    );
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface overflow-hidden transition-opacity duration-500 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={fadingOut}
    >
      <div className="absolute inset-0 neural-grid opacity-40" />

      {/* Glow pulse behind logo */}
      <div className="relative flex items-center justify-center">
        <span className="loader-glow-ring absolute w-28 h-28 rounded-full bg-secondary/20 blur-xl" />
        <img
          src="/route44_logo.avif"
          alt="Route 44"
          className="loader-logo-in relative w-20 h-20 object-contain"
        />
      </div>

      {/* Wordmark */}
      <div className="loader-text-in mt-6 text-center">
        <p className="font-display-lg text-headline-lg text-on-surface tracking-tight">
          ROUTE <span className="text-secondary">44</span>
        </p>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.3em] mt-2">
          Precision Logistics
        </p>
      </div>

      {/* Road + truck */}
      <div className="loader-road-in relative w-56 h-8 mt-8 overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-outline-variant/40" />
        <div className="loader-road-dashes absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px]" />
        <span className="loader-truck-drive absolute top-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-[22px]">
          local_shipping
        </span>
      </div>
    </div>
  );
}

function LoadingScreen() {
  const location = useLocation();

  // Remount the overlay on every navigation so its animations replay
  return <LoadingOverlay key={location.key} />;
}

export default LoadingScreen;
