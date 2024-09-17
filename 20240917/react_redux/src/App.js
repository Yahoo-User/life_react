/**
 * =======================================
 * (alias) function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void
 * =======================================
 *    (1) type EffectCallback      = () => void  | *Destructor;
 *    (2) type *Destructor          = () => void | { [UNDEFINED_VOID_ONLY]: never };
 *    (3) type DependencyList   = readonly unknown[];
 * =======================================
 *  Accepts a function that contains imperative, possibly effectful code.
 *  A React Hook that lets you synchronize a component with an external system.
 * 
 *      @param effect  — Imperative function that can return a *cleanup function.
 *      @param deps   — If present, effect will only activate if the values in the list change.
 */

import { useEffect, useState } from 'react';

import './App.css';
import { Left1, Right1 } from './components';


// Task1: Global State Management Using `useState` Hook & `props` Hierarchically Without `Redux & React Redux`.    (***)

console.group('App.js'); console.groupEnd();


const App = props => {
    console.debug('App(', props, ') invoked.');

    const [ number, setNumber ] = useState(1);

    
    /* React Component Lifecycle Callback With `useEffect` React Hook. */
    useEffect( () => { console.info('\t+ App::componentMounted.'); return () => console.info('\t- App::componentUnmounted.'); } );
    useEffect( () => { console.info('\t+ App::number(', number, ') state is changed.'); return () => console.info('\t- App::number(', number, ') state will be changed.'); }, [ number ]);
    
    
    // No return React.JSX.Element - OK.    (***)
    return <>
        <div id='container'>
            <h2>Without React Redux</h2>
            
            <h3>Root - <span>{ number }</span></h3>

            <div id='grid'>
                <Left1 number={ number } />

                <Right1 onIncrease={ () => {
                    console.log('\t+ Right1::onIncrease() invoked.');

                    // Update number state
                    setNumber(number + 1);
                    console.log('\t+ Update number state');
                }} />
            </div>
        </div>
    </>;
};


export default App;


