import { useState } from 'react';

import './seq_2_App.css';


const App = props => {
    console.debug('App(', props, ') invoked.');

    const [ count, setCount ] = useState(0);
    console.info('\t+ current count:', count);

    
    const down = e => {
        console.debug('down(', e, ') invoked.');
        if( count - 1 >= 0 ) setCount( count - 1 );
    };

    const reset = e => {
        console.debug('reset(', e, ') invoked.');
        if( count > 0 ) setCount(0);
    };

    const up = e => {
        console.debug('up(', e, ') invoked.');
        setCount( count + 1 );
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

