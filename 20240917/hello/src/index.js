// (1) namespace React
import React
            // , {StrictMode} 
from 'react';

// (2) import React = require("react");
import ReactDOM from 'react-dom/client';

// (3) Import CSS file applying to this source.
import './index.css';

// (4) React Functional Component.
//      function App(): React.JSX.Element  (***)

// import App from './seq_1_App.props';
// import App from './seq_2_App.state-1';
// import App from './seq_3_App.state-2';
// import App from './seq_4_App.create-1';
// import App from './seq_5_App.create-2';
// import App from './seq_6_App.create-3';
// import App from './seq_7_App.state.monitoring-4';
// import App from './seq_8_App.update-1';
// import App from './seq_9_App.update-2';
import App from './seq_10_App.delete';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log('root:', root);   // type: ReactDOMRoot

// (method) Root.render(children: React.ReactNode): void
root.render(
    // StrictMode 하에서는, 각 컴포넌트 수행로그가 두번씩 출력됨 (***)
    // <React.StrictMode>

        // {/* Comments inside children section of a tag should be placed inside braces. (***) */}
        
        <App />

    // </React.StrictMode>
);


reportWebVitals(console.log);


