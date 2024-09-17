import {useState} from 'react';

import './css/App.css';

import {Left1, Right12} from './components';


/**
 * ----------------------------------------------------
 * 1. function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
 * ----------------------------------------------------
 * Returns a stateful value, and a function to update it.
 * 
 * ----------------------------------------------------
 * 2. type Dispatch<A> = (value: A) => void;
 * ----------------------------------------------------
 * A function that can be used to update the state of a {useState} or {useReducer} hook.
 * 
 * ----------------------------------------------------
 * 3. type SetStateAction<S> = S | ((prevState: S) => S);
 * ----------------------------------------------------
 * The instruction passed to a {Dispatch} function in {useState}
 * to tell React what the next value of the {useState} should be.
 *
 * Often found wrapped in {Dispatch}.
 *
 * @template S The type of the state.
 * 
 */


function App(props) {
  console.group('App(', props, ') invoked.');

  // ----------------
  const [number, setNumber] = useState(1);
  console.log('number:', number);

  console.groupEnd();
    
  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App" id='container'>
      <h1>App: {number}</h1>
      
      <div id='grid'>
        <Left1 number={number} />

        {/* Pass dispatch (`setNumber`) and state (`number`) props. */}
        <Right12 dispatch={setNumber} state={number} />
      </div>
    </div>
  );
}

export default App;


