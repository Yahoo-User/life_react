import {Right31} from '.';


export

// -----------------------------------------------------
// Imported JSX component'name must be
// in (1) PascalCase or (2) SCREAMING_SNAKE_CASE. (***)
// -----------------------------------------------------

function Right21(props) {
    console.log('Right21(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Right2</h1>

            {/* Pass () => void function which invokes `onIncrease` function prop. */}
            <Right31 onIncrease={() => { // () => void
                console.log('Right31::onIncrease() invoked.');
                props.onIncrease(); // Invoke Right21's `onIncrease` prop.
            }} />
        </div>
    );
} // Right21


