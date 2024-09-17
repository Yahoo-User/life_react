import styles from '../page.module.css';


console.groupCollapsed('/src/app/sub3/page.js'); console.groupEnd();


export default
function Sub3( props ) {
    console.debug('Sub3(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub3/page.js</h2>
            <hr/>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};


