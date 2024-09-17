import './App.css';

/**
 * ------------------
 * Before declaring index.js in the `./components` directory.
 * ------------------
 * import Header from './components/Header';
 * import Nav      from './components/Nav';
 * import Article  from './components/Article';
 */

// After declaring index.js in the `./components` directory.
import { Header, Nav, Article } from './components';


console.clear(); console.log('- seq_1_App.props.js --------');


function App() {  // React Functional Component
    console.debug('App() invoked.');

    const topics = [
        {id: 1, title: 'HTML', body: 'HTML is ...'},
        {id: 2, title: 'CSS', body: 'CSS3 is ...'},
        {id: 3, title: 'JAVASCRIPT', body: 'JAVASCRIPT is ...'}
    ];

    console.log('\t+ topics:', topics);


    return (  // React.JSX.Element
        <div className='App'>

            {/* // 1st. method : passing a anonymous function as a Event Handler. */}
            {/* <Header title={ 'REACT' } onClickEvent={function () { */}

            {/* // 2nd. method: passing a arrow function as a Event Handler. */}
            <Header title={ 'REACT' } onClickEvent={ () => {
                console.debug('Header::onClickEvent() invoked.');

                alert('Header::onClickEvent');
            }} />


            <Nav topics={ topics } onClickEvent = { (id, title) => {
                console.debug('Nav::onClickEvent(', id, ', ', title, ') invoked.');

                alert(id + ', ' + title);
            }}></Nav>


            <Article title='Welcome' body='Hello, Web!'></Article>

        </div>
    );
}

export default App;

