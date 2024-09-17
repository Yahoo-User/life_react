import {useState, useReducer} from 'react';

// `logo` is a `path` of the specified svg file.
import logo from './svg/logo.svg';

import './css/App.css';


// ------------------
// 1. Define a reducer function for `count` state
// ------------------
// type Reducer<S, A> = (prevState: S, action: A) => S;     (***)

const countReducer = (prevCount, action) => {
  console.log('countReducer(', prevCount, ', ', action, ') invoked.');

  switch(action.type) {
    case 'DOWN':  return prevCount - action.number;
    case 'RESET': return 0;
    case 'UP':    return prevCount + action.number;

    default:      return prevCount;
  } // switch
};  // countReducer


function App(props) {
  console.group('App(', props, ') invoked.');

  // ----------------
  // 2. Prepare the device to manage `number` state with `useState`.
  // ----------------
  const [number, setNumber] = useState(1);
  console.log('number:', number, typeof number);

  // ----------------
  // 3. Prepare the device to manage `count` state with `useReducer`.
  // ----------------
  const [count, countDispatch] = useReducer(countReducer, 0);
  console.log('count:', count, typeof count);

  console.groupEnd();

  // ----------------
  // 4. Define event handlers for buttons
  // ----------------
  // (1) Dispatch an `action` to reducer -> (2) Update `count` state -> (3) Re-render this component

  // Action Object : { type: string, number: number }
  
  const handleDownBtn  = () => countDispatch({type: 'DOWN', number: number});
  const handleResetBtn = () => countDispatch({type: 'RESET', number: number});
  const handleUpBtn    = () => countDispatch({type: 'UP', number: number});

  const handleChangeNumber = e => setNumber(Number(e.target.value));


  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <hr />

      {/* 5. Set all event handlers for all buttons */}

      <input type='button' value='-' onClick={handleDownBtn} />
      <input type='button' value='0' onClick={handleResetBtn} />
      <input type='button' value='+' onClick={handleUpBtn} />
      <input type='text'   value={number} size="10" onChange={handleChangeNumber} />

      &nbsp;&nbsp;<span>{count}</span>
    </div>
  );
} // App


export default App;


