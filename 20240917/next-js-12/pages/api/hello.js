// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

console.clear();
console.groupCollapsed("/pages/api/hello.js"); console.groupEnd();

/**
 *  (1) Returns the names of the enumerable string properties and methods of an object.
 * 
 *      Object.keys( obj )
 * 
 *  (2) Returns the prototype of an object.
 * 
 *      Object.getPrototypeOf( obj )
 * 
 *  (3) Returns an array of all symbol properties found directly on object o.
 * 
 *      Object.getOwnPropertySymbols( obj )
 * 
 *  (4) Returns the names of the own properties of an object.
 *        The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype.
 *        The properties of an object include both fields (objects) and functions.
 * 
 *      Object.getOwnPropertyNames( obj )
 *
 *  Example:

        const obj = { name: 'Yoseph', age: 23 };
        
        Object.keys( obj );                                     // [ 'exclude', 'extract', 'parse', 'parseUrl', 'pick', 'stringify', 'stringifyUrl' ]
        Object.getPrototypeOf( obj );                   // null
        Object.getOwnPropertySymbols( obj );    // [ Symbol(Symbol.toStringTag) ]
        Object.getOwnPropertyNames( obj );      // [ 'exclude', 'extract', 'parse', 'parseUrl', 'pick', 'stringify', 'stringifyUrl' ]

 */

export default
function handler(req, res) {
    console.groupCollapsed('handle(req, res) invoked.');

    // console.log('1. prototype:', Object.getPrototypeOf(req));                                           // OK
    // console.log('2. keys:', Object.keys(req));                                                                    // OK
    // console.log('3. ownPropertySymbols:', Object.getOwnPropertySymbols(req));        // OK
    // console.log('4. ownPropertyNames:', Object.getOwnPropertyNames(req));             // OK

    /**
        const propertyNames = [];

        for(let propertyName in req) {
            propertyNames.push(propertyName);
        }

        console.log('5. All property names in req:', propertyNames);
        propertyNames.splice(0);

        for(let propertyName in res) {
            propertyNames.push(propertyName);
        }

        console.log('6. All property names in res:', propertyNames);
        propertyNames.splice(0);
     */

    console.groupEnd();

    res.status(200).json({ name: 'John Doe' });
}


