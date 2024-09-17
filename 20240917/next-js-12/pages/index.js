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

import styles from '../styles/Home.module.css';


console.groupCollapsed('/pages/index.js');

console.log('+ Link:', Link);
console.log('+ Image:', Image);
console.log('+ styles:', styles);

console.groupEnd();


export default
function Home( props ) {
    console.debug('Home(', props, ') invoked.');

    return (
        <div className={ styles.container }>

            <h2>Entry Point: /pages/index.js</h2>
            <hr/>

            <h3>@Until v12 - App Route
                <ul>
                    <li className={ styles.li }><code><strong className={ styles.strong }>Default React Component Mapping: /path/to/ -&gt; /pages/path/to/index.js</strong></code></li>
                    <li className={ styles.li }><code><strong className={ styles.strong }>Other&nbsp;&nbsp; React Component Mapping: /path/to/other -&gt; /pages/path/to/other.js</strong></code></li>
                </ul>
            </h3>

            {/* Important: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>. */}

            <ul>
                <li><Link href="/static.html">/static.html -&gt; /public/static.html</Link></li>

                <li><Link href="/sub">/sub -&gt; /pages/sub/index.js</Link></li>
                <li><Link href="/sub2">/sub2 -&gt; /pages/sub2.js</Link></li>

                <li><Link href="/sub/about">/sub/about -&gt; /pages/sub/about.js</Link></li>
                <li><Link href="/about">/about -&gt; /pages/about.js</Link></li>

                <li><Link href="/sub/1">/sub/1 -&gt; /pages/sub/[id].js</Link></li>
                <li><Link href="/sub/2">/sub/2 -&gt; /pages/sub/[id].js</Link></li>
                <li><Link href="/sub/fetch">/sub/fetch -&gt; /pages/sub/fetch.js</Link></li>

                <li><Link href="/api/hello">/api/hello -&gt; /pages/api/hello.js</Link></li>
                <li><Link href="/sub/processReqParams?name=Yoseph&age=23">/sub/processReqParams -&gt; /pages/sub/processReqParams.js</Link></li>
            </ul>

        </div>
    )
}


