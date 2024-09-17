/**
 *  ==============================
 *  1. function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void
 *  ==============================
 *  Accepts a function that contains imperative, possibly effectful code. (React *Hook)
 * 
 *  @param effect — Imperative function that can return a cleanup function
 *  @param deps   — If present, effect will only activate if the values in the list change.
 * 
 */


/**
 *  =======================
 *  "use client" Keyword.   (***)
 *  =======================
 *  You're importing a component that needs *useEffect.
 *  It only works in a *Client Component but none of its parents are marked with *"use client"*, 
 *  So they're *Server Components by default.
 * 
 *  Ref : https://chatgpt.com/share/66e808d6-2c50-8003-bb98-73dd33423eaf
 * 
 */

"use client"

import { useEffect, useState } from 'react';

import styles from '../../page.module.css';


console.clear();
console.groupCollapsed('/src/app/sub5/fetch/page.js'); console.groupEnd();


/**
 *  ==============================
 *  1. fetch( input: RequestInfo | URL, init?: RequestInit ): Promise<Response>
 *  ==============================
 *  fetch( invokedUrl )
 * 
 *  ==============================
 *  2. Promise<Response>.then<Response, never>( 
 *      onfulfilled?    : ( (value: Response) => Response | PromiseLike<Response> ) | null | undefined, 
 *      onrejected?   : ( (reason: any) => PromiseLike<...> ) | null | undefined
 *  ): Promise<...>
 *  ==============================
 *  Attaches callbacks for the resolution and/or rejection of the Promise.
 * 
 *      @param onfulfilled  — The callback to execute when the Promise is resolved.
 *      @param onrejected — The callback to execute when the Promise is rejected.
 *      @returns                 — A Promise for the completion of which ever callback is executed.
 *  ==============================
 *      .then( console.log )
 * 
 *  ==============================
 *  3. Promise<Response>.catch<never>( onrejected?: ( (reason: any) => PromiseLike<never> ) | null | undefined ): Promise<Response>
 *  ==============================
 *  Attaches a callback for only the rejection of the Promise.
 * 
 *      @param onrejected — The callback to execute when the Promise is rejected.
 *      @returns                 — A Promise for the completion of the callback.
 *  ==============================
 *      .catch( console.error )
 * 
 *  ==============================
 *  4. Promise<Response>.finally( onfinally?: ( () => void ) | null | undefined ): Promise<Response>
 *  ==============================
 *  Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected).
 *  The resolved value cannot be modified from the callback.
 * 
 *      @param onfinally — The callback to execute when the Promise is settled (fulfilled or rejected).
 *      @returns              — A Promise for the completion of the callback.
 *  ==============================
 *      .finally( () => {} );
 * 
 */

/**
 * 1st. method to declare functional React component with next.js version 13+.

const Fetch = props => {
    console.groupCollapsed('Fetch(', props, ') invoked.');
*/

/**
 * 2nd. method to declare functional React component with next.js version 13+.
 */
const Fetch = ( { params, searchParams } ) => {
    console.groupCollapsed('Fetch( { params, searchParams } ) invoked.');

    console.log('1. params:', params);

    // ***searchParams: To get query parameters with HTTP *get/*post methods by an JS object.
    console.log('2. searchParams:', searchParams);

    /**
     *  Important:
     *  The environment variables could be accessed with *process.env.<EnvironmentVariableName> declared in `<project>/.env` file,
     *  Where, <EnvironmentVariableName> with `*NEXT_PUBLIC_` prefix could be accessed in the web browser.
     */        

    console.log('3. process:', process);
    console.log('4. process.env.NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);

    const invokedUrl = process.env.NEXT_PUBLIC_API_URL + 'api/hello';
    console.log('5. invokedUrl:', invokedUrl);

    const [ user, setUser ] = useState( { "name": null } );

    useEffect(() => {

        fetch( invokedUrl )
            .then( response => {
                if(response.ok) return response.json();
                else if(response.status === 200) return response.json();
                else return response;
            } )
            .then( json => {
                console.log('json:', json, ', user:', user);
                if( json.name !== user.name ) setUser(json);    // Update State: user
            } )
            .catch( console.error )
            .finally( () => console.log('Done.') );

    }); // useEffect

    console.log('6. user:', user);

    console.groupEnd();

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub5/fetch.js</h2>
            <hr/>

            <p>{ user.name }</p>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};


export default Fetch;

