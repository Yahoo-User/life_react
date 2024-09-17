import {NavLink, Routes, Route} from 'react-router-dom';
// import {contacts} from '../App';

/**
 * -----------------------------------
 * function useParams() - React Router DOM Hook
 * -----------------------------------
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
import {useParams} from 'react-router-dom';


export
function Contact(props) {
    console.group("3-1. Contact(", props, ") invoked.");
    console.info("props.points:", props.points);

    const points = [];
    const routers = [];

    props.points.forEach(point => {
        // Warning: Each child in a list should have a unique "key" prop.
        points.push(<li key={point.id}><NavLink className='App-link' to={"/contact/"+point.id}>{point.name}</NavLink></li>);

        // Warning: Each child in a list should have a unique "key" prop.
        routers.push(<Route key={point.id} path={'/'+point.id} element={point.tel} />);
    }); // .forEach

    console.info("points:", points);
    console.info("routers:", routers);
    console.groupEnd();

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element
    
    return (
        <div>
            <h2>3. Contact</h2>

            <ul className='App-ul'>
                {points}
            </ul>

            {/* 
                **Important** :

                You rendered descendant <Routes> (or called `useRoutes()`) at "/contact" (under <Route path="/contact">)
                but the parent route path has no trailing "*".
                
                This means if you navigate deeper, the parent won't match anymore
                and therefore the child routes will never render.

                Please change the parent <Route path="/contact"> to <Route path="/contact/*">.
            */}
            <Routes>
                {/* 1st. method: routing with several routers */}
                {/* {routers} */}

                {/* ---------- */}

                {/* 2nd. method: 
                    Routing with **ONE** Router
                    using the URL parameter(:point_id) of current <Route path=... />)
                    in `react-router-dom`
                */}
                <Route path='/:point_id' element={<Point points={props.points} />} />
            </Routes>
        </div>
    );
} // Contact


function Point(props) {
    console.group("3-2. Point(", props, ") invoked.");

    // --------------------------------------------------------------------------------
    // How to get URL parameter(:point_id) of current <Route path='/:point_id'... />
    // in `react-router-dom` ?
    // --------------------------------------------------------------------------------
    // Step1. import { useParams } from "react-router-dom"
    // Step2. const params = useParams();
    //        console.log(params.point_id); // params.<parameter_name>
    // --------------------------------------------------------------------------------

    const params = useParams();
    console.log('params:', params);

    const point_id = params.point_id;
    console.log('point_id:', point_id, typeof point_id);

    console.groupEnd();
    
    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element
    
    return <>
        <h2>{props.points[point_id-1].tel}</h2>
    </>;
} // Point


