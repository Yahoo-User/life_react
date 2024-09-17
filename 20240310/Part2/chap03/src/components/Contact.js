export
function Contact(props) {
    console.warn("3. Contact(", props, ") invoked.");

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element
    
    return (
        <div>
            <h2>3. Contact</h2>

            3. Contact ...
        </div>
    );
} // Contact


