import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({ id, className, value, label, error, checkbox, defaultChecked, placeholder, getInputValue, inputPress, getInputTarget, disableValid, ...attrs }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [touchedStatus, setTouchedStatus] = useState(false);
  const [dirty, setDirtyStatus] = useState("");
  const updateInputValue = (e) => {
    if(attrs.pattern) {
      const regexp = new RegExp(attrs.pattern, 'g');
      if (e.target.value !== '' && !regexp.test(e.target.value))
        return false;
    }
    if(!disableValid) setDirtyStatus("dirty")
    getInputValue(e.target.value);
    getInputTarget(e.target);
    return setInputValue(e.target.value);
  }
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      inputPress()
    }
  }
  const handleFocusBlur = (e) => {
    setTouchedStatus(!touchedStatus);
  }

  const classes = classNames(
    "input",
    className,
    (!touchedStatus && dirty) ? { error } : null,
    (dirty && !error) ? 'success' : null,
    touchedStatus ? "touched" : null,
    { dirty }
  );
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
        onKeyPress={handleKeyPress}
        onFocus={!disableValid ? handleFocusBlur : null}
        onBlur={!disableValid ? handleFocusBlur : null}
        {...attrs}
      />
      {checkbox && <span className={isCheckClass} />}
      {(!touchedStatus && dirty && error) ? <span className="inputError">{error}</span> : null}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableValid: PropTypes.bool,
  placeholder: PropTypes.string,
  getInputValue: PropTypes.func,
  getInputTarget: PropTypes.func
};

Input.defaultProps = {
  className: "",
  label: "",
  error: "",
  value: "",
  placeholder: "",
  disableValid: false,
  getInputValue: () => {},
  getInputTarget: () => {},
  
};

export default Input;
