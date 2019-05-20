import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.sass";

const Button = ({
  value,
  type,
  disabled,
  className,
  ...attrs
}) => {
  const classes = classNames(
    "btn",
    className,
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info }
  );
  return (
    <button className={classes} value={value} disabled={disabled}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  className: "",
  value: null,
  disabled: false,
  type: 'button'
};

export default Button;
