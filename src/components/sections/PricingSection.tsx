'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';

export function PricingSection() {
  return (
    <section className="bg-form-black py-24 md:py-32 border-t border-form-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col items-center text-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionLabel text={COPY.pricing.eyebrow} />
          <h2 className="font-sans font-black text-4xl md:text-6xl tracking-tight text-form-white">
            {COPY.pricing.headline}
          </h2>
          <p className="font-sans text-base text-form-dim max-w-md">{COPY.pricing.sub}</p>
          <p className="font-sans text-sm text-form-dim max-w-md">{COPY.pricing.sub2}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/waitlist">
              <Button size="lg">Join the waitlist</Button>
            </Link>
          </div>
          <p className="font-mono text-xs tracking-widest uppercase text-form-faint mt-2">
            {COPY.pricing.oneoff}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
