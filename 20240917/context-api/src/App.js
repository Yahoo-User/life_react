import { createContext, useContext } from 'react';

import {  Sub1 } from './components';
import './style.css';


/**
 * --------------------------------------------
 *  function createContext<T>( defaultValue: T, ): Context<T>;
 * --------------------------------------------
 *  Create a context that components can provide or read.
 * 
 * @param defaultValue - 
 *    The value you want the context to have when there is no matching Provider in the tree above the component reading the context.
 *    This is meant as a "last resort" fallback.
 * 
 * --------------------------------------------
 *  function useContext<T>(context: Context<T>): T;
 * --------------------------------------------
 *  Accepts a context object ( the value returned from React.createContext ) and returns the current context value,
 *  as given by the nearest context provider for the given context.
 * --------------------------------------------
 */

console.group('App.js');

const themeDefault = { border: '10px outset blue' };
console.log('(1) themeDefault:', themeDefault);

export
const ThemeContext = createContext(themeDefault);
console.log('(2) ThemeContext:', ThemeContext);


const App = props => {
    console.debug('App(', props, ') invoked.');

    const currentTheme = useContext(ThemeContext);
    console.info('\t+ currentTheme:', currentTheme);

    const newTheme = { border: '10px inset red' };
    console.info('\t+ newTheme:', newTheme);

    return <>

        {/* Wraps your components to specify the value of this context for all components inside with `value` prop:

              @example:
                  import { createContext } from 'react';
                  const ThemeContext = createContext('light');

                  function App() {
                      return (
                          <ThemeContext.Provider value="dark">
                              <Toolbar />
                          </ThemeContext.Provider>
                      );
                  } 
        */}

        <ThemeContext.Provider value={ newTheme }>

            {/* Apply currentTheme by inline style. */}
            <div className="root" style={ currentTheme }>
                <h3>Hello, World!</h3>

                <Sub1 />
            </div>

        </ThemeContext.Provider>

    </>;
}


console.groupEnd();
export default App;

