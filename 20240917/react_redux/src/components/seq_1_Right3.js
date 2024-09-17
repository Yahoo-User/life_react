import { useDispatch } from "react-redux";


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

    /**
     * React Component Lifecycle Callback With `useEffect` React Hook & *No Dependency List :

        import { useEffect } from "react";
        useEffect( () => { console.info('\t+ Right3::componentMoundted.'); return () => console.info('\t- Right3::componentUnmounted.'); } );
     */


    const dispatch = useDispatch();
    // console.info('\t+ dispatch:', dispatch);    // f dispatch(action)

    // No return React.JSX.Element - OK.    (***)
    return (
        <div>
            <h3>Right3</h3>

            <button type="button" style={ buttonStyle } onClick={ e => {
                console.log('\t+ Right3::button::onClick(', Object.getPrototypeOf(e).constructor.name, ') invoked.');

                // Update number state.
                dispatch( { type: 'PLUS' } );   // To `*reducer*`, (1) Pass an action object with action type, 'PLUS' & (2) Dispatch State Update.
            }}>+</button>
        </div>
    );
};


export { Right3 };

