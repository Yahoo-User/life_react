import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';


console.log('1. React:', React);
console.log('2. ReactDOM:', ReactDOM);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.info('3. root:', root);

root.render(
    // <React.StrictMode>

        <App />

    // </React.StrictMode>
);

reportWebVitals(console.log);

