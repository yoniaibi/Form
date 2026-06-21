export type ZoneColour = 'repair' | 'reset' | 'shield' | 'hold';

export interface Product {
  id:            ZoneColour;
  name:          string;
  tagline:       string;
  timing:        string;
  size:          string;
  colour:        string;
  description:   string;
  keyActives:    string[];
  sensationNote: string;
  imageSrc:      string;
  steps:         string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'repair',
    name: 'FORM Repair',
    tagline: 'Overnight mask. Clears, smooths, rebuilds.',
    timing: 'NIGHT',
    size: '50ml',
    colour: '#3A6B8A',
    description:
      'Low-dose retinal and salicylic acid work through the night. ' +
      'Ceramides and centella repair the barrier. Wake up with visibly ' +
      'clearer, smoother skin. Wash off in the morning.',
    keyActives: ['Retinal 0.1%', 'Salicylic 0.5%', 'Ceramides', 'Cica'],
    sensationNote:
      'Niacinamide flush — warm spreading sensation ' +
      'within 2 minutes. Lasts 10–15 mins. That is the repair starting.',
    imageSrc: '/images/products/repair.png',
    steps: ['Apply thin layer to clean face', 'Sleep', 'Wash off in the morning'],
  },
  {
    id: 'reset',
    name: 'FORM Reset',
    tagline: 'Eye and forehead. Kills the tired look in 15 seconds.',
    timing: 'AM · 01',
    size: '15ml',
    colour: '#2E8B6E',
    description:
      'Caffeine depuffs. Peptides firm. The metal rollerball ' +
      'delivers a cold pressure that drains the overnight build-up. ' +
      'Micro-tint neutralises dark circles. 15 seconds.',
    keyActives: ['Caffeine 2%', 'Argireline', 'Peptides', 'Vitamin K'],
    sensationNote:
      'Cold metal rollerball on the under-eye. ' +
      'Keep in the fridge overnight for maximum effect.',
    imageSrc: '/images/products/reset.png',
    steps: ['Roll under eyes', 'Roll across forehead', 'Pat in gently'],
  },
  {
    id: 'shield',
    name: 'FORM Shield',
    tagline: 'Tinted SPF50. Sharpens structure. Holds all day.',
    timing: 'AM · 02',
    size: '35ml',
    colour: '#4A7FA5',
    description:
      'One pump. Blend across the face. The depth-tint sharpens ' +
      'jaw and cheekbone structure. SPF50 protects. Matte finish holds ' +
      'for 8+ hours. Available in two shades: I (Light-Medium) and II (Medium).',
    keyActives: ['SPF 50', 'Niacinamide 4%', 'Iron Oxide Tint', 'HA'],
    sensationNote:
      'Hyaluronic acid tightens as it sets — ' +
      'the lock-in moment. Feels like armour going on.',
    imageSrc: '/images/products/shield.png',
    steps: ['One pump onto fingers', 'Blend from centre outward', 'Set in 60 seconds'],
  },
  {
    id: 'hold',
    name: 'FORM Hold',
    tagline: 'Tinted lip treatment. Pocket carry. SPF15.',
    timing: 'CARRY',
    size: '4.5g',
    colour: '#8B6A3E',
    description:
      'Peppermint and ginger root give a definite tingle ' +
      'on application — this is the ginger shot of the kit. ' +
      'Matte nude tint. SPF15. Shea butter barrier. Apply whenever.',
    keyActives: ['Peppermint 0.5%', 'Ginger Root', 'SPF 15', 'Shea'],
    sensationNote:
      'Definite tingle on lips — mild, like a ginger shot. ' +
      'That is the peppermint and ginger activating. Fades in 2 minutes.',
    imageSrc: '/images/products/hold.png',
    steps: ['Apply directly to lips', 'Blend with finger if needed', 'Reapply as needed'],
  },
];
