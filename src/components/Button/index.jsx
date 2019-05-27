import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.sass";
import Image from "../Image";

const Button = ({
  value,
  type,
  disabled,
  className,
  buttonClick,
  color,
  image,
  ...attrs
}) => {
  const classes = classNames(
    "btn",
    className,
    `btn-${color}`,
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info }
  );
  return (
    <button className={classes} value={value} disabled={disabled} onClick={buttonClick}>
      <span>{value}</span> {
        image && <Image src={image} />
      }
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  buttonClick: PropTypes.func,
  image: PropTypes.node
};

Button.defaultProps = {
  image: {},
  className: "",
  value: null,
  disabled: false,
  type: "button",
  buttonClick: () => {}
};

export default Button;
