import React, {useReducer} from 'react';


// **************************************
//  1. State  Type: { count: number }
//  2. Action Type: { type : string }
// **************************************

// ------------------
// 1. Define a reducer function for `count` state
// ------------------
// type Reducer<S, A> = (prevState: S, action: A) => S;     (***)

const countReducer = (prevState, action) => {
    console.log('reducer(', prevState, ', ', action, ') invoked.');

    switch(action.type) {
        case 'Increment':
            return { count: prevState.count + 1 };
        case 'Decrement':
            return { count: prevState.count - 1 };
        default:
            return prevState;
    } // switch
}; // countReducer

// console.warn("Here.");       // *NOT* executed.


export
const MyComponent = (props) => {
    console.group('>>> MyComponent(', props, ') invoked.');

    // ------------------
    // 2. Invoke the `useReducer` React Hook to manage this component state.
    // ------------------
    const [countState, countDispatch] = useReducer(countReducer, { count: 0 });
    console.log('current countState  :', countState);

    // ------------------
    // 3. Defines click event handlers for UI buttons.
    // ------------------
    const handleIncButton = () => {
        console.log('1. handleIncButton() invoked.');
        countDispatch({ type: 'Increment'});
    };  // handleIncButton
    
    const handleDecButton = () => {
        console.log('2. handleDecButton() invoked.');
        countDispatch({ type: 'Decrement'});
    };  // handleDecButton

    console.groupEnd();

    // ------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Count: <span>{countState.count}</span></h1>

            <button onClick={handleIncButton}>Increment</button>
            <button onClick={handleDecButton}>Decrement</button>
        </div>
    );
}; // MyComponent


