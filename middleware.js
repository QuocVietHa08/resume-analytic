import { NextResponse } from 'next/server';

export default function middleware(req) {
  const veryfi = req.cookies.get('accessToken');
  const url = req.nextUrl.clone();

  const urlPublic = ['/login', '/signup'];
  const urlPrivate = ['/create-nft', '/create-collection', '/profile'];

  if (veryfi && urlPublic.includes(url.pathname)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_DRAFT_UI}`);
  }

  if (!veryfi && urlPrivate.includes(url.pathname)) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/((?!_next|api/auth).*)(.+)'],
};
