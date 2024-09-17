import styled from 'styled-components';


/* Styled Component */

const DynamicStyleChange = styled.button`
    margin: 10px;
    padding: 10px 30px;
    border: 0;


    // ======================
    //  Dynamic Style Change
    // ======================

    /* 1st. method -------------
    color: ${ props => {
        console.debug('DynamicStyleChange::color(', props, ') invoked.');
        // console.info('\t+ $primary:', props.$primary, typeof props.$primary);

        // (1) Boolean('true'): boolean
        // (2) new Boolean('true'): Boolean

        const primary = Boolean(props.$primary);

        return primary? 'white' : 'black';
    }};
    */

    /* 2nd. method ------------- */
    color: ${ props => Boolean(props.$primary)? 'white' : 'black' };
    background-color: ${ props => Boolean(props.$primary)? 'purple' : 'lightgray' };

    
    font-size: 16px;
    font-family: D2Coding;
    font-weight: bold;
    font-style: italic;
`;


export { DynamicStyleChange };

