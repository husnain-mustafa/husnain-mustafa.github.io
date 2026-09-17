# Design System: Husnain Mustafa Portfolio

## Reading
High-end personal portfolio for recruiters, engineering leaders, and enterprise clients evaluating expertise in Business Intelligence, Applied AI, and Cloud Data Architecture.

## Aesthetic Direction
* **Vibe**: Editorial colour-block deck. Bold, structural, high-contrast.
* **Theme**: Light base with full-bleed dark colour panels. No dark mode, no theme toggle.
* **Palette** (colour blocks):
  - Paper `#f4f1ea`, Ink `#0f0f10`
  - Forest `#0b4f3a`, Terra `#b8442c`, Terra-deep `#a83d26`, Cobalt `#173f7a`, Sand `#e7dfce`
  - Muted `#5d5a50`, Faint `#6e6c62`
  - Lines `rgba(15,15,16,0.12)` / `rgba(15,15,16,0.24)`
  - Accent (interior pages): Forest `#0b4f3a`
  - Terminal signals: Term `#0b0b0d`, Signal `#7fe0b6`, Signal-warm `#e08a6a`, Mac red/amber/green `#e05a4a` / `#e0b04a` / `#5fbf82`
  - Exposed as utilities: `bg-forest`, `bg-terra`, `bg-cobalt`, `bg-sand`, `bg-paper`, `bg-ink`, `bg-term`, `text-paper`, `text-ink`, `text-muted`, `text-faint`, `text-terra`, `text-terra-deep`, `text-signal`, `text-signal-warm`, etc.
* **Typography**: Geist Sans & Geist Mono with strong weight contrast.

## Home: the deck
The home page is a seven-panel scroll deck.
* Panels stack only when the viewport is tall enough (`.deck-pin` becomes `sticky` at `min-width: 768px` **and** `min-height: 720px`); otherwise the deck degrades to a normal document flow so content can never be trapped.
* Each panel holds for `30vh` after pinning (`.deck-shell` is `calc(100dvh + 30vh)`) before the next slides over it.
* Content reveals with a staggered eased rise; the active panel settles from `scale(0.96)`/`opacity 0.5` to full.
* Panel order and colour: Intro (Forest) → Work (Paper) → Toolkit (Sand) → Journey (Ink) → Bench (Paper) → Record (Ink) → Contact (Terra).
* Fixed chrome: header and progress rail invert colour against the active panel, with a scroll-driven underline indicator and `aria-current`.
* The hero uses a terminal window (`whoami` / `stats`) instead of a plain stat grid.
* The flagship project card uses Cobalt so it does not repeat the Forest landing panel.
* The Journey panel is a metro map: one winding line from Lahore to Warsaw with a station per role, a signal-coloured Warsaw leg, an interchange for the Cushman promotions, and monochrome line-art silhouettes of the Badshahi Mosque and the Palace of Culture. Line-art is a simplified interpretation, not an architectural elevation. Ticket stubs carry the details the line cannot (the move, education, currently). On small screens the line is replaced by a compact list.

## Layout Discipline
* Container: `max-w-[1440px]` (`2xl` → 1560) with `lg:px-16`.
* Toolkit is grouped by purpose (model, ship, build, report), each group colour-coded.
* Touch targets are at least 44px on interactive controls.
* Explicit mobile collapse for all multi-column layouts.

## Accessibility Contracts
* **Contrast**: secondary text on dark panels is at least `paper/75` (Terra panels use `paper/85`); `text-faint` is dark enough to pass AA on paper; `text-terra-deep` is used for small accents that sit on Sand.
* **Focus**: `--focus` is redefined per surface via `.focus-on-dark` / `.focus-on-light`, so the focus ring is always visible regardless of panel colour.
* **Reduced motion**: decorative animation is disabled, but short colour/border state feedback is preserved.

## Contracts
* **Colour**: never hard-code hex values in components; use the palette utilities or semantic tokens.
* **Punctuation**: em-dashes are banned everywhere. Ranges use the word "to" (`2024 to Present`, `1997 to 2024`).

## Print
The deck unstacks for print (`.deck-shell` / `.deck-pin` become static) and fixed chrome is removed via `.no-print`.

## Dials
`DESIGN_VARIANCE: 7` | `MOTION_INTENSITY: 6` | `VISUAL_DENSITY: 5`
