console.clear(); console.log('- Header.js --------');


export
function Header(props) {  // React Functional Component.
    console.debug('Header(', props, ') invoked.');

    return (  // React.JSX.Element

        <header>

            <h3>

                <a href='/' onClick={ function (e) { // e : SyntheticBaseEvent
                    console.debug('a::onClick(', e, ') invoked.');

                    e.preventDefault();             // Prevent default onClick event handling.
                    props.onClickEvent();         // Invoke Header::onClickEvent prop.
                }}>{props.title}</a>

            </h3>

        </header>

    );
}


// export default Header;      // XX, When using export ~ from in the `index.js`.


