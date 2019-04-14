import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.sass';

const ProductItem = ({
  children,
  className,
  ...attrs
}) => {
  const classes = classNames(
    'product-item',
    className,
  );
  return (
    <li className={classes} {...attrs}>
      {children}
    </li>
  );
};

ProductItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

ProductItem.defaultProps = {
  children: null,
  className: ''
};

export default ProductItem;
