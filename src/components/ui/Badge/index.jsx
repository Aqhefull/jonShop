import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Badge = ({ value, circle, className, inline, outer, color, ...attrs }) => {
  const text = (typeof value === "string" || value instanceof String) && value !== '';

  const classes = classNames(
    "badge",
    { circle },
    className,
    { inline },
    { outer },
    { text },
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info },
    { color }
  );
  let colorBadge;

  if(color) {
    colorBadge =  {backgroundColor: color}
  }
  return <i className={classes} style={colorBadge}>{value}</i>;
};

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  circle: PropTypes.bool,
  className: PropTypes.string,
  inline: PropTypes.bool,
  outer: PropTypes.bool,
  color: PropTypes.string
};

Badge.defaultProps = {
  circle: false,
  className: "",
  inline: false,
  outer: false,
  color: ''
};

export default Badge;
