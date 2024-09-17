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
const PrimaryButton = styled.button`

    // ----------------------------------
    // (1) Fixed static property value. 
    // ----------------------------------
    // color: orange;

    
    // ----------------------------------
    // (2) Set property value dynamically
    //     with function execution & return value by $ {function} syntax.
    // ----------------------------------
/* 
    // 1st. method: using *anonymous* function.
    color: ${function (props) {
        if(props.primary) return 'red';
        else return 'black';
    }};
 */

    // 2nd. method: using *arrow* function.
    color: ${ props => props.primary? 'red' : 'black' };

`;  // PrimaryButton


