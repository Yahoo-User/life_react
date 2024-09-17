import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';


// Here, `logo` is the path which logo.svg file is located.
import logo from './svg/logo.svg';
import './css/App.css';

import { Counter } from './components';


// ******************************************************
// Case1. Manage state with `redux` and `react-redux`.
// ******************************************************

function reducer(currentState, action) {
    console.group('2. reducer(currentState:', currentState, ', action:', action, ') invoked.');

    const newState = (action.type === 'up') ?
                        { ...currentState, value: currentState.value + action.step } : 
                        currentState;

    console.log('newState:', newState);

    console.groupEnd();

    return newState;
} // reducer


function App(props) {
  console.group('App(', props, ') invoked.');

  // ----------
  const initialState = { value: 0 };
  console.log('1. initialState:', initialState);

  // const store = createStore(reducer);                 // 1st. method
  const store = createStore(reducer, initialState)    // 2nd. method
  console.log('3. store:', store);

  console.groupEnd();

  // ----------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element
  
  return (
    <Provider store={store}>

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter />
      </div>

    </Provider>
  );
} // App


export default App;


