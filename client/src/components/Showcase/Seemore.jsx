import React from 'react';
import Icon from '../Icon/Icon';

const Seemore = ({ count }) => (
  <a className="see-more u-pull-right" href="blank">
    <span
      style={{ width: '18px', height: '18px' }}
      className="icon u-space-r-half"
    >
      <Icon name="18x18_grid" />
    </span>
    See all
    {' '}
    {count}
    {' '}
photos
  </a>
);

export default Seemore;
