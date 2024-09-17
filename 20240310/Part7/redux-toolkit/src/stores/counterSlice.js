/**
 * ----------------------
 * 1. const createSlice(
 *      options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>
 *    ) => Slice<State, CaseReducers, Name, ReducerPath, Selectors>;
 * ----------------------
 * A function that accepts 
 *  (1) an `initial state`,
 *  (2) an object full of `reducer functions`,
 *  (3) and a `slice name`,
 * 
 * and automatically generates `action creators` and `action types`
 * that correspond to the `reducers` and `state`.
 */

import {createSlice} from '@reduxjs/toolkit';

  
// ---------------------
// Step1. Create a `slice` for the `counter` (like a small store).
// ---------------------

export
const counterSlice = createSlice({
    name: 'counterSlice',               // (1) Slice's Name
    initialState: {value: 0},           // (2) Initial State

    reducers: {                         // (3) Reducers as with action

        // (3-1) Reducer with "up" action type
        "up": (state, action) => {
            console.log('reducers::up(state:', state, ', action:', action, ') invoked.');

            // (3-2) 1st. method: Update `value` state with `step` action property.
            // state.value += action.step;

            // (3-2) 2nd. method: Update `value` state with auto-created `payload` action property 
            state.value += action.payload;
        },

        // (3-1) Reducer with "down" action type
        "down": (state, action) => {
            console.log('reducers::down(state:', state, ', action:', action, ') invoked.');

            // (3-2) 1st. method: Update value state with `step` action property.
            // state.value -= action.step;

            // (3-2) 2nd. method: Update value state with auto-created `payload` action property 
            state.value -= action.payload;
        }

    } // reducers
}); // createSlice


export
const { up, down } = counterSlice.actions;


