import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';


console.group('- app/store.js -------------');

/**
 * ----------------------
 *  function configureStore<S, A, M, E, P>(options: ConfigureStoreOptions<S, A, M, E, P>):  EnhancedStore<S, A, E>
 * ----------------------
 *  A friendly abstraction over the standard *Redux `*createStore()` function.
 * 
 *  @param options — The store configuration.
 *  @returns            — A configured Redux store. (***)
 */

console.log('(01) configureStore:', configureStore);

/**
 * ----------------------
 *  function reducer(state, action): Reducer<State>
 *  type Reducer<S, A, PreloadedState = S>  =  (state: S | PreloadedState, action: A) => S;
 * ----------------------
 *  The slice's reducer.   (***)
 */

console.log('(02). counterReducer:', counterReducer);


/**
 *  store = { dispatch: f, subscribe: f, getState: f, replaceReducer: f, @@observable: f }
 */
export const store = configureStore( { reducer: { counter: counterReducer, }, } );

console.log('(03) store:', store);


console.groupEnd();

