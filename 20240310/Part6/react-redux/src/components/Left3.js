export
function Left3(props) {
    console.log('Left3(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Left3: {props.number}</h1>
        </div>
    );
} // Left3


