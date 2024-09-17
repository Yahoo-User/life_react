// function useRouter(): NextRouter
import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css';


console.groupCollapsed('/pages/sub/[id].js');
console.log('useRouter:', useRouter);
console.groupEnd();


const Id = props => {
    console.groupCollapsed('Id(props) invoked.');

    console.log('1. props:', props);

    const router = useRouter();
    console.log('2. router:', router, ', router.query.id:', router.query.id);

    const id = router.query.id;
    // const id = Number(router.query.id);
    console.log('3. id:', id);

    console.groupEnd();

    return <>
        <div className={ styles.container }>
            <h2>/pages/sub/[id].js</h2>
            <hr/>

            <p>Request Parameter Id: <strong className={ styles.strong }>{ id }</strong></p>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};


export default Id;

