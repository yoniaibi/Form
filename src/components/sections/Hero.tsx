'use client';

import Link from 'next/link';
import { COPY } from '@/data/copy';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-form-black flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-0">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
            <SectionLabel text={COPY.hero.eyebrow} />

            <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tight text-form-white leading-tight whitespace-pre-line">
              {COPY.hero.headline}
            </h1>

            <p className="font-sans text-base text-form-dim">
              {COPY.hero.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  {COPY.hero.cta_primary}
                </Button>
              </Link>
              <a href="#system" className="w-full sm:w-auto">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  {COPY.hero.cta_secondary}
                </Button>
              </a>
            </div>

            <p className="font-mono text-xs tracking-widest uppercase text-form-faint">
              {COPY.hero.disclaimer}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 h-[3px] w-full flex">
        <div className="flex-1 bg-form-repair" />
        <div className="flex-1 bg-form-reset" />
        <div className="flex-1 bg-form-shield" />
        <div className="flex-1 bg-form-hold" />
      </div>
    </section>
  );
}
