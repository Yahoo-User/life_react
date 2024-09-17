console.group('- features/counter/counterAPI.js'); console.groupEnd();


/**
 * ----------------------
 *  function fetchCount(amount?: number): Promise<any>
 * ----------------------
 *  A mock function to mimic making an *async request for data
 */
export function fetchCount( amount = 1 ) {

    /**
     *  ----------------------
     *  var Promise: PromiseConstructor
     *  new <any>( executor: ( resolve: ( value: any ) => void, reject: ( reason?: any ) => void ) => void ) => Promise<any>
     *  ----------------------
     *  Creates a new Promise.
     * 
     *  @param executor
     * 
     *  A callback used to initialize the promise.
     * 
     *  This callback is passed two arguments: 
     *    (1) a resolve callback used to resolve the promise with a value or the result of another promise, 
     *    (2) a reject callback used to reject the promise with a provided reason or error.
     */
    return new Promise( ( resolve ) => setTimeout( () => resolve( { data: amount } ), 500 ) );
    
}

