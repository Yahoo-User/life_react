import "./globals.css";


console.groupCollapsed('/src/app/layout.js'); console.groupEnd();


/**
function RootLayout( { children } ) {
    console.groupCollapsed('RootLayout( { children } ) invoked.');
    console.log('children:', children);
    console.groupEnd();
 */

export default
function RootLayout( props ) {
    console.groupCollapsed('RootLayout(props) invoked.');

    console.log('props:', props);
    
    console.groupEnd();

    return (
        <html lang="ko">
            <body>
                {/* { children } */}
                { props.children }
            </body>
        </html>
    );
}


