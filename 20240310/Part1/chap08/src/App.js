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
        <a href="/" className='App-link' onClick={ e => {
            e.preventDefault();
            props.onChangeMode();
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
        <a id={ topic.id } className='App-link'
          // href={ "/read/" + topic.title }
          href={ "/read/" + topic.id }
          onClick={ e => {
            e.preventDefault();
            props.onChangeMode(e);
          }}>{ topic.title }</a>
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


function Create(props) {
  console.group("4. Create");
  console.log("props:", props);
  console.groupEnd();

  // ------------------
  return ( // JSX expressions must have one parent element. ts(2657)
    <article>
      <h2>Create</h2>

      <form onSubmit={e => {
        console.debug("form::onsubmit(e) invoked.");
        e.preventDefault();

        const title = e.target.title.value; 
        const body = e.target.body.value;

        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body" cols="50" rows="5" /></p>
        <p><input type="submit" value="Create" /></p>
      </form>      
    </article>
  );
} // Create


function App() {  // Returns React.JSX.Element
  // console.clear();
  console.group("App");

  let [ mode, setMode ] = useState("WELCOME");  // mode
  let [ id, setId ] = useState(null);           // id of each topic
  let [ nextId, setNextId ] = useState(4);    // id of new topic
  let [ topics, setTopics ] = useState(         // Array of topics
    [
      { id: 1, title: "/read/HTML",       body: "HTML is ..." },
      { id: 2, title: "/read/CSS",        body: "CSS is ..." },
      { id: 3, title: "/read/JAVASCRIPT", body: "JAVASCRIPT ..." }
    ]
  );  // useState

  console.groupEnd();

  // ------------------
  let content = null;
  let title, body = null; 

  if(mode === "WELCOME") {

    title = "Welcome";
    body = "Hello, Web";

    content = <Article title={ title } body={ body } />;

  } else if(mode === "READ") {

    for(let i = 0; i < topics.length; i++) {
      if( topics[i].id === id ) {
        title = topics[i].title;
        body = topics[i].body;

        break;
      } // if
    } // for

    content = <Article title={ title } body={ body } />;

  } else if(mode === "CREATE") {

    content = <Create onCreate={ (_title, _body) => {
      console.log(`(_title, _body) = (${_title}, ${_body})`);

      const newTopic = {id: nextId, title: "/read/"+_title, body: _body};
      console.log("newTopic:", newTopic);

      // If data of state is an object, follow the below steps.
      // If so, React compares original object with updated copied object,
      // and if changed, React re-renders this component. (***)
      const copiedTopics = [...topics]; // (1) Deep copy of original array.
      copiedTopics.push(newTopic);      // (2) Change copied array.
      setTopics(copiedTopics);          // (3) Update state using copied array.
      
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);
    }} />

  } // if-else if


  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <div className="App">
      <img src={ logo } className="App-logo" alt="logo" />

      <Header title="WEB" onChangeMode={() => {
        setMode("WELCOME");
      }} />

      <Nav topics={ topics } onChangeMode={e => {
        setMode("READ");
        setId(Number(e.target.id));
      }} />

      { content }

      <br />

      <a href="/create" onClick={e => {
        e.preventDefault();
        setMode("CREATE");
      }}>Create</a>
    </div>
  );
} // App


export default App;

