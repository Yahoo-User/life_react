// `logo` is a `path` of the specified svg file.
import logo from './svg/logo.svg';

import './css/App.css';

import {MyComponent} from './useReducer.sample';


console.clear();

function App(props) {
  console.log('App(', props, ') invoked.');

  // --------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <hr />
      
      {/* useReducer.sample.js */}
      <MyComponent />
    </div>
  );
} // App


export default App;


