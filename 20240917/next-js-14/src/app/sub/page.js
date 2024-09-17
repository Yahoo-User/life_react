import styles from '../page.module.css';


console.group('/src/app/sub/page.js'); console.groupEnd();


export default
function Sub( props ) {
    console.debug('Sub(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub/page.js</h2>
            <hr/>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};


