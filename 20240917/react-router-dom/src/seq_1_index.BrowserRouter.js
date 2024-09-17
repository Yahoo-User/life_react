import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// A <Router> for use in web browsers. Provides the cleanest URLs.
import { BrowserRouter } from 'react-router-dom';

import './index.css';

// import App from './seq_2_App.anchor';
import App from './seq_3_App.Link';


console.clear(); console.debug('- seq_1_index.BrowserRouter.js -----');

console.info('\t+ React:', React);
console.info('\t+ ReactDOM:', ReactDOM);


const root = ReactDOM.createRoot(document.querySelector('#root'));
console.info("\t+ root:", root);  // root : ReactDOMRoot


// (method) Root.render(children: React.ReactNode): void
root.render(
    <BrowserRouter>

        <App />
        
    </BrowserRouter>
);


reportWebVitals(console.log);


