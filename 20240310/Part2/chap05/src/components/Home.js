export
function Home(props) {
    console.info("1. Home(", props, ") invoked.");

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element
    
    return (
        <div>
            <h2>1. Home</h2>

            1. Home ...
        </div>
    );
} // Home


