import { type ZoneColour } from '@/data/products';
import { ZoneTag } from '@/components/ui/ZoneTag';
import { clsx } from 'clsx';

interface RoutineStepProps {
  stepNumber: number;
  step: string;
  action: string;
  duration: string;
  zoneColour: ZoneColour;
}

const circleColour: Record<ZoneColour, string> = {
  repair: 'bg-form-repair',
  reset:  'bg-form-reset',
  shield: 'bg-form-steel',
  hold:   'bg-form-hold',
};

export function RoutineStep({ stepNumber, step, action, duration, zoneColour }: RoutineStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className={clsx('w-10 h-10 rounded-full flex items-center justify-center text-form-white font-mono text-sm font-bold', circleColour[zoneColour])}>
        {stepNumber}
      </div>
      <div className="flex flex-col gap-2">
        <ZoneTag product={zoneColour} label={step} />
        <p className="font-sans text-sm text-form-white">{action}</p>
        <span className="font-mono text-xs tracking-widest uppercase text-form-faint">{duration}</span>
      </div>
    </div>
  );
}
