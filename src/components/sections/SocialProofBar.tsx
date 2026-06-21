'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SocialProofBar() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/waitlist/count')
      .then((r) => r.json())
      .then((d: { count?: number }) => setCount(d.count ?? 0))
      .catch(() => setCount(0));
  }, []);

  return (
    <motion.div
      className="bg-form-surface border-b border-form-border py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="font-mono text-xs tracking-widest uppercase text-form-dim text-center">
          {count !== null
            ? `${count} men already on the waitlist`
            : 'Loading...'}
        </p>
      </div>
    </motion.div>
  );
}
