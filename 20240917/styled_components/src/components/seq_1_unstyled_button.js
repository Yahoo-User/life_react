/* Un-styled Component */

// const UnStyled = function(props) {    // OK
// const UnStyledButton = (props) => {  // OK
const UnStyledButton = props => {
    console.debug('UnStyledButton(', props, ') invoked.');

    const style = {
        margin: '10px',
        padding: '10px',

        color: 'black',

        fontSize: '16px',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontFamily: 'D2Coding',
    };

    /* Inline Style */
    return <button type='button' style={style}>{props.children}</button>
};


export { UnStyledButton };

