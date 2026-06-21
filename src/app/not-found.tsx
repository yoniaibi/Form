import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-form-black min-h-screen flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs tracking-widest uppercase text-form-dim">404</span>
        <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tight text-form-white">
          Not found.
        </h1>
        <p className="font-sans text-base text-form-dim max-w-sm">
          This page does not exist. The system is still being built.
        </p>
        <Link
          href="/"
          className="font-mono text-xs tracking-widest uppercase text-form-steel hover:text-form-white transition-colors duration-200 mt-4"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
