import {useContext} from 'react';

import {defaultTheme, themeContext} from '../App';


export
function Sub3(props) {
    console.group('3. Sub3(', props, ') invoked.');

    // -------------------------------------------
    // 1st. method: To use global shared state
    //              with `useContext` React hook in React Context
    // -------------------------------------------
    // const sharedTheme = useContext(themeContext);   // Global Shared State => Read-Only (***)
    // console.log('sharedTheme:', sharedTheme, defaultTheme === sharedTheme);

    console.groupEnd();
    
    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    // ------------------
    // for 1st. method
    // ------------------
    // return (
    //     <div style={sharedTheme}>
    //         <h1>Sub3</h1>
    //     </div>
    // );

    // ------------------
    // for 2nd. method
    // ------------------
    return (
        // -------------------------------------------
        // 2nd. method: To use global shared state
        //              with `React.Context.Consumer` in React Context
        // -------------------------------------------
        <themeContext.Consumer>
            {
                // function(sharedTheme: {border: string;}): React.JSX.Element
                sharedTheme =>
                    <div style={sharedTheme}>
                        <h1>Sub3</h1>
                    </div>
            }
        </themeContext.Consumer>
    );
} // Sub3


