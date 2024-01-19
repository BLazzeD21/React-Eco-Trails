import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
import Layout from './components/Layout/Layout.jsx';

import './styles/styles.scss';


const App = () => {
  return (
    <StrictMode>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={<Main />}/>
        </Route>
      </Routes>
    </StrictMode>
  );
};

export default App;
