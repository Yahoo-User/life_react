import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

// import App from './seq_1_App';
// import App from './seq_3_App';
// import App from './seq_4_App';
import App from './seq_5_App';


console.clear(); console.group('index.js');

console.log('+ React:', React);
console.log('+ ReactDOM:', ReactDOM);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('+ root:', root);

root.render(
    <App />
);


console.groupEnd();

reportWebVitals(console.log);


