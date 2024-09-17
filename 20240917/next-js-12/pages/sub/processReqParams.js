import styles from '../../styles/Home.module.css';

/**
 *  ========================
 *  How to import **ESM module & to use **query-string ESM package to parse query string ?
 *  ========================
 * 
 *  ---------------------------------------
 *  const queryString = require('query-string');         // XX, SyntaxError: Module not found: ESM packages (query-string) need to be imported.
 *  ---------------------------------------
 *  Use **'dynamic import' to reference the package instead:
 * 
 *      Usage: const { <propertyName>: <aliasName> } = await import('query-string');     // Use **Dynamic Import.    (***)
 * 
 *      Ex1: > const { default: qs1 } = await import("query-string");     // **(Recommended), Dynamic Import
 * 
                **[Module: null prototype] {
                        ...
                    }

                > const query = '?name=Yoseph&age=23';
                > qs1.parse(query)
                **[Object: null prototype] { age: '23', name: 'Yoseph' }    // 프로토타입 체인과 메소드를 가지는 객체

                // 객체의 프로토타입 체인과 메소드 제거하고, 순수 데이터 속성만 가진 객체(Plain Object) 생성.   (***)
                > const queryString = JSON.parse( JSON.stringify( qs1.parse(query) ) );
                { age: '23', name: 'Yoseph' }                                            // **Plain Object
 * 
 *      Ex2: > const qs2 = await import("query-string");                   // **Dynamic Import
 * 
                **[Module: null prototype] {
                    **default: [Module: null prototype] {
                            ...
                        }
                    }

                > const query = '?name=Yoseph&age=23';
                > qs2.default.parse(query);
                **[Object: null prototype] { age: '23', name: 'Yoseph' }    // 프로토타입 체인과 메소드를 가지는 객체
 *
 *      Ex3: > const qs3 = import('query-string');                              // **Dynamic Import
 * 
                **Promise {
                    **[Module: null prototype] {
                        **default: [Module: null prototype] {
                                ...
                            }
                        },
                        [Symbol(async_id_symbol)]: 616,
                        [Symbol(trigger_async_id_symbol)]: 6
                    }
 * 
 *  Refs: (1) https://chatgpt.com/share/66e91c65-0510-8003-98ed-bdc9f0bd0c79
 *           (2) https://chatgpt.com/share/66e926ed-5724-8003-a30a-f35ce9de0684
 * 
 */

console.groupCollapsed('/pages/sub/processReqParams.js'); console.groupEnd();


/**
 * ===============================
 * function getServerSideProps(context: any): any
 * ===============================
 * When the page be **SSR, this **getServerSideProps(context) function  have to be *called back automatically
 * and could receive:
 *      (1) req, (2) res, (3) query (If only HTTP *GET method, *Not other methods), (4) resolvedUrl, 
 *      (5) and so on parameters as a function parameter, *context.
 * 
 */

export async function getServerSideProps( context ) {     // Callback (***)
    console.groupCollapsed('getServerSideProps( context ) invoked.');

/*
        const { req, res, query, resolvedUrl }  = context;

        console.log('1. context:', context);
        console.log('2. req:', req);
        console.log('3. res:', res);
        console.log('4. query:', query);
        console.log('5. req.method:', req.method);

        const properties = [];

        for(let property in req) properties.push(property);
        console.log('6. all properties of req:', properties);

        properties.splice(0);

        for(let property in res) properties.push(property);
        console.log('7. all properties of res:', properties);

        properties.splice(0);
*/

    console.groupEnd();

    const { req, query } = context;
    req.setEncoding('UTF-8');

    // XX, TypeError: cannot destructure property 'weight' of 'req.body' as it is *undefined.
    // const { weight, height } = req.body;

    const httpMethod = req.method;

    switch(httpMethod) {

        case 'GET':     // (1) HTTP GET 방식 요청인 경우,
            return {
                // 파싱한 데이터를 페이지에 전달
                props: {    
                    query,
                }
            };

        case 'POST':    // (2) HTTP POST 방식 요청인 경우,
            let body = '';

            req.on('data', chunk => {
                console.debug('ondata(chunk) invoked.');

                console.info('\t+ chunk:', chunk, typeof chunk, Object.getPrototypeOf(chunk));

                // 데이터를 스트림으로 받기
                body += chunk.toString();

                console.info('\t+ body:', body);
            }); // ondata

            return new Promise((resolve, _) => {
                req.on('end', async () => {
                    console.group('onend() invoked.');
                        console.log('body:', body);
                    console.groupEnd();

                    const { default: qs } = await import('query-string');

                    resolve({
                        // 파싱한 데이터를 페이지에 전달
                        props: {
                            query: JSON.parse( JSON.stringify( qs.parse(body) ) ),
                        },
                    });
                });
            });

        default:        // (3) 그외 표준에서 정의한 HTTP 방식 요청인 경우,
            return {
                // 파싱한 데이터를 페이지에 전달
                props: {
                    query: {},
                }
            };

    }   // switch
}   // getServerSideProps


const examplePage = props => {
    console.groupCollapsed('examplePage(props) invoked.');
        console.log('1. props:', props);

        const { query } = props;
        console.log('2. query:', query);
    console.groupEnd();

    return <>
        <div className={ styles.container }>
            <h2>/pages/sub/processReqParams.js</h2>
            <hr/>

            <p>{ JSON.stringify(query) }</p>

            <a href="/">/ -&gt; /pages/index.js</a>
        </div>
    </>;
};  // examplePage


export default examplePage;


