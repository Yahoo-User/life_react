import {styled} from 'styled-components';

import { SmallButton } from './SmallButton';     // (1)
import { Unstyled } from './Unstyled';           // (2)


/**
 * --------------------------------------------------------------
 * How To Make A Child Component Extends Parent Styled Component ?
 * --------------------------------------------------------------
 * (1) Invoke `styled` as a function.
 * (2) When (1), pass a styled parent component with `styled` in the `styled-components` 
 *     as an argument to the invoked `styled` function.
 * 
 *      ex) styled(styledParentComponent);
 * 
 * (3) After (2), construct back-tick block (``).
 * 
 *      Ex1) styled(styledParentComponent)`
 *              // Overwritting extended styles from parent component with new CSS properties.
 *          `;
 * 
 *      Ex2) styled(unStyledParentComponent)`
 *              // *NO* overwritting extended styles from parent component with new CSS properties.
 *          `;
 * --------------------------------------------------------------
 */

export

/* 
// (1) : OK, and Overwritting extended styles from parent component with new CSS properties.
const LargeButton = styled(SmallButton)`     
    background-color: black;
`;  // Child component extends `styled` parent component.
 */

// -----------------


// (2) : OK, but *NO* overwritting extended styles with new CSS properties. (***)
const LargeButton = styled(Unstyled)`
    color: white;
    background-color: black;
    font-size: 20px;
    font-family: D2Coding;
    font-weight: bold;
    border: 0px;
    padding: 20px;
`;  // Child component extends `Unstyled` parent component.


