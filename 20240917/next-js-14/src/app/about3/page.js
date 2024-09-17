import styles from '../page.module.css';


console.group('/src/app/sub/about3/page.js'); console.groupEnd();


export default
function About3( props ) {
    console.debug('About3(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub/about3/page.js</h2>
            <hr/>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};

