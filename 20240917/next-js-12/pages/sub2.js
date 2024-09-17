import styles from '../styles/Home.module.css';


console.groupCollapsed('/pages/sub2.js'); console.groupEnd();


const Sub2 = props => {
    console.debug('Sub2(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/pages/sub2.js</h2>
            <hr/>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};


export default Sub2;

