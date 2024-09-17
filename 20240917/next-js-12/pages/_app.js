import '../styles/globals.css';


console.groupCollapsed("/pages/_app.js"); console.groupEnd();


/**
export default
function MyApp( { Component, pageProps } ) {
    console.debug('MyApp {', Component, ', ', pageProps, '} ) invoked.');
    return <Component { ...pageProps } />
}
*/

export default
function MyApp( { Component, pageProps, router, err } ) {
    console.groupCollapsed('MyApp( { Component, pageProps, router, err } ) invoked.');

    console.info('1. Component:', Component);
    console.info('2. pageProps:', pageProps);
    console.info('3. router:', router);
    console.info('4. err:', err);

    console.groupEnd();

    return <Component { ...pageProps } />
}


