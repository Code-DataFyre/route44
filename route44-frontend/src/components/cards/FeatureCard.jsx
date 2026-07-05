import PropTypes from "prop-types";

/**
 * FeatureCard Component
 * Reusable component for feature cards with image and content
 * Reduces code duplication by 5+ instances
 */
function FeatureCard({
  image,
  imageAlt,
  title,
  description,
  overlay = null,
  className = "",
  imageClassName = "",
}) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 scale-95 group-hover:scale-100 transition-transform duration-500" />

      <img
        alt={imageAlt}
        className={`w-full aspect-square object-cover rounded-xl shadow-2xl border border-outline-variant/30 ${imageClassName}`}
        src={image}
      />

      {(title || description) && (
        <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 border-l-4 border-secondary">
          {title && (
            <h3 className="font-headline-md text-headline-md text-on-surface">
              {title}
            </h3>
          )}
          {description && (
            <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mt-1">
              {description}
            </p>
          )}
        </div>
      )}

      {overlay && (
        <div className="absolute {overlay.position || 'bottom-6 left-6'} glass-panel p-6 border-l-4 {overlay.borderColor || 'border-primary'}">
          <p className="font-mono-data text-mono-data text-primary uppercase mb-1">
            {overlay.label}
          </p>
          <p className="font-headline-md text-headline-md">{overlay.value}</p>
        </div>
      )}
    </div>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  overlay: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    position: PropTypes.string,
    borderColor: PropTypes.string,
  }),
  className: PropTypes.string,
  imageClassName: PropTypes.string,
};

export default FeatureCard;
