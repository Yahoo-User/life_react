import { useEffect } from "react";

import { Left2 } from ".";


console.group('Left1.js'); console.groupEnd();


const Left1 = props => {
    console.debug('Left1(', props, ') invoked.');

    /* React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List : */
    useEffect( () => { console.info('\t+ Left1::componentMounted.'); return () => console.info('\t- Left1::componentUnmounted.'); } );


    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Left1 - <span>{ props.number }</span></h3>

            <Left2 number={ props.number } />
        </div>
    );
};


export { Left1 };

