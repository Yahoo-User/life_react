import {Left33} from '.'


export
function Left23(props) {
    console.log('Left23(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Left2</h1>

            <Left33 />
        </div>
    );
} // Left23


