import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/route44_logo.avif";

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Media Hub", to: "/media" },
    { label: "Tracking", to: "/tracking" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Trust Bar */}
      <div className="w-full h-8 flex items-center justify-center bg-secondary text-on-secondary shadow-inner z-[60] relative">
        <div className="flex items-center gap-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            RHA 2024
          </span>
          <span className="w-1 h-1 bg-on-secondary/40 rounded-full" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            ISO Certified
          </span>
          <span className="w-1 h-1 bg-on-secondary/40 rounded-full" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest">
            Qargo Tracked
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-glass-fill backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
        <div className="flex items-center justify-between px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 h-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img
              src={logoImage}
              alt="Route 44 Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-display-lg text-headline-md text-on-surface tracking-tight hidden sm:block">
              Route 44
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`font-label-md text-label-md transition-colors duration-200 ${
                  isActive(to)
                    ? "text-secondary font-bold border-b-2 border-secondary"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/tracking"
              className="px-4 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200"
            >
              Client Login
            </Link>
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-2 font-label-md text-label-md font-bold hover:brightness-110 active:scale-95 transition-all"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden material-symbols-outlined text-3xl text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "close" : "menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-low border-t border-outline-variant/20">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-label-md text-label-md py-3 px-4 transition-colors ${
                    isActive(to)
                      ? "text-secondary font-bold bg-secondary/5"
                      : "text-on-surface hover:text-primary hover:bg-surface-container"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 border-t border-outline-variant/20 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-primary text-on-primary px-6 py-3 font-label-md text-label-md font-bold text-center hover:brightness-110 transition-all"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
