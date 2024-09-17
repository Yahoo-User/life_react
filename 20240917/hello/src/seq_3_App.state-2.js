import { useState } from 'react'
import './App.css';

import { Header, Nav, Article } from './components';


console.clear(); console.log('- seq_3_App.state-2.js --------');


function App() {  // React Functional Component
    console.debug('App() invoked.');

    const topics = [
        { id: 1, title: 'HTML', body: 'HTML is ...' },
        { id: 2, title: 'CSS', body: 'CSS3 is ...' },
        { id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...' }
    ];


    /**
     * --------------------------------
     * `state` management
     * --------------------------------
     */

    const [ mode, setMode ] = useState( 1 );
    const [ topicId, setTopocId ] = useState( null );

    console.info('\t+ mode:', mode, ', topicId:', topicId);

    let article = '';       // let variable to have a React component.

    if(mode === 1) {
        article = <Article title = 'Welcome' body = 'Hello, Web' />;
    } else if(mode === 2)    {
        let title, body = null;

        for(let topic of topics) {
            if(topic.id === topicId) {
                title = topic.title;
                body = topic.body;

                break;
            }
        }

        article = <Article title = { title } body = { body } />;
    }


    return (  // React.JSX.Element
        <div className='App'>

            <Header title={ 'REACT' } onClickEvent={ () => {                 // () => void
                console.debug('Header::onClickEvent() invoked.');

                // Update states of the *App    -> *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(1);             // *Not applied immediately.
                setTopocId(null);      // *Not applied immediately.
            }} />


            <Nav topics={ topics } onClickEvent = { (_id, title) => {        // (_id, title) => void
                console.debug('Nav::onClickEvent(', _id, ', ', title, ') invoked.');

                // Update states of the *App    -> *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(2);               // *Not applied immediately.
                setTopocId(_id);       // *Not applied immediately.
            }}></Nav>


            {/* Conditional Rendering with Symbol, {} */}
            { article }

        </div>
    );
}

export default App;

