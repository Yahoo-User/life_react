import {useState} from 'react';

import logo from './svg/logo.svg';
import './css/App.css';


function Header(props) { // Returns React.JSX.Element
  console.group("1. Header");
  console.info("props:", props);
  console.groupEnd()

  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <header className='App-header'>
      <h1>
        <a
          href="/"
          className='App-link'

          onClick={ e => {
            console.clear(); console.log(e);

            e.preventDefault();
            props.onChangeMode(e);
          }}>{ props.title? props.title: "No title" }</a>
      </h1>
    </header>
  );
} // Header


function Nav(props) {  // Returns React.JSX.Element
  console.group("2. Nav");
  console.log("props:", props);

  // ------------------
  const arr = [];

  props.topics.forEach(topic => {
    // ** warning **: each child in a list should have a unique "key" prop.
    arr.push(
      <li key={ topic.id }>
        <a
          id={ topic.id } 
          // href={ "/read/" + topic.title }
          href={ "/read/" + topic.id }
          className='App-link'

          onClick={ e => {
            console.clear(); console.log(e);

            e.preventDefault();
            props.onChangeMode(e);
          }}>{ topic.body }</a>
      </li>
    );
  }); // .forEach

  // ------------------
  console.groupEnd();

  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <nav>
      <ul>{ arr }</ul>
    </nav>
  );
} // Nav


function Article(props) {  // Returns React.JSX.Element
  console.group("3. Article");
  console.log("props:", props);
  console.groupEnd();

  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <article>
      <h1>{ props.title }</h1>
      <p>{ props.body }</p>
    </article>
  );
} // Article


function App() {  // Returns React.JSX.Element
  console.clear(); console.group("App");

  const topics = [
    { id: 1, title: "/read/HTML",       body: "HTML is ..." },
    { id: 2, title: "/read/CSS",        body: "CSS is ..." },
    { id: 3, title: "/read/JAVASCRIPT", body: "JAVASCRIPT ..." }
  ];
  // console.log("topics:", topics);

  let [ mode, setMode ] = useState("WELCOME");
  console.log("mode:", mode,);

  let [ id, setId ] = useState(null);
  console.log("id:", id,);

  console.groupEnd();

  // ------------------
  let content = null;

  if(mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;
  } else if(mode === "READ") {
    let title, body = null;

    for(let i = 0; i<topics.length; i++) {
      if( topics[i].id === id ) {
        title = topics[i].title;
        body = topics[i].body;
      } // if
    } // for

    content = <Article title={ title } body={ body } />;
  } // if-else if

  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <div className="App">
      <img src={ logo } className="App-logo" alt="logo" />

      <Header
        title="WEB"

        onChangeMode={ e => {
          console.log("Header e.target:", e.target);

          setMode("WELCOME");
        }} />

      <Nav
        topics={ topics }

        onChangeMode={ e => {
          console.log("Nav e.target.id:", e.target.id);

          setMode("READ");
          setId(Number(e.target.id));
        }} />

      { content }
    </div>
  );
} // App


export default App;

