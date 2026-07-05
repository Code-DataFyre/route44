import PropTypes from "prop-types";

/**
 * BadgePill Component
 * Reusable badge/pill component used across multiple pages
 * Reduces code duplication by 7+ instances
 */
function BadgePill({ text, color = "secondary", animate = true }) {
  const bgColor = `bg-${color}/10`;
  const textColor = `text-${color}`;
  const borderColor = `border-${color}/20`;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 ${bgColor} border ${borderColor} rounded-full`}
    >
      {animate && (
        <span className={`w-2 h-2 ${textColor} rounded-full animate-pulse`} />
      )}
      <span
        className={`font-label-sm text-label-sm ${textColor} uppercase tracking-widest`}
      >
        {text}
      </span>
    </div>
  );
}

BadgePill.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  animate: PropTypes.bool,
};

export default BadgePill;
