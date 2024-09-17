import logo from './svg/logo.svg';
import './css/App.css';


function Header() { // Returns React.JSX.Element
  return (  // JSX expressions must have one parent element. ts(2657)
    <header className='App-header'>
      <h1><a href="/" className='App-link'>Web</a></h1>
    </header>
  );
} // Header

function Nav() {  // Returns React.JSX.Element
  return (  // JSX expressions must have one parent element. ts(2657)
    <nav>
      <ul>
        <li><a href="/read/1" className='App-link'>HTML</a></li>
        <li><a href="/read/2" className='App-link'>CSS</a></li>
        <li><a href="/read/3" className='App-link'>JAVASCRIPT</a></li>
      </ul>
    </nav>
  );
} // Nav

function Article() {  // Returns React.JSX.Element
  return (  // JSX expressions must have one parent element. ts(2657)
    <article>
      <h2>Welcome</h2>
      Hello, Web
    </article>
  );
} // Article

function App() {  // Returns React.JSX.Element
  return (  // JSX expressions must have one parent element. ts(2657)
    <div className="App App-logo">
      <img src={ logo } className="App-logo" alt="logo" />

      <Header /><br />
      <Header /><br />
      <Header /><br />

      <Nav />

      <Article />
    </div>
  );
} // App


export default App;

