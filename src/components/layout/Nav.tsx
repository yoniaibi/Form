'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COPY } from '@/data/copy';
import { Button } from '@/components/ui/Button';

const linkHrefs: Record<string, string> = {
  'The System':  '/system',
  'The Science': '/science',
  'Journal':     '/journal',
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-form-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-sans font-black text-xl tracking-widest uppercase text-form-white">
            {COPY.nav.wordmark}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {COPY.nav.links.map((link) => (
              <Link
                key={link}
                href={linkHrefs[link] ?? '/'}
                className="font-mono text-xs tracking-widest uppercase text-form-dim hover:text-form-white transition-colors duration-200"
              >
                {link}
              </Link>
            ))}
            <Link href="/waitlist">
              <Button size="sm">{COPY.nav.cta}</Button>
            </Link>
          </div>

          <button
            className="md:hidden text-form-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="font-mono text-xs tracking-widest uppercase">
              {open ? 'CLOSE' : 'MENU'}
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-30 bg-form-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-form-surface border-l border-form-border transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8 pb-8 gap-8">
          {COPY.nav.links.map((link) => (
            <Link
              key={link}
              href={linkHrefs[link] ?? '/'}
              className="font-mono text-xs tracking-widest uppercase text-form-dim hover:text-form-white transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link}
            </Link>
          ))}
          <Link href="/waitlist" onClick={() => setOpen(false)}>
            <Button size="md" className="w-full">{COPY.nav.cta}</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
