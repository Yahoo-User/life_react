import { useContext } from 'react';

import {Sub2} from '../components';
import {themeContext, defaultTheme} from '../App';


export
function Sub1(props) {
    console.group("1. Sub1(", props, ") invoked.");

    // Global Shared State => Read-Only (***)
    const sharedTheme = useContext(themeContext);
    console.log('sharedTheme:', sharedTheme, defaultTheme === sharedTheme);

    console.groupEnd();
    
    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <themeContext.Provider value={{ border: '10px solid green' }}>
            <div style={sharedTheme}>
                <h1>Sub1</h1>

                <Sub2 />
            </div>
        </themeContext.Provider>
    );
} // Sub1


