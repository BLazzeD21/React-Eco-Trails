import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
const NoMatch = lazy(() => import('./pages/NoMatch.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));

import './styles/styles.scss';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>
        <Route index element={<Home />}/>
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
