import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';


console.group('- features/counter/counterSlice.js -------------');

// (01) const createAsyncThunk: CreateAsyncThunk<AsyncThunkConfig>
console.log('(01) createAsyncThunk:', createAsyncThunk);

// (02) const createSlice: ( options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors> ) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>
console.log('(02) createSlice:', createSlice);

// (03) function fetchCount(amount?: number): Promise<any>
console.log('(03) fetchCount:', fetchCount);


const initialState = { value: 0, status: 'idle', };
console.log('(04) initialState:', initialState);


/**
 *  ----------------------
 *  (05) const incrementAsync: AsyncThunk<any, void, AsyncThunkConfig>
 *  ----------------------
 *  The function below, `incrementAsync` is called a *thunk and allows us to perform *async logic.
 *  It will call the thunk with the `dispatch` function as the first argument.
 * 
 *  Async can be dispatched like a regular action: `dispatch( incrementAsync(10) )`.
 *  This code can then be executed and other actions can be dispatched.
 * 
 *  Thunks are typically used to make *async requests.
 */

export const incrementAsync = 

    /**
     * ----------------------
     *  function createAsyncThunk(typePrefix, payloadCreator, options?): AsyncThunk
     * ----------------------
          @param typePrefix
          @param payloadCreator
          @param options
    */

    createAsyncThunk(
        'counter/fetchCount',

        // function (amount): Promise
        async (amount) => {
            const response = await fetchCount(amount);

            /* The value we return becomes the `fulfilled` action payload. */
            return response.data; 
        }
    );

console.log('(05) incrementAsync:', incrementAsync);


/**
 *  ----------------------
 *  (06) const createSlice: ( options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>
 *  ----------------------
 *  A function that accepts an (1) initial state, (2) an object full of reducer functions, and (3) a "slice name", 
 *  and automatically generates (4) action creators and (5) action types that correspond to the reducers and state.
 */
export const counterSlice = createSlice( {
    name: 'counter',
    initialState,

    // The `reducers` field lets us define *reducers and generate associated *actions
    reducers: {
        increment: ( state ) => {   // (state) => void
          /**
           *  Redux Toolkit allows us to write "mutating" logic in reducers.
           *  It doesn't actually mutate the state because it uses the Immer library,
           *  which detects changes to a "draft state" and produces a brand new immutable state based off those changes
           */
            state.value += 1;
        }, 

        decrement: ( state ) => { state.value -= 1; },    // (state) => void

        // Use the `PayloadAction` type to declare the contents of `action.payload`.
        incrementByAmount: ( state, action ) => { state.value += action.payload; },     // ( state, action ) => void
    },

    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by *createAsyncThunk or in other slices.
    extraReducers: ( builder ) => { 
        builder.addCase( incrementAsync.pending, ( state ) => { state.status = 'loading'; } )
                   .addCase( incrementAsync.fulfilled,  ( state, action ) => { state.status = 'idle'; state.value += action.payload; } );
    },
} );

/**
 * counterSlice: {
 *    (01) name: 'counter',
 *    (02) actions: { increment: f actionCreator(...args), decrement: f actionCreator(...args), incrementByAmount: f actionCreator(...args) },
 *    (03) caseReducers: { increment: f state => {..}, decrement: f state => { state.value -= 1; }, incrementByAmount: f (state, action) => {..} },
 *    (04) getInitialState: f getInitialState(),
 *    (05) getSelectors: f getSelectors(selectState => selectSelf),
 *    (06) injectInfo: f injectInfo(injectable, { reducerPath: pathOpt, ...config }) = {}),
 *    (07) reducer: f reducer(state, action),
 *    (08) reducerPath: 'counter',
 *    (09) selectSlice: f selectSlice(state),
 *    (10) selectors: {}
 * }
 */
console.log('(06) counterSlice:', counterSlice);


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// const increment: ActionCreatorWithoutPayload<"counter/increment">
console.log('(07) increment:', increment);

// const decrement: ActionCreatorWithoutPayload<"counter/decrement">
console.log('(08) decrement:', decrement);

// const incrementByAmount: ActionCreatorWithPayload<any, "counter/incrementByAmount">
console.log('(09) incrementByAmount:', incrementByAmount);


/**
 *  ----------------------
 *  const selectCount: (state: any) => any
 *  ----------------------
 *  The function below is called a *selector and allows us to select a value from the state.
 *  Selectors can also be defined inline where they're used instead of in the slice file.
 * 
 *    For example:  useSelector( (state: RootState) => state.counter.value )
 */

export const selectCount = (state) => state.counter.value;

console.log('(10) selectCount:', selectCount);


/**
 *  ----------------------
 *  const incrementIfOdd: (amount: any) => (dispatch: any, getState: any) => void
 *  ----------------------
 *  We can also write *thunks by hand, which may contain both sync and async logic.
 *  Here's an example of conditionally dispatching actions based on current state.
 */

export const incrementIfOdd = ( amount ) => ( dispatch, getState ) => {
    const currentValue = selectCount( getState() );

    if (currentValue % 2 === 1)
        dispatch( incrementByAmount( amount ) );
};

console.log('(11) incrementIfOdd:', incrementIfOdd);


console.groupEnd();

export default counterSlice.reducer;


