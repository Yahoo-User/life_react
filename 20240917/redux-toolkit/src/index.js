import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';

// import App from './seq_01_App';
import App from './seq_03_App';


console.group('- index.js -------------');

console.log('(01) React:', React);
console.log('(02) ReactDOM:', ReactDOM);
console.log('(03) createRoot:', createRoot);


const container = document.querySelector('#root');
console.log('(04) container:', container);

/**
 *  ----------------------
 *  function createRoot(container: ReactDOM.Container, options?: ReactDOM.RootOptions): ReactDOM.Root
 *  ----------------------
        type Container = Element

        interface Root {
            render(children: React.ReactNode): void;
            unmount(): void;
        }
 *  ----------------------
 *  This lets you create a root to display React components inside a browser DOM node.
 */

const root = createRoot( container );
console.log('(05) root:', root);

// Root.render(children: React.ReactNode): void
root.render( <App /> );


console.groupEnd();

reportWebVitals(console.log);


