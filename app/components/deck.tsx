"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Check,
  Cloud,
  Code2,
  Copy,
  Globe,
  Languages,
  MapPin,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN } from "../site";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

type Tone = "forest" | "paper" | "sand" | "ink" | "terra";

const PANELS: { id: string; label: string; tone: Tone }[] = [
  { id: "intro", label: "Intro", tone: "forest" },
  { id: "work", label: "Work", tone: "paper" },
  { id: "toolkit", label: "Toolkit", tone: "sand" },
  { id: "journey", label: "Journey", tone: "ink" },
  { id: "bench", label: "Bench", tone: "paper" },
  { id: "record", label: "Record", tone: "ink" },
  { id: "contact", label: "Contact", tone: "terra" },
];

const DARK_TONES: Tone[] = ["forest", "ink", "terra"];

const links: { label: string; href: string; section?: number }[] = [
  { label: "Work", href: "#work", section: 1 },
  { label: "Toolkit", href: "#toolkit", section: 2 },
  { label: "Journey", href: "#journey", section: 3 },
  { label: "Bench", href: "#bench", section: 4 },
  { label: "Record", href: "#record", section: 5 },
];

const terminalStats: [string, string][] = [
  ["experience", "5+ yrs"],
  ["roles", "6"],
  ["languages", "4"],
  ["degrees", "2"],
];

const employers = ["Cushman & Wakefield", "Nokia", "Power Technology Research", "Ufone"];

const flagship = {
  title: "Report Valuation Workspace",
  org: "Cushman & Wakefield",
  period: "2026 to Now",
  summary:
    "An application built from the ground up to make valuation report writing effortless. It parses evidence documents automatically, fact-checks them against source, automates the GIS analysis, drafts the report with AI, and runs QA checks before anything reaches a client.",
  capabilities: [
    "Evidence parsing",
    "Fact checking",
    "GIS automation",
    "AI drafting",
    "QA checks",
    "Valuer-led UX",
  ],
  tags: ["React", "Databricks", "GenAI", "Document Parsing", "GIS"],
};

type EarlierItem = {
  title: string;
  org: string;
  category: string;
  year: string;
  detail: string;
  tags: string[];
  href?: string;
};

const earlier: EarlierItem[] = [
  {
    title: "QA Checker for Valuation",
    org: "Cushman & Wakefield",
    category: "Applied AI",
    year: "2024",
    detail:
      "A Copilot Studio agent shipped EMEA-wide to proofread, validate, and fact-check valuation reports before release.",
    tags: ["Copilot Studio", "AI Agents", "Power Platform"],
  },
  {
    title: "Databricks Genie Agents",
    org: "Cushman & Wakefield",
    category: "Cloud Data",
    year: "2024",
    detail:
      "Databricks pipelines across several business functions, with a Genie agent per function for answers and analysis.",
    tags: ["Azure Databricks", "Genie", "Delta Lake", "PySpark"],
  },
  {
    title: "IMF Text Analysis",
    org: "University of Warsaw, Master's thesis",
    category: "Data Science",
    year: "2025",
    detail:
      "173 communiqués and 564 constituency statements scored twice with one variable changed: dictionary balance.",
    tags: ["Text Analysis", "Topic Scoring", "VADER", "LDA"],
    href: "/work/imf-communiques",
  },
];

type ToolkitGroup = {
  group: string;
  purpose: string;
  items: string[];
  icon: LucideIcon;
  accent: "forest" | "terra" | "ink" | "cobalt";
};

const toolkit: ToolkitGroup[] = [
  {
    group: "Machine Learning & AI",
    purpose: "Model, reason, evaluate",
    items: ["AI Agents", "Predictive Modelling", "Clustering", "Time-Series", "NLP", "Model Evaluation"],
    icon: Brain,
    accent: "forest",
  },
  {
    group: "Cloud, MLOps & DevOps",
    purpose: "Ship and scale",
    items: ["Azure AI Foundry", "Azure ML", "Databricks", "DevOps Pipelines", "Automation"],
    icon: Cloud,
    accent: "terra",
  },
  {
    group: "Programming",
    purpose: "Build the thing",
    items: ["Python", "R", "SQL", "C++", "PyTorch", "Pandas", "scikit-learn"],
    icon: Code2,
    accent: "ink",
  },
  {
    group: "BI & Data Tools",
    purpose: "Report and automate",
    items: ["Power BI", "Tableau", "SharePoint APIs", "CRM Integrations", "Power Automate", "Copilot Studio"],
    icon: BarChart3,
    accent: "cobalt",
  },
];

const tileTone: Record<ToolkitGroup["accent"], string> = {
  forest: "bg-forest text-paper",
  terra: "bg-terra text-paper",
  ink: "bg-ink text-paper",
  cobalt: "bg-cobalt text-paper",
};

const experience = [
  { period: "Oct 2026 to Present", role: "Analytics Engineer", org: "Cushman & Wakefield", place: "Warsaw" },
  { period: "Aug 2025 to Oct 2026", role: "Business Intelligence Analyst", org: "Cushman & Wakefield", place: "Warsaw" },
  { period: "Jun 2024 to Aug 2025", role: "Junior BI Analyst", org: "Cushman & Wakefield", place: "Warsaw" },
  { period: "2023 to 2024", role: "Working Student, Business Applications", org: "Nokia Solutions and Networks", place: "Warsaw" },
  { period: "2022", role: "Junior Analyst, eMobility", org: "Power Technology Research", place: "Lahore" },
  { period: "2021 to 2022", role: "Executive, RF Optimisation", org: "Ufone", place: "Lahore" },
  { period: "2021", role: "Technical Support Specialist", org: "Integriti", place: "Lahore" },
  { period: "2021", role: "Automation Engineer Trainee", org: "foodpanda", place: "Lahore" },
];

const bench = [
  {
    name: "Clustering Spotify Liked Songs",
    kind: "Unsupervised learning",
    about: "Clustering applied to my own Spotify library, with diagnostic tests to judge how well the clusters hold up.",
    stack: ["Python", "scikit-learn", "Jupyter"],
    repo: `${GITHUB}/Clustering_Spotify_Liked_Songs`,
  },
  {
    name: "Sentiments of Friends",
    kind: "Sentiment analysis",
    about: "A sentiment analysis across the FRIENDS transcripts using several R text libraries, with ggplot2 doing the explaining.",
    stack: ["R", "ggplot2"],
    repo: `${GITHUB}/Sentiments_of_Friends`,
  },
  {
    name: "Oscars Acceptance Speech Analysis",
    kind: "Text mining",
    about: "Text mining across every recorded Academy Awards acceptance speech, looking at what winners actually say.",
    stack: ["Python", "NLP", "Jupyter"],
    repo: `${GITHUB}/Oscars_Acceptance_Speech_Analysis`,
  },
  {
    name: "Avocado Price Forecasting",
    kind: "Time series",
    about: "Translated a published Python price-forecasting study into R, reproduced it, then extended the ARIMA and SARIMA models.",
    stack: ["R", "ARIMA", "SARIMA"],
    repo: `${GITHUB}/Avocado-Picing-Foecast-in-R`,
  },
  {
    name: "Wearable Data Dashboard",
    kind: "Dashboard",
    about: "A Shiny dashboard in R that handles the preliminary analysis of wearable-device data before anyone opens a notebook.",
    stack: ["R", "Shiny"],
    repo: `${GITHUB}/Wearable_Data_Dashboard`,
  },
  {
    name: "SUPPORT2 Classification",
    kind: "Supervised learning",
    about: "Classification on the SUPPORT2 dataset, estimating 2- and 6-month survival outcomes from clinical data.",
    stack: ["Python", "scikit-learn", "Jupyter"],
    repo: `${GITHUB}/SUPPORT2_Classification`,
  },
];

type RecordMilestone = { year: string; title: string; detail: string };

const recordMilestones: RecordMilestone[] = [
  {
    year: "2023",
    title: "Lahore to Warsaw",
    detail:
      "Moved for a role at Nokia and a master's at the University of Warsaw. Intended as one degree; it turned into a life.",
  },
];

const certifications = [
  "Quantum Computing and Data Sciences",
  "4G LTE Wireless Cellular Technology",
  "Tableau 2020 A-Z",
  "SIP Protocols",
  "Information Security Awareness",
];

const currently = [
  { k: "Music", v: "Guitar and production; open mics when I get the chance" },
  { k: "Games", v: "FPS and RPG" },
  { k: "Kitchen", v: "Baking, curries, and slow cooking" },
  { k: "Photography", v: "Street and life photography" },
];

const languages = ["English C2", "Urdu native", "Punjabi native", "Polish elementary"];
const LANGUAGES = languages.join(" · ");

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Panel({
  id,
  index,
  active,
  tone,
  toneName,
  stacked,
  className = "",
  children,
}: {
  id: string;
  index: number;
  active: number;
  tone: "dark" | "light";
  toneName: Tone;
  stacked: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const settled = index === active || reduce;
  return (
    <section
      id={id}
      data-deck
      data-index={index}
      data-stack={stacked ? "true" : undefined}
      className={`deck-shell ${tone === "dark" ? "focus-on-dark" : "focus-on-light"} ${className}`}
    >
      <div className={`deck-pin wash-${toneName}`}>
        <div
          className={`relative mx-auto w-full max-w-[1440px] px-6 py-24 transition-[transform,opacity] duration-700 ease-out sm:px-8 lg:py-20 lg:pl-16 lg:pr-20 2xl:max-w-[1560px] ${
            settled ? "md:scale-100 md:opacity-100" : "md:scale-[0.96] md:opacity-50"
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function SectionMark({
  index,
  title,
  aside,
  tone = "light",
}: {
  index: string;
  title: string;
  aside?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <div className="flex items-baseline gap-3">
        <span className={`font-mono text-[11px] ${tone === "dark" ? "text-signal-warm" : "text-terra-deep"}`}>
          {index}
        </span>
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">{title}</h2>
      </div>
      {aside ? <p className="max-w-[46ch] text-sm opacity-80">{aside}</p> : null}
    </div>
  );
}

function Terminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-paper/20 bg-term shadow-[0_30px_80px_-34px_rgba(4,38,27,0.8)]">
      <div className="flex items-center gap-1.5 border-b border-paper/12 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-mac-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-mac-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-mac-green" />
        <span className="ml-2 font-mono text-[10px] tracking-[0.1em] text-paper/70">
          husnain@warsaw: ~/profile
        </span>
      </div>
      <div className="space-y-1 p-5 font-mono text-[12.5px] leading-relaxed">
        <p>
          <span className="text-signal">➜</span> <span className="text-paper/70">whoami</span>
        </p>
        <p className="text-paper/90">Husnain Mustafa · Analytics Engineer</p>
        <div className="h-2" />
        <p>
          <span className="text-signal">➜</span> <span className="text-paper/70">stats</span>
        </p>
        <dl className="grid grid-cols-[110px_1fr] gap-x-4 gap-y-1">
          {terminalStats.map(([k, v]) => (
            <Fragment key={k}>
              <dt className="text-paper/70">{k}</dt>
              <dd className="font-medium tabular-nums text-paper/90">{v}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}

function Stub({
  tag,
  year,
  title,
  meta,
}: {
  tag: string;
  year: string;
  title: string;
  meta: string;
}) {
  return (
    <div className="flex h-full overflow-hidden border border-paper/25">
      <div className="flex w-16 shrink-0 flex-col items-center justify-center border-r border-dashed border-paper/30 px-2 py-4">
        <span className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-signal">
          {year}
        </span>
      </div>
      <div className="flex-1 p-4">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-signal-warm">
          {tag}
        </span>
        <p className="mt-1.5 text-sm font-semibold text-paper">{title}</p>
        <p className="mt-1 text-[12px] leading-relaxed text-paper/75">{meta}</p>
      </div>
    </div>
  );
}

const metroStations = [
  { x: 150, y: 196, above: false, period: "2021", role: "Automation Engineer Trainee", org: "foodpanda" },
  { x: 330, y: 166, above: true, period: "2021", role: "Technical Support Specialist", org: "Integriti" },
  { x: 510, y: 194, above: false, period: "2021 to 2022", role: "Executive, RF Optimisation", org: "Ufone" },
  { x: 690, y: 168, above: true, period: "2022", role: "Junior Analyst, eMobility", org: "Power Technology Research" },
  { x: 1120, y: 198, above: true, period: "2023 to 2024", role: "Working Student", org: "Nokia" },
];

const TRANSFER_X = 920;
const CW_X = 1270;
const CW_Y = 172;

function Metro() {
  return (
    <svg
      viewBox="0 0 1400 420"
      className="h-auto w-full"
      role="img"
      aria-label="A metro-style line running from Lahore to Warsaw, with a station for each role and the Cushman and Wakefield progression at the end."
    >
      <defs>
        <pattern id="pkin-win" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect x="3" y="3" width="5" height="5" className="fill-ink" />
        </pattern>
        <pattern id="pkin-col" width="14" height="26" patternUnits="userSpaceOnUse">
          <rect x="3" y="4" width="6" height="20" className="fill-ink" />
        </pattern>
      </defs>

      {/* Landmarks: Badshahi Mosque (Lahore) and the Palace of Culture (Warsaw) */}
      <g transform="translate(16 286) scale(0.6)" className="fill-paper/25">
        <path d="M64 178 L104 178 L92 208 L78 208 Z M112 178 L188 178 L178 214 L122 214 Z M196 178 L236 178 L224 208 L210 208 Z" />
        <rect x="14" y="168" width="272" height="10" />
        <path
          fillRule="evenodd"
          d="M44 120 H256 V168 H44 Z M132 168 V146 A18 18 0 0 1 168 146 V168 Z M92 168 V152 A11 11 0 0 1 114 152 V168 Z M186 168 V152 A11 11 0 0 1 208 152 V168 Z M58 168 V156 A9 9 0 0 1 76 156 V168 Z M224 168 V156 A9 9 0 0 1 242 156 V168 Z"
        />
        <rect x="27" y="52" width="16" height="116" />
        <rect x="23" y="72" width="24" height="4" />
        <rect x="23" y="94" width="24" height="4" />
        <rect x="23" y="116" width="24" height="4" />
        <rect x="21" y="48" width="28" height="6" />
        <path d="M26 48 A10 12 0 0 1 46 48 Z" />
        <rect x="34" y="32" width="2" height="16" />
        <circle cx="35" cy="30" r="3" />
        <rect x="257" y="52" width="16" height="116" />
        <rect x="253" y="72" width="24" height="4" />
        <rect x="253" y="94" width="24" height="4" />
        <rect x="253" y="116" width="24" height="4" />
        <rect x="251" y="48" width="28" height="6" />
        <path d="M256 48 A10 12 0 0 1 276 48 Z" />
        <rect x="264" y="32" width="2" height="16" />
        <circle cx="265" cy="30" r="3" />
        <rect x="112" y="114" width="76" height="6" />
        <path d="M118 116 C118 82 130 68 150 62 C170 68 182 82 182 116 Z" />
        <rect x="149" y="50" width="2" height="12" />
        <circle cx="150" cy="47" r="3" />
        <rect x="82" y="116" width="38" height="5" />
        <path d="M86 118 C86 96 92 86 101 81 C110 86 116 96 116 118 Z" />
        <rect x="180" y="116" width="38" height="5" />
        <path d="M184 118 C184 96 190 86 199 81 C208 86 214 96 214 118 Z" />
      </g>

      <g transform="translate(1200 300) scale(0.5)" className="fill-paper/25">
        <rect x="18" y="210" width="264" height="8" />
        <rect x="44" y="168" width="212" height="42" />
        <rect x="72" y="146" width="156" height="22" />
        <rect x="100" y="124" width="100" height="22" />
        <rect x="126" y="56" width="48" height="68" />
        <rect x="134" y="40" width="32" height="16" />
        <rect x="138" y="28" width="24" height="12" />
        <rect x="148" y="4" width="4" height="24" />
        <path d="M148 4 L150 0 L152 4 Z" />
        <rect x="143" y="12" width="14" height="2" />
        <rect x="145" y="19" width="10" height="2" />
        <rect x="126" y="60" width="48" height="60" fill="url(#pkin-win)" />
        <rect x="100" y="126" width="100" height="18" fill="url(#pkin-win)" />
        <rect x="72" y="148" width="156" height="18" fill="url(#pkin-win)" />
        <rect x="44" y="170" width="212" height="12" fill="url(#pkin-win)" />
        <rect x="44" y="186" width="212" height="24" fill="url(#pkin-col)" />
        <circle cx="150" cy="34" r="4" className="fill-ink" />
      </g>

      {/* Route */}
      <path
        className="fill-none stroke-paper"
        strokeWidth={3.5}
        strokeLinecap="round"
        d="M150 196 C200 190 280 174 330 166 C380 158 460 200 510 194 C560 188 640 174 690 168 C740 162 870 172 920 186"
      />
      <path
        className="fill-none stroke-signal"
        strokeWidth={3.5}
        strokeLinecap="round"
        d="M920 186 C960 196 1000 198 1120 198 C1180 198 1220 180 1270 172"
      />
      <path
        className="fill-none stroke-signal"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="2 10"
        d="M1270 172 C1300 174 1320 176 1340 178"
      />

      {/* Transfer marker */}
      <rect
        className="fill-signal"
        x={TRANSFER_X - 6}
        y="180"
        width="12"
        height="12"
        transform={`rotate(45 ${TRANSFER_X} 186)`}
      />

      {/* Stations */}
      {metroStations.map((s) => (
        <circle key={s.role} className="fill-ink stroke-paper" strokeWidth={3} cx={s.x} cy={s.y} r={6} />
      ))}

      {/* Interchange + current */}
      <circle className="fill-none stroke-paper" strokeWidth={3} cx={CW_X} cy={CW_Y} r={13} />
      <circle className="fill-signal stroke-signal" cx={CW_X} cy={CW_Y} r={6} />

      {/* Station labels */}
      <g className="font-mono text-[12px] fill-paper/65">
        {metroStations.map((s) => (
          <text key={s.period + s.role} x={s.x} y={s.y + (s.above ? -62 : 42)} textAnchor="middle">
            {s.period}
          </text>
        ))}
      </g>
      <g className="font-sans text-[14px] font-semibold fill-paper">
        {metroStations.map((s) => (
          <text key={s.role} x={s.x} y={s.y + (s.above ? -45 : 62)} textAnchor="middle">
            {s.role}
          </text>
        ))}
      </g>
      <g className="font-sans text-[12px] fill-paper/70">
        {metroStations.map((s) => (
          <text key={s.org} x={s.x} y={s.y + (s.above ? -28 : 80)} textAnchor="middle">
            {s.org}
          </text>
        ))}
      </g>

      {/* Transfer label */}
      <g textAnchor="middle">
        <text className="font-mono text-[12px] fill-paper/65" x={TRANSFER_X} y="124">
          2023
        </text>
        <text className="font-sans text-[14px] font-semibold fill-signal" x={TRANSFER_X} y="142">
          Lahore to Warsaw
        </text>
      </g>

      {/* Cushman interchange label */}
      <g textAnchor="middle">
        <text className="font-sans text-[14px] font-semibold fill-paper" x={CW_X} y="212">
          Cushman &amp; Wakefield
        </text>
        <text className="font-sans text-[11.5px] fill-paper/75" x={CW_X} y="234">
          Junior BI Analyst · 2024 to 2025
        </text>
        <text className="font-sans text-[11.5px] fill-paper/75" x={CW_X} y="252">
          BI Analyst · 2025 to 2026
        </text>
        <text className="font-sans text-[11.5px] fill-signal" x={CW_X} y="270">
          Analytics Engineer · 2026 to Present
        </text>
      </g>

      {/* City labels */}
      <text className="font-mono text-[11.5px] uppercase tracking-[0.16em] fill-paper/70" x="16" y="40">
        Lahore, PK
      </text>
      <text className="font-mono text-[11.5px] uppercase tracking-[0.16em] fill-paper/70" x="1384" y="40" textAnchor="end">
        Warsaw, PL
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Deck                                                                */
/* ------------------------------------------------------------------ */

/* Layout effects run before paint in the browser; the server render
   (static export) falls back to a plain effect, which is why the
   measurement never blocks hydration. */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type CopyState = "idle" | "copied" | "failed";

/* The header is 64px tall (h-16). The chrome colour flips only once the
   incoming panel has covered the header band. Using the viewport midpoint
   instead made the bar change colour while the previous panel was still
   the thing sitting behind it. */
const CHROME_LINE = 48;

export function Deck() {
  const [active, setActive] = useState(0);
  const [chrome, setChrome] = useState(0);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const [stacked, setStacked] = useState<boolean[]>(() =>
    PANELS.map(() => false),
  );
  const panelsRef = useRef<HTMLElement[]>([]);
  const offsetsRef = useRef<number[]>([]);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const copyTimer = useRef<number | undefined>(undefined);
  const { scrollY } = useScroll();

  /* Two indices, because they answer different questions.
     active  - which panel owns the middle of the screen. Drives the
               settle effect and the rail's aria-current.
     chrome  - which panel is actually behind the fixed header. Drives
               every colour in the chrome, so the bar is never tinted for
               a panel that has not arrived yet. */
  const syncIndices = useCallback((v: number) => {
    const offs = offsetsRef.current;
    if (!offs.length) return;

    const mid = v + window.innerHeight * 0.5;
    let idx = 0;
    for (let i = 0; i < offs.length; i++) {
      if (offs[i] <= mid) idx = i;
    }
    setActive(idx);

    let chromeIdx = 0;
    for (let i = 0; i < offs.length; i++) {
      if (offs[i] <= v + CHROME_LINE) chromeIdx = i;
    }
    setChrome(chromeIdx);

    const isScrolled = v > 8;
    setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
  }, []);

  /* Measure panel offsets, and decide per panel whether its content
     actually fits the viewport. A panel is only pinned when it does,
     so a tall panel can never be cropped by its own sticky box. */
  const measure = useCallback(() => {
    if (typeof window === "undefined") return;
    offsetsRef.current = panelsRef.current.map((el) => el.offsetTop);
    // A resize or a late font can move the panels, so resync both
    // indices rather than waiting for the next scroll event.
    syncIndices(window.scrollY);

    const wide = window.matchMedia("(min-width: 768px)").matches;
    const room = window.innerHeight;
    const next = panelsRef.current.map((el) => {
      const inner = el.querySelector<HTMLElement>(".deck-pin > div");
      if (!inner) return false;
      // offsetHeight ignores the settle transform, so this is the real
      // laid-out height of the panel content plus its padding.
      return wide && inner.offsetHeight <= room;
    });
    setStacked((prev) =>
      prev.length === next.length && prev.every((v, i) => v === next[i])
        ? prev
        : next,
    );
  }, [syncIndices]);

  useIsoLayoutEffect(() => {
    panelsRef.current = Array.from(
      document.querySelectorAll<HTMLElement>("[data-deck]"),
    );
    measure();

    window.addEventListener("resize", measure);
    // Content height also changes when fonts land, when the mobile
    // browser chrome resizes the viewport, or when copy is edited.
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    fonts?.ready.then(measure).catch(() => {});

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [measure]);

  useMotionValueEvent(scrollY, "change", syncIndices);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(false);
        toggleRef.current?.focus();
      }
    };
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenu(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [menu]);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  // Chrome colour follows the panel behind the header, not the one at the
  // middle of the screen, so the bar never inverts over the wrong panel.
  const chromeTone = PANELS[chrome]?.tone ?? "forest";
  const chromeDark = DARK_TONES.includes(chromeTone);

  // The rail is vertically centred, so it sits on whichever panel owns the
  // middle of the screen and follows that one instead of the header.
  const railTone = PANELS[active]?.tone ?? "forest";
  const railDark = DARK_TONES.includes(railTone);

  const panelProps = (i: number) => ({
    index: i,
    active,
    tone: (DARK_TONES.includes(PANELS[i].tone) ? "dark" : "light") as
      | "dark"
      | "light",
    toneName: PANELS[i].tone,
    stacked: stacked[i] ?? false,
  });

  /* The async clipboard API fails outside a secure context, on denied
     permission, or in older Safari. Fall back to a selection copy and
     only claim success when the text actually reached the clipboard. */
  const copyEmail = async () => {
    window.clearTimeout(copyTimer.current);
    let ok = false;

    try {
      await navigator.clipboard.writeText(EMAIL);
      ok = true;
    } catch {
      try {
        const field = document.createElement("textarea");
        field.value = EMAIL;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        ok = document.execCommand("copy");
        document.body.removeChild(field);
      } catch {
        ok = false;
      }
    }

    setCopyState(ok ? "copied" : "failed");
    copyTimer.current = window.setTimeout(() => setCopyState("idle"), 2600);
  };

  return (
    <>
      {/* Fixed chrome */}
      <header
        ref={headerRef}
        data-scrolled={scrolled ? "true" : "false"}
        className={`no-print chrome-scrim tone-${chromeTone} fixed inset-x-0 top-0 z-50 ${
          chromeDark ? "focus-on-dark" : "focus-on-light"
        }`}
      >
        <div
          className={`relative mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-6 transition-colors duration-500 ease-out sm:px-8 lg:pl-16 lg:pr-20 2xl:max-w-[1560px] ${
            chromeDark ? "text-paper" : "text-ink"
          }`}
        >
          <a href="#intro" className="shrink-0 text-sm font-medium tracking-tight">
            Husnain Mustafa
          </a>

          <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-5">
            {links.map((l) => {
              const isActive = l.section !== undefined && l.section === active;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative py-2"
                >
                  <span
                    className={`transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                    }`}
                  >
                    {l.label}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0.5 h-px origin-left bg-current transition-transform duration-700 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={`hidden items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-[transform,background-color,color] duration-300 ease-out hover:-translate-y-px active:translate-y-0 sm:inline-flex ${
                chromeDark ? "bg-paper text-ink" : "bg-ink text-paper"
              }`}
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-expanded={menu}
              aria-controls="deck-mobile-nav"
              aria-label={menu ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-current transition-transform active:scale-[0.96] md:hidden"
            >
              {menu ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {menu && (
          <div
            id="deck-mobile-nav"
            className={`relative border-t px-6 py-4 md:hidden ${
              chromeDark ? "border-paper/20 bg-ink text-paper" : "border-ink/15 bg-paper text-ink"
            }`}
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenu(false)}
                    className={`block border-b py-3 text-sm last:border-b-0 ${
                      chromeDark ? "border-paper/15" : "border-ink/12"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Progress rail. The rail lives in the gutter created by the
          container's lg:pr-20, so it never sits on panel content. */}
      <div
        className={`no-print fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end transition-colors duration-500 ease-out lg:flex ${
          railDark ? "focus-on-dark text-paper" : "focus-on-light text-ink"
        }`}
      >
        {PANELS.map((p, i) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            aria-label={p.label}
            aria-current={active === i ? "true" : undefined}
            className="group flex min-h-11 items-center gap-2 px-1"
          >
            <span
              className={`font-mono text-[10px] tracking-[0.14em] transition-opacity ${
                active === i ? "opacity-100" : "opacity-60"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`h-px bg-current transition-all duration-700 ease-out ${
                active === i ? "w-5" : "w-3 opacity-60"
              }`}
            />
          </a>
        ))}
      </div>

      <main id="main" className="relative">
        {/* 0 - INTRO */}
        <Panel id="intro" {...panelProps(0)} className="bg-forest text-paper">
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-7">
              <Reveal>
                <h1 className="max-w-[18ch] text-balance text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl 2xl:text-8xl">
                  Analytics, AI, and the systems around them.
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-[50ch] text-base leading-relaxed text-paper/85 lg:text-lg">
                  I&rsquo;m Husnain Mustafa, an analytics engineer in Warsaw. I ship agents,
                  pipelines, and dashboards for enterprise teams.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-2 rounded-lg bg-paper px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-px active:translate-y-0"
                  >
                    View work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-2 py-3 text-sm text-paper/85 transition-colors hover:text-paper"
                  >
                    Get in touch
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.16}>
                <Terminal />
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.22}>
            {/* Each employer carries its own rule so the signal dot always
                sits on a line, including when the strip wraps to two rows. */}
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
              {employers.map((e) => (
                <div key={e} className="relative border-t border-paper/25 pt-5">
                  <span
                    aria-hidden
                    className="absolute -top-[3.5px] left-0 h-2 w-2 rounded-full bg-signal"
                  />
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/75">
                    {e}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Panel>

        {/* 1 - WORK */}
        <Panel id="work" {...panelProps(1)} className="bg-paper text-ink">
          <Reveal>
            <SectionMark
              index="01"
              title="Selected work"
              aside="One flagship in active development, three earlier builds across applied AI, cloud data, and data science."
            />
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal delay={0.06} className="lg:col-span-7">
              <article className="flex h-full flex-col bg-cobalt p-6 text-paper lg:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-paper/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]">
                    Flagship
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/75">
                    {flagship.org} · {flagship.period}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] sm:text-3xl">
                  {flagship.title}
                </h3>
                <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-paper/85 lg:text-[15px]">
                  {flagship.summary}
                </p>
                <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {flagship.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-paper/85">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-paper/70" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-paper/25 pt-5">
                  {flagship.tags.map((t) => (
                    <span key={t} className="rounded-md border border-paper/30 px-2.5 py-1 font-mono text-[11px] text-paper/85">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Earlier</p>
              </Reveal>
              <div className="mt-4 border-t border-line">
                {earlier.map((item, i) => (
                  <Reveal key={item.title} delay={0.14 + i * 0.05}>
                    <article className="border-b border-line py-4">
                      <div className="flex items-baseline justify-between gap-4">
                        <h4 className="text-base font-semibold tracking-[-0.01em]">{item.title}</h4>
                        <span className="font-mono text-[11px] text-muted">{item.year}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted">
                        {item.org} · {item.category}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span key={t} className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                            {t}
                          </span>
                        ))}
                      </div>
                      {item.href && (
                        <Link
                          href={item.href}
                          className="mt-3 inline-flex items-center gap-1.5 py-1 text-sm text-ink transition-colors hover:text-terra"
                        >
                          Read the case study
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                        </Link>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Panel>

        {/* 2 - TOOLKIT */}
        <Panel id="toolkit" {...panelProps(2)} className="bg-sand text-ink">
          <Reveal>
            <SectionMark
              index="02"
              title="Toolkit"
              aside="Grouped by what it does: model and reason, ship and scale, build, then report."
            />
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
            {toolkit.map((t, i) => {
              const Icon = t.icon;
              const span = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-4"][i] ?? "lg:col-span-4";
              return (
                <Reveal key={t.group} delay={i * 0.05} className={span}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-5 lg:p-6 ${tileTone[t.accent]}`}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-7 right-1 text-[96px] font-bold leading-none opacity-[0.12]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper/15">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-tight">{t.group}</h3>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em]">
                          {t.purpose} · {t.items.length}
                        </p>
                      </div>
                    </div>
                    <ul className="relative mt-5 flex flex-wrap gap-1.5">
                      {t.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-paper/30 px-2 py-1 font-mono text-[11px]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.22} className="lg:col-span-4">
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-paper p-5 lg:p-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-7 right-1 text-[96px] font-bold leading-none text-ink opacity-[0.08]"
                >
                  05
                </span>
                <div className="relative flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-paper">
                    <Globe className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-tight">Languages</h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Working proficiency · {languages.length}
                    </p>
                  </div>
                </div>
                <ul className="relative mt-5 flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <li
                      key={lang}
                      className="rounded-md border border-line-strong px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Panel>

        {/* 3 - JOURNEY */}
        <Panel id="journey" {...panelProps(3)} className="bg-ink text-paper">
          <Reveal>
            <SectionMark
              index="03"
              title="Journey"
              tone="dark"
              aside="From Lahore to Warsaw, station by station."
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mx-auto mt-6 hidden max-w-[1280px] lg:block">
              <Metro />
            </div>
          </Reveal>

          {/* Compact list for small screens, where the line cannot scale legibly */}
          <div className="mt-6 lg:hidden">
            {experience.map((e) => (
              <div key={e.org + e.role} className="grid grid-cols-1 gap-1 border-t border-paper/15 py-3">
                <span className="font-mono text-xs text-paper/60">{e.period}</span>
                <p className="text-sm font-medium text-paper">{e.role}</p>
                <p className="text-sm text-paper/70">
                  {e.org} · {e.place}
                </p>
              </div>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stub
                year="2023"
                tag="One way"
                title="LHE → WAW"
                meta="Lahore to Warsaw. Moved for a role at Nokia and a master's at the University of Warsaw. Intended as one degree; it turned into a life."
              />
              <Stub
                year="2024"
                tag="Education"
                title="MA Data Science & Business Analytics"
                meta="University of Warsaw"
              />
              <Stub
                year="2021"
                tag="Education"
                title="BS Electrical Engineering"
                meta="Lahore University of Management Sciences"
              />
            </div>
          </Reveal>
        </Panel>

        {/* 4 - BENCH */}
        <Panel id="bench" {...panelProps(4)} className="bg-paper text-ink">
          <Reveal>
            <SectionMark
              index="04"
              title="Bench"
              aside="Small things built for the sake of a question. Most start as curiosity and end as a lesson in something adjacent."
            />
          </Reveal>

          {/* An editorial list rather than a card grid: every project carries
              equal weight, so none of them has to pretend to be the lead. */}
          <ol className="mt-8 grid grid-cols-1 gap-x-14 lg:grid-cols-2">
            {bench.map((e, i) => (
              <li key={e.name}>
                <Reveal delay={i * 0.04}>
                  <article className="flex gap-4 border-t border-line py-5 sm:gap-6">
                    <span className="shrink-0 pt-0.5 font-mono text-[11px] tabular-nums text-terra-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-base font-semibold tracking-[-0.015em]">{e.name}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                          {e.kind}
                        </span>
                      </div>
                      <p className="mt-1.5 max-w-[62ch] text-[13px] leading-relaxed text-muted">
                        {e.about}
                      </p>
                      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
                        <span className="font-mono text-[10.5px] text-faint">
                          {e.stack.join(" · ")}
                        </span>
                        <a
                          href={e.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[13px] text-ink transition-colors hover:text-terra"
                        >
                          Repository
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Panel>

        {/* 5 - RECORD */}
        <Panel id="record" {...panelProps(5)} className="bg-ink text-paper">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-6">
              <SectionMark
                index="05"
                title="Record"
                tone="dark"
                aside="The moves, the certificates, and the things outside the work."
              />
              <p className="mt-6 max-w-[56ch] text-sm leading-relaxed text-paper/80">
                A short thread of the moves. The rest (music, games, the kitchen, and a camera) sits
                underneath it and is updated when there is something worth saying.
              </p>
              <div className="mt-6 space-y-4">
                {recordMilestones.map((m) => (
                  <div key={m.title} className="border-t border-paper/15 pt-4">
                    <span className="font-mono text-xs text-paper/60">{m.year}</span>
                    <p className="mt-1.5 text-sm font-medium text-paper">{m.title}</p>
                    <p className="mt-0.5 max-w-[56ch] text-sm text-paper/70">{m.detail}</p>
                  </div>
                ))}
              </div>

              <h3 className="mt-9 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
                Certifications
              </h3>
              <ul className="mt-4">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-2.5 border-t border-paper/15 py-2.5 text-sm text-paper/85"
                  >
                    <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">Currently</h3>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {currently.map((c) => (
                  <div key={c.k} className="border-t border-paper/15 pt-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">{c.k}</p>
                    <p className="mt-1.5 text-sm text-paper/85">{c.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Panel>

        {/* 6 - CONTACT */}
        <Panel id="contact" {...panelProps(6)} className="bg-terra text-paper">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper">
              06 / Contact
            </span>
            <h2 className="mt-5 max-w-[22ch] text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl lg:text-5xl 2xl:text-6xl">
              Open to senior BI, applied AI, and data engineering roles.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:husnainchnaz@outlook.com"
                  className="group inline-flex items-center gap-2 text-lg font-medium sm:text-xl"
                >
                  <span className="border-b border-paper/60 pb-0.5 transition-colors group-hover:border-paper">
                    {EMAIL}
                  </span>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-paper/40 px-3 py-2.5 text-sm text-paper transition-colors hover:border-paper/70 active:scale-[0.98]"
                >
                  {copyState === "copied" && <Check className="h-4 w-4" strokeWidth={2} />}
                  {copyState === "failed" && <AlertCircle className="h-4 w-4" strokeWidth={2} />}
                  {copyState === "idle" && <Copy className="h-4 w-4" strokeWidth={1.75} />}
                  {copyState === "copied"
                    ? "Copied"
                    : copyState === "failed"
                      ? "Copy failed"
                      : "Copy email"}
                </button>
                <span role="status" aria-live="polite" className="sr-only">
                  {copyState === "copied"
                    ? "Email address copied to clipboard"
                    : copyState === "failed"
                      ? `Copy failed. The address is ${EMAIL}`
                      : ""}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-lg bg-paper px-4 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-px active:translate-y-0"
                >
                  Résumé
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-paper/40 px-4 py-3 text-sm transition-colors hover:border-paper/70 active:scale-[0.98]"
                >
                  GitHub
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-paper/40 px-4 py-3 text-sm transition-colors hover:border-paper/70 active:scale-[0.98]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <footer className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-paper/30 pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                Warsaw, Poland
              </span>
              <span className="inline-flex items-center gap-2">
                <Languages className="h-3.5 w-3.5" strokeWidth={1.75} />
                {LANGUAGES}
              </span>
              <span>© {new Date().getFullYear()} Husnain Mustafa</span>
            </footer>
          </Reveal>
        </Panel>
      </main>
    </>
  );
}
