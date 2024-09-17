import {useState} from 'react';

// `logo` is a `path` of the specified svg file.
import logo from './svg/logo.svg';

import './css/App.css';


function App(props) {
  console.group('App(', props, ') invoked.');

  // ----------------
  // 1. Prepare the device to manage `count` state with `useState` React hook
  // ----------------
  const [count, setCount] = useState(0);
  console.log('count:', count);

  console.groupEnd();

  // ----------------
  // 2. Define event handlers for buttons
  // ----------------
  // Update count state -> re-render this component
  const handleDownBtn  = () => setCount(count-1);
  const handleResetBtn = () => setCount(0);
  const handleUpBtn    = () => setCount(count + 1);


  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <hr />

      {/* 3. Set all event handlers for all buttons */}
      
      <input type='button' value='-' onClick={handleDownBtn} />
      <input type='button' value='0' onClick={handleResetBtn} />
      <input type='button' value='+' onClick={handleUpBtn} />

      &nbsp;&nbsp;<span>{count}</span>
    </div>
  );
} // App


export default App;


