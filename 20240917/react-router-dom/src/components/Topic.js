import { useLocation, useParams } from 'react-router-dom';


export
function Topic(props) {
    console.debug('Topic(', props, ') invoked.');

    // =====================================
    // How To Get Dynamic Parameters In The Dynamic Routing ?
    // =====================================

    /**
     * -----------------
     * 1st. method - Using `useParams()` React hook.
     * -----------------
     * (alias) useParams<string>(): Readonly<Params<string>> :
     *            Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
     */

    const params = useParams();
    console.info('\t+ params', params, ', params.topicId:', params?.topicId);

    /**
     * -----------------
     * 2nd. method - Using `useLocation()` React hook.
     * -----------------
     * (alias) useLocation(): Location :
     *            Returns the current location object, which represents the current URL in web browsers.
     */

    const location = useLocation();
    console.info('\t+ location:', location, ', location.pathname:', location?.pathname);


    return <>
        <div>
            <hr/>
            
            <h3><mark>Topic</mark></h3>

            <p>
                (1) Dynamic Path: {location?.pathname}<br/>
                (2) Selected Topic Id: {params?.topicId}
            </p>
        </div>
    </>;
}


// export default Topic;

