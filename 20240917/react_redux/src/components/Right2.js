import { useEffect } from "react";

import { Right3 } from ".";


console.group('Right2.js'); console.groupEnd();


const Right2 = props => {
    console.debug('Right2(', props, ') invoked.');

    /* React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List : */
    useEffect( () => { console.info('\t+ Right2::componentMounted.'); return () => console.info('\t- Right2::componentUnmounted.'); } );
    

    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Right2</h3>

            <Right3 onIncrease={ () => {
                console.log('\t+ Right3::onIncrease() invoked.');

                props.onIncrease();     // Callback `onIncrease` prop.
            } } />
        </div>
    );
};


export { Right2 };

