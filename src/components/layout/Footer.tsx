import Link from 'next/link';
import { COPY } from '@/data/copy';

const linkHrefs: Record<string, string> = {
  'The System':  '/system',
  'The Science': '/science',
  'Journal':     '/journal',
  'Shipping':    '#',
  'Returns':     '#',
  'Contact':     '#',
};

export function Footer() {
  return (
    <footer className="bg-form-surface border-t border-form-border">
      <div className="h-[3px] w-full flex">
        <div className="flex-1 bg-form-repair" />
        <div className="flex-1 bg-form-reset" />
        <div className="flex-1 bg-form-shield" />
        <div className="flex-1 bg-form-hold" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex flex-col gap-3">
            <span className="font-sans font-black text-2xl tracking-widest uppercase text-form-white">
              {COPY.nav.wordmark}
            </span>
            <span className="font-mono text-xs tracking-widest uppercase text-form-dim">
              FACE PERFORMANCE SYSTEM
            </span>
          </div>

          <div className="flex flex-wrap gap-6">
            {COPY.footer.links.map((link) => (
              <Link
                key={link}
                href={linkHrefs[link] ?? '#'}
                className="font-mono text-xs tracking-widest uppercase text-form-dim hover:text-form-white transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-form-border flex flex-col gap-3">
          <p className="font-mono text-xs text-form-faint">{COPY.footer.rp}</p>
          <p className="font-mono text-xs text-form-faint">{COPY.footer.legal}</p>
        </div>
      </div>
    </footer>
  );
}
