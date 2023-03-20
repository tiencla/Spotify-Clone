import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// const dev = process.env.NODE_ENV !== 'production';

// export const server = dev ? 'http://localhost:3000' : 'https://spotify-clone-fawn-seven.vercel.app/';

export async function middleware(req) {
  //* TOKEN WILL EXIST IF USER IS LOGGED IN
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  

  // Get the current pathname
  const { pathname } = req.nextUrl;

  // Allow requests to the auth API endpoint and requests from authenticated users
  if (pathname.startsWith('/api/auth') || token) {
    return NextResponse.next();
  }

  // // redirect them to login page if they dont have token
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }

  // // Redirect to login page if the user is not logged in
  // if (!token && pathname !== `${server}/login`) {
  //   return NextResponse.redirect(`${server}/login`);
  // }

  //   // Redirect to login page if the user is not logged in
  // if (!token && pathname !== '/login') {
  //   return NextResponse.redirect(`${server}/login`);
  // }
}

// export const config = {
//   matcher: '/',
// };
