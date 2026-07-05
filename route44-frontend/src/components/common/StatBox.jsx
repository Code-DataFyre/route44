import PropTypes from "prop-types";

/**
 * StatBox Component
 * Reusable component for displaying statistics with label and value
 * Reduces code duplication by 6+ instances
 */
function StatBox({ label, value, color = "primary", className = "" }) {
  const textColor = `text-${color}`;

  return (
    <div
      className={`px-4 py-3 bg-surface-container-highest rounded-lg flex flex-col ${className}`}
    >
      <span className={`font-label-md ${textColor} mb-2`}>{label}</span>
      <span className="font-headline-md text-headline-md text-on-surface">
        {value}
      </span>
    </div>
  );
}

StatBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  className: PropTypes.string,
};

export default StatBox;
