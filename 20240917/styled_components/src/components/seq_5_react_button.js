/* Un-styled Component */

const ParentUnstyledReactButton = props => {
    console.debug('ParentUnstyledReactButton(', props, ') invoked.');

    const style = {
        margin: '10px',
        padding: '10px 20px',

        fontSize: '16px',
        fontFamily: 'D2Coding',
        fontWeight: 'bold',
        fontStyle: 'italic',
    };

    /**
     * (1) Problem: When extending a un-styled react component, 
     *                      Overriding all inherited styles or Applying new styles are *Not applied.            <--- ***
     * 
     * (2) Solution: In the *Parent react component, 
     *                      *props.className must be applied with 'className' prop like the following:    <--- ***
     * 
     *                      ... className={ props.className } ...
     */

    //                                                                -------- (2) Solution -------
    return <button type="button" style={style} className={ props.className }>{ props.children }</button>;
};


export { ParentUnstyledReactButton };

