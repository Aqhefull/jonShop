import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames";

import "./style.sass";


const Select = ({open, onSelectClick}) => {

  const onSelectClickAction = () => {
    onSelectClick(open);
  };

  const selectWrap = classNames("Select", `Select-${ open }`);

  return (
    <div className={selectWrap} onClick={onSelectClickAction}>

    </div>
  )
}

Select.propTypes = {
  onSelectClick: PropTypes.func,
  open: PropTypes.bool
};

Select.defaultProps = {
  onSelectClick: () => {},
  open: false
};

export default Select