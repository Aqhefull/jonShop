import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ProductItem = ({
  children,
  className,
  id,
  ...attrs
}) => {
  const classes = classNames(
    'product-item',
    className,
  );
  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
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
