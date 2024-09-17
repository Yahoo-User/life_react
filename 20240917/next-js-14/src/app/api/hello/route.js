// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextRequest, NextResponse } from 'next/server';


// console.clear();

console.groupCollapsed("/src/app/api/hello/route.js");
    console.log('1. NextRequest:', NextRequest);
    console.log('2. NextResponse:', NextResponse);
console.groupEnd();


// function GET(req: any): Promise< NextResponse< { name: string; } > >
export async function GET(req) {   // If HTTP GET method request,
    console.groupCollapsed('GET(req) invoked.');

        console.log('1. req:', req);

    // Step1. URL에서 요청 파라미터 얻기
    const { searchParams } = new URL( req.url );

    // Step2. 특정 요청 파라미터 추출
    const name = searchParams.get('name');
    const age = searchParams.get('age');

        /**
            2. new URL(req.url): URL {
                href: 'http://localhost:3001/api/hello?name=Yoseph&age=23&_rsc=1wtp7',
                origin: 'http://localhost:3001',
                protocol: 'http:',
                username: '',
                password: '',
                host: 'localhost:3001',
                hostname: 'localhost',
                port: '3001',
                pathname: '/api/hello',
                search: '?name=Yoseph&age=23&_rsc=1wtp7',
              *searchParams: *URLSearchParams { 'name' => 'Yoseph', 'age' => '23', '_rsc' => '1wtp7' },
                hash: ''
            }
        */
        console.log('2. new URL(req.url):', new URL(req.url));

        // 3. searchParams: URLSearchParams { 'name' => 'Yoseph', 'age' => '23', '_rsc' => '1wtp7' }
        console.log('3. searchParams:', searchParams);

        console.log(`4. name: ${name}, age: ${age}`);

    console.groupEnd();

    // Ensure you return a `Response` or a `NextResponse` in all branches of your handler.  (***)
    return NextResponse.json( { name: 'Trinity' } );
}


// function POST(req: any): Promise< NextResponse< { name: string; } > >
export async function POST(req) {   // If HTTP POST method request,
    console.groupCollapsed('POST(req) invoked.');

        console.log('1. req:', req);

    // Step1. FormData 객체로 변환
    const formData = await req.formData();
        
    // Step2. 폼 필드에서 특정 값을 추출
    const name = formData.get('name');
    const age = formData.get('age');

        // FormData { name: 'Yoseph', age: '23' }
        console.log('2. formData:', formData);
        console.log(`3. name: ${name}, age: ${age}`);

    console.groupEnd();

    // Ensure you return a `Response` or a `NextResponse` in all branches of your handler.  (***)
    return NextResponse.json( { name: 'Pyramide' } );
}


// function PUT(req: any): Promise< NextResponse< { name: string; } > >
export async function PUT(req) {   // If HTTP PUT method request,
    console.groupCollapsed('PUT(req) invoked.');

        console.log('1. req:', req);

    // Step1. FormData 객체로 변환
    const formData = await req.formData();
        
    // Step2. 폼 필드에서 특정 값을 추출
    const name = formData.get('name');
    const age = formData.get('age');

        // FormData { name: 'Yoseph', age: '23' }
        console.log('2. formData:', formData);
        console.log(`3. name: ${name}, age: ${age}`);

    console.groupEnd();

    // Ensure you return a `Response` or a `NextResponse` in all branches of your handler.  (***)
    return NextResponse.json( { name: 'Cherryneo' } );
}


// function DELETE(req: any): Promise< NextResponse< { name: string; } > >
export async function DELETE(req) {   // If HTTP DELETE method request,
    console.groupCollapsed('DELETE(req) invoked.');

        console.log('1. req:', req);

    // Step1. FormData 객체로 변환
    const formData = await req.formData();
        
    // Step2. 폼 필드에서 특정 값을 추출
    const name = formData.get('name');
    const age = formData.get('age');

        // FormData { name: 'Yoseph', age: '23' }
        console.log('2. formData:', formData);
        console.log(`3. name: ${name}, age: ${age}`);

    console.groupEnd();

    // Ensure you return a `Response` or a `NextResponse` in all branches of your handler.  (***)
    return NextResponse.json( { name: 'Yoseph' } );
}


