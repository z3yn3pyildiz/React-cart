import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>

    <App />
  </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// index.js ana componenti bize veriri ana komponentimiz App.js
// 
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
