import { NavLink, Route, Routes } from "react-router-dom";

export
function Topics(props) {
    console.debug('Topics(', props, ') invoked.');

    return <>
        <div>
            <hr/>
            
            <h3><mark>2. Topics</mark></h3>

            {/* 
                Warning : You rendered descendant <Routes> (or called `useRoutes()`) at "/nav/topics" (under <Route path="nav/topics">) but the parent route path has no trailing "*". 
                                 This means if you navigate deeper, the parent won't match any more and therefore the child routes will never render.
            */}

            <ul>
                {/* Case1- OK, Parent <Route path='nav/topics/*' />   with Relative path trailing '*'  */}
                {/* Case2- OK, Parent <Route path='/nav/topics/*' /> with Absolute path trailing '*'  */}

                <li><NavLink to={ '1' }>HTML</NavLink></li>
                <li><NavLink to={ '2' }>JavaScript</NavLink></li>
                <li><NavLink to={ '3' }>React</NavLink></li>

                {/* -------*/}

                {/* Case1- OK, Parent <Route path='nav/topics/*' />   with Relative path trailing '*'  */}
                {/* Case2- OK, Parent <Route path='/nav/topics/*' /> with Absolute path trailing '*'  */}

                {/* <li><NavLink to={ './1' }>HTML</NavLink></li>
                <li><NavLink to={ './2' }>JavaScript</NavLink></li>
                <li><NavLink to={ './3' }>React</NavLink></li> */}

                {/* -------*/}

                {/* Case1- XX, Parent <Route path='nav/topics/*' />   with Relative path trailing '*'  */}
                {/* Case2- XX, Parent <Route path='/nav/topics/*' /> with Absolute path trailing '*'  */}

                {/* <li><NavLink to={ '/1' }>HTML</NavLink></li>
                <li><NavLink to={ '/2' }>JavaScript</NavLink></li>
                <li><NavLink to={ '/3' }>React</NavLink></li> */}
            </ul>


            <Routes>
                {/* Case1- OK, Parent <Route path='nav/topics/*' />   with Relative path trailing '*'  */}
                {/* Case2- OK, Parent <Route path='/nav/topics/*' /> with Absolute path trailing '*'  */}

                <Route path="1" element={ <>HTML is ...</> } />
                <Route path="2" element={ 'JavaScript is ...' } />
                <Route path="3" element={ <>
                        React is ...
                    </> } />
            </Routes>

            <hr/>
        </div>
    </>;
}


// export default Topics;

