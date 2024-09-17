import { useState } from 'react'
import './App.css';

import { Header, Nav, Article } from './components';


console.clear(); console.log('- seq_2_App.state-1.js --------');


function App() {  // React Functional Component
    console.debug('App() invoked.');

    const topics = [
        {id: 1, title: 'HTML', body: 'HTML is ...'},
        {id: 2, title: 'CSS', body: 'CSS3 is ...'},
        {id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...'}
    ];

    console.info('\t+ topics:', topics);


    /**
     * --------------------------------
     * `state` management
     * --------------------------------
     */

    // Before using React Hook, useState() function
    // let currentMode = 1;        // *state of the React Component. (***)

    /**
     * --------------------------------
     * React Hook: useState( initialState ), returns Array = [ currentState, f setCurrentState ]
     * --------------------------------
        console.info('\t+ useState:', typeof useState, useState);

        const _mode = useState(1);      // returns Array = [ currentState, f setCurrentState ]
        console.info('\t+ _mode:', _mode, typeof _mode, Object.getPrototypeOf(_mode) === Array.prototype);      // Array
     */

    const initialMode = 1;
    const [ currentMode, setCurrentMode ] = useState( initialMode );

    let article = '';       // let variable to have a React component.

    if(currentMode === 1)           article = <Article title = 'Welcome' body = 'Hello, Web' />;
    else if(currentMode === 2)    article = <Article title = { 'Welcome' } body = { 'Hello, Read' } />;

    // console.info('\t+ (1) currentMode:', currentMode, ', (2) article:', article, ', (3) type:', typeof article, article.$$typeof, article.type);


    return (  // React.JSX.Element
        <div className='App'>

            <Header title={ 'REACT' } onClickEvent={ () => {                 // () => void
                console.debug('Header::onClickEvent() invoked.');

                // Update state of the *App React Component.

                // currentMode = 1;    // *Before using React Hook, useState() function -> *Not Effectful.
                setCurrentMode(1);     // *After using React Hook, useState() function.

                console.info('\t+ currentMode:', currentMode);
            }} />


            <Nav topics={ topics } onClickEvent = { (id, title) => {        // (id, title) => void
                console.debug('Nav::onClickEvent(', id, ', ', title, ') invoked.');

                // Update state of the *App React Component.

                // currentMode = 2;    // *Before using React Hook, useState() function -> *Not Effectful.
                setCurrentMode(2);     // *After using React Hook, useState() function.

                console.info('\t+ currentMode:', currentMode);
            }}></Nav>


            {/* (1) Rendering value as a string */}
            {/* article */}

            {/* (2) Conditional Rendering with Symbol, {} */}
            { article }

        </div>
    );
}

export default App;

