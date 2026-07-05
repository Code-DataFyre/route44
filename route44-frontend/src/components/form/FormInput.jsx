import PropTypes from "prop-types";

/**
 * FormInput Component
 * Reusable form input with label and validation
 * Reduces code duplication in form pages
 */
function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
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
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`px-4 py-3 rounded-lg border font-body-md bg-surface-container-lowest border-outline-variant/30 focus:outline-none focus:border-primary transition-colors ${
          error ? "border-error" : ""
        }`}
      />
      {error && <span className="font-label-sm text-error">{error}</span>}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default FormInput;
