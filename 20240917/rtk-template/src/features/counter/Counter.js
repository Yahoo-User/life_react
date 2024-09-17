import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from './counterSlice';

import styles from './Counter.module.css';    // The 2nd. Method To Import CSS File.  (***)


console.group('- features/counter/Counter.js -------------'); console.groupEnd();


export function Counter() {
    console.group('Counter() invoked.');

    /**
     *  ----------------------
     *  useSelector( selector: (state: any) => any, equalityFnOrOptions? ): any
     *  ----------------------
     *  A function that takes a selector function as its first argument.
     *  The selector function is responsible for selecting a part of the *Redux store's *state or computing derived data.
     * 
     * @param selector — A function that receives the current state and returns a part of the state or some derived data.
     * @param equalityFnOrOptions — An optional equality function or options object for customizing the behavior of the selector.
     * 
     * @returns — The selected part of the state or derived data.
     */

    const count = useSelector( selectCount );
    console.info('+ count:', count);

    /**
     *  ----------------------
     *  useDispatch(): Dispatch<UnknownAction>
     *  ----------------------
     *  Returns the *dispatch function from the *Redux store.
     * 
     *  @returns — The dispatch function from the Redux store.
     */
    const dispatch = useDispatch();
    console.info('+ dispatch:', dispatch);

    /**
     *  ----------------------
     *  useState(initialState): [ any, React.Dispatch<React.SetStateAction<any>> ]
     *  ----------------------
     *  Returns (1) a stateful value, and (2) a function to update it.
     */
    const [ incrementAmount, setIncrementAmount ] = useState('2');
    console.info('+ incrementAmount:', incrementAmount);

    const incrementValue = Number( incrementAmount ) || 0;
    console.info('+ incrementValue:', incrementValue);

    console.groupEnd();

    return (
        <div>
            <div className={ styles.row }>
                <button className={ styles.button } aria-label="Decrement value" onClick={ () => dispatch( decrement() ) } > - </button>

                <span className={ styles.value }>{ count }</span>

                <button className={ styles.button } aria-label="Increment value" onClick={ () => dispatch( increment() ) } > + </button>
            </div>

            <div className={ styles.row }>
                <input className={ styles.textbox } aria-label="Set increment amount" value={ incrementAmount } onChange={ (e) => setIncrementAmount( e.target.value ) } />

                <button className={ styles.button } onClick={ () => dispatch( incrementByAmount( incrementValue ) ) } >Add Amount</button>
                <button className={ styles.asyncButton } onClick={ () => dispatch( incrementAsync( incrementValue ) ) } >Add Async</button>
                <button className={ styles.button } onClick={ () => dispatch( incrementIfOdd( incrementValue ) ) } >Add If Odd</button>
            </div>
        </div>
    );
}
