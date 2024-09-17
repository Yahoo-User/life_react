import styles from '../../page.module.css';


console.group('/src/app/sub/about/page.js'); console.groupEnd();


export default
function About( props ) {
    console.debug('About(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/src/app/sub/about/page.js</h2>
            <hr/>

            <a href="/">/ -&gt; /src/app/page.js</a>
        </div>
    </>;
};

