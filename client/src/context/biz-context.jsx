import React from 'react';
import useFetch from '../lib/useFetch';

const BizContext = React.createContext();

let url = `/biz/${1}`;
const reviewUrl = `/reviews/summation/${1}`;
if (window.location.pathname !== '/') {
  url = `/biz/${window.location.pathname.slice(6)}`;
}

const BizProvider = (props) => {
  const data = useFetch(url);
  const review = useFetch(reviewUrl);
  let value;
  if (data.state) {
    value = data.state;
  }

  return <BizContext.Provider value={value} {...props} />;
};
const useBiz = () => {
  const context = React.useContext(BizContext);
  if (context === undefined) {
    const bizname = undefined;
    return { bizname };
  }

  return context;
};

export { BizProvider, useBiz };
