import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface border-t border-outline-variant/20 relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop py-16 md:py-24 max-w-container-max mx-auto">
        {/* Brand */}
        <div>
          <div className="font-headline-lg text-headline-lg font-bold text-surface-container-lowest mb-6">
            Route 44
          </div>
          <p className="text-surface-variant font-body-md text-body-md mb-8 max-w-xs">
            Neural Logistics for the modern enterprise. Defining precision in
            the haulage industry since 1998.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.route44.org"
              aria-label="Route 44 website"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-surface-variant hover:text-primary-fixed transition-all"
            >
              <span className="material-symbols-outlined">language</span>
            </a>
            <a
              href="#"
              aria-label="Share"
              className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-surface-variant hover:text-primary-fixed transition-all"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              href="#"
              aria-label="Network"
              className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-surface-variant hover:text-primary-fixed transition-all"
            >
              <span className="material-symbols-outlined">hub</span>
            </a>
          </div>
        </div>

        {/* Haulage Services */}
        <div>
          <h4 className="font-label-md text-label-md text-primary-fixed mb-6 uppercase tracking-widest">
            Haulage Services
          </h4>
          <ul className="space-y-4">
            {[
              "Contract Haulage",
              "Specialist Logistics",
              "European Distribution",
              "Ad-hoc Freight",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="font-body-md text-body-md text-surface-variant hover:text-primary-fixed hover:underline transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Compliance */}
        <div>
          <h4 className="font-label-md text-label-md text-primary-fixed mb-6 uppercase tracking-widest">
            Compliance
          </h4>
          <ul className="space-y-4">
            {[
              "RHA Conditions",
              "ISO Certifications",
              "DVSA Excellence",
              "ESG Commitments",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-body-md text-body-md text-surface-variant hover:text-primary-fixed hover:underline transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-label-md text-label-md text-primary-fixed mb-6 uppercase tracking-widest">
            Legal
          </h4>
          <ul className="space-y-4">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Settings",
              "Carrier Liability",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="font-body-md text-body-md text-surface-variant hover:text-primary-fixed hover:underline transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-margin-desktop py-6 border-t border-outline-variant/10 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm text-surface-variant">
          &copy; {year} Route 44 Neural Logistics. All Rights Reserved. RHA
          Conditions of Carriage 2024 Apply.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-fixed rounded-full" />
          <span className="font-mono-data text-mono-data text-surface-variant uppercase tracking-widest">
            System Status: Nominal
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
