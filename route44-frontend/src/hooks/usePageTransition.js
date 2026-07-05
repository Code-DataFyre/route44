import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to handle smooth page transitions
 * - Scrolls to top when route changes
 * - Applies fade-in animation to page
 */
export function usePageTransition() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Apply fade-in animation
    if (mainRef.current) {
      mainRef.current.classList.remove("page-fade-in");
      // Trigger reflow to restart animation
      void mainRef.current.offsetWidth;
      mainRef.current.classList.add("page-fade-in");
    }
  }, [location.pathname]);

  return mainRef;
}
