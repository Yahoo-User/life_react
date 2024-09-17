import { NavLink, Route, Routes } from "react-router-dom";

import { Topic } from "./Topic";
import './Topics.css';


const contents = [
    {id: 1, title: 'HTML', desc: 'HTML is ...' },
    {id: 2, title: 'Javascript', desc: 'Javascript is ...' },
    {id: 3, title: 'React', desc: 'React is ...' },
    {id: 4, title: 'Flutter', desc: 'Flutter is ...' },
    {id: 5, title: 'Dart', desc: 'Dart is ...' }
];


export
function Topics(props) {
    console.debug('Topics(', props, ') invoked.');

    var navLinks = [];

    contents.forEach(c => { navLinks.push(
            <li key={ c.id }><NavLink to={ '/nav/topics/' + c.id }>{ c.title }</NavLink></li>
        )} );

    return <>
        <div>
            <hr/>
            
            <h3><mark>2. Topics</mark></h3>

            <ul>
                { navLinks }
            </ul>

            <Routes>
                    <Route path='/:topicId' element={ <Topic /> } />
            </Routes>

            <hr/>
        </div>
    </>;
}

