import { Fragment } from "react";

const TOPICS = [
  { key: "Economic Growth", equal: 0.478, unequal: 0.044 },
  { key: "Debt", equal: 0.202, unequal: 0.0 },
  { key: "Crisis", equal: 0.11, unequal: 0.567 },
  { key: "Reform", equal: 0.087, unequal: 0.017 },
  { key: "Risk", equal: 0.085, unequal: 0.318 },
  { key: "Climate Change", equal: 0.028, unequal: 0.008 },
];

const BAR_MAX = 0.6;

function BarRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        {label}
      </span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink/[0.06]">
        <div
          className={`h-full rounded-full ${accent ? "bg-accent" : "bg-ink/30"}`}
          style={{ width: `${Math.min(100, (value / BAR_MAX) * 100)}%` }}
        />
      </div>
      <span className="w-11 shrink-0 text-right font-mono text-[10px] text-faint">
        {(value * 100).toFixed(1)}%
      </span>
    </div>
  );
}

export function DictionaryBars() {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-5 pb-6">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          <span className="h-2 w-4 rounded-full bg-accent" /> Equal
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
          <span className="h-2 w-4 rounded-full bg-ink/30" /> Unequal
        </span>
      </div>

      <div className="space-y-6">
        {TOPICS.map((t) => (
          <div key={t.key} className="border-t border-line pt-5">
            <h4 className="text-sm font-medium text-ink">{t.key}</h4>
            <div className="mt-3 space-y-2">
              <BarRow label="Equal" value={t.equal} accent />
              <BarRow label="Unequal" value={t.unequal} accent={false} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- topic timeline ---------- */

const YEARS = [
  1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
];

const GROWTH = [
  0.51, 0.34, 0.34, 0.48, 0.44, 0.48, 0.48, 0.49, 0.46, 0.55, 0.45, 0.4, 0.36, 0.37, 0.46, 0.72,
  0.66, 0.56, 0.65, 0.54, 0.53, 0.51, 0.54, 0.39, 0.43, 0.43, 0.73, 0.42,
];

const DEBT = [
  0.19, 0.15, 0.45, 0.25, 0.19, 0.32, 0.34, 0.35, 0.2, 0.28, 0.17, 0.04, 0.03, 0.07, 0.11, 0.04,
  0.1, 0.19, 0.12, 0.11, 0.19, 0.18, 0.16, 0.41, 0.34, 0.3, 0.17, 0.4,
];

const CRISIS = [
  0.17, 0.25, 0.1, 0.05, 0.05, 0.13, 0.06, 0.06, 0.02, 0.01, 0.01, 0.32, 0.34, 0.31, 0.18, 0.06,
  0.01, 0.05, 0.02, 0.06, 0.05, 0.01, 0.0, 0.14, 0.09, 0.07, 0.0, 0.03,
];

const M = { l: 36, r: 14, t: 20, b: 30 };
const W = 760;
const H = 300;
const PW = W - M.l - M.r;
const PH = H - M.t - M.b;

const px = (i: number) => M.l + (i / (YEARS.length - 1)) * PW;
const py = (v: number, max: number) => M.t + (1 - v / max) * PH;

function path(values: number[], max: number) {
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)} ${py(v, max).toFixed(1)}`)
    .join(" ");
}

export function TopicTimeline() {
  const max = 0.8;
  const ticks = [0, 0.2, 0.4, 0.6, 0.8];
  const xLabels = [1997, 2002, 2007, 2012, 2017, 2022];
  const thinStart = YEARS.indexOf(2017);

  return (
    <figure className="mt-8">
      <svg
        role="img"
        aria-label="Topic share by year for Economic Growth, Debt, and Crisis, under the equal dictionary"
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
      >
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={M.l}
              x2={W - M.r}
              y1={py(t, max)}
              y2={py(t, max)}
              className="stroke-line"
              strokeWidth="1"
            />
            <text x={M.l - 8} y={py(t, max) + 3} textAnchor="end" fontSize="9" className="fill-faint font-mono">
              {(t * 100).toFixed(0)}
            </text>
          </g>
        ))}

        {/* thin coverage band */}
        <rect
          x={px(thinStart)}
          y={M.t}
          width={W - M.r - px(thinStart)}
          height={PH}
          className="fill-ink/[0.03]"
        />
        <text x={px(thinStart) + 6} y={M.t + 12} fontSize="8" className="fill-faint font-mono">
          THIN COVERAGE
        </text>

        {xLabels.map((y) => {
          const i = YEARS.indexOf(y);
          return (
            <text
              key={y}
              x={px(i)}
              y={H - 10}
              textAnchor="middle"
              fontSize="9"
              className="fill-faint font-mono"
            >
              {y}
            </text>
          );
        })}

        <path d={path(GROWTH, max)} fill="none" className="stroke-muted" strokeWidth="1.25" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
        <path d={path(DEBT, max)} fill="none" className="stroke-ink" strokeWidth="1.75" vectorEffect="non-scaling-stroke" />
        <path d={path(CRISIS, max)} fill="none" className="stroke-accent" strokeWidth="1.75" vectorEffect="non-scaling-stroke" />

        {/* annotations */}
        <text x={px(YEARS.indexOf(2009))} y={py(0.34, max) - 10} textAnchor="middle" fontSize="9" className="fill-accent font-mono">
          2008–09 crisis
        </text>
        <text x={px(YEARS.indexOf(2022))} y={py(0.30, max) + 16} textAnchor="middle" fontSize="9" className="fill-ink font-mono">
          debt surge
        </text>
      </svg>

      <figcaption className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        <span className="flex items-center gap-2">
          <span className="h-px w-4 bg-accent" /> Crisis
        </span>
        <span className="flex items-center gap-2">
          <span className="h-px w-4 bg-ink" /> Debt
        </span>
        <span className="flex items-center gap-2">
          <span className="h-px w-4 border-t border-dashed border-muted" /> Economic Growth
        </span>
        <span className="ml-auto normal-case tracking-normal">
          Share of topic assignments, equal dictionary
        </span>
      </figcaption>
    </figure>
  );
}

/* ---------- sentiment timeline ---------- */

const S_YEARS = [
  2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023, 2024,
];

const S_VALS = [
  0.9996, 0.9988, 0.9997, 0.9924, 0.8389, 0.8252, 0.9985, 0.9873, 0.9783, 0.994, 0.9975, 0.935,
  0.9379, 0.9995, 0.996, 0.9657, 0.8328, 0.933, 0.792, 0.8585, 0.9991,
];

export function SentimentTimeline() {
  const max = 1.0;
  const min = 0.7;
  const w = 760;
  const h = 200;
  const m = { l: 40, r: 14, t: 16, b: 28 };
  const pw = w - m.l - m.r;
  const ph = h - m.t - m.b;
  const x = (i: number) => m.l + (i / (S_YEARS.length - 1)) * pw;
  const y = (v: number) => m.t + (1 - (v - min) / (max - min)) * ph;
  const ticks = [0.7, 0.8, 0.9, 1.0];
  const d = S_VALS.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");

  return (
    <figure className="mt-8">
      <svg
        role="img"
        aria-label="Average VADER compound sentiment by year, 2004 to 2024"
        viewBox={`0 0 ${w} ${h}`}
        className="w-full"
      >
        {ticks.map((t) => (
          <g key={t}>
            <line x1={m.l} x2={w - m.r} y1={y(t)} y2={y(t)} className="stroke-line" strokeWidth="1" />
            <text x={m.l - 8} y={y(t) + 3} textAnchor="end" fontSize="9" className="fill-faint font-mono">
              {t.toFixed(1)}
            </text>
          </g>
        ))}
        {[2004, 2009, 2014, 2019, 2024].map((yr) => (
          <text
            key={yr}
            x={x(S_YEARS.indexOf(yr))}
            y={h - 9}
            textAnchor="middle"
            fontSize="9"
            className="fill-faint font-mono"
          >
            {yr}
          </text>
        ))}
        <path d={d} fill="none" className="stroke-accent" strokeWidth="1.75" vectorEffect="non-scaling-stroke" />
        {S_VALS.map((v, i) => (
          <circle key={i} cx={x(i)} cy={y(v)} r="2.5" className="fill-accent" />
        ))}
      </svg>
      <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        Average VADER compound per statement · note the truncated axis (0.70–1.00) and that VADER
        saturates on long text
      </figcaption>
    </figure>
  );
}

/* ---------- authority comparison ---------- */

type Authority = { name: string; equal: number[]; unequal: number[] };

const AUTH_TOPICS = ["Climate", "Growth", "Debt", "Crisis", "Risk", "Reform"];

const AUTHORITIES: Authority[] = [
  { name: "China", equal: [0.03, 0.51, 0.13, 0.09, 0.07, 0.17], unequal: [0.01, 0.09, 0.0, 0.45, 0.39, 0.04] },
  { name: "OPEC", equal: [0.0, 0.71, 0.04, 0.05, 0.14, 0.01], unequal: [0.0, 0.19, 0.0, 0.38, 0.42, 0.0] },
  { name: "United States", equal: [0.03, 0.42, 0.24, 0.11, 0.07, 0.12], unequal: [0.01, 0.08, 0.0, 0.5, 0.34, 0.03] },
  { name: "Germany", equal: [0.03, 0.31, 0.31, 0.13, 0.1, 0.11], unequal: [0.01, 0.06, 0.0, 0.51, 0.34, 0.03] },
  { name: "Japan", equal: [0.02, 0.3, 0.25, 0.25, 0.08, 0.12], unequal: [0.0, 0.04, 0.0, 0.57, 0.32, 0.03] },
  { name: "India", equal: [0.02, 0.55, 0.16, 0.09, 0.11, 0.07], unequal: [0.0, 0.11, 0.0, 0.46, 0.38, 0.01] },
];

function Heatmap({
  title,
  pick,
}: {
  title: string;
  pick: (a: Authority) => number[];
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{title}</p>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[440px]">
          <div className="grid grid-cols-[92px_repeat(6,1fr)] gap-px">
            <span />
            {AUTH_TOPICS.map((t) => (
              <span
                key={t}
                className="pb-2 text-center font-mono text-[9px] uppercase tracking-[0.06em] text-faint"
              >
                {t}
              </span>
            ))}

            {AUTHORITIES.map((a) => (
              <Fragment key={a.name}>
                <span className="flex items-center pr-3 text-[11px] text-ink">{a.name}</span>
                {pick(a).map((v, i) => (
                  <span
                    key={i}
                    className="flex h-9 items-center justify-center rounded-[3px] font-mono text-[9px] text-ink"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(--accent) ${Math.round(
                        Math.min(0.45, v * 0.7) * 100,
                      )}%, transparent)`,
                    }}
                  >
                    {v >= 0.005 ? Math.round(v * 100) : "·"}
                  </span>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthorityComparison() {
  return (
    <figure className="mt-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Heatmap title="Balanced dictionary" pick={(a) => a.equal} />
        <Heatmap title="Unbalanced dictionary" pick={(a) => a.unequal} />
      </div>
      <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
        Share of topic assignments per authority (%) · 564 constituency statements, 2004–2024
      </figcaption>
    </figure>
  );
}
