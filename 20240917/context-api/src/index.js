import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';


console.group('index.js');

console.log('(1) React:', React);
console.log('(2) ReactDOM:', ReactDOM);


const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log('(3) root:', root);


root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


console.groupEnd();
reportWebVitals(console.log);

