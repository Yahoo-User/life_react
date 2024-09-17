import './App.css';

import {
    Route,          // Declares an element that should be rendered at a certain URL path.
    Routes,         // A container for a nested tree of <Route> elements that renders the branch that best matches the current location.
    Link              // The public API for rendering a history-aware <a>.
} from 'react-router-dom';

import { Home, Topics, Contact, About } from "./components";


console.clear(); console.debug('- seq_3_App.Link.js -----');


function App(props) {
    console.debug('App(', props, ') invoked.');

    return <>
        <div className='App'>
            <h1>React Router DOM</h1>

            <ol>
                <li><Link to={ '/' }>Home (/)</Link></li>
                <li><Link to={ '/nav/topics' }>Topics (/nav/topics)</Link></li>
                <li><Link to={ '/nav/contact' }>Contact (/nav/contact)</Link></li>
                <li><Link to={ '/About' }>About (/About)</Link></li>
                <li><Link to={ 'NotMatched' }>NotMatched (NotMatched)</Link></li>
            </ol>

            <Routes>
                <Route caseSensitive={true} path="/" element={ <Home prop1={1} prop2={2} /> } />
                <Route caseSensitive={true} path="nav/topics" element={ <Topics prop1={'1'} prop2={'2'} /> } />
                <Route caseSensitive={true} path="nav/contact" Component={ Contact } />

                <Route path="/about" Component={ About } />
                <Route path='/*' element={ 
                    <>
                        <hr/>

                        <h3><mark>5. Not Found.</mark></h3>

                        No path matched found ...

                        <hr/>
                    </>
                } />
            </Routes>
        </div>
    </>;
}

export default App;

