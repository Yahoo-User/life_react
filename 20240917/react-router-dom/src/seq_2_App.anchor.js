import './App.css';

import { 
    Route,          // Declares an element that should be rendered at a certain URL path.
    Routes         // A container for a nested tree of <Route> elements that renders the branch that best matches the current location.
} from 'react-router-dom';

import { Home, Topics, Contact, About } from "./components";


console.clear(); console.debug('- seq_2_App.anchor.js -----');


function App(props) {
    console.debug('App(', props, ') invoked.');

    return <>
        <div className='App'>
            <h1>React Router DOM</h1>

            <ol>
                <li><a href='/'>Home (/)</a></li>
                <li><a href='/nav/topics'>Topics (/nav/topics)</a></li>
                <li><a href='/nav/contact'>Contact (/nav/contact)</a></li>
                <li><a href='/About'>About (/About)</a></li>
                <li><a href='NotMatched'>NotMatched (NotMatched)</a></li>
            </ol>

            <Routes>
                
                {/* The properties of <Route > :
                        1. (property) path: string
                        2. (property) Component: (props: any) => React.JSX.Element  // Functional React Component.
                        3. (property) element: React.JSX.Element
                */}
                
               {/* 
                    XX : <Route path='/' Component={ <Home /> } /> => OK1 : <Route path='/' element={ <Home /> } />
                                                                                                     OK2 : <Route path='/' component = { Home } />

                    *Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: <Home />. 
                                    Did you accidentally export a JSX literal instead of a component?

                    -----------------------------

                    XX: <Route path='/' element={ Home } />  => OK : <Route path='/' element={ <Home /> } />

                    *Warning: Functions are not valid as a React child.
                                    This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
                */}

                <Route caseSensitive={true} path="/" element={ <Home prop1={1} prop2={2} /> } />
                <Route caseSensitive={true} path="nav/topics" element={ <Topics prop1={'1'} prop2={'2'} /> } />
                <Route caseSensitive={true} path="nav/contact" Component={ Contact } />

                <Route path="/about" Component={ About } />
                <Route path='/*' element={ 
                    // ( ... )   // XX: JSX expressions must have one parent element.

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

