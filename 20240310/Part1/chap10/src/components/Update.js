import { useState } from "react";

export
function Update(props) {   // Returns React.JSX.Element
    console.group("5. Update");
    console.log("props:", props);
  
    // ------------------
    // Change props.title to state and props.body to state (2st. method)    
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    console.log(`(title, body) = (${title}, ${body})`);
    console.groupEnd();

    // ------------------
    // JSX expressions must have one parent element. ts(2657)

    return (
        <article>
            <h2>Update</h2>

            <form onSubmit={e => {
                e.preventDefault();                
                props.onUpdate(e.target.title.value, e.target.body.value);
            }}>
                {/* 
                    1st. method - to enable mutablity of props's data in the form
                    Warning: You provided a `value` prop to a form field without an `onChange` handler.
                    This will render a *Read-Only* field. (immutable fields)
                    (1) If the field should be mutable use `defaultValue`. 
                        Otherwise, set either `onChange` or `readOnly`.
                    (2) Change props to state by using useState React Hook. (props -> state)
                    --------------
                    <p><input type="text" name="title" placeholder="title" defaultValue={props.title} /></p>
                    <p><textarea name="body" placeholder="body" cols="50" rows="5" defaultValue={props.body} /></p>
                */}

                {/* 2nd. method - Using title state & body state */}
                <p><input type="text" name="title" placeholder="title" value={title} onChange={e => {
                    setTitle(e.target.value);   // Change title state -> Re-render
                }} /></p>

                <p><textarea name="body" placeholder="body" cols="50" rows="5" value={body} onChange={e => {
                    setBody(e.target.value);    // Change body state  -> Re-render  
                }} /></p>

                <p><input type="submit" value="Update" /></p>
            </form>
        </article>
    );
} // Update


