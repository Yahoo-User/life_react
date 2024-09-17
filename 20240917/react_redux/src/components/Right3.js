import { useEffect } from "react";


console.group('Right3.js'); console.groupEnd();


const buttonStyle = {
    border: '5px outset gold',
    color: 'red',
    cursor: 'pointer',

    fontFamily:  "Lucida Sans",
    fontSize: '22px',
    fontWeight: 'bold',
};

const Right3 = props => {
    console.debug('Right3(', props, ') invoked.');

    /* React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List : */
    useEffect( () => { console.info('\t+ Right3::componentMoundted.'); return () => console.info('\t- Right3::componentUnmounted.'); } );


    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Right3</h3>

            <button type="button" style={ buttonStyle } onClick={ e => {
                console.log('\t+ Right3::button::onClick(', Object.getPrototypeOf(e).constructor.name, ') invoked.');

                props.onIncrease();     // Callback `onIncrease` prop.
            }}>+</button>
        </div>
    );
};


export { Right3 };

