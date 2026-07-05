import PropTypes from "prop-types";

/**
 * ServiceCard Component
 * Reusable card for displaying services with icon, title, description
 * Reduces code duplication by 10+ instances
 */
function ServiceCard({
  icon,
  title,
  description,
  features = [],
  borderColor = "primary",
  href = "#",
  isLink = true,
}) {
  const borderClass = `border-${borderColor}`;
  const textColorClass = `text-${borderColor}`;
  const hoverBorder = `hover:border-${borderColor}/50`;

  const cardContent = (
    <div
      className={`glass-panel p-8 group ${hoverBorder} transition-all duration-300 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform" />

      <div
        className={`w-12 h-12 bg-${borderColor}/10 flex items-center justify-center ${textColorClass} mb-6`}
      >
        <span className="material-symbols-outlined text-[32px]">{icon}</span>
      </div>

      <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>

      <p className="text-on-surface-variant font-body-md mb-8">{description}</p>

      {features.length > 0 && (
        <ul className="space-y-3 font-label-md text-label-md text-on-surface">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span
                className={`material-symbols-outlined ${textColorClass} text-[16px]`}
              >
                check_circle
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (isLink && href !== "#") {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  borderColor: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  href: PropTypes.string,
  isLink: PropTypes.bool,
};

export default ServiceCard;
