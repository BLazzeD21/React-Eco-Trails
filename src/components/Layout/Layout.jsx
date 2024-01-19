import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Header title={'Экотропы Ленобласти'}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
