import React from 'react';
import Icon from '../Icon/Icon';

const Addon = () => (
  <div className="header-addons-wrapper clearfix">
    <div className="l-content">
      <a className="header-link" href="https://biz.yelp.com/">
        <span style={{ width: '18px', height: '18px' }} className="icon icon--currentColor u-space-r-half">
          <Icon name="18x18_suitcase" />
        </span>
      Go to 3BodyPage for Business Owners
      </a>
    </div>
  </div>
);

export default Addon;
