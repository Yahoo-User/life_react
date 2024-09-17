import { useState } from 'react'
import './App.css';

import { Header, Nav, Article, Create } from './components';


console.clear(); console.log('- seq_6_App.create-3.js --------');


function App() {
    console.debug('App() invoked.');

    const initialTopics = [
        { id: 1, title: 'HTML', body: 'HTML is ...' },
        { id: 2, title: 'CSS', body: 'CSS3 is ...' },
        { id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...' }
    ];

    const [ mode, setMode ] = useState( 1 );
    const [ topicId, setTopicId ] = useState( null );

    // Append new states for creating a new topic.
    const [ topics, setTopics ] = useState( initialTopics );
    console.info('\t+ topics:', topics);
    
    const [ nextId, setNextId ] = useState( initialTopics.length + 1 );
    console.info('\t+ nextId:', nextId);

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
            article = <Create onCreate={ (_title, _body) => {
                console.debug('Create::onCreate(', _title, ', ', _body, ') invoked.');

                const newTopic = { id: nextId, title: _title, body: _body };
                console.info('\t+ newTopic:', newTopic);

                /**
                 * XX, Wrong method : due to No topics state changes.
                 
                    topics.push(newTopic);
                    setTopics(topics);
                 */

                // Append a new topic into the deep copied topics, *Not origin topics to be different from original topics. (***)
                const deepCopiedTopics = [ ...topics ];       // Deep copy using `[ ... object ]`
                deepCopiedTopics.push( newTopic );

                setTopics( deepCopiedTopics );        // Update `topics` state.
                setMode(1);                                     // Update `mode` state.
                setTopicId( newTopic.id );               // Update `topicId` state.
                setNextId( newTopic.id + 1 );           // Update `nextId` state.
            }} />

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


            <Nav topics={ topics } onClickEvent = { (_id, _title) => {        // (_id, title) => void
                console.debug('Nav::onClickEvent(', _id, ', ', _title, ') invoked.');

                // *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(2);             // READ mode
                setTopicId(_id);
            }}></Nav>


            {/* Conditional Rendering with Symbol, {} */}
            { article }


            {/* Create a link to create a form to create a new topic. */}
            <p/>

            <a href={ '/create' } onClick={ e => {  // e => void
                console.debug('a::onClick(', e, ') invoked.');

                // The following statement *Not required, if link address is '#'.
                e.preventDefault();

                // *Important: When re-rendering the React component, changed states applied.  (***)
                setMode(3);             // CREATE mode
            }}>Create</a>

        </div>
    );
}


export default App;

