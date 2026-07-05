import PropTypes from "prop-types";

/**
 * FormSelect Component
 * Reusable form select with label and validation
 */
function FormSelect({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error = null,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="font-label-md text-label-md text-on-surface"
        >
          {label}
          {required && <span className="text-secondary ml-1">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`px-4 py-3 rounded-lg border font-body-md bg-surface-container-lowest border-outline-variant/30 focus:outline-none focus:border-primary transition-colors ${
          error ? "border-error" : ""
        }`}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="font-label-sm text-error">{error}</span>}
    </div>
  );
}

FormSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default FormSelect;
