export

// -----------------------------------------------------
// Imported JSX component'name must be
// in (1) PascalCase or (2) SCREAMING_SNAKE_CASE. (***)
// -----------------------------------------------------

function Right31(props) {
    console.log('Right31(', props, ') invoked.');

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
                    // Invoke Right31's `onIncrease` prop.
                    props.onIncrease();
                }}
            />
        </div>
    );
} // Right31


