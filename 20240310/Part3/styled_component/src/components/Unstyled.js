export
const Unstyled = (props) => {
    console.info("1. Unstyled(", props, ") invoked.");

    /**
     * --------------------------------------------------------------
     * In way of traditonal,
     * We can set `in-line style` to a tag
     * with 
     *   (1) `style` property like the below `button` tag
     *   (2) `object literal` like the below `css` object
     * --------------------------------------------------------------
     */

    const css = {
        color: 'white',
        backgroundColor: 'red',
        fontSize: '20px',
        fontFamily: 'D2Coding',
        fontWeight: 'bold',
        border: '0px',
        padding: '20px'
    };

    // ------------------------
    // JSX expressions must have one parent element. ts(2657)
    // Returns React.JSX.Element

    // return <button type="button" style={css}>{props.children}</button>;                      // (1) : XX
    return <button type="button" className={props.className}>{props.children}</button>;      // (2) : OK
};  // Unstyled



