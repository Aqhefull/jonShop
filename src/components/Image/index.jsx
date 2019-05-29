import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.sass';

const Image = ({
  src, alt, className, width, height, circle, imageClick, ...attrs
}) => {
  const classes = classNames(
    className,
    { circle },
  );

  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      {...attrs}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
  className: PropTypes.string
};

Image.defaultProps = {
  src: '',
  alt: 'image',
  circle: false,
  className: ''
};

export default Image;
