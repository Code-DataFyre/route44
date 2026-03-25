import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 dark:bg-zinc-950/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-12 py-4 max-w-[1920px] mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src="/route44_logo.avif" alt="Route 44 Logo" className="h-12 w-auto" />
          <div className="text-2xl font-black tracking-tighter text-[#6e0609] dark:text-[#f3f3f3] font-headline">
            ROUTE 44
          </div>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
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
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface hover:text-primary transition-colors">search</button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-md font-headline font-bold text-xs uppercase tracking-widest scale-95 active:scale-90 transition-transform">
            Client Portal
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
