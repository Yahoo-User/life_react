import { Right2 } from ".";


console.group('Right1.js'); console.groupEnd();


const Right1 = props => {
    console.debug('Right1(', props, ') invoked.');

    /**
     * React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List :
     
        import { useEffect } from "react";
        useEffect( () => { console.info('\t+ Right1::componentMounted.'); return () => console.info('\t- Right1::componentUnmounted.'); } );
     */

    
    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Right1</h3>

            <Right2 />
        </div>
    );
};


export { Right1 };

