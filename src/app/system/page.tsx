import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import { COPY } from '@/data/copy';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ZoneTag } from '@/components/ui/ZoneTag';
import { IngredientChip } from '@/components/ui/IngredientChip';
import { PricingSection } from '@/components/sections/PricingSection';
import { WaitlistSection } from '@/components/sections/WaitlistSection';
import { clsx } from 'clsx';

const stripeClass: Record<string, string> = {
  repair: 'border-t-form-repair',
  reset:  'border-t-form-reset',
  shield: 'border-t-form-steel',
  hold:   'border-t-form-hold',
};

const ingredientRows: Record<string, Array<{ ingredient: string; sensation: string; benefit: string }>> = {
  repair: [
    { ingredient: 'Retinal 0.1%',    sensation: 'Mild warmth',         benefit: 'Cell turnover, smooths texture' },
    { ingredient: 'Salicylic 0.5%',  sensation: 'Slight tingle',       benefit: 'Clears pores, reduces congestion' },
    { ingredient: 'Ceramides',        sensation: 'None',                benefit: 'Barrier repair, locks hydration' },
    { ingredient: 'Cica (Centella)',  sensation: 'Cooling',             benefit: 'Calms, heals, reduces redness' },
    { ingredient: 'Niacinamide 4%',  sensation: 'Flushing warmth',     benefit: 'Brightens, reduces pores' },
  ],
  reset: [
    { ingredient: 'Caffeine 2%',     sensation: 'None',                benefit: 'Constricts vessels, reduces puffiness' },
    { ingredient: 'Argireline',       sensation: 'Tightening',          benefit: 'Relaxes expression lines' },
    { ingredient: 'Peptides',         sensation: 'None',                benefit: 'Firms skin, stimulates collagen' },
    { ingredient: 'Vitamin K',        sensation: 'None',                benefit: 'Reduces dark circles' },
    { ingredient: 'Metal Rollerball', sensation: 'Cold pressure',       benefit: 'Lymphatic drainage, depuffing' },
  ],
  shield: [
    { ingredient: 'SPF 50',          sensation: 'Light film',          benefit: 'UV protection, prevents ageing' },
    { ingredient: 'Niacinamide 4%',  sensation: 'Mild warmth',         benefit: 'Brightens, controls oil' },
    { ingredient: 'Iron Oxide Tint', sensation: 'Setting sensation',   benefit: 'Sharpens structure, even tone' },
    { ingredient: 'Hyaluronic Acid', sensation: 'Tightening on set',   benefit: 'Hydration, plumps skin' },
  ],
  hold: [
    { ingredient: 'Peppermint 0.5%', sensation: 'Definite tingle',    benefit: 'Plumps, stimulates circulation' },
    { ingredient: 'Ginger Root',      sensation: 'Warm tingle',        benefit: 'Circulation, volume effect' },
    { ingredient: 'SPF 15',           sensation: 'None',               benefit: 'Protects lips from UV' },
    { ingredient: 'Shea Butter',      sensation: 'Smoothing',          benefit: 'Barrier, long-lasting moisture' },
  ],
};

export const metadata = {
  title: 'The System — FORM.',
  description: 'Four products. One routine. Under 60 seconds.',
};

export default function SystemPage() {
  return (
    <main className="pt-16">
      <section className="bg-form-black py-24 md:py-32 border-b border-form-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionLabel text={COPY.system.eyebrow} />
          <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tight text-form-white mt-4">
            Four products. One system.
          </h1>
        </div>
      </section>

      {PRODUCTS.map((product) => (
        <section
          key={product.id}
          className={clsx(
            'bg-form-surface border-t-2 border-b border-form-border py-16 md:py-24',
            stripeClass[product.id]
          )}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-12">
              <div className="md:w-1/2 flex items-start justify-center bg-form-black p-8">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="object-contain max-h-72 w-auto"
                />
              </div>

              <div className="md:w-1/2 flex flex-col gap-5">
                <ZoneTag product={product.id} label={product.timing} />
                <h2 className="font-sans font-bold text-2xl md:text-4xl tracking-tight text-form-white">
                  {product.name}
                </h2>
                <span className="font-mono text-xs tracking-widest uppercase text-form-faint">
                  {product.size}
                </span>
                <p className="font-sans text-base text-form-white">{product.tagline}</p>
                <p className="font-sans text-sm text-form-dim leading-relaxed">{product.description}</p>

                <div className="bg-form-raised border border-form-border p-4">
                  <p className="font-mono text-xs tracking-widest uppercase text-form-dim mb-2">SENSATION</p>
                  <p className="font-sans text-sm text-form-white italic">{product.sensationNote}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.keyActives.map((active) => (
                    <IngredientChip key={active} label={active} color={product.colour} />
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-form-border pt-8 mb-8">
              <p className="font-mono text-xs tracking-widest uppercase text-form-dim mb-4">INGREDIENT DETAIL</p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px]">
                  <thead>
                    <tr className="border-b border-form-border">
                      <th className="text-left py-2 font-mono text-xs tracking-widest uppercase text-form-faint pr-8">Ingredient</th>
                      <th className="text-left py-2 font-mono text-xs tracking-widest uppercase text-form-faint pr-8">Sensation</th>
                      <th className="text-left py-2 font-mono text-xs tracking-widest uppercase text-form-faint">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(ingredientRows[product.id] ?? []).map((row) => (
                      <tr key={row.ingredient} className="border-b border-form-border">
                        <td className="py-3 pr-8 font-mono text-xs text-form-white">{row.ingredient}</td>
                        <td className="py-3 pr-8 font-mono text-xs text-form-dim">{row.sensation}</td>
                        <td className="py-3 font-mono text-xs text-form-dim">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-form-border pt-8">
              <p className="font-mono text-xs tracking-widest uppercase text-form-dim mb-4">HOW TO USE</p>
              <ol className="flex flex-col gap-3">
                {product.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-mono text-xs text-form-steel w-5 shrink-0 mt-0.5">{i + 1}.</span>
                    <span className="font-sans text-sm text-form-white">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ))}

      <PricingSection />
      <WaitlistSection />
    </main>
  );
}
