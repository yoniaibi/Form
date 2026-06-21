interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <span className={`font-mono text-xs tracking-widest uppercase text-form-dim ${className ?? ''}`}>
      {text}
    </span>
  );
}
