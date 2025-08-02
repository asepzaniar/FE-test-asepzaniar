import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    console.log('[API] Login route called');
    const body = await req.json();
    console.log('[API] Request body:', body);

    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('[API] Response from Platzi:', data);

    const res = NextResponse.json(data, { status: response.status });

    
    res.cookies.set('isLoggedIn', 'true', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, 
    });

    return res;
  } catch (error) {
    console.error('[API] Error in login route:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
