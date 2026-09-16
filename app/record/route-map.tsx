export function RouteMap() {
  return (
    <figure className="rounded-lg border border-line bg-surface/40 p-6 sm:p-8">
      <figcaption className="sr-only">
        A schematic route from Lahore, Pakistan to Warsaw, Poland.
      </figcaption>

      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">— 2023</p>
          <p className="mt-2 text-sm font-medium text-ink">Lahore</p>
          <p className="mt-0.5 font-mono text-[10px] text-faint">Pakistan · 31.52°N 74.36°E</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">2023 —</p>
          <p className="mt-2 text-sm font-medium text-ink">Warsaw</p>
          <p className="mt-0.5 font-mono text-[10px] text-faint">Poland · 52.23°N 21.01°E</p>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 800 100"
        preserveAspectRatio="none"
        fill="none"
        className="mt-4 h-20 w-full sm:h-24"
      >
        <line x1="0" y1="92" x2="800" y2="92" className="stroke-line" strokeWidth="1" />
        <path
          d="M44 88 C 244 8, 556 8, 756 48"
          className="stroke-line-strong"
          strokeWidth="1.5"
          strokeDasharray="3 7"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="44" cy="88" r="5" className="fill-accent" />
        <circle cx="756" cy="48" r="5" className="fill-accent" />
      </svg>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
        One move · one continent away
      </p>
    </figure>
  );
}
