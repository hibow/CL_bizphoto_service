import React from 'react';
import Icon from '../Icon/Icon';

const Detail = () => (
  <div className="rating-details">
    <a className="chiclet-link chiclet-link-text show-tooltip" href="https://www.yelp.com">
      <span style={{ width: '14px', height: '14px' }} className="icon icon--currentColor">
        <Icon name="14x14_histogram" />
      </span>
      Detail
      <span className="tooltip-wrapper">
        <span className="tooltip">
         Rating details
        </span>
      </span>
    </a>
  </div>

);

export default Detail;
