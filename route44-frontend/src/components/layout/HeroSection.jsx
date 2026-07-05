import PropTypes from "prop-types";
import BadgePill from "../common/BadgePill";

/**
 * HeroSection Component
 * Reusable hero section used on every page
 * Reduces code duplication by 5+ instances
 */
function HeroSection({
  badge,
  badgeColor = "secondary",
  title,
  description,
  subtitle = null,
  image = null,
  actions = [],
  imagePosition = "right",
  centered = false,
}) {
  const containerClasses = centered
    ? "flex flex-col items-center text-center"
    : "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center";

  return (
    <section
      className={`pb-24 px-6 md:px-margin-desktop ${centered ? "py-24" : ""}`}
    >
      <div className={`max-w-container-max mx-auto ${containerClasses}`}>
        {/* Left/Top Content */}
        <div className={imagePosition === "right" ? "order-1" : "order-2"}>
          {badge && <BadgePill text={badge} color={badgeColor} />}

          <h1 className="font-display-lg text-[28px] sm:text-[36px] md:text-display-lg mb-8 text-on-surface leading-tight">
            {title}
          </h1>

          {description && (
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              {description}
            </p>
          )}

          {subtitle && (
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              {subtitle}
            </p>
          )}

          {actions.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {actions.map((action, idx) => (
                <a
                  key={idx}
                  href={action.href}
                  className={
                    action.className ||
                    "px-8 py-4 bg-secondary text-on-secondary font-label-md inline-flex items-center coral-glow hover:brightness-110 transition-all"
                  }
                >
                  {action.label}
                  {action.icon && (
                    <span className="material-symbols-outlined ml-2">
                      {action.icon}
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right/Bottom Image */}
        {image && (
          <div
            className={`relative h-64 md:h-[500px] rounded-xl overflow-hidden glass-panel p-4 group ${imagePosition === "right" ? "order-2" : "order-1"}`}
          >
            <img
              alt={image.alt || "Hero image"}
              className="w-full h-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-700 rounded-lg"
              src={image.src}
            />
            {image.overlay && (
              <div className="absolute bottom-8 left-8 p-6 glass-panel border-l-4 border-primary">
                <p className="font-mono-data text-mono-data text-primary uppercase mb-1">
                  {image.overlay.label}
                </p>
                <p className="font-headline-md text-headline-md">
                  {image.overlay.value}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  badge: PropTypes.string,
  badgeColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    overlay: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string,
      className: PropTypes.string,
    }),
  ),
  imagePosition: PropTypes.oneOf(["left", "right"]),
  centered: PropTypes.bool,
};

export default HeroSection;
