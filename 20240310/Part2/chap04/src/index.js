import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/**
 * -------------------------------
 * 1. BrowserRouter functional component
 * -------------------------------
 *    A `<Router>` for use in web browsers.
 *    Provides the cleanest URLs.
 * 
 * -------------------------------
 * 6. HashRouter functional component
 * -------------------------------
 *    A `<Router>` for use in web browsers.
 *    Stores the location in the hash portion of the URL.
 *    So It is *NOT* sent to the server.
 * 
 */
import {BrowserRouter, HashRouter} from 'react-router-dom';

import './css/index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  // <BrowserRouter>
  <HashRouter>
    <App />
  </HashRouter>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.debug);

