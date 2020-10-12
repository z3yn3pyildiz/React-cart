import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// index.js ana componenti bize veriri ana komponentimiz App.js
// 
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
