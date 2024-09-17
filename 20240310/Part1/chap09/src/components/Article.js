export
function Article(props) {   // Returns React.JSX.Element
    console.group("3. Article");
    console.log("props:", props);
    console.groupEnd();
  
    // ------------------
    // JSX expressions must have one parent element. ts(2657)

    return (
        <article>
            <h1>{ props.title }</h1>
            <p>{ props.body }</p>
        </article>
    );
} // Article


