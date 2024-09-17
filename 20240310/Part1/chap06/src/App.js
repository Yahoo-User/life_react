import logo from './svg/logo.svg';
import './css/App.css';


function Header(props) { // Returns React.JSX.Element
  console.group("1. Header");
  console.info("props:", props);
  console.groupEnd()

  // ------------------
  // Event Handler
  // ------------------
  // function onClickEventHandler(e) {    // 1st. method : named function
  //   console.clear();
  //   console.debug("a::onClick(", e, ") event handler invoked.");

  //   e.preventDefault();       // 1. Prevent default event processing.
  //   props.onChangeMode(e);  // 2. Call back user-defined event handler.
  // } // onClick Event Handler

  // ------------------
  var onClickEventHandler = (e) => {    // 2nd. method: arrow function
    console.clear();
    console.debug("a::onClick(", e, ") event handler invoked.");

    e.preventDefault();       // 1. Prevent default event processing.
    props.onChangeMode(e);  // 2. Call back user-defined event handler.
  };  // onClick Event Handler

  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <header className='App-header'>
      <h1><a href="/" className='App-link' onClick={ onClickEventHandler }>{ props.title? props.title: "No title" }</a></h1>
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
    arr.push(<li key={ topic.id }><a id={ topic.id } href={ "/read/" + topic.title } className='App-link' onClick={ (e) => {
      console.clear(); console.debug("a::onClick(", e, ") event handler invoked.");

      e.preventDefault();

      props.onChangeMode(e.target.id);   // 1st. method
      // props.onChangeMode(e);          // 2nd. method
    }}>{ topic.body }</a></li>);
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

  console.log("topics:", topics);
  console.groupEnd();

  // ------------------
  // Event Handler
  // ------------------
  // function onChangeModeEventHandler(e) {    // 1st. method : named function
  //   console.debug("Header::onChangeMode(", e, ") event handler invoked.");
  // 
  //   alert('Header');
  // } // onChangeMode EventHandler
  
  // ------------------
  var onChangeModeEventHandler = (e) => {   // 2nd. method : arrow function
    console.debug("Header::onChangeMode(", e, ") event handler invoked.");

    alert('Header');
  };  // onChangeMode EventHandler

  // ------------------
  return (  // JSX expressions must have one parent element. ts(2657)
    <div className="App">
      <img src={ logo } className="App-logo" alt="logo" />

      <Header title="React" onChangeMode={ onChangeModeEventHandler } />

      <Nav topics={ topics }

        onChangeMode={ id => { // id => void
          console.debug("Nav::onChangeMode(", id, ") event handler invoked.");
          alert(id);
        }} // 1st. method

        // onChangeMode = { e => {
        //   console.debug("Nav::onChangeMode(", e, ") event handler invoked.");
        //   alert(e.target.id);
        // }}  // 2nd. method
      />

      <Article title="Welcome" body="Hello, React" />
    </div>
  );
} // App


export default App;

