/**
 *  ============================
 *  const Link: ForwardRefExoticComponent
 *  ============================
 *  A React component that extends the HTML <a> element to provide prefetching and client-side navigation between routes.
 *  It is the primary way to navigate between routes in Next.js.
 * 
 *  ============================
 *  const Image: ForwardRefExoticComponent
 *  ============================
 *  The Image component is used to optimize images.
 */

import Link from 'next/link';
import Image from 'next/image';


/**
 *  ============================
 *  const styles: { readonly [ key: string ]: string; }
 *  ============================
 *  styles 객체가 특정한 구조를 가진다고 선언하는 타입 정의입니다.
 *  이를 해석해보면 다음과 같습니다:
 * 
 *  1. const styles: - styles 라는 상수 변수의 타입을 정의합니다.
 *  2. { readonly [key: string]: string; } - styles 객체의 타입을 정의합니다.
 * 
 *  이 객체는 다음과 같은 특성을 가집니다:
 * 
 *  3. readonly - 이 객체의 속성들은 읽기 전용입니다. 
 *                       즉, 한 번 값이 설정되면, 이후에 값을 변경할 수 없습니다.
 *  4. [key: string]: string; - 이 객체는 문자열 키를 가지며, 각 키에 대응하는 값은 문자열 타입입니다.
 *                                         즉, 객체의 속성 이름은 문자열이 될 수 있고, 각 속성의 값은 문자열이어야 합니다.
 * 
 */

import styles from "./page.module.css";


/**
 *  (1) Returns the names of the enumerable string properties and methods of an object.
 *       Object.keys( obj )
 * 
 *  (2) Returns the prototype of an object.
 *       Object.getPrototypeOf( obj )
 * 
 *  (3) Returns an array of all symbol properties found directly on object o.
 *       Object.getOwnPropertySymbols( obj )
 * 
 *  (4) Returns the names of the own properties of an object.
 *        The own properties of an object are those that are defined directly on that object, and are not inherited from the object's prototype.
 *        The properties of an object include both fields (objects) and functions.
 *       Object.getOwnPropertyNames( obj )
 *
 *  Example:

        const obj = { name: 'Yoseph', age: 23 };
        
        Object.keys( obj );                                     // [ 'exclude', 'extract', 'parse', 'parseUrl', 'pick', 'stringify', 'stringifyUrl' ]
        Object.getPrototypeOf( obj );                   // null
        Object.getOwnPropertySymbols( obj );    // [ Symbol(Symbol.toStringTag) ]
        Object.getOwnPropertyNames( obj );      // [ 'exclude', 'extract', 'parse', 'parseUrl', 'pick', 'stringify', 'stringifyUrl' ]

 */

console.groupCollapsed('/src/app/page.js');
console.log('1. Link:', Link);
console.log('2. Image:', Image);
console.log('3. styles:', styles);
console.groupEnd();


export default
function Home( props ) {
    console.debug('Home(', props, ') invoked.');

    return (
        <div className={ styles.container }>

            <h2>Entry Point: /src/app/page.js</h2>
            <hr/>

            <h3>@Since v13 - App Route
                <ul>
                    <li className={ styles.li }><code><strong className={ styles.strong }>Default React Component Mapping: /path/to/ -&gt; /src/app/path/to/page.js</strong></code></li>
                    <li className={ styles.li }><code><strong className={ styles.strong }>Other&nbsp;&nbsp; React Component Mapping: /path/to/other -&gt; /src/app/path/to/other.js</strong></code></li>
                </ul>
            </h3>

            {/* Important: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>. */}

            <ul>
                <li><Link href="/static.html">/static.html -&gt; /public/static.html</Link></li>

                <li><Link href="/sub">/sub -&gt; /src/app/sub/page.js</Link></li>
                <li><Link href="/sub2">/sub2 -&gt; /src/app/sub2.js <strong className={ styles.strong }>(XX)</strong></Link></li>
                <li><Link href="/sub3">/sub3 -&gt; /src/app/sub3/page.js <strong className={ styles.strong }>(OK)</strong></Link></li>

                <li><Link href="/sub/about">/sub/about -&gt; /src/app/sub/about/page.js</Link></li>
                <li><Link href="/about2">/about2 -&gt; /src/app/about2.js <strong className={ styles.strong }>(XX)</strong></Link></li>
                <li><Link href="/about3">/about3 -&gt; /src/app/about3/page.js <strong className={ styles.strong }>(OK)</strong></Link></li>

                <li><Link href="/sub3/1">/sub3/1 -&gt; /sub/app/sub3/[id].js <strong className={ styles.strong }>(XX)</strong></Link></li>
                <li><Link href="/sub4/1">/sub4/1 -&gt; /sub/app/sub4/[id]/page.js <strong className={ styles.strong }>(OK)</strong></Link></li>
                <li><Link href="/sub4/2">/sub4/2 -&gt; /sub/app/sub4/[id]/page.js <strong className={ styles.strong }>(OK)</strong></Link></li>
                
                <li><Link href="/api/hello?name=Yoseph&age=23">/api/hello -&gt; /src/app/api/hello/route.js</Link></li>
                <li><Link href="/sub5/fetch?name=Yoseph&age=23">/sub/fetch -&gt; /src/app/sub5/fetch/page.js</Link></li>
            </ul>

        </div>
    );
}


