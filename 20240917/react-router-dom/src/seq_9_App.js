import { Route, Routes, NavLink } from 'react-router-dom';

import './seq_6_App.css';
import { Home, Topics, Contact, About } from "./components";


console.clear(); console.debug('- seq_9_App.js -----');


function App(props) {
    console.debug('App(', props, ') invoked.');

    return <>
        <div className='App'>
            <h1>React Router DOM</h1>

            <ol>
                <li key={1}><NavLink to={ '/' }>Home</NavLink></li>
                <li key={2}><NavLink to={ '/nav/topics' }>Topics</NavLink></li>
                <li key={3}><NavLink to={ '/nav/contact' }>Contact</NavLink></li>
                <li key={4}><NavLink to={ '/About' }>About</NavLink></li>
                <li key={5}><NavLink to={ 'NotMatched' }>NotMatched</NavLink></li>
            </ol>

            <Routes>
                <Route path="/" element={ <Home prop1={1} prop2={2} /> } />
                <Route path="/nav/topics/*" Component={ Topics } />
                <Route path="/nav/contact" Component={ Contact } />
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

