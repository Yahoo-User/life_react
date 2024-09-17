import { Left3 } from ".";


console.group('Left2.js'); console.groupEnd();


const Left2 = props => {
    console.debug('Left2(', props, ') invoked.');

    /**
     * React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List :
    
        import { useEffect } from "react";
        useEffect( () => { console.info('\t+ Left2::componentMounted.'); return () => console.info('\t- Left2::componentUnmounted.'); } );
     */


    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Left2</h3>

            <Left3 />
        </div>
    );
};


export { Left2 };

