import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from "react-router-dom";

import './style.sass';

const ProductItem = ({
  children,
  className,
  linkText,
  ...attrs
}) => {
  const classes = classNames(
    'product-item',
    className,
  );
  const linkName = linkText.toLowerCase().replace(/ /g, "_");
  return (
    <Link to={`/product/${linkName}`} className={classes} {...attrs}>
      {children}
    </Link>
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
