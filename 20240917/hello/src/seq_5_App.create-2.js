import { useState } from 'react'
import './App.css';

import { Header, Nav, Article, Create } from './components';


console.clear(); console.log('- seq_5_App.create-2.js --------');


function App() {
    console.debug('App() invoked.');

    const topics = [
        { id: 1, title: 'HTML', body: 'HTML is ...' },
        { id: 2, title: 'CSS', body: 'CSS3 is ...' },
        { id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...' }
    ];

    const [ mode, setMode ] = useState( 1 );
    const [ topicId, setTopicId ] = useState( null );

    // -------

    let article = '';       // let variable to have a React component.

    switch(mode) {
        case 1:
            article = <Article title = 'Welcome' body = 'Hello, Web' />;

            break;
            
        case 2: // READ
            let title, body = null;

            for(let topic of topics) {
                if(topic.id === topicId) {
                    title = topic.title;
                    body = topic.body;

                    break;
                }
            }

            article = <Article title = { title } body = { body } />;

            break;
            
        case 3: // CREATE
            article = <Create />

            break;
        default:
    }

    // -------

    return (  // React.JSX.Element
        <div className='App'>

            <Header title={ 'REACT' } onClickEvent={ () => {                 // () => void
                console.debug('Header::onClickEvent() invoked.');

                // *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(1);
                setTopicId(null);
            }} />


            <Nav topics={ topics } onClickEvent = { (_id, title) => {        // (_id, title) => void
                console.debug('Nav::onClickEvent(', _id, ', ', title, ') invoked.');

                // *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(2);             // READ mode
                setTopicId(_id);
            }}></Nav>


            {/* Conditional Rendering with Symbol, {} */}
            { article }


            {/* Create a link to create a form to create a new topic. */}
            <p/>

            <a href={ '/create' } onClick={ e => {  // e => void
                console.debug('a::onClick(', e, ', ) invoked.');

                // The following statement *Not required, if link address is '#'.
                e.preventDefault();

                // *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(3);             // CREATE mode
            }}>Create</a>

        </div>
    );
}


export default App;

