import { Left2 } from ".";


export
function Left1(props) {
    console.log('Left1(', props, ') invoked.');

  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div>
        <h1>Left1: {props.number}</h1>

        <Left2 number={props.number} />
    </div>
  );
} // Left1


