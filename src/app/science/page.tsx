import { PRODUCTS } from '@/data/products';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { WaitlistSection } from '@/components/sections/WaitlistSection';
import { clsx } from 'clsx';

const borderColour: Record<string, string> = {
  repair: 'border-l-form-repair',
  reset:  'border-l-form-reset',
  shield: 'border-l-form-steel',
  hold:   'border-l-form-hold',
};

const sensationDetail: Record<string, { what: string; cause: string; effect: string }> = {
  repair: {
    what:   'Warm spreading flush across the face within 2 minutes of application.',
    cause:  'Niacinamide causes a mild vasodilation effect — increased blood flow near the skin surface.',
    effect: 'That same blood flow is delivering the retinal and ceramides deeper into the skin. The sensation is the delivery mechanism.',
  },
  reset: {
    what:   'Cold metal pressure on the under-eye. Slight drainage sensation across the cheekbone.',
    cause:  'The stainless steel rollerball retains cold temperature. Physical pressure moves lymphatic fluid.',
    effect: 'Overnight fluid retention physically drains. Caffeine simultaneously constricts blood vessels. Puffiness gone in 15 seconds.',
  },
  shield: {
    what:   'A tightening sensation as the formula sets — roughly 60 seconds after application.',
    cause:  'Hyaluronic acid draws moisture from the air and tightens as it forms a film on the skin surface.',
    effect: 'The tightening is the HA locking in. The SPF matrix is now active. The tint is set. That is what done feels like.',
  },
  hold: {
    what:   'Definite tingle on the lips. Mild — like a ginger shot. Fades within 2 minutes.',
    cause:  'Peppermint (0.5%) stimulates cold receptors. Ginger root activates TRPV1 receptors — the same warmth pathway as capsaicin, but mild.',
    effect: 'Stimulated receptors mean increased circulation to the lips. Volume. Definition. The tingle is the result, not the side effect.',
  },
};

export const metadata = {
  title: 'The Science — FORM.',
  description: 'Every sensation in the FORM system is calibrated. Not irritation. Activation.',
};

export default function SciencePage() {
  return (
    <main className="pt-16">
      <section className="bg-form-black py-24 md:py-32 border-b border-form-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionLabel text="THE SCIENCE" />
          <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tight text-form-white mt-4 mb-8">
            We added the tingle on purpose.
          </h1>
          <p className="font-sans text-base text-form-dim leading-relaxed max-w-2xl">
            100 years ago, Pepsodent added menthol to toothpaste. No dental benefit. Pure sensation. People felt their teeth being cleaned. They kept brushing.
          </p>
          <p className="font-sans text-base text-form-dim leading-relaxed mt-4 max-w-2xl">
            FORM does the same — except every sensation ingredient in the system also genuinely works. The tingle is a signal and a result simultaneously.
          </p>
        </div>
      </section>

      <section className="bg-form-surface py-24 md:py-32 border-b border-form-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionLabel text="SENSATION BREAKDOWN" />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white mt-4 mb-16">
            What you feel. What is causing it. What it is doing.
          </h2>

          <div className="flex flex-col gap-8">
            {PRODUCTS.map((product) => {
              const detail = sensationDetail[product.id];
              return (
                <div
                  key={product.id}
                  className={clsx(
                    'bg-form-raised border border-form-border border-l-4 p-8 flex flex-col gap-6',
                    borderColour[product.id]
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs tracking-widest uppercase text-form-dim">
                      {product.name}
                    </span>
                    <span className="font-mono text-xs tracking-widest uppercase text-form-faint">
                      {product.timing}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs tracking-widest uppercase text-form-dim mb-1">WHAT YOU FEEL</span>
                      <p className="font-sans text-sm text-form-white">{detail?.what}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs tracking-widest uppercase text-form-dim mb-1">WHAT CAUSES IT</span>
                      <p className="font-sans text-sm text-form-dim">{detail?.cause}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs tracking-widest uppercase text-form-dim mb-1">WHAT IT IS DOING</span>
                      <p className="font-sans text-sm text-form-dim">{detail?.effect}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-form-black py-24 md:py-32 border-b border-form-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionLabel text="INFLUENCE" />
          <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white mt-4 mb-8">
            The South Korean playbook. Adopted. Improved.
          </h2>
          <div className="max-w-2xl flex flex-col gap-4">
            <p className="font-sans text-sm text-form-dim leading-relaxed">
              Korean skincare pioneered the idea that effective ingredients should also feel like they are working. The 10-step routine exists because every step delivers a distinct sensory signal — toner, essence, serum, sheet mask.
            </p>
            <p className="font-sans text-sm text-form-dim leading-relaxed">
              FORM compresses that logic into 4 products and under 60 seconds. The sensations are not inherited from K-beauty — they are engineered for this system. Calibrated. Not excessive. Each one lasts just long enough to confirm something happened.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-form-surface py-16 border-b border-form-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-mono text-xs tracking-widest uppercase text-form-dim">
            All concentrations tested and safety assessed under UK Cosmetics Regulation. Batch codes and safety data sheets available on request.
          </p>
        </div>
      </section>

      <WaitlistSection />
    </main>
  );
}
