const stages = [
  {
    name: "Problem",
    body: "Find the question sitting behind the request, in the stakeholder\u2019s own words.",
    tools: ["Interviews", "Workshops"],
  },
  {
    name: "Frame",
    body: "Agree what done means, which metric moves, and what we are deliberately not doing.",
    tools: ["Scope", "Success metric"],
  },
  {
    name: "Prototype",
    body: "Make it concrete in the smallest useful form so it can be argued with early.",
    tools: ["Python", "SQL", "Power BI"],
  },
  {
    name: "Ship",
    body: "Put it into production where real people use it, then hand over the keys.",
    tools: ["Databricks", "Azure", "Git"],
  },
  {
    name: "Learn",
    body: "Measure what actually changed and feed it back into the next frame.",
    tools: ["Evals", "KPIs", "Monitoring"],
  },
];

export function TheLoop() {
  return (
    <div className="mt-12">
      {/* Desktop rail */}
      <div className="relative hidden md:block">
        <div className="absolute left-[7px] right-[7px] top-[7px] h-px bg-line" />
        <ol className="relative grid grid-cols-5 gap-6">
          {stages.map((s, i) => (
            <li key={s.name}>
              <span className="relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line-strong bg-bg">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="mt-6 font-mono text-[10px] tracking-[0.16em] text-faint">
                0{i + 1}
              </p>
              <h3 className="mt-1.5 text-base font-medium tracking-tight text-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        {/* Return path */}
        <div className="relative mt-10 h-11">
          <svg
            aria-hidden
            viewBox="0 0 1000 44"
            preserveAspectRatio="none"
            fill="none"
            className="h-11 w-full text-line-strong"
          >
            <path
              d="M993 2 C993 34, 7 34, 7 2"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            <path d="M1 9 L7 1 L13 9 Z" fill="currentColor" />
          </svg>
          <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
            <span className="bg-bg px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              the learning becomes the next frame
            </span>
          </p>
        </div>
      </div>

      {/* Mobile rail */}
      <ol className="relative space-y-8 border-l border-line pl-6 md:hidden">
        {stages.map((s, i) => (
          <li key={s.name} className="relative">
            <span className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-line-strong bg-bg">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <p className="font-mono text-[10px] tracking-[0.16em] text-faint">0{i + 1}</p>
            <h3 className="mt-1 text-base font-medium tracking-tight text-ink">{s.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {s.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line px-2 py-0.5 font-mono text-[10px] text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
        <li className="pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          ↺ the learning becomes the next frame
        </li>
      </ol>
    </div>
  );
}
