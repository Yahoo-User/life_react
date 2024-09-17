import styles from './page.module.css';


console.groupCollapsed('/src/app/sub2.js'); console.groupEnd();


export default
function Sub2( props ) {
    console.debug('Sub2(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub2.js</h2>
            <hr/>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};


