'use client';

import { motion } from 'framer-motion';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { WaitlistForm } from '@/components/WaitlistForm';

export function WaitlistSection() {
  return (
    <section className="bg-form-surface py-24 md:py-32">
      <div className="h-[3px] w-full flex mb-16 -mt-0">
        <div className="flex-1 bg-form-repair" />
        <div className="flex-1 bg-form-reset" />
        <div className="flex-1 bg-form-shield" />
        <div className="flex-1 bg-form-hold" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col gap-6 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionLabel text="EARLY ACCESS" />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white">
            {COPY.waitlist.headline}
          </h2>
          <p className="font-sans text-base text-form-dim">{COPY.waitlist.sub}</p>
          <WaitlistForm variant="full" />
        </motion.div>
      </div>
    </section>
  );
}
