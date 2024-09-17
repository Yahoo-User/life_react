import {useSelector, useDispatch} from 'react-redux';

import {counterSlice, up, down} from '../stores';


export
function Counter(props) {
  console.group('Counter(', props, ') invoked.');

  // ----------
  // const count = useSelector(state => state.counter.value);

  const count = useSelector(state => {
      console.log('>>> selector(state:', state, ') invoked.');

      // state.<rootReducerOfSlice>.value
      return state.counter.value;
  }); // useSelector

  console.log('>>> count:', count);

  // ----------
  // JSX expressions must have one parent element. ts(2657)
  // Returns React.JSX.Element
  
  const dispatch = useDispatch();
  // console.log('dispatch:', dispatch);  // dispatch(action)

  console.groupEnd();

  // ----------
  // Action Type:   { type: string,                 step: number },  
  //        type == { type: reducerPath/actionName, step:  1 },    <--- ***
  //        type == { type: reducerPath/'up',       step:  1 },

  //        reducerPath = 'counterSlice' (By default, Slice name becomes reducerPath)
  //        type == { type: 'counterSlice/down',    step: -1 },

  //        step > 0
  // ----------
  const actionUp    = {type: 'counterSlice/up',   step: 1};
  const actionDown  = {type: 'counterSlice/down', step: 2};

  return (
    <div>
        <button onClick={() => {
          console.group('Button + clicked ...');
          console.log('1. Dispatch action(', actionUp, ') to the reducer for updating state.');

          // 1st. method : with the action {type: 'counterSlice/up', step: 1}
          // dispatch(actionUp);

          // 2nd. method : with the action {type: 'counterSlice/up', payload: 1}
          // Automatically, `payload` property have size for the action type. (***)

          // dispatch(counterSlice.actions.up(2));
          dispatch(up(1));

          console.groupEnd();
        }}> + </button>

        <button onClick={() => {
          console.group('Button - clicked ...');
          console.log('2. Dispatch action(', actionDown, ') to the reducer for updating state.');

          // 1st. method : with the action {type: 'counterSlice/down', step: 2}
          // dispatch(actionDown);

          // 2nd. method : with the action {type: 'counterSlice/down', payload: 2}
          // Automatically, `payload` property have size for the action type. (***)

          // dispatch(counterSlice.actions.down(3));
          dispatch(down(2));

          console.groupEnd();
        }}> - </button>
        
        &nbsp;&nbsp;<span>{count}</span>
    </div>
  );
} // Counter


