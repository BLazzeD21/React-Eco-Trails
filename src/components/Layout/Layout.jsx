import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Layout = () => {
  return (
    <>
      <Header title={'Экотропы Ленобласти'}/>
      <Outlet />
    </>
  );
};

export default Layout;
