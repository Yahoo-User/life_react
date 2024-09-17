import './seq_2_App.css';


const App = props => {
    console.debug('App(', props, ') invoked.');

    return <>
        <div className="App">
            <input type='button' value={ '-' } />
            <input type='button' value={ '0' } />
            <input type='button' value={ '+' } />

            <br/><br/>

            <span>{ 0 }</span>
        </div>
    </>;
};


export default App;

