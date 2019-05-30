import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.sass";

const Input = ({ id, className, value, label, error, checkbox, defaultChecked, placeholder, getInputValue, ...attrs }) => {
  console.log('jjj:', value)
  const [inputValue, setInputValue] = useState(value || '');
  const updateInputValue = (e) => {
    getInputValue(e.target.value);
    return setInputValue(e.target.value);
  }
  const classes = classNames("input", className, { error });
  const isCheckClass = classNames("check__box", (defaultChecked) ? 'checked' : '');
  const inputWrapper = classNames("inputWrapper", (attrs.type === 'checkbox') ? 'inputWrapper__checkbox' : null);
  return (
    <div className={inputWrapper}>
      <div className="labelsWrapper">
        {label && (
          <label className="inputLabel" htmlFor={id}>
            {label}
          </label>
        )}
        {attrs.required && <span className="inputRequired">Required</span>}
      </div>
      <input
        name={id}
        id={id}
        value={inputValue}
        placeholder={placeholder}
        className={classes}
        onChange={updateInputValue}
        {...attrs}
      />
      {checkbox && <span className={isCheckClass} />}
      {error && <span className="inputError">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string
};

Input.defaultProps = {
  className: "",
  label: "",
  error: "",
  value: "",
  placeholder: ''
};

export default Input;
