import Image from 'next/image';
import { type Product } from '@/data/products';
import { ZoneTag } from '@/components/ui/ZoneTag';
import { IngredientChip } from '@/components/ui/IngredientChip';
import { clsx } from 'clsx';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const stripeClass: Record<string, string> = {
  repair: 'border-t-form-repair',
  reset:  'border-t-form-reset',
  shield: 'border-t-form-steel',
  hold:   'border-t-form-hold',
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div
      className={clsx(
        'bg-form-surface border border-form-border border-t-2 flex flex-col',
        stripeClass[product.id],
        className
      )}
    >
      <div className="relative w-full h-[120px] md:h-[180px] bg-form-black flex items-center justify-center overflow-hidden">
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={200}
          height={180}
          loading="lazy"
          className="object-contain h-full w-full"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between">
          <ZoneTag product={product.id} label={product.timing} />
          <span className="font-mono text-xs text-form-faint tracking-widest">{product.size}</span>
        </div>

        <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight text-form-white">
          {product.name}
        </h3>

        <p className="font-sans text-sm text-form-dim leading-relaxed line-clamp-3">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-3">
          {product.keyActives.map((active) => (
            <IngredientChip key={active} label={active} color={product.colour} />
          ))}
        </div>
      </div>
    </div>
  );
}
