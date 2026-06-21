'use client';

import { motion } from 'framer-motion';
import { PRODUCTS } from '@/data/products';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { clsx } from 'clsx';

const borderColour: Record<string, string> = {
  repair: 'border-l-form-repair',
  reset:  'border-l-form-reset',
  shield: 'border-l-form-steel',
  hold:   'border-l-form-hold',
};

export function ScienceSection() {
  return (
    <section className="bg-form-black py-24 md:py-32 border-t border-form-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionLabel text={COPY.science.eyebrow} />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white whitespace-pre-line">
            {COPY.science.headline}
          </h2>
          <p className="font-sans text-base text-form-dim max-w-xl">{COPY.science.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              className={clsx(
                'bg-form-surface border border-form-border border-l-4 p-6 flex flex-col gap-4',
                borderColour[product.id]
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <span className="font-mono text-xs tracking-widest uppercase text-form-dim">
                {product.name}
              </span>
              <p className="font-sans text-base text-form-white italic">{product.sensationNote}</p>
              <p className="font-sans text-sm text-form-dim">{product.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
