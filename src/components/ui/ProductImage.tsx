import Image from 'next/image';
import { type ZoneColour } from '@/data/products';
import { clsx } from 'clsx';

interface ProductImageProps {
  src: string;
  alt: string;
  product: ZoneColour;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

const borderColour: Record<ZoneColour, string> = {
  repair: 'border-b-form-repair',
  reset:  'border-b-form-reset',
  shield: 'border-b-form-steel',
  hold:   'border-b-form-hold',
};

export function ProductImage({ src, alt, product, width = 300, height = 300, priority, className }: ProductImageProps) {
  return (
    <div className={clsx('relative bg-form-surface border-b-2', borderColour[product], className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
