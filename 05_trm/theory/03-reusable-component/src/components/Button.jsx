import PropTypes from "prop-types";

function Button({
  icon,
  size = "medium",
  variant = "primary",
  fullWidth = false,
  isDisabled = false,
  onClick,
  children,
}) {
  return (
    <button
      className={`button
        ${variant}
        ${size}
        ${isDisabled && "disabled"}
        ${fullWidth && "full-width"}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

Button.propTypes = {
  // text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

// Button.defaultProps = {
//   text: "Some Text",
// };

export default Button;
