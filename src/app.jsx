import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import NoMatch from './pages/NoMatch.jsx';

import { Analytics } from '@vercel/analytics/react';

import './styles/styles.scss';
import Home from './pages/Home.jsx';


const App = () => {
  return (
    <StrictMode>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={<Home />}/>
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
      <Analytics />
    </StrictMode>
  );
};

export default App;
