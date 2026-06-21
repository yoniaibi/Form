'use client';

import { motion } from 'framer-motion';
import { PRODUCTS } from '@/data/products';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProductCard } from '@/components/ProductCard';

export function SystemSection() {
  return (
    <section id="system" className="bg-form-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionLabel text={COPY.system.eyebrow} />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white">
            {COPY.system.headline}
          </h2>
          <p className="font-sans text-base text-form-dim max-w-xl">{COPY.system.sub}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <ProductCard product={product} className="h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
