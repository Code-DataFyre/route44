import { Link } from "react-router-dom";
import { FOOTER_LINKS, SOCIAL_MEDIA } from "../constants";

function Footer() {
  const year = new Date().getFullYear();

  // SVG Icons for social media
  const SocialIcons = {
    X: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.677-5.829 6.677H2.25l7.73-8.835L.82 2.25h6.63l4.605 6.09L17.7 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117l12.926 15.644z" />
      </svg>
    ),
    Facebook: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    Instagram: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm3.5 11.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5zm3.75-9.5c0 .621-.504 1.125-1.125 1.125S16.5 4.621 16.5 4s.504-1.125 1.125-1.125S19.25 3.379 19.25 4z" />
      </svg>
    ),
    LinkedIn: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.435-.103.25-.129.599-.129.948v5.422h-3.554s.047-8.793 0-9.714h3.554v1.375c.429-.663 1.196-1.605 2.905-1.605 2.122 0 3.714 1.383 3.714 4.357v5.587zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.959-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.959 1.715zm1.946 11.597H3.392v-9.714h3.891v9.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  };

  // Real social media URLs
  const socialLinks = [
    {
      name: "X",
      icon: SocialIcons.X,
      url: "https://x.com/route44logistics",
      label: "Follow on X",
    },
    {
      name: "Facebook",
      icon: SocialIcons.Facebook,
      url: "https://facebook.com/route44logistics",
      label: "Follow on Facebook",
    },
    {
      name: "Instagram",
      icon: SocialIcons.Instagram,
      url: "https://instagram.com/route44logistics",
      label: "Follow on Instagram",
    },
    {
      name: "LinkedIn",
      icon: SocialIcons.LinkedIn,
      url: "https://linkedin.com/company/route44",
      label: "Follow on LinkedIn",
    },
  ];

  return (
    <footer className="bg-inverse-surface text-surface border-t border-outline-variant/20 relative w-full">
      {/* Main Content */}
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-8">
        {/* Top: Logo + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 pb-8 border-b border-outline-variant/20">
          {/* Left: Brand + Social */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/route44_logo.avif"
                  alt="Route 44"
                  className="h-8 w-auto"
                />
                <span className="font-headline-md text-on-inverse-surface">
                  Route 44
                </span>
              </Link>
            </div>

            <p className="text-surface-variant font-body-sm text-body-sm mb-4 max-w-md">
              Neural Logistics for the modern enterprise. Defining precision in
              the haulage industry since 1998.
            </p>

            {/* Social Media */}
            <div>
              <p className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest mb-3">
                Connect With Us
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ name, icon, url, label }) => (
                  <a
                    key={name}
                    href={url}
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={name}
                    className="w-10 h-10 rounded-md border border-primary-fixed/30 flex items-center justify-center text-primary-fixed hover:bg-primary-fixed/10 hover:border-primary-fixed/60 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Newsletter Compact */}
          <div>
            <h4 className="font-label-md text-label-md text-primary-fixed uppercase tracking-widest mb-3">
              Stay Updated
            </h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md bg-white/10 border border-outline-variant/30 text-surface placeholder:text-surface-variant/60 text-sm focus:outline-none focus:border-primary-fixed transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary text-on-secondary font-label-sm rounded-md hover:brightness-110 transition-all text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 pb-8 border-b border-outline-variant/20">
          {/* Haulage Services */}
          <div>
            <h4 className="font-label-md text-label-md text-primary-fixed mb-3 uppercase tracking-widest text-xs">
              Services
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.HAULAGE.map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="font-body-sm text-body-sm text-surface-variant hover:text-primary-fixed transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-label-md text-label-md text-primary-fixed mb-3 uppercase tracking-widest text-xs">
              Compliance
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.COMPLIANCE.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body-sm text-body-sm text-surface-variant hover:text-primary-fixed transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-label-md text-label-md text-primary-fixed mb-3 uppercase tracking-widest text-xs">
              Legal
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.LEGAL.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body-sm text-body-sm text-surface-variant hover:text-primary-fixed transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-margin-desktop py-4 border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="font-label-sm text-label-sm text-surface-variant text-xs">
            &copy; {year} Route 44 Neural Logistics. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-fixed rounded-full" />
            <span className="font-mono-data text-mono-data text-surface-variant text-xs">
              System Status: Nominal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
