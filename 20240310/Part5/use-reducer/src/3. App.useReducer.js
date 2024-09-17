import {useReducer} from 'react';

// `logo` is a `path` of the specified svg file.
import logo from './svg/logo.svg';

import './css/App.css';


// ------------------
// 1. Define a reducer function for `count` state
// ------------------
// type Reducer<S, A> = (prevState: S, action: A) => S;     (***)

const countReducer = (prevCount, action) => {
  console.log(`countReducer(${prevCount}, ${action}) invoked.`);

  switch(action) {
    case 'DOWN':  return prevCount - 1;
    case 'RESET': return 0;
    case 'UP':    return prevCount + 1;

    default:      return prevCount;
  } // switch
};  // countReducer


function App(props) {
  console.group('App(', props, ') invoked.');

  // ----------------
  // 2. Prepare the device to manage `count` state with `useReducer`.
  // ----------------
  const [count, countDispatch] = useReducer(countReducer, 0);
  console.log('count:', count);

  console.groupEnd();

  // ----------------
  // 3. Define event handlers for buttons
  // ----------------
  // (1) Dispatch an action to the Reducer -> (2) Update count state -> (3) Re-render this component

  const handleDownBtn  = () => countDispatch('DOWN');
  const handleResetBtn = () => countDispatch('RESET');
  const handleUpBtn    = () => countDispatch('UP');


  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <hr />

      {/* 4. Set all event handlers for all buttons */}

      <input type='button' value='-' onClick={handleDownBtn} />
      <input type='button' value='0' onClick={handleResetBtn} />
      <input type='button' value='+' onClick={handleUpBtn} />

      &nbsp;&nbsp;<span>{count}</span>
    </div>
  );
} // App


export default App;


