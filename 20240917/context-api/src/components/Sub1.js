import { useContext } from 'react';

import { ThemeContext } from '../App';
import { Sub2 } from '.';


const Sub1 = props => {
    console.debug('Sub1(', props, ') invoked.');

    const currentTheme = useContext(ThemeContext);
    console.info('\t+ currentTheme:', currentTheme);

    const newTheme = { border: '10px dotted purple' };
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
            <div style={ currentTheme }>
                <h3>Sub1</h3>

                <Sub2 />
            </div>

        </ThemeContext.Provider>

    </>;
};


export { Sub1 };

