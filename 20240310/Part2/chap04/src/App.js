/**
 * -------------------------------
 * 2. Route functional component
 * -------------------------------
 *    Declares an element that should be rendered at a certain URL path.
 * 
 * -------------------------------
 * 3. Routes functional component
 * -------------------------------
 *    A container for a nested tree of `<Route>` elements that renders the branch
 *    that best matches the current location.
 * 
 * -------------------------------
 * 4. Link functional component
 * -------------------------------
 *    The public API for rendering a history-aware `<a>`.
 * 
 * -------------------------------
 * 5. NavLink functional component
 * -------------------------------
 *    A `<Link>` wrapper that knows if it's "active" or not.
 * 
 */
import {Route, Routes, Link, NavLink} from 'react-router-dom';

import logo from './svg/logo.svg';
import './css/App.css';

// Imports user-defined functional components
import {Home, Topics, Contact, NotMatched} from './components';


function App() {

  // React.JSX.Element
  return (
    <div className='App'>
      <p><img src={logo} className="App-logo" alt="logo" /></p>
      <h1>Hello!, React Router DOM</h1>

      <hr />

      <ul>
{/* 
        <li><a className='App-link' href="/">1. Home</a></li>
        <li><a className='App-link' href="/topics">2. Topics</a></li>
        <li><a className='App-link' href="/contact">3. Contact</a></li>
        <li><a className='App-link' href='/abcd'>4. Not matched URL path</a></li>
*/}

        {/* (property) LinkProps.to: To, export type To = string | Partial<Path>; */}
{/* 
        <li><Link className='App-link' to="/">1. Home</Link></li>
        <li><Link className='App-link' to="/topics">2. Topics</Link></li>
        <li><Link className='App-link' to="/contact">3. Contact</Link></li>
        <li><Link className='App-link' to='/abcd'>4. Not matched URL path</Link></li>
*/}

        <li><NavLink className='App-link' to="/">1. Home</NavLink></li>
        <li><NavLink className='App-link' to="/topics">2. Topics</NavLink></li>
        <li><NavLink className='App-link' to="/contact">3. Contact</NavLink></li>
        <li><NavLink className='App-link' to='/abcd'>4. Not matched URL path</NavLink></li>
      </ul>

      <hr />

      {/* Routing table made by using 'react-router-dom' */}
      <Routes>
        {/* (property) path: string, (property) element: React.JSX.Element */}

        <Route path='/'         element={<Home />} />
        <Route path='/topics'   element={<Topics />} />
        <Route path='/contact'  element={<Contact />} />
        <Route path='/*'        element={<NotMatched />} />
      </Routes>
    </div>
  );
} // App


export default App;

