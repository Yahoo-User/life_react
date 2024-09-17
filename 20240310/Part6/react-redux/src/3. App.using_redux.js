/*
 * ----------------------------------------------------
 * 1. The "createStore" of "redux" is deprecated.
 * ----------------------------------------------------
 * @deprecated
 *
 * **We recommend using the `configureStore` method of the `@reduxjs/toolkit` package**,
 * which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` 
 * that simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * 
 * The `createStore` method from the core `redux` package will not be removed,
 * but we encourage all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning,
 * use the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 * -------------------------------------------------------------
 * 2. function legacy_createStore<S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}>(
 *      reducer: Reducer<S, A>, 
 *      enhancer?: StoreEnhancer<Ext, StateExt>
 *    ): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext;
 * -------------------------------------------------------------
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app.
 * To specify how different parts of the state tree respond to actions,
 * you may combine several reducers into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree,
 *        given the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state.
 *        You may optionally specify it to hydrate the state from the server in universal apps, 
 *        or to restore a previously serialized user session.
 * 
 *        If you use `combineReducers` to produce the root reducer function,
 *        this must be an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer.
 *        You may optionally specify it to enhance the store with third-party capabilities such as middleware,
 *        time travel, persistence, etc. 
 *        The only store enhancer that ships with Redux is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, 
 *        dispatch actions and subscribe to changes.
 * 
 * ---------------------------------------------------
 * 3. subscribe(listener: ListenerCallback): Unsubscribe;
 * ---------------------------------------------------
 * Adds a change listener.
 * 
 * It will be called any time an action is dispatched, 
 * and some part of the state tree may potentially have changed.
 * 
 * You may then call `getState()` to read the current state tree inside the callback.
 * 
 * You may call `dispatch()` from a change listener, with the following caveats:
 * 
 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
 *    If you subscribe or unsubscribe while the listeners are being invoked,
 *    this will not have any effect on the `dispatch()` that is currently in progress.
 * 
 *    However, the next `dispatch()` call,
 *    whether nested or not, will use a more recent snapshot of the subscription list.
 * 
 * 2. The listener should not expect to see all states changes,
 *    as the state might have been updated multiple times during a nested `dispatch()` 
 *    before the listener is called.
 * 
 *    It is, however, guaranteed that all subscribers registered before the `dispatch()` started
 *    will be called with the latest state by the time it exits.
 * 
 * @param listener  A callback to be invoked on every dispatch.
 * @returns         A function to remove this change listener.
 * 
 * ---------------------------------------------------
 * type ListenerCallback = () => void;
 * ---------------------------------------------------
 * 
 */

import {legacy_createStore as createStore} from 'redux';

import {
  Provider,
  // useSelector,
  // useDispatch,
  // connect
} from 'react-redux';

import './css/App.css';

import {Left13, Right13} from './components';


function reducer(currentState, action) {
  console.log("reducer(currentState:", currentState, ", action:", action, ") invoked.");

  // ----------------
  if(currentState === undefined) {    // No initial state
    const initialState = {
      name: 'Yoseph',
      age: 23,
      number: 1
    };

    return initialState;
  } // if

  // ----------------
  const newState = {...currentState}; // Deep copy current state to be immutable

  if(action.type === 'PLUS') {
    newState.number++;
  } // if

  return newState;
} // reducer


function App(props) {
  console.clear();
  console.group('App(', props, ') invoked.');

  // ----------------
  const store = createStore(reducer);    // state container in redux
  console.log('store:', store);

  console.groupEnd();
  
  // ----------------
  store.subscribe(() => {
    console.clear();
    console.log('* Updated state:', store.getState());
  }); // .subscribe

  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App" id='container'>
      <h1>App: {store.getState().number}</h1>
      
      <div id='grid'>

        <Provider store={store}>
          <Left13 />
          <Right13 />
        </Provider>

      </div>
    </div>
  );
}

export default App;


