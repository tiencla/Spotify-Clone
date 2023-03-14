import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  //* TOKEN WILL EXIST IF USER IS LOGGED IN
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  
  const { pathname } = req.nextUrl;
  
  // const url = req.nextUrl.clone();
  // if (pathname.startsWith('/_next')) {
  //   return NextResponse.next();
  // }

  if (pathname.startsWith('/api/auth') || token) {
    return NextResponse.next();
  }


  // // redirect them to login page if they dont have token
  if(!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}
