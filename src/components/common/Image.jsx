import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, extraStyles }) => {
  return(
    <div className={className} style={{...extraStyles}} />
  )
}

Image.propTypes = {
  className: PropTypes.string,
  extraStyles: PropTypes.object.isRequired
};

export default Image;