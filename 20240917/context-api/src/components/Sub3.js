import { useContext } from 'react';

import { ThemeContext } from '../App';


const Sub3 = props => {
    console.debug('Sub3(', props, ') invoked.');

    const currentTheme = useContext(ThemeContext);
    console.info('\t+ currentTheme:', currentTheme);

    return <>

        {/* Apply currentTheme by inline style. */}
        <div style={ currentTheme }>
            <h3>Sub3</h3>
        </div>

    </>;
};


export { Sub3 };

