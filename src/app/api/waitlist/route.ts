import { NextRequest, NextResponse } from 'next/server';
import { addEmailToWaitlist } from '@/lib/kv';
import { sendConfirmationEmail } from '@/lib/resend';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json() as { email?: unknown };
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { alreadyExists, count } = await addEmailToWaitlist(email);

    if (alreadyExists) {
      return NextResponse.json({ error: 'Already on the list' }, { status: 409 });
    }

    await sendConfirmationEmail(email).catch(() => {});

    return NextResponse.json({ success: true, count });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
