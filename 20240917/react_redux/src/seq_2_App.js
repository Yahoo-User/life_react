/**
 * =======================================
 * (alias) function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void
 * =======================================
 *    (1) type EffectCallback      = () => void  | *Destructor;
 *    (2) type *Destructor          = () => void | { [UNDEFINED_VOID_ONLY]: never };
 *    (3) type DependencyList   = readonly unknown[];
 * =======================================
 *  Accepts a function that contains imperative, possibly effectful code.
 *  A React Hook that lets you synchronize a component with an external system.
 * 
 *      @param effect  — Imperative function that can return a *cleanup function.
 *      @param deps   — If present, effect will only activate if the values in the list change.
 */

import { useEffect } from 'react';

/**
 * ==================================
 *  (1) createStore
 * ==================================
 *  @deprecated
 * 
 *  We recommend using the `*configureStore` method of the `*@reduxjs/toolkit` package, which replaces `createStore`.
 *  Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
 * 
 *  For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today
 * 
 *  `*configureStore` from `*Redux Toolkit` is an improved version of `createStore` that simplifies setup and helps avoid common bugs.
 *  You should not be using the `redux core package` by itself today, except for learning purposes.
 * 
 *  The `createStore` method from the `core redux package` will not be removed, 
 *  but we encourage all users to migrate to using `Redux Toolkit` for all Redux code.
 * 
 *  If you want to use `createStore` without this visual deprecation warning, use the `*legacy_createStore` import instead:
 * 
 *      import { legacy_createStore as createStore} from 'redux'
 * 
 * 
 * ==================================
 *  (2) legacy_createStore(reducer, enhancer?)
 * ==================================
 *  Creates a Redux store that holds the state tree.
 * 
 *  We recommend using `*configureStore` from the `*@reduxjs/toolkit` package, which replaces `createStore`: https://redux.js.org/introduction/why-rtk-is-redux-today
 * 
 *  The only way to change the data in the store is to call `*dispatch()` on it.
 *  There should only be a single store in your app.
 *  To specify how different parts of the state tree respond to actions, you may combine several reducers into a single reducer function by using `*combineReducers`.
 * 
 *      @param reducer - A function that returns the next state tree, given the current state tree and the action to handle.
 *      @param preloadedState - The initial state. 
 *                  You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. 
 *                  If you use combineReducers to produce the root reducer function, this must be an object with the same shape as combineReducers keys.
 *      @param enhancer - The store enhancer.
 *                  You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. 
 *                  The only store enhancer that ships with Redux is applyMiddleware().
 * 
 *      @returns - A Redux store that lets you read the state, dispatch actions and subscribe to changes.
 * ==================================
 */

// import { createStore } from 'redux';                                     // 1st. method - @deprecated
import { legacy_createStore as createStore } from 'redux';    // 2nd. method - without RTK

/**
 * ==================================
 *  useSelector
 * ==================================
 *  A hook to access the redux store's state.
 *  This hook takes a selector function as an argument.
 *  The selector is called with the store state.
 * 
 *  This hook takes an optional equality comparison function as the second parameter that allows you to customize
 *  the way the selected state is compared to determine whether the component needs to be re-rendered.
 * 
 *      @param selector — the selector function
 *      @param equalityFn — the function that will be used to determine equality
 *      @returns — the selected state
 * 
 *      @example

            import React from 'react'
            import { useSelector } from 'react-redux'

            export const CounterComponent = () => {
                const counter = useSelector(state => state.counter);

                return <div>{counter}</div>
            }
 */

import { Provider, useSelector, useDispatch, connect } from 'react-redux';

import './App.css';
import { Left1, Right1 } from './components';


// Task2: Global State Management Using `Redux & React Redux`.    (***)

console.group('App.js');


/**
 * ==================================
 *  How to use React Redux To Share Global State & Update Global State ? (***)
 * ==================================
 * 
 *  Step1. Install the following packages:
 * 
 *          > npm i -S redux, react-redux
 *          > npm i -D @types/redux, @types/react-redux
 * 
 *  Step2. Define the `reducer` function with oldstate, action parameters:
 * 
 *          function reducer(oldState, action) {
 *              // 2-1. if oldState is *Not defined, return initial(=default) state.
 *              // 2-2. Copy an oldState deeply with Spread operator(...)
 *              // 2-3. Update newly deeply copied state.
 *              // 2-4. Return newly updated state.
 *          }
 * 
 *  Step3. Create a global store with legacy_createStore() function & reducer function of Step2 in the `redux` package.
 * 
 *          import { legacy_createStore as createStore } from 'redux';
 *          const store = createStore(reducer);
 * 
 *  Step4. Wrap the child components to provide global store created in Step3 
 *             with `Provider` component of the `react-redux' in the user-defined React component.
 * 
 *          import { Provider } from 'react-redux';
 * 
 *          function UserDefinedComponent(props) {
 *                 ...
 *                 <Provider store = { store }> 
 *                      Child Components To Be Provided Global Store.
 *                 </Provider>
 *                 ...
 *          }
 * 
 *  Step5. Create a dispatch with `useDispatch()` hook of `react-redux` to dispatch state update along with provided action.
 * 
 *          const dispatch = useDispatch();     // f dispatch(action): void
 *          
 *  Step6. Dispatch state update by `dispatch` of Step5 with defined `action` to the `reducer` defined in Step2.
 * 
 *          const action = { type: 'PLUS' };
 *          dispatch(action);                           // Dispatch state update to the reducer -> Updated state along with action type.
 * 
 *  Step7. Update state of Step6 -> Dirty state -> Re-render the component -> Clean state.
 * 
 */


/* Important: The State Object In The React Redux Store Must Be Iterable (like List, Set, Map, Array) */ 
const reducer = (oldState, action) => {
    console.debug('reducer(oldState:', oldState, ', action:', action, ') invoked.');

    /* Step1. If initial state *Not defined, returns initial(= default) state. */
    if(oldState === undefined) return { number: 1, };   // Default (Initial) State Object => Array

    /* Step2. Copy current state deeply with Spread operator (...) to keep current state *immutable. */
    const newState = { ...oldState };   // Deep Copy of an JS Object with Symbol({ }) or an JS Collection(Array/List/Set/Map) with Symbol ([ ]).

    /* Step3. Update newly deeply copied state. */
    if(action.type === 'PLUS') newState.number++;

    /* Step4. Return newly updated state. */
    return newState;
};

const store = createStore(reducer);

/**
 * ==================================
 *  The methods of Store<void, any, unknown>
 * ==================================
 *  (1) @@observable: f observable()
 *  (2) *dispatch: f dispatch(action)
 *  (3) *getState: f getState()
 *  (4) replaceReducer: f replaceReducer(nextReducer)
 *  (5) *subscribe: f subscribe(listener)
 * ==================================
 */
console.log('(1) store:', store);
console.log('(2) store.getState():', store.getState());

console.groupEnd();


const App = props => {
    console.debug('App(', props, ') invoked.');
    

    /* React Component Lifecycle Callback With `useEffect` React Hook. */
    useEffect( () => { console.info('\t+ App::componentMounted.'); return () => console.info('\t- App::componentUnmounted.'); } );
    // useEffect( () => { console.info('\t+ App::number(', number, ') state is changed.'); return () => console.info('\t- App::number(', number, ') state will be changed.'); }, [ number ]);
    
    
    // No return React.JSX.Element - OK.    (***)
    return <>
        <div id='container'>
            <h2>When Using React Redux</h2>

            <h3>Root</h3>

            <div id='grid'>

                <Provider store={ store }>
                    <Left1 />

                    <Right1 />
                </Provider>

            </div>
        </div>
    </>;
};


export default App;


