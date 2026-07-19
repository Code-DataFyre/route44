import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  TRANSPORTATION_SERVICES,
  VALUE_ADDED_SERVICES,
} from "../../data/servicesTabs";

const TABS = [
  { key: "transportation", label: "Transportation Services", items: TRANSPORTATION_SERVICES },
  { key: "value-added", label: "Value Added Services", items: VALUE_ADDED_SERVICES },
];

function ServicesTabs({ standalone = false }) {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  const activeItems = TABS.find((tab) => tab.key === activeTab).items;
  const remainder = activeItems.length % 4;
  const fillerSpan = remainder === 0 ? 0 : 4 - remainder;
  const FILLER_SPAN_CLASSES = {
    1: "sm:col-span-1 lg:col-span-1",
    2: "sm:col-span-2 lg:col-span-2",
    3: "sm:col-span-2 lg:col-span-3",
  };

  return (
    <section className="py-24 px-6 md:px-margin-desktop max-w-container-max mx-auto bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="max-w-xl">
          <h2 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4">
            Neural Infrastructure
          </h2>
          <p className="font-headline-lg text-headline-lg text-on-surface">
            Scalable solutions designed for modern enterprise demands.
          </p>
        </div>
        {!standalone && (
          <>
            <div className="h-px flex-grow bg-outline-variant/30 hidden md:block mx-8 mb-4" />
            <Link
              to="/services"
              className="font-label-md text-label-md text-primary flex items-center gap-2 hover:translate-x-1 transition-transform"
            >
              Explore All Services{" "}
              <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </>
        )}
      </div>

      <div className="flex flex-wrap gap-3 bg-inverse-surface rounded-full p-2 mb-12 w-fit">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 rounded-full font-label-md text-label-md transition-all ${
              activeTab === tab.key
                ? "bg-primary text-on-primary"
                : "text-white/70 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {activeItems.map((service) => {
          const CardTag = service.slug ? Link : "div";
          const cardProps = service.slug
            ? { to: `/services/${service.slug}` }
            : {};

          return (
            <CardTag
              key={service.title}
              {...cardProps}
              className="group relative h-56 rounded-2xl overflow-hidden shadow-md border border-outline-variant/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

              <div className="relative z-10 h-full p-4 flex flex-col justify-end">
                <h3 className="font-headline-md text-headline-md text-sm leading-snug text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="font-body-md text-xs text-white/80 leading-snug mb-2 line-clamp-2">
                  {service.desc}
                </p>
                <span className="font-label-md text-xs text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </CardTag>
          );
        })}

        {fillerSpan > 0 && (
          <Link
            to={standalone ? "/contact" : "/services"}
            className={`group relative h-56 rounded-2xl overflow-hidden bg-primary flex flex-col items-start justify-center p-6 hover:brightness-110 transition-all duration-300 ${FILLER_SPAN_CLASSES[fillerSpan]}`}
          >
            <span className="font-headline-md text-headline-md text-white mb-2">
              {standalone ? "Need Something Bespoke?" : "Explore All Services"}
            </span>
            <span className="font-label-md text-xs text-white/80 mb-4">
              {standalone
                ? "Talk to our team about a tailored logistics solution."
                : "See the full directory of transportation and value-added solutions."}
            </span>
            <span className="font-label-md text-xs text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              {standalone ? "Request a Quote" : "View Directory"}
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}

ServicesTabs.propTypes = {
  standalone: PropTypes.bool,
};

export default ServicesTabs;
