import { useEffect, useState } from 'react';

/**
 *  ==============================
 *  1. function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void
 *  ==============================
 *  2. type EffectCallback = () => void | Destructor;
 * 
 *      Note: callbacks are _only_ allowed to return either void, or a destructor.
 *  ==============================
 *  3. type DependencyList = readonly unknown[];
 *  ==============================
 *  4. type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never; }
 * 
 *      The function returned from an effect passed to useEffect, 
 *      which can be used to clean up the effect when the component unmounts.
 *  ==============================
 *  Accepts a function that contains imperative, possibly effectful code. (React *Hook)
 * 
 *  @param effect — Imperative function that can return a cleanup function
 *  @param deps   — If present, effect will only activate if the values in the list change.
 * 
 */

import styles from '../../styles/Home.module.css';


console.clear();
console.groupCollapsed('/pages/sub/fetch.js'); console.groupEnd();


/**
 *  ==============================
 *  1. fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
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
 *  @param onfulfilled  — The callback to execute when the Promise is resolved.
 *  @param onrejected — The callback to execute when the Promise is rejected.
 *  @returns                 — A Promise for the completion of which ever callback is executed.
 *  ==============================
 * .then( console.log )
 * 
 *  ==============================
 *  3. Promise<Response>.catch<never>( onrejected?: ( (reason: any) => PromiseLike<never> ) | null | undefined ): Promise<Response>
 *  ==============================
 *  Attaches a callback for only the rejection of the Promise.
 * 
 *  @param onrejected — The callback to execute when the Promise is rejected.
 *  @returns                 — A Promise for the completion of the callback.
 *  ==============================
 * .catch( console.error )
 * 
 *  ==============================
 *  4. Promise<Response>.finally( onfinally?: ( () => void ) | null | undefined ): Promise<Response>
 *  ==============================
 *  Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected).
 *  The resolved value cannot be modified from the callback.
 * 
 *  @param onfinally — The callback to execute when the Promise is settled (fulfilled or rejected).
 *  @returns              — A Promise for the completion of the callback.
 *  ==============================
 *  .finally( () => {} );
 * 
 */

/**
 * ----------------------
 * XX : 2nd. method - Function parameter are different from Next.js version 13+.  (***)
 * ----------------------
const Fetch = ( { params, searchParams } ) => {     // XX
    console.groupCollapsed('Fetch( { params, searchParams } ) invoked.');

    console.log('1. params:', params);
    console.log('2. searchParams:', searchParams);
*/

const Fetch = props => {
    console.groupCollapsed('Fetch(', props, ') invoked.');

    /**
     *  Important: 
     *  The environment variables could be accessed with *process.env.<EnvironmentVariableName> declared in `<project>/.env` file,
     *  Where, <EnvironmentVariableName> with `*NEXT_PUBLIC_` prefix could be accessed in the web browser.
     */        

    console.log('1. process:', process);
    console.log('2. process.env.NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);

    const invokedUrl = process.env.NEXT_PUBLIC_API_URL + 'api/hello';
    console.log('3. invokedUrl:', invokedUrl);

    const [ user, setUser ] = useState( { "name": null } );

    useEffect(() => {

        fetch( invokedUrl )
            .then( response => {
                if(response.ok) return response.json();
                else if(response.status === 200) return response.json();
                else return response;
            })
            .then( json => {
                console.log('json:', json, ', user:', user);
                if( json.name !== user.name ) setUser(json);    // Update State: user
            })
            .catch( console.error )
            .finally( () => console.log('Done.') );

    }); // useEffect

    console.log('4. user:', user);

    console.groupEnd();

    return <>
        <div className={ styles.container }>
            <h2>/pages/sub/fetch.js</h2>
            <hr/>

            <p>{ user.name }</p>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};


export default Fetch;

