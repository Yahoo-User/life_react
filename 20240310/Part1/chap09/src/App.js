import logo from './svg/logo.svg';
import './css/App.css';

import {useState} from 'react';
import {Header, Nav, Article, Create, Update} from './components';


function App(props) {   // Returns React.JSX.Element
  console.group("0. App"); 
  console.log("props:", props);
  console.groupEnd();

  // ------------------
  let [ mode, setMode ]     = useState("WELCOME");  // mode state
  let [ id, setId ]         = useState(null);       // id state for each topic
  let [ nextId, setNextId ] = useState(4);          // nextId state for new topic
  let [ topics, setTopics ] = useState(             // topics state for Array of topics
    [
      { id: 1, title: "/read/HTML",       body: "HTML is ..." },
      { id: 2, title: "/read/CSS",        body: "CSS is ..." },
      { id: 3, title: "/read/JAVASCRIPT", body: "JAVASCRIPT ..." }
    ]
  );  // useState

  // ------------------
  let content, contextControl = null;

  if(mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web" />;

  } else if(mode === "READ") {
    for(let topic of topics) {
      if(topic.id === id) {
        content = <Article title={ topic.title } body={ topic.body } />;
        break;
      } // if
    } // for-of

    // --------------
    contextControl = 
      <li><a href={"/update"+id} onClick={e => {
        e.preventDefault();
        setMode("UPDATE");              // Update state -> Re-render this component
      }}>Update</a></li>;

  } else if(mode === "CREATE") {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id: nextId, title: "/read/"+_title, body: _body};

      // --------------
      // Add new topic into deep copied array
      // for updating state -> Re-render this component
      // --------------
      // If data of state is an object, follow the below steps.
      // If so, React compares original object with updated copied object,
      // and if changed, React re-renders this component. (***)
      const newTopics = [...topics]; // (1) Deep copy of original array.
      newTopics.push(newTopic);      // (2) Change copied array.
      setTopics(newTopics);          // (3) Update state using copied array
      
      // --------------
      // Update state -> Re-render this component
      // --------------
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);
    }} />

  } else if(mode === "UPDATE") {
    for(let topic of topics) {
      if(topic.id === id) {
        content = <Update title={topic.title} body={topic.body} onUpdate={(_title, _body) => {
          console.log(`UPDATE - (title, body) = (${_title}, ${_body})`);

          const updatedTopic = { id: id, title: _title, body: _body };

          const newTopics = [...topics];
          newTopics[id - 1] = updatedTopic;

          setTopics(newTopics);
          setMode("READ");
        }} />;

        break;
      } // if
    } // for-of

  } // multiple if

  // ------------------
  // JSX expressions must have one parent element. ts(2657)

  return (
    <div className="App">
      <img src={ logo } className="App-logo" alt="logo" />

      <Header title="WEB" onChangeMode={() => {
        setMode("WELCOME");             // Update state -> Re-render this component
      }} />

      <Nav topics={ topics } onChangeMode={e => {
        setMode("READ");                // Update state -> Re-render this component
        setId(Number(e.target.id));     // Update state -> Re-render this component
      }} />

      { content }

      <ul>
        <li>
          <a href="/create" onClick={e => {
              e.preventDefault();
              setMode("CREATE");              // Update state -> Re-render this component
            }}>Create</a>
        </li>

        {contextControl}
      </ul>
    </div>
  );
} // App


export default App;

