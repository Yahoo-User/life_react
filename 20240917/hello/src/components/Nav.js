console.clear(); console.log('- Nav.js --------');


export
function Nav(props) {  // React Functional Component.
    console.debug('Nav(', props, ') invoked.');

    // -------------
    // *Important: Each child in a list should have a unique "key" prop.   (***)
    // -------------
    
    const arr = [];

    for(let t of props.topics) {
        arr.push( <li key={ t.id }><a href={ '/read/' + t.id } id={ t.id } onClick={ e => { // e : SyntheticBaseEvent
            console.debug('li::a::onClick(', e, ') invoked.');

            // e.target.id : string, **Number(e.target.id) : string -> number (*Type conversion)
            // console.info('\t+ e.target:', e.target, ', e.target.id:', e.target.id, typeof e.target.id, typeof Number(e.target.id));

            e.preventDefault();                            // Prevent default onClick event handling.
            props.onClickEvent( t.id, t.title );      // Invoke Nav::onClickEvent prop.
        }}>{t.title}</a></li> );
    }

    console.log('\t+ arr:', arr);


    return (  // React.JSX.Element

        <nav>

            <ol>

                {/* Conditional Rendering with Symbol, {} */}
                { arr }

            </ol>

        </nav>

    );
}


// export default Nav;      // XX, When using export ~ from in the `index.js`.

