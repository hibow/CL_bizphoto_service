import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const Slide = ({ pics, index }) => {
  const { imgUrl, text } = pics[index];
  return <Photo imgUrl={imgUrl} text={text} />;
};

Slide.propTypes = {
  index: PropTypes.number.isRequired,
  pics: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Slide;
