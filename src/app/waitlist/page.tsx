import Link from 'next/link';
import { WaitlistForm } from '@/components/WaitlistForm';

export const metadata = {
  title: 'Join the waitlist — FORM.',
  description: 'Founding members get £5 off every month. Forever.',
};

export default function WaitlistPage() {
  return (
    <main className="bg-form-black min-h-screen flex flex-col">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/" className="font-sans font-black text-xl tracking-widest uppercase text-form-white">
          FORM.
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16">
        <div className="w-full max-w-md flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-sans font-black text-6xl md:text-8xl tracking-widest uppercase text-form-white">
              FORM.
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-form-dim">
              FACE PERFORMANCE SYSTEM
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-form-white">
              Be first.
            </h1>
            <p className="font-sans text-base text-form-dim">
              Founding members get £5 off every month. Forever.
            </p>
          </div>

          <WaitlistForm variant="full" />
        </div>
      </div>

      <div className="h-[3px] w-full flex">
        <div className="flex-1 bg-form-repair" />
        <div className="flex-1 bg-form-reset" />
        <div className="flex-1 bg-form-shield" />
        <div className="flex-1 bg-form-hold" />
      </div>
    </main>
  );
}
