import {createContext, useContext} from 'react';

// `logo` is a `path` of the specified svg file.
import logo from './svg/logo.svg';

import './css/App.css';
import './css/style.css';

// import {MyConsumer, MyProvider} from "./React.Context.Sample";
import {Sub1} from './components';


/**
 * ----------------------------------------------------------
 * 1. function createContext<T>(defaultValue: T): Context<T>;
 * ----------------------------------------------------------
 * Lets you create a Context that components can provide or read.
 *
 * @param defaultValue
 *  The value you want the context to have when there is no matching "Provider"
 *  in the tree above the component reading the context.
 * 
 *  This is meant as a "last resort" fallback.
 *
 * @example
 * 
 *  import { createContext } from 'react';
 *  const ThemeContext = createContext('light');
 *
 * 
 * ----------------------------------------------------------
 * 2. interface Context<T> {
 *      Provider: Provider<T>;  // React Element    -> use as like a <tag />
 *      Consumer: Consumer<T>;  // React Element    -> use as like a <tag />
 *    }
 * ----------------------------------------------------------
 * Context lets components pass information deep down without explicitly passing `props`.
 * Created from "createContext".
 *
 * 
 * ------------------------------------------------
 * 3. function useContext<T>(context: Context<T>): T;    - React Hook
 * ------------------------------------------------
 * This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns
 * 
 * Accepts a context object (the value returned from `React.createContext`) and 
 * returns the current context value, as given by the nearest context provider for the given context.
 * 
 */

console.clear();


// **********************************
// 1. Default Value of React Context
// **********************************
export
const defaultTheme = {
  // border: '10px solid green'
  border: '10px solid red'
};
console.log('[1] defaultTheme:', defaultTheme);

// **********************************
// 2. Create a React Context For Theme
// **********************************
// React Context: *Device(or Tool)* to provide global shared states to all sub React components.
// Call `createContext` *outside* of any components to create a context.  <--- ***

export
const themeContext = createContext(defaultTheme);
console.log('[2] themeContext:', themeContext);


function App(props) {
  console.group('0. App(', props, ') invoked.');
  
  // **********************************
  // 3. Use a created React Context in 2
  // **********************************

  // The `useContext` is a React Hook that
  // lets you read and subscribe to context from your component.
  const sharedTheme = useContext(themeContext);   // Global Shared State => Read-Only (***)
  console.log('sharedTheme:', sharedTheme, sharedTheme === defaultTheme);   // theme === defaultTheme

  console.groupEnd();

  // --------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element
  
  return (
    <themeContext.Provider value={ {border: '10px solid blue'} }>

      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        {/* ------------------  */}

        <hr />
        <h1>1. Test of Provider & Consumer in React Context</h1>
        <hr />

        {/* 
          <MyProvider>
            <MyConsumer />
          </MyProvider>
        */}

        {/* ------------------  */}

        <hr />
        <h1>2. React Context Example</h1>
        <hr />

        {/* Apply context value in way of inline style */}
        <div className='root' style={sharedTheme}>
          <h1>App</h1>

          <Sub1 />
        </div>
      </div>
      
    </themeContext.Provider>
  );
} // App


export default App;

