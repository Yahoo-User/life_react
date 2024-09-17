import {Left23} from ".";


export
function Left13(props) {
    console.log('Left13(', props, ') invoked.');

  // ----------------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element

  return (
    <div>
        <h1>Left1</h1>

        <Left23 />
    </div>
  );
} // Left13


