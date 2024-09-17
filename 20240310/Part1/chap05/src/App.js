import logo from './svg/logo.svg';
import './css/App.css';


function Header(props) { // Returns React.JSX.Element
  console.group("1. Header");
  console.info("props:", props);
  console.groupEnd()

  return (  // JSX expressions must have one parent element. ts(2657)
    <header className='App-header'>
      {/* <h1><a href="/" className='App-link'>props.title</a></h1> */}
      <h1><a href="/" className='App-link'>{props.title? props.title: "No title"}</a></h1>
    </header>
  );
} // Header

function Nav(props) {  // Returns React.JSX.Element
  console.group("2. Nav");
  console.log("props:", props, "props.topics:", props.topics);

  // props.topics.forEach(console.log);

  const arr = [];
  props.topics.forEach(topic => {
    // ** warning **: each child in a list should have a unique "key" prop.
    arr.push(<li key={topic.id}><a href={"/read/" + topic.title} className='App-link'>{topic.body}</a></li>);
  }); // .forEach

  console.groupEnd();

  return (  // JSX expressions must have one parent element. ts(2657)
    <nav>
      <ul>{arr}</ul>
    </nav>
  );
} // Nav

function Article(props) {  // Returns React.JSX.Element
  console.group("3. Article");
  console.log("props:", props);
  console.groupEnd();

  return (  // JSX expressions must have one parent element. ts(2657)
    <article>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
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
  
  console.log("topics:", topics);
  console.groupEnd();

  return (  // JSX expressions must have one parent element. ts(2657)
    <div className="App App-logo">
      <img src={ logo } className="App-logo" alt="logo" />

      {/* <Header /><br /> */}
      {/* <Header title="Web" /><br /> */}
      <Header title="React" /><br />
      <Header title="React Natives" /><br />

      <Nav topics={topics} />

      <Article title="Welcome" body="Hello, React" />
      {/* <Article title="Title2" body="Body2" /> */}
    </div>
  );
} // App


export default App;

