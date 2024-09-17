import styles from '../styles/Home.module.css';


console.groupCollapsed('/pages/about.js'); console.groupEnd();


const About = props => {
    console.debug('About(', props, ') invoked.');

    return <>
        <div className={ styles.container }>
            <h2>/pages/about.js</h2>
            <hr/>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};


export default About;

