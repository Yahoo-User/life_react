import React from 'react';

import { Counter } from './features/counter/Counter';

import logo from './logo.svg';    // Absolute Path of .svg File.
import './App.css';


console.group('- App.js -------------'); console.groupEnd();


function App() {
    console.group('App() invoked.'); console.groupEnd();

    return (
        <div className="App">

            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />

                <Counter />

                <p className='text'>Edit <code>src/App.js</code> and save to reload.</p>

                <span className='text'>
                    <span>Learn</span>&nbsp;

                    <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >React</a><span>, </span>
                    <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a><span>, </span>
                    <a className="App-link" href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">Redux Toolkit</a>,<span> and </span>
                    <a className="App-link" href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">React Redux</a>
                </span>
            </header>

        </div>
    );
}


export default App;
