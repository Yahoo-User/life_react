import {Left3} from '.'


export
function Left2(props) {
    console.log('Left2(', props, ') invoked.');

    // ----------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    return (
        <div>
            <h1>Left2: {props.number}</h1>

            <Left3 number={props.number} />
        </div>
    );
} // Left2

