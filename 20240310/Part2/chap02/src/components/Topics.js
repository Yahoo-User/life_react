export
function Topics(props) {
    console.warn("2. Topics(", props, ") invoked.");

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element
    
    return (
        <div>
            <h2>2. Topics</h2>

            2. Topics ...
        </div>
    );
} // Topics


