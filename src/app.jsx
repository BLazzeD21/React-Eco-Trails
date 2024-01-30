import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

const NoMatch = lazy(() => import('./pages/NoMatch.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Catalog = lazy(() => import('./pages/Catalog.jsx'));
const ShowPoint = lazy(() => import('./pages/ShowPoint.jsx'));
const Map = lazy(() => import('./pages/Map.jsx'));

import './styles/styles.scss';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="map" element={<Map />} />
        <Route path="/catalog/:id" element={<ShowPoint />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
