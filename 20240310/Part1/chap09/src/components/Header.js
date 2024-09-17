export
function Header(props) {   // Returns React.JSX.Element
    console.group("1. Header");
    console.log("props:", props);
    console.groupEnd()
  
    // ------------------
    // JSX expressions must have one parent element. ts(2657)

    return (
        <header className='App-header'>
            <h1>
                <a href="/" className='App-link' onClick={ e => {
                    e.preventDefault();
                    props.onChangeMode();
                }}>{ props.title? props.title: "No title" }</a>
            </h1>
        </header>
    );
} // Header


