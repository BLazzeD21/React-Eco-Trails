import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
import Layout from './components/Layout/Layout.jsx';
import NoMatch from './pages/NoMatch.jsx';

import './styles/styles.scss';


const App = () => {
  return (
    <StrictMode>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={<Main />}/>
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </StrictMode>
  );
};

export default App;
