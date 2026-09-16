export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: string;
  children: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span className="font-mono text-[11px] text-faint">{index}</span>
      <h2 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">{children}</h2>
    </div>
  );
}
