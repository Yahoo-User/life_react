import { useContext } from 'react';

import {Sub3} from '../components';
import {themeContext, defaultTheme} from '../App';


export
function Sub2(props) {
    console.group('2. Sub2(', props, ') invoked.');
    
    // Global Shared State => Read-Only (***)
    const sharedTheme = useContext(themeContext);
    console.log('sharedTheme:', sharedTheme, defaultTheme === sharedTheme);

    console.groupEnd();

    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div style={sharedTheme}>
            <h1>Sub2</h1>

            <Sub3 />
        </div>
    );
} // Sub2


