import {configureStore} from '@reduxjs/toolkit';

import {counterSlice}   from './counterSlice';


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

export
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


