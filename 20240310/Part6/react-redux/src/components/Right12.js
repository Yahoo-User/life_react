import {Right22} from '.';


export

// -----------------------------------------------------
// Imported JSX component'name must be
// in (1) PascalCase or (2) SCREAMING_SNAKE_CASE. (***)
// -----------------------------------------------------

function Right12(props) {
    console.log('Right12(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Right1</h1>

            {/* Pass dispatch (`setNumber`) and state (`number`) props. */}
            <Right22 dispatch={props.dispatch} state={props.state} />
        </div>
    );
} // Right12


