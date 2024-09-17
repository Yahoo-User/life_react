import {useSelector, useDispatch} from 'react-redux';


export
function Counter(props) {
  console.group('Counter(', props, ') invoked.');

  // ----------
  // const count = useSelector(state => state.value);

  const count = useSelector(state => {
      console.log('>>> selector(', state, ') invoked.');
      return state.value;
  }); // useSelector

  console.log('>>> count:', count);

  console.groupEnd();

  // ----------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element
  
  const dispatch = useDispatch();
  // console.log('dispatch:', dispatch);  // dispatch(action)

  // ----------
  // Action Type: { type: string, step: number },
  //                type == { 'up' | 'down' }
  //                step > 0
  // ----------
  const action = {type: 'up', step: 1};

  return (
    <div>
        <button onClick={() => {
          console.group('Button Clicked ...');
          
          console.log('1. Dispatch action(', action, ') for updating state to the reducer.');
          dispatch(action);

          console.groupEnd();
        }}> + </button>
        &nbsp;&nbsp;
        <span>{count}</span>
    </div>
  );
} // Counter


