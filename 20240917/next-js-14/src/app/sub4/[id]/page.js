/**
 *  =======================
 *  function useParams<T extends Params = Params>(): T
 *  =======================
 *  A Client Component hook that lets you read a route's dynamic params filled in by the current URL.
 * 
    @example

        "use client"
        import { useParams } from 'next/navigation'

        export default function Page() {
            // on /dashboard/[team] where pathname is /dashboard/nextjs
            const { team } = useParams()        // team === "nextjs"
        }
 */

/**
 *  =======================
 *  "use client" Keyword
 *  =======================
 *  You're importing a component that needs **useParams.
 *  It only works in a **Client Component but none of its **parents are marked with "use client" (***), 
 *  So they're **Server Components by default.
 * 
 * Ref : https://chatgpt.com/share/66e808d6-2c50-8003-bb98-73dd33423eaf
 */

"use client"

import { useParams } from 'next/navigation';

import styles from '../../page.module.css';


console.group('/src/app/sub4/[id]/page.js'); console.groupEnd();


export default
function Sub4Id( props ) {
    console.debug('Sub4Id(', props, ') invoked.');

    const { id } = useParams();
    console.info("\t+ id:", id);

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub4/[id]/page.js</h2>
            <hr/>

            <p>Request Parameter Id: <strong className={ styles.strong }>{ id }</strong></p>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};


