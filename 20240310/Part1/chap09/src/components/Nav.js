export
function Nav(props) {   // Returns React.JSX.Element
    console.group("2. Nav");
    console.log("props:", props);
    console.groupEnd();
  
    // ------------------
    const arr = [];
  
    props.topics.forEach(topic => {
        arr.push(
            // ** warning **: each child in a list should have a unique "key" prop.
            <li key={ topic.id }>
                <a id={ topic.id } className='App-link'
                
                // href={ "/read/" + topic.title }
                href={ "/read/" + topic.id }

                onClick={ e => {
                    e.preventDefault();
                    props.onChangeMode(e);
                }}>{ topic.title }</a>
            </li>
        ); // .push
    }); // .forEach
  
    // ------------------
    // JSX expressions must have one parent element. ts(2657)

    return (
      <nav>
        <ul>{ arr }</ul>
      </nav>
    );
} // Nav


