import { useEffect } from "react";


console.group('Left3.js'); console.groupEnd();


const Left3 = props => {
    console.debug('Left3(', props, ') invoked.');

    /* React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List : */
    useEffect( () => { console.info('\t+ Left3::componentMounted.'); return () => console.info('\t- Left3::componentUnmounted.'); } );


    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Left3 - <span>{ props.number }</span></h3>
        </div>
    )
};


export { Left3 };

