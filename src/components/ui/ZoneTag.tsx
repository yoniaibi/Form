import { type ZoneColour } from '@/data/products';
import { clsx } from 'clsx';

interface ZoneTagProps {
  product: ZoneColour;
  label: string;
}

const colourClasses: Record<ZoneColour, string> = {
  repair: 'text-form-repair',
  reset:  'text-form-reset',
  shield: 'text-form-steel',
  hold:   'text-form-hold',
};

export function ZoneTag({ product, label }: ZoneTagProps) {
  return (
    <span
      className={clsx(
        'font-mono text-xs tracking-widest uppercase rounded-sm',
        colourClasses[product]
      )}
    >
      {label}
    </span>
  );
}
