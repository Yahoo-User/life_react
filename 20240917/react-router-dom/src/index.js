import React from 'react';
import ReactDOM from 'react-dom/client';

// A <Router> for use in web browsers.
// Stores the location in the hash portion of the URL so it is not sent to the server.
import { HashRouter } from 'react-router-dom';

import './index.css';

// import App from './seq_2_App.anchor';
// import App from './seq_3_App.Link';
// import App from './seq_5_App.NavLink';
// import App from './seq_7_App.NavLink';
import App from './seq_9_App';


console.clear(); console.debug('- seq_4_index.HashRouter.js -----');


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

