import React from 'react';
import useFetch from '../lib/useFetch';

const MediaContext = React.createContext();

let url = `/biz_photos/${1}/${1}`;
if (window.location.pathname !== '/') {
  url = `/biz_photos/${window.location.pathname.slice(6)}${1}`;
}

const MediaProvider = (props) => {
  const data = useFetch(url);
  let value;
  if (data.state) {
    value = data.state;
  }

  return <MediaContext.Provider value={value} {...props} />;
};
const useMedia = () => {
  const context = React.useContext(MediaContext);
  const params = { uIds: [] };
  if (context === undefined) {
    return [
      {
        imgUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/J3kWrFK9vE5oBgREBJ1YQg/ls.jpg',
        text: 'test123',
      },
      {
        imgUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/L38qQjyzPvt53aJ5sTj4sg/ls.jpg',
        text: 'test 123123123123',
      },
      {
        imgUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/q2E4rONdikCPmCDCoJP-gw/ls.jpg',
        text: 'test 12312312312ddddd3 wihfa;lsjf weirhoishfl scccccccccgggggdf',
      },
    ];
  }
  if (context.length === 2) {
    context[1].forEach((uId) => {
      params.uIds.push(uId);
    });
    return [context[0], params];
  }
  return context;
};

export { MediaProvider, useMedia };
