/**
 * ----------------------
 * 1. const createSlice(
 *      options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>
 *    ) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;
 * ----------------------
 * A function that accepts 
 *  (1) an `initial state`,
 *  (2) an object full of `reducer functions`,
 *  (3) and a `slice name`,
 * 
 * and automatically generates `action creators` and `action types`
 * that correspond to the `reducers` and `state`.
 */

import {configureStore, createSlice} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

// Here, `logo` is the path which logo.svg file is located.
import logo from './svg/logo.svg';
import './css/App.css';

import { Counter } from './components';


// ******************************************************
// Case2. Manage state with `@reduxjs/toolkit`.
// ******************************************************

function App(props) {
  console.group('App(', props, ') invoked.');

  // ---------------------
  // Step1. Create a `slice` for the `counter` (like a small store).
  // ---------------------
  const counterSlice = createSlice({
    name: 'counterSlice',               // (1) Slice's Name

    initialState: {value: 0},             // (2) Initial State

    reducers: {                               // (3) Reducers as with action

      // (3-1) Reducer with "up" action type
      "up": (state, action) => {
          console.log('reducers::up(state:', state, ', action:', action, ') invoked.');

          // (3-2) 1st. method: Update `value` state with `step` action property.
          // state.value += action.step;

          // (3-2) 2nd. method: Update `value` state with auto-created `payload` action property 
          state.value += action.payload;
      },

      // (3-1) Reducer with "down" action type
      "down": (state, action) => {
          console.log('reducers::down(state:', state, ', action:', action, ') invoked.');

          // (3-2) 1st. method: Update value state with `step` action property.
          // state.value -= action.step;

          // (3-2) 2nd. method: Update value state with auto-created `payload` action property 
          state.value -= action.payload;
      },
    }
  }); // createSlice

  // ---------------------
  // 1. actions: {up: ƒ, down: ƒ}
  // 2. caseReducers: {up: ƒ, down: ƒ}
  // 3. name: "counterSlice"
  // 4. reducer: ƒ reducer(state, action)
  // 5. reducerPath: "counterSlice"
  //     By default, Slice name becomes `reducerPath` property value. (***)

  console.log('1. counterSlice:', counterSlice);

  // ---------------------
  // Step2. Create a `store` for `counter` (like large sum of several small slices).
  // ---------------------

  /**
   * -----------------------------------
   * configureStore(options: ConfigureStoreOptions<...>): EnhancedStore<...>
   * -----------------------------------
   * A friendly abstraction over the standard Redux `createStore()` function.
   * 
   * @param options - The store configuration.
   * @returns       - A configured Redux store.
   * 
   */
  const store = configureStore({

    /**
     * -----------------------------------------------
     * 1. Reducer<S, A, P> | ReducersMapObject<S, A, P>
     * -----------------------------------------------
     * (1) A single reducer function that will be used as the *`root`* reducer, OR
     * (2) An object of slice reducers that will be passed to *`combineReducers()`*.
     * 
     * -----------------------------------------------
     * 1-1. Reducer<S, A, P>
     * -----------------------------------------------
     * type Reducer<S = any, A extends Action = UnknownAction, PreloadedState = S> = 
     *      ( state: S | PreloadedState | undefined, action: A ) => S
     * 
     * A *reducer* is a function that accepts an accumulation and a value and returns a new accumulation.
     * They are used to reduce a collection of values down to a single value
     * 
     * Reducers are not unique to Redux - they are a fundamental concept in functional programming.
     * Even most non-functional languages, like JavaScript, have a built-in API for reducing.
     * In JavaScript, it's `Array.prototype.reduce()`.
     * 
     * In Redux, the accumulated value is the state object, and the values being accumulated are actions.
     * Reducers calculate a new state given the previous state and an action.
     * 
     * They must be *pure functions* - functions that return the exact same output for given inputs.
     * They should also be free of side-effects.
     * This is what enables exciting features like hot reloading and time travel.
     * 
     * Reducers are the most important concept in Redux.
     * *Do not put API calls into reducers.*
     * 
     * @template S               - The type of state consumed and produced by this reducer.
     * @template A               - The type of actions the reducer can potentially respond to.
     * @template PreloadedState  - The type of state consumed by this reducer the first time it's called.
     * 
     * -----------------------------------------------
     * 1-2. ReducersMapObject<S, A, P>
     * -----------------------------------------------
     * type ReducersMapObject<S = any, A extends Action = UnknownAction, PreloadedState = S> = 
     *      keyof PreloadedState extends keyof S ? { 
     *          [K in keyof S]: Reducer<S[K], A, K extends keyof PreloadedState ? PreloadedState[K] : never>;
     *      } : never;
     * 
     * Object whose values correspond to different reducer functions.
     * 
     * @template S The combined state of the reducers.
     * @template A The type of actions the reducers can potentially respond to.
     * @template PreloadedState The combined preloaded state of the reducers.
     * 
     */

    reducer: {
        // The slice's reducer: `Reducer<State>`, is used as "root" reducer.              (***)
        // That is, all reducers of the slice combined as one reducer. (= Slice.reducer)  (***)
        counter: counterSlice.reducer
    }
    
  }); // configureStore

  console.log('2. store:', store);

  console.groupEnd();

  // ----------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element
  
  return (
    <Provider store={store}>

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter slice={counterSlice} />
      </div>

    </Provider>
  );
} // App


export default App;


