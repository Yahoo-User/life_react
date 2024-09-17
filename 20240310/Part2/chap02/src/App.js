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
      
      <Home />
      <Topics />
      <Contact />

      <hr />
    </div>
  );
} // App


export default App;

