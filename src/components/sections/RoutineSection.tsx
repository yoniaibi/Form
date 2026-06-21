'use client';

import { motion } from 'framer-motion';
import { ROUTINE_STEPS, RESULTS_ARC } from '@/data/routine';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { RoutineStep } from '@/components/RoutineStep';
import { type ZoneColour } from '@/data/products';

export function RoutineSection() {
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
          <SectionLabel text={COPY.routine.eyebrow} />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white">
            {COPY.routine.headline}
          </h2>
          <p className="font-sans text-base text-form-dim">{COPY.routine.sub}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-start gap-12 mb-16">
          {ROUTINE_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <RoutineStep
                stepNumber={i + 1}
                step={s.step}
                action={s.action}
                duration={s.duration}
                zoneColour={s.product as ZoneColour}
              />
            </motion.div>
          ))}
        </div>

        <div className="border-t border-form-border pt-12">
          <SectionLabel text="RESULTS TIMELINE" className="mb-6 block" />
          <div className="flex flex-col gap-0">
            {RESULTS_ARC.map((arc, i) => (
              <motion.div
                key={arc.time}
                className="flex items-baseline gap-8 py-5 border-b border-form-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <span className="font-mono text-xs tracking-widest uppercase text-form-steel w-20 shrink-0">
                  {arc.time}
                </span>
                <span className="font-sans text-base text-form-white">{arc.result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
