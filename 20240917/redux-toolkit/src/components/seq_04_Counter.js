/**
 *  -----------------------
 *  Possible Exports From The *`react-redux` package: 
 *  -----------------------
 *    (01) Provider
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
import { useSelector, useDispatch } from 'react-redux';

import './Counter.css';
import { counterSlice } from '../seq_03_App';


console.group('- seq_04_Counter.js -------------');

console.log('(01) useSelector:', useSelector);
console.log('(02) useDispatch:', useDispatch);

console.groupEnd();


/**
 *  Important: (1) React Hook cannot be called at the top level.
 *                    (2) React Hooks must be called in a React function component or a custom React Hook function.
 */

const Counter = props => {
    console.group('Counter(', props, ') invoked.');

    const dispatch = useDispatch();
    console.log('A. dispatch:', dispatch);


    /**
     * 1st. method with selector function with logging.
     * 
     */
    const selector = state => {
        console.debug('selector(', state, ') invoked.');

        // Access to the counterValue state of the counterSlice by name, `counter`.
        let selectedState = state.counter.countValue;               //  <--- ***
        console.info('\t+ selectedState:', selectedState);

        return selectedState;
    };

    /**
     * 2nd. method of simple selector function without logging.
    
    const selector = state => state.counter.countValue;         //  <--- ***
     */

    //  ------------------
    console.log('B. selector:', selector);

    const countValue = useSelector( selector );
    console.log('C. countValue:', countValue);

    console.groupEnd();


    return <>
        <button type="button" className='buttonStyle' onClick={ e => {
            console.debug('button::onClick(', e, ') invoked.');

            /**
             *  Important: actions must be an plain objects:
             * 
             *      (1) type        = reducerPathOfTheSlice/actionTypeSpecific
             *      (2) step (user-defined property) = data
             *      (3) payload (pre-defined property in RTK, when invoking action creator of RTK to create an action)   = data
             */
            
            // 1st. method: when using an user-defined action plain object.
            // const action = { type: 'counterSlice/UP',  step: 1 };       // action = { type: 'counterSlice/UP', step: 1 }

            // 2nd. method: when invoking RTK action creator to create an action with pre-defined payload property. (***)
            const action  = counterSlice.actions.UP(1);                  // action = { type: 'counterSlice/UP', payload: 1 }

            console.info('\t+ action:', action);

            dispatch( action );
        }}> + </button>
            &nbsp;&nbsp;
        <span className='spanStyle'> { countValue } </span>
    </>;
};


export { Counter };

