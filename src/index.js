import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import App from './app.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
      <BrowserRouter>
        <App />
        <Analytics />
      </BrowserRouter>
    </StrictMode>,
);
