# Design System: Husnain Mustafa Portfolio

## Reading
High-end personal portfolio for recruiters, engineering leaders, and enterprise clients evaluating expertise in Business Intelligence, Applied AI, and Cloud Data Architecture.

## Aesthetic Direction
* **Vibe**: Editorial colour-block deck. Bold, structural, high-contrast.
* **Theme**: Light base with full-bleed dark colour panels. No dark mode, no theme toggle.
* **Palette** (colour blocks):
  - Paper `#f4f1ea`, Ink `#0f0f10`
  - Forest `#0b4f3a`, Terra `#9c3520`, Terra-deep `#8a2e1b`, Cobalt `#173f7a`, Sand `#e7dfce`
  - Muted `#5d5a50`, Faint `#63615a`
  - Lines `rgba(15,15,16,0.12)` / `rgba(15,15,16,0.24)`
  - Accent (interior pages): Forest `#0b4f3a`
  - Terminal signals: Term `#0b0b0d`, Signal `#7fe0b6`, Signal-warm `#e08a6a`, Mac red/amber/green `#e05a4a` / `#e0b04a` / `#5fbf82`
  - Exposed as utilities: `bg-forest`, `bg-terra`, `bg-cobalt`, `bg-sand`, `bg-paper`, `bg-ink`, `bg-term`, `text-paper`, `text-ink`, `text-muted`, `text-faint`, `text-terra`, `text-terra-deep`, `text-signal`, `text-signal-warm`, etc.
* **Typography**: Geist Sans & Geist Mono with strong weight contrast. Headings carry `text-balance`; numeric runs carry `tabular-nums`.

### Why terra is this deep
Terra was `#b8442c`. On that value `paper/85` measured 3.88:1 and the toolkit card chips at `opacity-90` measured 4.15:1, both under the 4.5:1 AA floor. Terra is a mid-tone, so it gives poor contrast against both light and dark text. At `#9c3520`, `paper/85` measures 5.05:1 and solid `paper` measures 6.39:1, so the reduced-opacity tier system works on terra again. Terra-deep stays distinct as the small-accent-on-light token and now measures 6.36:1 on sand (was 4.71:1). Faint moved from `#6e6c62` to `#63615a` to keep headroom under the grain overlay.

## Home: the deck
The home page is a seven-panel scroll deck.
* **Stacking is content-aware, not viewport-gated.** `Panel` renders `data-stack="true"` only once the deck has measured that the panel's laid-out content height fits inside `100dvh`. A panel that does not fit stays in normal flow at `min-height: 100dvh` and scrolls past. This replaces the old `(min-width: 768px) and (min-height: 720px)` media query, which pinned panels whose content was up to 1300px tall into a 730px box. Measurement runs in a layout effect before paint, and re-runs on `resize`, on a `ResizeObserver` over the document, and on `document.fonts.ready`. Without JS the deck degrades to a plain full-height scroll.
* Each stacked panel holds for `30vh` after pinning (`.deck-shell[data-stack="true"]` is `calc(100dvh + 30vh)`) before the next slides over it.
* Content reveals with a staggered eased rise; the active panel settles from `scale(0.96)` / `opacity 0.5` to full.
* Panel order and colour: Intro (Forest) → Work (Paper) → Toolkit (Sand) → Journey (Ink) → Bench (Paper) → Record (Ink) → Contact (Terra).
* Fixed chrome tracks **two** indices, because they answer different questions. `active` is the panel owning the middle of the screen and drives the settle effect, the nav underline, and the rail's `aria-current`. `chrome` is the panel actually sitting behind the fixed header (`CHROME_LINE = 48`, just inside the 64px bar) and drives every colour in the header. Using the midpoint for the colour made the bar invert while the previous panel was still the thing behind it, so dark panels briefly got light-on-light nav.
* The rail is vertically centred, so it follows `active` rather than `chrome`; the two only differ for the few pixels of a panel transition.
* Once scrolled, the header carries a scrim tinted to the panel behind it (`.chrome-scrim` plus `.tone-*`) so panel content never collides with the header text. The scrim is a solid `background-color` behind a `mask-image` rather than a gradient, because `background-color` can transition and a gradient cannot. All chrome colour transitions run at 300 to 500ms so the bar, the CTA, and the scrim crossfade as one motion.
* The progress rail lives in a dedicated gutter: the container uses `lg:pl-16 lg:pr-20` and the rail is 51px wide at `right-4`, leaving 13px of clearance at 1024, 1280 and 1440, all verified with an element-level overlap probe. It previously overlapped panel content by 15px at every one of those widths.
* The hero uses a terminal window (`whoami` / `stats`) instead of a plain stat grid. Its shadow is tinted to the forest panel, not pure black.
* The flagship project card uses Cobalt so it does not repeat the Forest landing panel. Its tech tags are bottom-anchored behind a rule, so the card ends on a footer rather than a void.
* The Journey panel is a metro map: one winding line from Lahore to Warsaw with a station per role, a signal-coloured Warsaw leg, an interchange for the Cushman promotions, and monochrome line-art silhouettes of the Badshahi Mosque and the Palace of Culture. Line-art is a simplified interpretation, not an architectural elevation. Ticket stubs carry the details the line cannot (the move, education, currently). On small screens the line is replaced by a compact list. Station type is sized so it renders at 11px or larger once the 1400-unit viewBox is scaled into a 1280px column.
* The Bench panel is an editorial two-column list with index numbers, not a card grid. All six projects carry equal weight, so none has to be presented as the lead.
* The Record panel holds the move, the certifications, and the Currently grid, so it is not a half-empty panel.

## Surface Depth
* A fixed film-grain overlay (`.grain`, inline SVG turbulence, 4.5% opacity, `pointer-events: none`, `z-index: 60`) breaks the flat vector fields. It is hidden for print, and both `--faint` and terra were darkened to keep AA contrast intact underneath it.
* Each panel carries one off-centre radial wash (`.wash-forest`, `.wash-ink`, `.wash-terra`, `.wash-paper`, `.wash-sand`) so lighting reads as coming from a single direction. Also hidden for print.

## Layout Discipline
* Container: `max-w-[1440px]` (`2xl` → 1560) with `lg:pl-16 lg:pr-20`.
* Toolkit is grouped by purpose (model, ship, build, report), each group colour-coded, plus a Languages block in Paper. All five are solid colour blocks with no borders.
* Touch targets are at least 44px on interactive controls.
* Explicit mobile collapse for all multi-column layouts.
* Anchor jumps clear the fixed header via `scroll-margin-top: 5rem` on `[data-deck]`.

## Accessibility Contracts
* **Contrast**: secondary text on dark panels is at least `paper/75`. A terra panel never carries text below `paper/85`, and small text on terra uses solid `text-paper`. `text-faint` passes AA on paper (5.51:1) and on sand (4.66:1).
* **Focus**: `--focus` is redefined per surface via `.focus-on-dark` / `.focus-on-light`, so the focus ring is always visible regardless of panel colour.
* **Skip link**: `.skip-link` targets `#main`, present on every page.
* **Reduced motion**: decorative animation is disabled, but short colour and border state feedback is preserved.

## Contracts
* **Colour**: never hard-code hex values in components; use the palette utilities or semantic tokens.
* **Punctuation**: em-dashes are banned everywhere. Ranges use the word "to" (`2024 to Present`, `1997 to 2024`).
* **Identity and endpoints**: `app/site.ts` is the single source for `SITE_URL`, `EMAIL`, `GITHUB`, `LINKEDIN`, and the site name, role, and description. No component re-declares them.

## SEO and Metadata
* Every route declares its own `openGraph` with an absolute `url` and its own `title` / `description`. Previously `/resume/` and the case study inherited the root object, so both shared as the homepage with `og:url` pointing at `/`.
* `app/icon.svg` (branded ascending-bar mark), `app/manifest.ts`, `app/sitemap.ts`, `app/robots.ts`, and `app/not-found.tsx` round out the shell.

## Print
The deck unstacks for print (`.deck-shell`, `.deck-shell[data-stack="true"]` and `.deck-pin` become static) and fixed chrome, grain, and panel washes are removed via `.no-print` and explicit print rules.

## Dials
`DESIGN_VARIANCE: 7` | `MOTION_INTENSITY: 6` | `VISUAL_DENSITY: 5`
