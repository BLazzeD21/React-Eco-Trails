import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Loading from '../Loading/Loading.jsx';

const Layout = () => {
  return (
    <>
      <Header title={'Экотропы Ленобласти'}/>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
