import { useEffect, useState } from 'react'
import './App.css';

import { Header, Nav, Article, Create, Update } from './components';


console.clear(); console.log('- seq_9_App.update-2.js --------');


function App() {
    console.debug('App() invoked.');

    const initialTopics = [
        { id: 1, title: 'HTML', body: 'HTML is ...' },
        { id: 2, title: 'CSS', body: 'CSS3 is ...' },
        { id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...' }
    ];

    const [ mode, setMode ]         = useState( 1 );
    const [ topicId, setTopicId ]    = useState( null );
    const [ topics, setTopics ]       = useState( initialTopics );    
    const [ nextId, setNextId ]      = useState( initialTopics.length + 1 );

    /**
     * --------------------------
     * Monitoring state changes
     * --------------------------
     * - if second parameter of useEffect() hook, deps? abbreviated, listenning to all states changes. (***)
     * - if second parameter of useEffect() hook, deps? empty array [], specified callback function only once created. (***)
     */

    useEffect( () => console.info('\t- Monitoring states: mode(', mode, '), topicId(', topicId, '), nextId(', nextId, ')') );


    // -------

    let article = '';                       // let variable to have a React component.
    let contextControl = null;      // Along with context, UI control appeared.

    switch(mode) {
        case 1: // DEFAULT
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

            contextControl = <li>
                    <a href={ '/update/' + topicId } onClick={ e => {
                        console.debug('contextControl::a::onClick(', e, ') invoked.');

                        e.preventDefault();

                        setMode(4);                 // UPDATE Mode.
                    }}>Update</a>
                </li>;

            break;
            
        case 3: // CREATE
            article = <Create onCreate={ (_title, _body) => {
                console.debug('Create::onCreate(', _title, ', ', _body, ') invoked.');

                const newTopic = { id: nextId, title: _title, body: _body };
                console.info('\t+ newTopic:', newTopic);

                const newTopics = [ ...topics ];       // Deep copy using `[ ... object ]`
                newTopics.push( newTopic );

                setTopics( newTopics );                 // Update `topics` state.
                setMode(1);                                  // Update `mode` state.
                setTopicId( newTopic.id );             // Update `topicId` state.
                setNextId( newTopic.id + 1 );         // Update `nextId` state.
            }} />

            break;

        case 4: // UPDATE
            let title2, body2 = null;

            for(let topic of topics) {
                if(topic.id === topicId) {
                    title2 = topic.title;
                    body2 = topic.body;

                    break;
                }
            }

            article = <Update title={title2} body={body2} onUpdate = { (_title, _body ) => {
                console.debug('Update::onUpdate(', _title, ', ', _body, ') invoked.');

                // (1) Create a updatable topic.
                const updatableTopic = { id: topicId, title: _title, body: _body };

                // (2) Copy original topics array deeply with spread operator. ( [ ...variable ] )
                const newTopics = [...topics];

                // (3) Replace updatable topic with new topic created at above (1)
                for(let index in newTopics) {
                    if(newTopics[index].id === updatableTopic.id) {
                        newTopics[index] = updatableTopic;
                        break;
                    }
                }

                // (4) Set topics state with new topics -> Dirty state -> Re-rendering this React component -> Clean state.
                setTopics(newTopics);
            }} />;

            break;

        default:
    }

    // -------

    return (  // React.JSX.Element
        <div className='App'>

            <Header title={ 'REACT' } onClickEvent={ () => {
                console.debug('Header::onClickEvent() invoked.');

                setMode(1);             // Default Mode
                setTopicId(null);
            }} />


            <Nav topics={ topics } onClickEvent = { (_id, _title) => {
                console.debug('Nav::onClickEvent(', _id, ', ', _title, ') invoked.');

                setMode(2);             // READ Mode
                setTopicId(_id);
            }}></Nav>
            
            { article }                     {/* Conditional Rendering with Symbol, {} */}

            {/* ----------- */}

            <ul>
                <li>
                    <a href={ '/create' } onClick={ e => {  // e => void
                        console.debug('a::onClick(', e, ') invoked.');

                        e.preventDefault();
                        setMode(3);             // CREATE mode
                    }}>Create</a>
                </li>

                { contextControl }
            </ul>

        </div>
    );
}


export default App;

