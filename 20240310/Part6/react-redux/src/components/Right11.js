import {Right21} from '.';


export

// -----------------------------------------------------
// Imported JSX component'name must be
// in (1) PascalCase or (2) SCREAMING_SNAKE_CASE. (***)
// -----------------------------------------------------

function Right11(props) {
    console.log('Right11(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Right1</h1>

            {/* Pass () => void function which invokes `onIncrease` function prop. */}
            <Right21 onIncrease={() => { // () => void
                console.log('Right21::onIncrease() invoked.');
                props.onIncrease(); // Invoke Right11's `onIncrease` prop.
            }} />
        </div>
    );
} // Right11


