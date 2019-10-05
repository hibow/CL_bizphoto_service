import React from 'react';
import Icon from '../Icon/Icon';

const Claim = () => (
  <div className="u-nowrap claim-status_teaser claim-status-hover-content">
    <div className="claim-padding" />
    <span
      style={{ width: '18px', height: '18px' }}
      className="icon icon--blue-dark claim-status_icon u-space-r1"
    >
      <Icon name="18x18_checkmark_badged" />
    </span>
    {'  Claimed'}
    <div className="top">
      <p className="u-space-b0">
      This business has been claimed by the owner or a representative.
        <a href="https://www.yelp-support.com/article/000032392?l=en_US" target="_blank" rel="noreferrer noopener">
      learn more
        </a>
      </p>
      <i />
    </div>
  </div>
);

export default Claim;
