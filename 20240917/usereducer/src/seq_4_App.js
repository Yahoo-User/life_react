import { useReducer } from 'react';

import './seq_2_App.css';


const App = props => {
    console.debug('App(', props, ') invoked.');

    const countReducer = (prev, action) => {
        console.debug('countReducer(prev:', prev, ', action:', action, ') invoked.');

        let result = prev;

        switch(action) {
            case 'Down':   --result; break;
            case 'Up':        ++result;  break;
            
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
        if( count - 1 >= 0 ) countDispatch('Down');
    };

    const reset = e => {
        console.debug('reset(', e, ') invoked.');
        if( count > 0 ) countDispatch('Reset');
    };

    const up = e => {
        console.debug('up(', e, ') invoked.');
        countDispatch('Up');
    };

    
    return <>
        <div className="App">
            <input type='button' value={ '-' }  onClick={ down } />
            <input type='button' value={ '0' } onClick={ reset } />
            <input type='button' value={ '+' }  onClick={ up } />

            <br/><br/>

            <span>{ count }</span>
        </div>
    </>;
};


export default App;

