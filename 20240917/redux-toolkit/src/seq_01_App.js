/**
 *  -----------------------
 *  Possible Exports From The `redux` package: 
 *  -----------------------
 *    (01) __DO_NOT_USE__ActionTypes
 *    (02) applyMiddleware
 *    (03) bindActionCreators
 *    (04) combineReducers
 *    (05) compose
 *    (06) createStore                        <--- ***
 *    (07) isAction
 *    (08) isPlainObject
 *    (09) legacy_createStore           <--- ***
 */

import { 

    /**
     *  -----------------------
     *  createStore
     *  -----------------------
     *  @deprecated
     * 
     *  **We recommend using the *configureStore method of the *@reduxjs/toolkit package, which replaces `createStore`.
     *  *Redux Toolkit (RTK) is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
     *  *configureStore from Redux Toolkit is an improved version of `createStore` that simplifies setup and helps avoid common bugs.
     *
     *  You should *Not be using the `redux` core package by itself today, except for learning purposes.
     *  The `createStore` method from the core `redux` package will *Not be removed, 
     *  but we encourage all users to migrate to using Redux Toolkit for all Redux code.
     *
     *  If you want to use `createStore` without this visual deprecation warning, use the *legacy_createStore import instead:
     *
     *    Ex: import { legacy_createStore as createStore} from 'redux'
     *
     */
    // createStore,   // @deprecated

    legacy_createStore as createStore   // @alternative

} from 'redux';


/**
 *  -----------------------
 *  Possible Exports From The `react-redux` package: 
 *  -----------------------
 *    (01) Provider                             <--- ***
 *    (02) ReactReduxContext
 *    (03) batch
 *    (04) connect
 *    (05) createDispatchHook
 *    (06) createSelectorHook
 *    (07) createStoreHook
 *    (08) shallowEqual
 *    (09) useDispatch                         <--- ***
 *    (10) useSelector                          <--- ***
 *    (11) useStore
 */

import { 
    
  /**
   *  -----------------------
   *  function Provider<A, S>({ store, context, children, serverState, stabilityCheck, identityFunctionCheck, }): React.JSX.Element
   *  -----------------------
   */ 

    Provider,

    /**
     *  -----------------------
     *  function useSelector(selector, equalityFnOrOptions): UseSelector<unknown>
     *  -----------------------
     *  A hook to access the redux store's *state.
     *  This hook takes a *selector function as an argument.
     *  The *selector is called with the store *state.
     * 
     *  This hook takes an optional *equality comparison function as the *second parameter 
     *  that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.
     * 
     *    *@param selector — the selector function
     *    @param equalityFn — the function that will be used to determine equality
     * 
     *    *@returns — the *selected state
     * 
     *    @example

                import React from 'react'

                *import { useSelector } from 'react-redux'

                export const CounterComponent = () => {
                    *const counter = useSelector( state => state.counter );

                    return <div>{ *counter }</div>
                }

     */

    useSelector

} from 'react-redux';


import logo from './logo.svg';

// import './App.css';                            // 1st. method
import styles from './App.css';             // 2nd. method

import { Counter } from './components';


console.group('- seq_01_App.js -------------');

console.log('(01) logo:', logo);
console.log('(02) styles:', styles);
console.log('(03) createStore:', createStore);


/**
 *  -----------------------
 *  type Reducer<S, A, PreloadedState = S> = (state: S | PreloadedState | undefined, action: A) => S;
 *  -----------------------
 *  A *reducer* is a function that (1) accepts an accumulation and a value and (2) returns a new accumulation.  (***)
 *  They are used to reduce a collection of values down to a *single value. (***)
 *
 *  Reducers are *Not unique to Redux — they are a fundamental concept in functional programming.
 *  Even most non-functional languages, like JavaScript, have a built-in API for reducing.
 *  In JavaScript, it's *Array.prototype.reduce().
 *
 *  In *Redux, (1) the accumulated value is the *state object, and (2) the values being accumulated are *actions. (***)
 *  Reducers calculate a new state given the previous state and an action.
 * 
 *  They must be *pure functions*—functions that return the exact same output for given inputs. (***)
 *  They should also be free of side-effects.
 *  This is what enables exciting features like hot reloading and time travel.
 *
 *  Reducers are the *most important concept in *Redux.
 *
 *  *Do not put API calls into reducers.*
 *
 *    @template S The type of state consumed and produced by this reducer.
 *    @template A The type of actions the reducer can potentially respond to.
 *    @template PreloadedState The type of state consumed by this reducer the first time it's called.
 */

const reducer = ( state, action ) => {
    console.debug('reducer(state:', state, ', action:', action, ') invoked.');

    if( action.type === 'UP' ) {
        // 1st. method: Update countValue state with *only one statement.

         // Deep Copy of Old State & Update it's countValue State & Return New State.
        return { ...state, countValue: state.countValue + action.step };

        // 2nd. method: Update countValue state with step-by-step statements.
        // const newState = { ...state };                                                   // Deep Copy of Old State.
        // newState.countValue += action.step;                                      // Update countValue State.
        // return newState;                                                                    // Return New State.
    }

    return state;
};

console.log('(04) reducer:', reducer);


const preloadedState = { countValue: 0 };
console.log('(05) preloadedState:', preloadedState);


/**
 *  -----------------------
 *  function legacy_createStore(reducer, preloadedState, enhancer): Store
 *  -----------------------
 *  Creates a Redux store that holds the state tree.
 * 
 *  We recommend using *configureStore from the *@reduxjs/toolkit package, 
 *  which replaces createStore: https://redux.js.org/introduction/why-rtk-is-redux-today  (***)
 * 
 *  The only way to change the data in the store is to call *dispatch() on it.  (***)
 * 
 *  There should only be a single store in your app.  (***)
 * 
 *  To specify how different parts of the state tree respond to actions,
 *  you may combine several reducers into a single reducer function by using *combineReducers.  (***)
 * 
 *  @param reducer - A function that returns the next state tree, given the *current state tree and the *action to handle.
 * 
 *  @param preloadedState - The *initial state.
 *    You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session.
 *    If you use *combineReducers to produce the *root reducer function, this must be an object with the same shape as *combineReducers keys.
 * 
 *  @param enhancer - The store enhancer.
 *    You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.
 *    The only store enhancer that ships with Redux is *applyMiddleware().
 * 
 *  @returns - A Redux store that lets you (1) read the state, (2) dispatch actions and (3) subscribe to changes.
 */

// const reduxStore = createStore( reducer );                              // OK, 1st. method with *Only reducer.
const reduxStore = createStore( reducer, preloadedState );    // OK, 2nd. method with reducer and preloadedState(= initialState)

console.log('(06) reduxStore:', reduxStore);
console.log('(07) Provider:', Provider);
console.log('(08) useSelector:', useSelector);

console.groupEnd();


// *Important: void 0 === undefined (true). (***)

function App() {
    console.group('App() invoked.'); console.groupEnd();

    return (
        <Provider store={ reduxStore }>
            <div className="App">
                <Counter />
            </div>
        </Provider>
    );
}


export default App;

