/**
 *  -----------------------
 *  Possible Exports From The *`react-redux` package: 
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
 * 
 */

import {

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

    useSelector,

    /**
     *  -----------------------
     *  const useDispatch: UseDispatch<Dispatch<UnknownAction>>
     *  -----------------------
     *  A hook to access the redux *dispatch function.
     *  Returns the *dispatch function from the *Redux store.
     * 
     *  @returns — The redux store's *dispatch function from the Redux store.
     * 
     *  @example

            ① import React, { useCallback } from *'react'      
            ② import { useDispatch } from *'react-redux'


            export
            const CounterComponent = ( { value } ) => {
                ③ const dispatch = useDispatch();
                ④ const increaseCounter = useCallback( () => ⑤ dispatch( { type: 'increase-counter'  } ), [ ]);

                return (
                    <div>
                        <span>{ value }</span>

                        <button onClick={ ⑥ increaseCounter }>Increase counter</button>
                    </div>
                )
            }
     */

    useDispatch,
  
  } from 'react-redux';
  
import './Counter.css';


console.group('- seq_02_Counter.js -------------');

console.log('(01) useSelector:', useSelector);
console.log('(02) useDispatch:', useDispatch);

console.groupEnd();


/**
 *  Warning:
 *      (1) React Hook "useDispatch" cannot be called at the top level.
 *      (2) React Hooks must be called in a React function component or a custom React Hook function.
 */

const Counter = (props) => {
    console.group('Counter(', props, ') invoked.');

    // =================

    /**
     *  -----------------------
     *  useDispatch(): Dispatch
     *  -----------------------
     *  Returns the *dispatch function from the *Redux store.
     * 
     *  @returns — The *dispatch function from the Redux store.
     */

    const dispatch = useDispatch();
    console.log('a. dispatch:', dispatch);  // f dispatch(action)

    // const selector: (state: any) => any

    // =================
    // 1st. method with selector function with logging.
    // =================

    /*
    const selector = state => {
        console.debug('useSelector::selector(', state, ') invoked.');

        let selectedState = state.countValue;
        console.info('\t+ selectedState( state.countValue ):', selectedState);

        return selectedState;
    };
    */

    // =================
    // 2nd. method of simple selector function without logging.
    // =================
    const selector = state => state.countValue; 
    
    // =================
    console.log('b. selector:', selector);

    const countValue = useSelector( selector );
    console.log('c. countValue:', countValue);

    console.groupEnd();


    return <>
        <button type="button" className='buttonStyle' onClick={ e => {
            console.debug('button::onClick(', e, ') invoked.');

            // *Important: actions must be an plain objects. (***)
            const action = { type: 'UP',  step: 1 };
            console.info('\t+ action:', action);

            dispatch( action );
        }}> + </button>
            &nbsp;&nbsp;
        <span className='spanStyle'> { countValue } </span>
    </>;
};


export { Counter };

