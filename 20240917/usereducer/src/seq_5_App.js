import { useReducer, useState } from 'react';

import './seq_2_App.css';


const App = props => {
    console.debug('App(', props, ') invoked.');

    const [ number, setNumber ] = useState(1);
    console.info('\t+ number:', number);


    // -----------------
    //  *Important: Reducer must be a pure function, *Not access number state directly.
    // -----------------
    const countReducer = (prev, action) => {
        console.debug('countReducer(prev:', prev, ', action:', action, ') invoked.');
        console.info('\t+ action.number:', action.number);

        let result = prev;

        switch(action.type) {
            case 'Down':
                result -= action.number; break;
            case 'Up':
                result += action.number; break;
            
            case 'Reset':
            default:
                result = 0;
        }

        return result;
    };

    const [ count, countDispatch ] = useReducer(countReducer, 0);
    console.info('\t+ count:', count);

    // -----------------

    const down = e => {
        console.debug('down(', e, ') invoked.');

        if( count - number >= 0 ) countDispatch( { type: 'Down', number: number } );
        else countDispatch( { type: 'Reset', number: number } );
    };

    const reset = e => {
        console.debug('reset(', e, ') invoked.');

        if( count > 0 ) countDispatch( { type: 'Reset', number: number } );
    };

    const up = e => {
        console.debug('up(', e, ') invoked.');

        countDispatch( { type: 'Up', number: number } );
    };

    const onChangeNumber = e => {
        console.debug('onChangeNumber(', e.target.value, ') invoked.');

        if( Number(e.target.value) > 0 ) setNumber( Number(e.target.value) );
        else setNumber( 1 );
    };

    // -----------------
    
    return <>
        <div className="App">
            <input type='button' value={ '-' }  onClick={ down } />
            <input type='button' value={ '0' } onClick={ reset } />
            <input type='button' value={ '+' }  onClick={ up } />

            &nbsp;by<input type='text' size={ 2 } value={ number } onChange={ onChangeNumber } />

            <br/><br/>

            <span>{ count }</span>
        </div>
    </>;
};


export default App;

