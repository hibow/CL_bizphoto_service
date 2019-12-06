import React from 'react';
import Icon from '../Icon/Icon';

const Warbtn = () => (
  <a
    className="m-btn m-btn-primary war-button"
    href="blank"
  >
    <span
      style={{ width: '24px', height: '24px' }}
      className="icon icon--size-24 icon--currentColor u-space-r-half"
    >
      <Icon name="24x24_star" />
    </span>
    Write a Review
  </a>
);

export default Warbtn;
