import styles from '../../styles/Home.module.css';


console.groupCollapsed('/pages/sub/about.js'); console.groupEnd();


const About = props => {
    console.debug('About(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/pages/sub/about.js</h2>
            <hr/>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};


export default About;

