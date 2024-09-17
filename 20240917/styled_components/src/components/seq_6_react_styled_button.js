import styled from 'styled-components';

import { ParentUnstyledReactButton } from './seq_5_react_button';


/* Styled Component */

const ChildedStyledReactButton = styled( ParentUnstyledReactButton )`   /* Generated a Random ClassName & Use Inner Style. */
    // Overwrite inherited styles or Apply new styles.

    border: 1px solid orange;

    color: white;
    background-color: red;
`;


export { ChildedStyledReactButton };

