export

// -----------------------------------------------------
// Imported JSX component'name must be
// in (1) PascalCase or (2) SCREAMING_SNAKE_CASE. (***)
// -----------------------------------------------------

function Right32(props) {
    console.log('Right32(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div style={{
            padding: '5px'
        }}>
            <h1>Right3</h1>

            <input
                type="button"
                value="+"

                onClick={() => {
                    console.log('button::onClicked...');
                    // Update state {`number`}
                    // with passed dispatch {`setNumber`} & state {`number`} props.
                    props.dispatch(props.state + 1);  // -> setNumber(number + 1);
                }}
            />
        </div>
    );
} // Right32


