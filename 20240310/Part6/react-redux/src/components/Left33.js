/*
 * ---------------------------------------------------
 * 1. const useSelector: UseSelector<unknown>;
 * ---------------------------------------------------
 * A hook to access the redux store's state.
 * This hook takes a selector function as an argument.
 * The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector   the selector function
 * @param {Function} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import {useSelector} from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 * 
 * ---------------------------------------------------
 * 2. const useStore: UseStore<Store<unknown, Action, {}>>;
 * ---------------------------------------------------
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

import {useSelector} from 'react-redux';


export
function Left33(props) {
    console.group('Left33(', props, ') invoked.');
    
    const number = useSelector(state => state.number);
    const name   = useSelector(state => state.name);
    const age    = useSelector(state => state.age);
    
    console.log('number:', number);
    console.log('name:', name);
    console.log('age:', age);

    console.groupEnd();

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Left3: {number}</h1>
        </div>
    );
} // Left33


