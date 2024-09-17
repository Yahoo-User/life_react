import { useSelector } from 'react-redux';


console.group('Left3.js'); console.groupEnd();


const Left3 = props => {
    console.debug('Left3(', props, ') invoked.');

    /**
     * React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List :

        import { useEffect } from "react";
        useEffect( () => { console.info('\t+ Left3::componentMounted.'); return () => console.info('\t- Left3::componentUnmounted.'); } );
     */


    const number = useSelector(state => state.number);

    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Left3 - <span>{ number }</span></h3>
        </div>
    )
};


export { Left3 };

