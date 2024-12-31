import PropTypes from "prop-types";

const ButtonPrimary = ({ label, href, target = "_self", icon, classes = "" }) => {
  // Conditional rendering: check if href exists, return <a> or <button>
  return href ? (
    <a
      href={href}
      target={target}
      className={`btn btn-primary ${classes}`}
    >
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes}`}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string, // Optional prop, only used if the component is an <a> tag
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

const ButtonOutline = ({ label, href, target = "_self", icon, classes = "" }) => {
    // Conditional rendering: check if href exists, return <a> or <button>
    return href ? (
      <a
        href={href}
        target={target}
        className={`btn btn-outline ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    ) : (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  };
  
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string, // Optional prop, only used if the component is an <a> tag
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
  };

export { ButtonPrimary ,ButtonOutline};
