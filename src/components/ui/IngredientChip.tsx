interface IngredientChipProps {
  label: string;
  color?: string;
}

export function IngredientChip({ label, color }: IngredientChipProps) {
  return (
    <span
      className="font-mono text-xs tracking-widest uppercase px-2 py-1 rounded-sm border border-form-border text-form-dim"
      style={color ? { borderColor: color, color } : undefined}
    >
      {label}
    </span>
  );
}
