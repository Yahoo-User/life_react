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
 */
import {Route, Routes} from 'react-router-dom';

import logo from './svg/logo.svg';
import './css/App.css';

// Imports user-defined functional components
import {Home, Topics, Contact} from './components';


function App() {

  // React.JSX.Element
  return (
    <div className='App'>

      <p><img src={logo} className="App-logo" alt="logo" /></p>

      <h1>Hello!, React Router DOM</h1>

      <hr />
      
      <ul>
        <li><a className='App-link' href="/">1. Home</a></li>
        <li><a className='App-link' href="/topics">2. Topics</a></li>
        <li><a className='App-link' href="/contact">3. Contact</a></li>
        <li><a className='App-link' href='/abcd'>4. Not matched URL path</a></li>
      </ul>

      <hr />

      {/* Routing table made by using 'react-router-dom' */}
      
      <Routes>
        {/* (property) path: string, (property) element: React.JSX.Element */}
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/*' element={'Not Matched.'} />
      </Routes>

    </div>
  );
} // App


export default App;

