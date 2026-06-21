export const ROUTINE_STEPS = [
  { step: 'PM',    product: 'repair', action: 'Apply thin layer. Sleep. Wash off morning.', duration: 'While you sleep' },
  { step: 'AM 01', product: 'reset',  action: 'Roll under eyes and forehead. Pat in.',      duration: '15 seconds' },
  { step: 'AM 02', product: 'shield', action: 'One pump. Blend across face. Done.',         duration: '30 seconds' },
  { step: 'CARRY', product: 'hold',   action: 'Pocket. Apply whenever. Looks like nothing.', duration: 'As needed' },
] as const;

export const RESULTS_ARC = [
  { time: 'Day 1',   result: 'Reset + Shield delivering visible difference' },
  { time: 'Week 3',  result: 'Salicylic clearing congestion — cleaner base' },
  { time: 'Week 6',  result: 'Retinal smoothing texture — spots reducing' },
  { time: 'Month 3', result: 'Genuinely better skin. Less product needed.' },
] as const;
