import './seq_6_App.css';

import {
    Route,          // Declares an element that should be rendered at a certain URL path.
    Routes,         // A container for a nested tree of <Route> elements that renders the branch that best matches the current location.
    NavLink        // A <Link> wrapper that knows if it's "active" or not.
} from 'react-router-dom';

import { Home, Topics, Contact, About } from "./components";


console.clear(); console.debug('- seq_7_App.NavLink.js -----');


function App(props) {
    console.debug('App(', props, ') invoked.');

    return <>
        <div className='App'>
            <h1>React Router DOM</h1>

            <ol>
                <li><NavLink to={ '/' }>Home (/)</NavLink></li>

                {/* -------*/}

                {/* Case1 - OK, Relative path */}
                {/* <li><NavLink to={ 'nav/topics' }>Topics (/nav/topics)</NavLink></li> */}

                {/* Case2 - OK, Absolute path */}
                <li><NavLink to={ '/nav/topics' }>Topics (/nav/topics)</NavLink></li>

                {/* -------*/}

                <li><NavLink to={ '/nav/contact' }>Contact (/nav/contact)</NavLink></li>
                <li><NavLink to={ '/About' }>About (/About)</NavLink></li>
                <li><NavLink to={ 'NotMatched' }>NotMatched (NotMatched)</NavLink></li>
            </ol>

            <Routes>
                <Route caseSensitive={true} path="/" element={ <Home prop1={1} prop2={2} /> } />
                
                {/* -------*/}
                
                {/* Case1 - OK, Relative path with trailing '*' -> path='nav/topics/*' */}
                <Route caseSensitive={true} path="nav/topics/*" element={ <Topics prop1={'1'} prop2={'2'} /> } />

                {/* Case2 - OK, Absolute path with trailing '*' -> path='/nav/topics/*' */}
                {/* <Route caseSensitive={true} path="/nav/topics/*" element={ <Topics /> } /> */}
                
                {/* -------*/}

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

