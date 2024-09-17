import {styled} from 'styled-components';


/**
 * --------------------------------------------------------------
 * The features of styled component with the `style-components`
 * --------------------------------------------------------------
 * (1) Button text is automatcally set with the `props.children`.
 * (2) Create a `styled.<tagname>`.
 *     Here, `<tagname>` tag which becomes automatically `top-level`.
 * (3) No required `return` keyword.
 *     Automatically returns `<tagname>` tag.
 * --------------------------------------------------------------
 */

export

// const SmallButton = styled.button``;        // (1)

const SmallButton = styled.button`
    color: white;
    background-color: green;
    font-size: 20px;
    font-family: D2Coding;
    font-weight: bold;
    border: 0px;
    padding: 20px;
`;                                              // (2)

