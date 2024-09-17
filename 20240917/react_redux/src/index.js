import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';


// (1) Before Using React Redux
// import App from './App';

// (2) After Using React Redux
import App from './seq_2_App';


console.group('index.js');

console.log('1. React:', React);
console.log('2. ReactDOM:', ReactDOM);

const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log('3. root:', root);

root.render( <App /> );

console.groupEnd();


reportWebVitals(console.log);


