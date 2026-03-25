import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#f3f3f3] dark:bg-zinc-900 w-full border-t border-zinc-200 dark:border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-[1920px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/route44_logo.avif" alt="Route 44 Logo" className="h-10 w-auto" />
            <div className="text-lg font-bold text-[#1a1c1c] dark:text-[#f9f9f9] font-headline">ROUTE 44</div>
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">
            Delivering precision across global networks with industrial integrity and technological speed.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-body text-xs tracking-wide uppercase font-medium text-[#6e0609] dark:text-[#8f211d]">Services</h5>
          <nav className="flex flex-col gap-2">
            <Link className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" to="/services">Freight Elite</Link>
            <Link className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" to="/services">Precision Ops</Link>
            <Link className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" to="/services">Carrier Network</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-body text-xs tracking-wide uppercase font-medium text-[#6e0609] dark:text-[#8f211d]">Resources</h5>
          <nav className="flex flex-col gap-2">
            <a className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" href="#">Tracking Tool</a>
            <a className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" href="#">Compliance</a>
            <a className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" href="#">Sustainability</a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-body text-xs tracking-wide uppercase font-medium text-[#6e0609] dark:text-[#8f211d]">Legal</h5>
          <nav className="flex flex-col gap-2">
            <a className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" href="#">Privacy Policy</a>
            <a className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" href="#">Carrier Terms</a>
            <a className="font-body text-xs tracking-wide uppercase font-medium text-zinc-500 dark:text-zinc-400 hover:text-[#1a1c1c] hover:translate-x-1 transition-transform duration-200" href="#">Cookie Settings</a>
          </nav>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-zinc-200 dark:border-zinc-800 text-center opacity-80">
        <p className="font-body text-xs tracking-wide uppercase font-medium text-zinc-400">© {new Date().getFullYear()} Route 44 Logistics. All rights reserved. Precision in Motion.</p>
      </div>
    </footer>
  );
}

export default Footer;
