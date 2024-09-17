import React from 'react';

import { createRoot } from 'react-dom/client';

/**
 *  -----------------------
 *  Possible Exports From The `redux` package: 
 *  -----------------------
 *    (01) __DO_NOT_USE__ActionTypes
 *    (02) applyMiddleware
 *    (03) bindActionCreators
 *    (04) combineReducers
 *    (05) compose
 *    (06) createStore
 *    (07) isAction
 *    (08) isPlainObject
 *    (09) legacy_createStore
 * 
 *  -----------------------
 *  Possible Exports From The `react-redux` package: 
 *  -----------------------
 *    (01) Provider
 *    (02) ReactReduxContext
 *    (03) batch
 *    (04) connect
 *    (05) createDispatchHook
 *    (06) createSelectorHook
 *    (07) createStoreHook
 *    (08) shallowEqual
 *    (09) useDispatch
 *    (10) useSelector
 *    (11) useStore
 */
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import { store } from './app/store';


import './index.css';
import App from './App';


console.group('- index.js -------------');

console.log('(01) React:', React);
console.log('(02) createRoot:', createRoot);

/**
 * ----------------------
 *  function Provider( { store, context, children, serverState, stabilityCheck, identityFunctionCheck, }: ProviderProps ): React.JSX.Element
 * ----------------------
 */
console.log('(03) Provider:', Provider);


const container = document.querySelector('#root');
console.log('(04) container:', container);

/**
 * ----------------------
 *  function createRoot(container: ReactDOM.Container, options?: ReactDOM.RootOptions): ReactDOM.Root
 * ----------------------
        type Container = Element
        
        interface Roott {
            render(children: React.ReactNode): void;
            unmount(): void;
        }
 *  ----------------------
 *  This lets you create a root to display React components inside a browser DOM node.
 */

const root = createRoot( container );
console.log('(05) root:', root);

// Root.render(children: React.ReactNode): void
root.render(
    <Provider store={ store }>
        <App />
    </Provider>
);


console.groupEnd();

reportWebVitals(console.log);
