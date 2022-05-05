import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ProvideAuth } from './context/MyContext';

render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
