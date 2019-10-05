import React, { lazy, Suspense } from 'react';
import Header from './Layout/Header';
import Loading from './Layout/Loading';
import '../stylesheets/main.scss';
import Bizinfo from './Layout/Bizinfo';
import { useBiz } from '../context/biz-context';

const Biz = () => {
  const {
    bizname,
  } = useBiz();
  return (
    <div className="home">
      <Header />
      {(bizname === undefined)
        ? (<Loading />)
        : (<Bizinfo />)}
    </div>
  );
};

export default Biz;
