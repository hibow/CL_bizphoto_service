import React from 'react';
import Map from './Map';
import Maptext from './Maptext';
import { useBiz } from '../../context/biz-context';

const Mapbox = () => {
  const {
    location, phone, url,
  } = useBiz();
  const {
    address1, address2, city, state, zipcode, neighborhood, latitude, longitude,
  } = location;
  return (
    <div className="mapbox">
      <Map latitude={latitude} longitude={longitude} />
      <Maptext
        add1={address1}
        add2={address2}
        city={city}
        state={state}
        zip={zipcode}
        area={neighborhood}
        phone={phone}
        url={url}
      />
    </div>
  );
};
export default Mapbox;
