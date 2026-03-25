import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 dark:bg-zinc-950/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-4 max-w-[1920px] mx-auto">
        <Link to="/" className="flex items-center gap-2 md:gap-3" onClick={closeMobileMenu}>
          <img src="/route44_logo.avif" alt="Route 44 Logo" className="h-10 md:h-12 w-auto" />
          <div className="text-xl md:text-2xl font-black tracking-tighter text-[#6e0609] dark:text-[#f3f3f3] font-headline">
            ROUTE 44
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden material-symbols-outlined text-3xl text-on-surface hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? 'close' : 'menu'}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          <Link 
            className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${
              isActive('/') 
                ? 'text-[#6e0609] dark:text-[#f3f3f3] border-b-2 border-[#6e0609] pb-1' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-[#6e0609]'
            }`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${
              isActive('/analytics') 
                ? 'text-[#6e0609] dark:text-[#f3f3f3] border-b-2 border-[#6e0609] pb-1' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-[#6e0609]'
            }`} 
            to="/analytics"
          >
            Analytics
          </Link>
          <Link 
            className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${
              isActive('/tracking') 
                ? 'text-[#6e0609] dark:text-[#f3f3f3] border-b-2 border-[#6e0609] pb-1' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-[#6e0609]'
            }`} 
            to="/tracking"
          >
            Tracking
          </Link>
          <Link 
            className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${
              isActive('/services') 
                ? 'text-[#6e0609] dark:text-[#f3f3f3] border-b-2 border-[#6e0609] pb-1' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-[#6e0609]'
            }`} 
            to="/services"
          >
            Services
          </Link>
          <Link 
            className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${
              isActive('/about') 
                ? 'text-[#6e0609] dark:text-[#f3f3f3] border-b-2 border-[#6e0609] pb-1' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-[#6e0609]'
            }`} 
            to="/about"
          >
            About Us
          </Link>
          <Link 
            className={`font-headline font-bold tracking-tight uppercase text-sm transition-colors duration-300 ${
              isActive('/contact') 
                ? 'text-[#6e0609] dark:text-[#f3f3f3] border-b-2 border-[#6e0609] pb-1' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-[#6e0609]'
            }`} 
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">search</button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-4 lg:px-6 py-2.5 rounded-md font-headline font-bold text-xs uppercase tracking-widest scale-95 active:scale-90 transition-transform">
            Client Portal
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-6 space-y-4">
          <Link 
            className={`block font-headline font-bold tracking-tight uppercase text-sm py-3 px-4 rounded-md transition-colors ${
              isActive('/') 
                ? 'bg-primary text-white' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`} 
            to="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            className={`block font-headline font-bold tracking-tight uppercase text-sm py-3 px-4 rounded-md transition-colors ${
              isActive('/analytics') 
                ? 'bg-primary text-white' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`} 
            to="/analytics"
            onClick={closeMobileMenu}
          >
            Analytics
          </Link>
          <Link 
            className={`block font-headline font-bold tracking-tight uppercase text-sm py-3 px-4 rounded-md transition-colors ${
              isActive('/tracking') 
                ? 'bg-primary text-white' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`} 
            to="/tracking"
            onClick={closeMobileMenu}
          >
            Tracking
          </Link>
          <Link 
            className={`block font-headline font-bold tracking-tight uppercase text-sm py-3 px-4 rounded-md transition-colors ${
              isActive('/services') 
                ? 'bg-primary text-white' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`} 
            to="/services"
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link 
            className={`block font-headline font-bold tracking-tight uppercase text-sm py-3 px-4 rounded-md transition-colors ${
              isActive('/about') 
                ? 'bg-primary text-white' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`} 
            to="/about"
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          <Link 
            className={`block font-headline font-bold tracking-tight uppercase text-sm py-3 px-4 rounded-md transition-colors ${
              isActive('/contact') 
                ? 'bg-primary text-white' 
                : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`} 
            to="/contact"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-md font-headline font-bold text-xs uppercase tracking-widest">
              Client Portal
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
