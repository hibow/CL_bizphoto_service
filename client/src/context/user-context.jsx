import React from 'react';
import useFetch from '../lib/useFetch';
import { useMedia } from './media-context';

const UserContext = React.createContext();
const UserProvider = (props) => {
  const result = useMedia();
  const url = '/users/';
  let params;
  if (result.length === 2) {
    params = result[1];
  }
  const data = useFetch(url, params);
  let value;
  if (data.state) {
    value = data.state;
  }

  return <UserContext.Provider value={value} {...props} />;
};
const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    return [
      {
        username: 'hibow',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
      {
        username: 'Nick',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
      {
        username: 'John',
        photo: 'https://s3-media4.fl.yelpcdn.com/photo/Va09KqWDtRiYbA0XWTU48g/30s.jpg',
      },
    ];
  }
  return context;
};

export { UserProvider, useUser };
