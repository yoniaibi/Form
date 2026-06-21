import { NextResponse } from 'next/server';
import { getWaitlistCount } from '@/lib/kv';

export const revalidate = 60;

export async function GET(): Promise<NextResponse> {
  try {
    const count = await getWaitlistCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
