import styled from 'styled-components';

import { StyledButton } from './seq_2_styled_button';


/**
    The Child Styled Component Extends a Parent Styled Component With `styled()` Function:
        (1) StyledButton            : Parent  Styled Component
        (2) ChildStyledButton    : Child    Styled Component
*/

const ChildStyledButton = styled( StyledButton )`   /* Generated a Random ClassName & Use Inner Style. */
    // Overwrite inherited styles or Apply new styles.

    padding: 15px 30px;
    border: 0;

    color: white;
    background-color: blue;
`;


export { ChildStyledButton };

