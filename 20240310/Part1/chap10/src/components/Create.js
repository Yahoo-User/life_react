export
function Create(props) {   // Returns React.JSX.Element
    console.group("4. Create");
    console.log("props:", props);
    console.groupEnd();
  
    // ------------------
    // JSX expressions must have one parent element. ts(2657)

    return (
        <article>
            <h2>Create</h2>

            <form onSubmit={e => {
                e.preventDefault();
                props.onCreate(e.target.title.value, e.target.body.value);
            }}>
                <p><input type="text" name="title" placeholder="title" /></p>
                <p><textarea name="body" placeholder="body" cols="50" rows="5" /></p>
                <p><input type="submit" value="Create" /></p>
            </form>      
        </article>
    );
} // Create


