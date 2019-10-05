import React from 'react';

const Map = () => (
  <div className="mapbox-map">
    <a className="biz-map-directions" href="/">
      <img
        alt="Map"
        height="135"
        src="https://maps.googleapis.com/maps/api/staticmap?scale=2&center=29.734235%2C-95.393968&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C29.734235%2C-95.393968&client=gme-yelp&sensor=false&size=286x135&signature=_oPbhWX99eZJapBFojKAmjCsn34="
        width="286"
      />
    </a>
  </div>
);

export default Map;
