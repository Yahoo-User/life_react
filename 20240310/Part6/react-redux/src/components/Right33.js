/**
 * ------------------------------------------------------------
 * const useDispatch: UseDispatch<Dispatch<UnknownAction>>;
 * ------------------------------------------------------------
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any | function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, {useCallback} from 'react'
 * import {useDispatch} from 'react-redux'
 *
 * export const CounterComponent = ({value}) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

import {useDispatch} from 'react-redux';


export

// -----------------------------------------------------
// Imported JSX component'name must be
// in (1) PascalCase or (2) SCREAMING_SNAKE_CASE. (***)
// -----------------------------------------------------

function Right33(props) {
    console.group('Right33(', props, ') invoked.');

    // ----------------
    // dispatch: ƒ dispatch(action) 
    const dispatch = useDispatch();
    
    console.groupEnd();

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div style={{
            padding: '5px'
        }}>
            <h1>Right3</h1>

            <input
                type="button"
                value="+"

                onClick={() => {
                    // Invoke the reducer passed when creating a redux store
                    // to dispatch state updating.
                    
                    const action = { type: 'PLUS' };
                    dispatch(action);
                }}
            />
        </div>
    );
} // Right33


