import { useEffect, useState, useRef } from 'react'
import './App.css';

import { Header, Nav, Article, Create } from './components';


console.clear(); console.log('- seq_7_App.state.monitoring.js --------');


function App() {
    console.debug('App() invoked.');

    const initialTopics = [
        { id: 1, title: 'HTML', body: 'HTML is ...' },
        { id: 2, title: 'CSS', body: 'CSS3 is ...' },
        { id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...' }
    ];

    const [ mode, setMode ] = useState( 1 );
    const [ topicId, setTopicId ] = useState( null );
    const [ topics, setTopics ] = useState( initialTopics );    
    const [ nextId, setNextId ] = useState( initialTopics.length + 1 );

    /**
     * ===============================
     *  Monitoring state changes
     * ===============================
     *  (1) Using useEffect() React Hook.
     *        function useEffect(effect: EffectCallback, deps?: DependencyList): void;
     *          - type EffectCallback = () => void | Destructor;
     *          - type DependencyList = readonly unknown[];
     * 
     *  (2) Using useRef() & useEffect() React Hooks Together.
     *        function useRef<T = undefined>(): MutableRefObject<T | undefined>;
     *          - interface MutableRefObject<T> { current: T; }
     */

    // --------------------------
    // (1) Using useEffect() React Hook.
    // --------------------------
    // if second parameter, deps? abbreviated, listenning to all states changes. (***)
    // if second parameter, deps? empty array [], specified callback function only once created. (***)

    useEffect(() => {
        console.info('\t- Changed states: mode(', mode, '), topicId(', topicId, '), nextId(', nextId, ')');
    });

    // --------------------------
    // (2) Using useRef & useEffect React Hooks Together.
    // --------------------------
    // const prevModeRef = useRef();
    // console.info('\t2-1. prevModeRef:', prevModeRef);
    //
    // useEffect(() => {
    //     if(prevModeRef.current !== mode) {
    //         console.info('\t2-2. State mode changed. (prev:', prevModeRef.current, ', curr:', mode, ')');
    //         prevModeRef.current = mode;
    //     }
    // }, [mode]);


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

