'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COPY } from '@/data/copy';
import { Button } from '@/components/ui/Button';

type Variant = 'hero' | 'full';

interface WaitlistFormProps {
  variant?: Variant;
}

export function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [count, setCount] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { success?: boolean; count?: number; error?: string };

      if (res.ok && data.success) {
        setCount(data.count ?? null);
        setState('success');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong');
        setState('error');
      }
    } catch {
      setErrorMsg('Something went wrong');
      setState('error');
    }
  }

  const _isFullWidth = variant === 'full';

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <p className="font-sans text-base text-form-white">{COPY.waitlist.success}</p>
            {count !== null && (
              <p className="font-mono text-xs tracking-widest uppercase text-form-steel">
                {count} men already on the list.
              </p>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 w-full"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={COPY.waitlist.placeholder}
              required
              className="flex-1 bg-form-raised border border-form-border text-form-white placeholder-form-dim font-sans text-sm px-4 py-3 rounded-none outline-none focus:border-form-steel transition-colors duration-200"
            />
            <Button
              type="submit"
              size="md"
              disabled={state === 'loading'}
              className="shrink-0 disabled:opacity-50"
            >
              {state === 'loading' ? 'JOINING...' : COPY.waitlist.button}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      {state === 'error' && (
        <p className="font-mono text-xs tracking-widest uppercase text-red-400 mt-3">{errorMsg}</p>
      )}
    </div>
  );
}
