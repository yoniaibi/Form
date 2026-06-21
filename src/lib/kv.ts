import { kv } from '@vercel/kv';

const WAITLIST_KEY = 'waitlist:emails';
const COUNT_KEY = 'waitlist:count';

export async function addEmailToWaitlist(email: string): Promise<{ alreadyExists: boolean; count: number }> {
  const added = await kv.sadd(WAITLIST_KEY, email);
  if (added === 0) {
    const count = await getWaitlistCount();
    return { alreadyExists: true, count };
  }
  const count = await kv.incr(COUNT_KEY);
  return { alreadyExists: false, count };
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const count = await kv.get<number>(COUNT_KEY);
    return count ?? 0;
  } catch {
    return 0;
  }
}
