import {createContext} from 'react';


/**
 * ----------------------------------------------------------
 * 1. function createContext<T>(defaultValue: T): Context<T>;
 * ----------------------------------------------------------
 * Lets you create a Context that components can provide or read.
 *
 * @param defaultValue
 *  The value you want the context to have when there is no matching "Provider"
 *  in the tree above the component reading the context.
 * 
 *  This is meant as a "last resort" fallback.
 *
 * @example
 * 
 *  import { createContext } from 'react';
 *  const ThemeContext = createContext('light');
 *  
 * ----------------------------------------------------------
 * 2. interface Context<T> {
 *      Provider: Provider<T>;  // React Element    -> use as like a <tag />
 *      Consumer: Consumer<T>;  // React Element    -> use as like a <tag />
 *    }
 * ----------------------------------------------------------
 * Context lets components pass information deep down without explicitly passing `props`.
 * Created from "createContext".
 * 
 */

console.clear();


// ********************************
// Step1. Create a React Context
// ********************************

// (alias) createContext<any>(defaultValue: any): React.Context<any>

const MyContext = createContext('DefaultSharedValue');
console.info("1. MyContext:", MyContext, typeof MyContext, MyContext.constructor.prototype);


// ********************************
// Step2. Define a functional component as a React Context Provider
// ********************************
export
function MyProvider(
    // props            // 1st. method: { children: {...} }, children => type: ƒ MyConsumer(props), Symbol(react.element)
    { children }  // 2nd. method: Destructuring Assignment, children => type: ƒ MyConsumer(props), Symbol(react.element)
) {
    // console.info("2. MyProvider(", props, ") invoked.");
    console.info("2. MyProvider(", children, ") invoked.");

    // ===========================================
    // 1. If sharedData is a string : OK
    // ===========================================
    // const sharedData = "SharedData";                     // OK

    // ===========================================
    // 2. If sharedData is an object literal : XX
    // ===========================================
    // Objects are *NOT* valid as a React *Child* (found: object with keys {name, age}).
    // If you meant to render a collection of children, use an *array* instead.

    // const sharedData = { name: "Yoseph", age: 23 };         // XX

    // ===========================================
    // 3. If sharedData is an Array have 
    //    primitive (string, number, boolean) type's elements : OK
    // ===========================================

    const sharedData = [ 1, 2, 3 ];                         // OK

    // const sharedData = [                                    // OK
    //     'Element1',
    //     'Element2',

    //     3.14,            // converted to a string ('3.14')
    //     NaN,             // converted to a string ('NaN')
    //     Infinity,        // converted to a string ('Infinity')

    //     true,            // rendered, just as a '' (empty string)
    //     undefined,       // rendered, just as a '' (empty string)
    //     null,            // rendered, just as a '' (empty string)
    // ];

    // const sharedData = [                                    // OK, 
    //     // But <p></p> is *NOT* recognized as a <tag>, just string. (***)

    //     '<p>Element1</p>',
    //     '<p>Element2</p>',
    // ];

    // ===========================================
    // 4. If sharedData is an Array have object type's elements : XX
    // ===========================================
    // Objects are *NOT* valid as a React *Child* (found: object with keys {name, age}).
    // If you meant to render a collection of children, use an *array* instead.

    // const sharedData = [ {name: "Yoseph"}, {age: 23} ];     // XX 
    
    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <MyContext.Provider value={ sharedData }>
            {/* { props.children } */}
            { children }
        </MyContext.Provider>
    );
} // MyProvider


// ********************************
// Step3. Define a functional component as a React Context Consumer
// ********************************
export
function MyConsumer(props) {
    console.info("3. MyConsumer(", props, ") invoked.");            // props: {}, empty object
    // console.log("\t+ sharedValue:", sharedValue);                // XX: 'sharedValue' is not defined. (***)
    
    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h2>1. MyConsumer</h2>

            <MyContext.Consumer>
                {   // function(sharedValue: string): React.JSX.Element

                    // ------------
                    // OK, 1st: Arrow function
                    // ------------
                    // sharedValue => <h2>sharedValue: {sharedValue}</h2>
                    
                    // ------------
                    // OK, 2nd: Anonymous function
                    // ------------
                    function (sharedValue) {
                        return <h2>sharedValue: {sharedValue}</h2>
                    } // Anonymous
                }
            </MyContext.Consumer>

            <MyChildConsumer />
        </div>
    );
} // MyConsumer


export
function MyChildConsumer(props) {
    console.info("4. MyChildConsumer(", props, ") invoked.");        // props: {}, empty object
    // console.log("\t+ sharedValue:", sharedValue);                // XX: 'sharedValue' is not defined. (***)
    
    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h3>2. MyChildConsumer</h3>

            <MyContext.Consumer>
                {sharedValue => <h3>sharedValue: {sharedValue}</h3>}
            </MyContext.Consumer>

            <MyChildChildConsumer />
        </div>
    );
} // MyChildConsumer


export
function MyChildChildConsumer(props) {
    console.info("5. MyChildChildConsumer(", props, ") invoked.");  // props: {}, empty object
    // console.log("\t+ sharedValue:", sharedValue);                // XX: 'sharedValue' is not defined. (***)
    
    // --------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h4>3. MyChildChildConsumer</h4>

            <MyContext.Consumer>
                {sharedValue => <h4>sharedValue: {sharedValue}</h4>}
            </MyContext.Consumer>
        </div>
    )
    
} // MyChildChildConsumer




