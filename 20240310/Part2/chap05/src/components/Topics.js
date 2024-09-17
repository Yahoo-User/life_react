import {NavLink, Routes, Route} from "react-router-dom";

/**
 * -----------------------------------
 * function useLocation(): Location;    - React Router DOM Hook
 * -----------------------------------
 * Returns the current location object, which represents the current URL in web browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own "routing" in your app, 
 * and we'd like to know what your use case is. 
 * We may be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
import {useLocation} from 'react-router-dom';


export
function Topics(props) {
    console.info("2-1. Topics(", props, ") invoked.");

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element
    
    return (
        <div>
            <h2>2. Topics</h2>

            <ul className="App-ul">
                <li><NavLink className='App-link' to="/topics/1">HTML</NavLink></li>
                <li><NavLink className='App-link' to="/topics/2">JS</NavLink></li>
                <li><NavLink className='App-link' to="/topics/3">React</NavLink></li>
            </ul>

            {/* 
                **Important** :

                You rendered descendant <Routes> (or called `useRoutes()`) at "/topics" (under <Route path="/topics">)
                but the parent route path has no trailing "*". 
                
                This means if you navigate deeper, the parent won't match anymore
                and therefore the child routes will never render.
                
                Please change the parent <Route path="/topics"> to <Route path="/topics/*">.
            */}
            <Routes>
                <Route path="/1" element={<Topic content='(1) HTML is ...' />}  />
                <Route path="/2" element={<Topic content='(2) JS is ...' />}    />
                <Route path="/3" element={<Topic content='(3) React is ...' />} />
            </Routes>
        </div>
    );
} // Topics


function Topic(props) {
    console.info("2-2. Topic(", props, ") invoked.");

    // --------------------------------------------------------------------------------
    // How to get current path from <Route path=.. element=.. /> of react-router-dom ?
    // --------------------------------------------------------------------------------
    // Step1. import { useLocation } from "react-router-dom"
    // Step2. const location = useLocation();
    //        console.log(location.pathname);
    // --------------------------------------------------------------------------------

    const currentLocation = useLocation();
    console.log('currentLocation:', currentLocation);

    const {pathname} = currentLocation;
    console.log('pathname:', pathname.substring(8));

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return <>
        <h2>{props.content}</h2>
    </>;
} // Topic


