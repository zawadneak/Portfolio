import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from '~/styles/global';

import Translation from './locales/index';

require('dotenv').config();

Translation();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
