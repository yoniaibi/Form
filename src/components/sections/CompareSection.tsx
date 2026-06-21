'use client';

import { motion } from 'framer-motion';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';

const competitors = [
  { brand: 'Lumin / Geologie', today: false, sixWeeks: false, system: false, price: '£40–60/mo' },
  { brand: 'War Paint / Stryx', today: true,  sixWeeks: false, system: false, price: '£25–45/mo' },
  { brand: 'Bulldog',           today: false, sixWeeks: false, system: false, price: '£15–25/mo' },
  { brand: 'FORM.',             today: true,  sixWeeks: true,  system: true,  price: '£34.99/mo', highlight: true },
];

function Check({ yes }: { yes: boolean }) {
  return (
    <span className={`font-mono text-xs tracking-widest ${yes ? 'text-form-reset' : 'text-form-faint'}`}>
      {yes ? 'YES' : '—'}
    </span>
  );
}

export function CompareSection() {
  return (
    <section className="bg-form-surface py-24 md:py-32 border-t border-form-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionLabel text={COPY.compare.eyebrow} />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white">
            {COPY.compare.headline}
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-form-border">
                <th className="text-left py-3 font-mono text-xs tracking-widest uppercase text-form-dim pr-8">Brand</th>
                <th className="text-left py-3 font-mono text-xs tracking-widest uppercase text-form-dim pr-8">Results today</th>
                <th className="text-left py-3 font-mono text-xs tracking-widest uppercase text-form-dim pr-8">Results week 6</th>
                <th className="text-left py-3 font-mono text-xs tracking-widest uppercase text-form-dim pr-8">System</th>
                <th className="text-left py-3 font-mono text-xs tracking-widest uppercase text-form-dim">Price</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((c) => (
                <tr
                  key={c.brand}
                  className={`border-b border-form-border ${c.highlight ? 'border border-form-steel' : ''}`}
                >
                  <td className={`py-4 pr-8 font-sans text-sm ${c.highlight ? 'text-form-white font-bold' : 'text-form-dim'}`}>
                    {c.brand}
                  </td>
                  <td className="py-4 pr-8"><Check yes={c.today} /></td>
                  <td className="py-4 pr-8"><Check yes={c.sixWeeks} /></td>
                  <td className="py-4 pr-8"><Check yes={c.system} /></td>
                  <td className={`py-4 font-mono text-xs tracking-widest ${c.highlight ? 'text-form-steel' : 'text-form-dim'}`}>
                    {c.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
