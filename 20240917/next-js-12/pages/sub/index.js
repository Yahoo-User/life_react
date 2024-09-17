import styles from '../../styles/Home.module.css';


console.groupCollapsed('/pages/sub/index.js'); console.groupEnd();


const Sub = props => {
    console.debug('Sub(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/pages/sub/index.js</h2>
            <hr/>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};


export default Sub;

