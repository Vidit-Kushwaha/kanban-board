import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ tag }) => {
  return (
    <div className='card__tag' aria-label={`Tag: ${tag}`}>
      <span className='card__tag-icon'></span>
      <div className='card__tag-text'>{tag}</div>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
