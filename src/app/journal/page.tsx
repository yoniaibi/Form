import { SectionLabel } from '@/components/ui/SectionLabel';

export const metadata = {
  title: 'Journal — FORM.',
  description: 'Founder notes and build-in-public posts from FORM.',
};

export default function JournalPage() {
  return (
    <main className="pt-16">
      <section className="bg-form-black min-h-[60vh] py-24 md:py-32 flex flex-col items-start justify-center border-b border-form-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <SectionLabel text="JOURNAL" />
          <h1 className="font-sans font-black text-4xl md:text-6xl tracking-tight text-form-white mt-4 mb-8">
            Build notes.
          </h1>
          <p className="font-sans text-base text-form-dim max-w-xl">
            Founder notes from building FORM. in public. How the products are made, what the decisions were, what comes next.
          </p>

          <div className="mt-16 border-t border-form-border pt-12">
            <p className="font-mono text-xs tracking-widest uppercase text-form-dim">
              First entry drops at launch. Follow{' '}
              <span className="text-form-steel">@getform</span>{' '}
              on TikTok and Instagram.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
