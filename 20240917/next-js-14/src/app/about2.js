import styles from './page.module.css';


console.groupCollapsed('/src/app/about2.js'); console.groupEnd();


export default
function About2( props ) {
    console.debug('About2(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/src/app/about.js</h2>
            <hr/>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};


