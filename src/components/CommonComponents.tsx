import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

// Color constants for consistency
const COLORS = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    dark: '#333',
    medium: '#3e424b',
    cadet: '#5f9ea0',
    slate: '#708090',
    dim: '#544c4a',
  },
} as const;

// Main container with responsive padding
export const Container = styled.div`
  padding: 4.375rem 15.625rem 6.25rem;

  @media (max-width: 1400px) {
    padding: 4.375rem 8rem 6.25rem;
  }

  @media (max-width: 992px) {
    padding: 4.375rem 4rem 6.25rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }
`;

// Menu components
export const Menu = styled.div`
  height: 100vh;
  position: sticky;
  display: flex;
  align-items: center;
  width: 15.625rem;
  background-color: ${COLORS.gray.dark};
  color: ${COLORS.white};
  padding: 1.25rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MenuTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const MenuDiv = styled.div`
  font-size: 1.125rem;
  color: ${COLORS.gray.medium};
  padding-left: 1.25rem;
  padding-top: 0.625rem;
  line-height: 1.5;
`;

// Typography components
export const BigTitle = styled.h1`
  font-size: 2.5rem;
  color: ${COLORS.gray.cadet};
  font-weight: bold;
  margin: 0;
`;

export const SemiTitle = styled.h2`
  font-size: 1.5625rem;
  color: ${COLORS.gray.slate};
  font-weight: bold;
  padding: 1.875rem 0 0.625rem;
  margin: 0;
`;

export const NumberTitle = styled.h3`
  font-size: 1.375rem;
  color: ${COLORS.gray.dim};
  font-weight: 600;
  padding: 0.9375rem 0;
  margin: 0;
`;

export const DefaultDiv = styled.div`
  font-size: 1.25rem;
  color: ${COLORS.black};
  padding-top: 1.875rem;
  line-height: 1.2;
`;

// Card components
export const CardContent = styled.p`
  font-size: 0.875rem;
  padding: 0.625rem 0;
  margin: 0;
  line-height: 1.5;
`;

// Utility type for styled component props
export type StyledComponentProps = {
  className?: string;
  children?: React.ReactNode;
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. DESIGN TOKENS  (overridable per-page via CSS vars on <Page>)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Each page supplies its own accent palette by spreading these props
 * onto <PageWithAccent $accent="..." $accentAlt="..." $glow1="..." $glow2="...">.
 * Defaults to sky/indigo (Survey + CreditDefault).
 */
export interface AccentTokens {
  /** Primary accent color  e.g. '#0284c7' */
  $accent?: string;
  /** Secondary accent       e.g. '#6366f1' */
  $accentAlt?: string;
  /** Glow overlay 1 (rgba) e.g. 'rgba(2,132,199,0.05)' */
  $glow1?: string;
  /** Glow overlay 2 (rgba) e.g. 'rgba(99,102,241,0.05)' */
  $glow2?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. GLOBAL STYLE  (fonts, reset, body background, keyframes)
// ─────────────────────────────────────────────────────────────────────────────

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

  :root {
    --bg:      #f8fafc;
    --surface: rgba(255, 255, 255, 0.85);
    --border:  rgba(203, 213, 225, 0.8);
    --text:    #0f172a;
    --muted:   #64748b;
    --dim:     #94a3b8;

    /* Semantic color palette — used everywhere via var() */
    --sky:     #0284c7;
    --indigo:  #6366f1;
    --violet:  #7c3aed;
    --emerald: #059669;
    --rose:    #e11d48;
    --amber:   #d97706;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    min-height: 100vh;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// 3. PAGE WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Wraps the full page. Injects per-page accent via CSS vars.
 * The ambient glow is rendered as a ::before pseudo-element so it
 * doesn't affect layout.
 */
export const Page = styled.div<AccentTokens>`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
  animation: fadeIn 0.5s ease;

  /* Expose accent tokens as local CSS vars so children can reference them */
  --accent: ${({ $accent }) => $accent};
  --accent-alt: ${({ $accentAlt }) => $accentAlt};

  @media (max-width: 640px) {
    padding: 2rem 1rem 4rem;
  }

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(
        ellipse 60% 50% at 10% 20%,
        ${({ $glow1 }) => $glow1} 0%,
        transparent 60%
      ),
      radial-gradient(
        ellipse 50% 60% at 90% 80%,
        ${({ $glow2 }) => $glow2} 0%,
        transparent 60%
      );
    pointer-events: none;
    z-index: -1;
  }
`;

// Convenience preset accents ─────────────────────────────────────────────────

/** sky / indigo — Survey & CreditDefault */
export const skyAccent: AccentTokens = {
  $accent: '#0284c7',
  $accentAlt: '#6366f1',
  $glow1: 'rgba(2,132,199,0.05)',
  $glow2: 'rgba(99,102,241,0.05)',
};

/** violet / sky — TransferLearning */
export const violetAccent: AccentTokens = {
  $accent: '#7c3aed',
  $accentAlt: '#0284c7',
  $glow1: 'rgba(124,58,237,0.04)',
  $glow2: 'rgba(2,132,199,0.04)',
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. HEADER
// ─────────────────────────────────────────────────────────────────────────────

export const SiteHeader = styled.header`
  margin-bottom: 3.5rem;
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--accent);
  }
`;

export const Logotype = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  background: linear-gradient(100deg, #0f172a 30%, #0284c7 70%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 640px;
`;

export const LiveBadge = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1.5rem;
`;

export const PulseDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 6px var(--accent);
  animation: pulse 2s infinite;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 5. CARDS
// ─────────────────────────────────────────────────────────────────────────────

export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.75rem;
  transition:
    border-color 0.25s,
    transform 0.25s;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
    transform: translateY(-2px);
  }
`;

export const CardLabel = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--dim);
  margin-bottom: 1rem;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 6. STATS ROW
// ─────────────────────────────────────────────────────────────────────────────

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const StatCard = styled(Card)`
  text-align: center;
  padding: 1.5rem 1rem;
`;

export const StatVal = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(90deg, var(--accent), var(--accent-alt));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatLabel = styled.div`
  font-size: 0.72rem;
  color: var(--muted);
  margin-top: 6px;
  letter-spacing: 0.05em;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 7. SECTION HEADER
// ─────────────────────────────────────────────────────────────────────────────

const SectionHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 3.5rem 0 1.5rem;
`;

const SectionNumSpan = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.1em;
`;

const SectionTitleH2 = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

const SectionLineDiv = styled.div`
  flex: 1;
  height: 1px;
  background: var(--border);
`;

export function Section({ num, title }: { num: string; title: string }) {
  return (
    <SectionHeaderWrap>
      <SectionNumSpan>{num}</SectionNumSpan>
      <SectionTitleH2>{title}</SectionTitleH2>
      <SectionLineDiv />
    </SectionHeaderWrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. SUB-ITEMS
// ─────────────────────────────────────────────────────────────────────────────

export const SubItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 1.75rem 0 0.75rem;
`;

export const SubNum = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  border-radius: 4px;
  padding: 2px 8px;
  white-space: nowrap;
`;

export const SubTitle = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
`;

// ─────────────────────────────────────────────────────────────────────────────
// 9. TYPOGRAPHY
// ─────────────────────────────────────────────────────────────────────────────

export const Prose = styled.p`
  color: var(--muted);
  line-height: 1.8;
  font-size: 0.92rem;
  & + & {
    margin-top: 0.9rem;
  }
`;

export const InlineCode = styled.code`
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  padding: 1px 5px;
  border-radius: 3px;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 10. CHIPS
// ─────────────────────────────────────────────────────────────────────────────

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`;

/** Chip color variants — pass a CSS color string as $color, or leave blank for muted */
interface ChipProps {
  $color?: string; // border/text color  e.g. 'var(--sky)'
  $alpha?: string; // rgba for background e.g. 'rgba(2,132,199,0.04)'
}

export const Chip = styled.span<ChipProps>`
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 999px;
  color: ${({ $color }) => $color ?? 'var(--muted)'};
  border: 1px solid
    ${({ $color }) =>
      $color
        ? `color-mix(in srgb, ${$color} 40%, transparent)`
        : 'var(--border)'};
  background: ${({ $alpha }) => $alpha ?? 'transparent'};
`;

// Pre-built chip variants ─────────────────────────────────────────────────────

export const SkyChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip $color="var(--sky)" $alpha="rgba(2,132,199,0.04)" {...p} />
);
export const IndigoChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip $color="var(--indigo)" $alpha="rgba(99,102,241,0.04)" {...p} />
);
export const VioletChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip $color="var(--violet)" $alpha="rgba(124,58,237,0.04)" {...p} />
);
export const EmeraldChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip $color="var(--emerald)" $alpha="rgba(5,150,105,0.04)" {...p} />
);
export const RoseChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip $color="var(--rose)" $alpha="rgba(225,29,72,0.04)" {...p} />
);
export const AmberChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip $color="var(--amber)" $alpha="rgba(217,119,6,0.04)" {...p} />
);
export const MutedChip = (p: React.HTMLAttributes<HTMLSpanElement>) => (
  <Chip {...p} />
);

// ─────────────────────────────────────────────────────────────────────────────
// 11. TOOL BADGE
// ─────────────────────────────────────────────────────────────────────────────

export const ToolsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 0.75rem;
`;

export const ToolBadge = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  padding: 6px 14px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
  color: var(--accent);
  letter-spacing: 0.05em;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 12. CODE BLOCK
// ─────────────────────────────────────────────────────────────────────────────

const CodeWrap = styled.div`
  background: #f1f5f9;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1rem 0;
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem 0.3rem;
  border-bottom: 1px solid var(--border);
`;

const CodeDots = styled.div`
  display: flex;
  gap: 5px;
  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: block;
  }
  .r {
    background: #ff6060;
  }
  .y {
    background: #f5c842;
  }
  .g {
    background: #34d399;
  }
`;

const CodeLangSpan = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.7;
`;

const CodePre = styled.pre`
  font-family: 'Space Mono', monospace;
  font-size: 0.74rem;
  line-height: 1.75;
  color: #334155;
  padding: 1rem 1.25rem;
  white-space: pre;
`;

export function CodeBlock({
  code,
  lang = 'Python',
}: {
  code: string;
  lang?: string;
}) {
  return (
    <CodeWrap>
      <CodeHeader>
        <CodeDots>
          <span className="r" />
          <span className="y" />
          <span className="g" />
        </CodeDots>
        <CodeLangSpan>{lang}</CodeLangSpan>
      </CodeHeader>
      <CodePre>{code}</CodePre>
    </CodeWrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 13. CHART IMAGE WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

export const ChartWrap = styled.div`
  margin: 1rem 0;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--border);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

/** Canvas chart height container */
export const CanvasWrap = styled.div<{ $h?: string }>`
  position: relative;
  height: ${({ $h }) => $h ?? '220px'};
`;

// ─────────────────────────────────────────────────────────────────────────────
// 14. GRID LAYOUTS
// ─────────────────────────────────────────────────────────────────────────────

export const TwoColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ThreeColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 15. METRIC ROW  (used in model cards, YOLO before/after, etc.)
// ─────────────────────────────────────────────────────────────────────────────

export const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.35rem 0;
  border-bottom: 1px solid var(--border);
  &:last-child {
    border-bottom: none;
  }
`;

export const MetricKey = styled.span`
  font-size: 0.75rem;
  color: var(--muted);
`;

type Tone = 'good' | 'warn' | 'bad';

export const MetricVal = styled.span<{ $tone?: Tone }>`
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ $tone }) =>
    $tone === 'good'
      ? 'var(--emerald)'
      : $tone === 'bad'
        ? 'var(--rose)'
        : $tone === 'warn'
          ? 'var(--amber)'
          : 'var(--text)'};
`;

// ─────────────────────────────────────────────────────────────────────────────
// 16. ACCCENT CARD  (colored top-border card — model comparisons)
// ─────────────────────────────────────────────────────────────────────────────

export const AccentCard = styled(Card)<{ $topColor: string }>`
  padding: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ $topColor }) => $topColor};
  }
`;

export const AccentCardName = styled.div`
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

export const AccentCardSub = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  color: var(--dim);
  margin-bottom: 1rem;
`;

export const BestBadge = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  padding: 2px 8px;
  border-radius: 999px;
  margin-bottom: 0.75rem;
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  color: var(--accent);
`;

// ─────────────────────────────────────────────────────────────────────────────
// 17. CALLOUT  (info/warn/success/danger note box)
// ─────────────────────────────────────────────────────────────────────────────

const calloutStyles: Record<string, string> = {
  warn: `background:rgba(217,119,6,0.07);  border-left:3px solid var(--amber);`,
  success: `background:rgba(5,150,105,0.07);  border-left:3px solid var(--emerald);`,
  danger: `background:rgba(225,29,72,0.07);  border-left:3px solid var(--rose);`,
  info: `background:rgba(2,132,199,0.07);  border-left:3px solid var(--sky);`,
};

export const Callout = styled.div<{ $tone?: keyof typeof calloutStyles }>`
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin: 1rem 0;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--text);
  ${({ $tone }) => calloutStyles[$tone ?? 'info']}
`;

export const CalloutTitle = styled.div`
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 18. DATA TABLE
// ─────────────────────────────────────────────────────────────────────────────

export const TableWrap = styled.div`
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
`;

export const Th = styled.th`
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dim);
  padding: 0.7rem 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
  background: rgba(241, 245, 249, 0.7);
  white-space: nowrap;
`;

export const Td = styled.td`
  padding: 0.6rem 1rem;
  color: var(--muted);
  border-bottom: 1px solid rgba(203, 213, 225, 0.4);
  font-family: 'Space Mono', monospace;
  font-size: 0.75rem;
  white-space: nowrap;
  tr:last-child & {
    border-bottom: none;
  }
`;

export const TdHigh = styled(Td)<{ $tone?: Tone | 'sky' | 'indigo' }>`
  font-weight: 700;
  color: ${({ $tone }) =>
    $tone === 'good'
      ? 'var(--emerald)'
      : $tone === 'warn'
        ? 'var(--amber)'
        : $tone === 'bad'
          ? 'var(--rose)'
          : $tone === 'sky'
            ? 'var(--sky)'
            : $tone === 'indigo'
              ? 'var(--indigo)'
              : 'var(--text)'};
`;

export const TrHighlight = styled.tr`
  background: color-mix(in srgb, var(--accent) 4%, transparent);
`;

// ─────────────────────────────────────────────────────────────────────────────
// 19. SCORE BAR  (progress bar for metric display)
// ─────────────────────────────────────────────────────────────────────────────

export const ScoreBarWrap = styled.div`
  margin: 0.5rem 0;
`;

export const ScoreBarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  margin-bottom: 4px;
  color: var(--muted);
`;

export const ScoreBarTrack = styled.div`
  height: 8px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 99px;
  overflow: hidden;
`;

export const ScoreBarFill = styled.div<{ $pct: number; $color?: string }>`
  height: 100%;
  border-radius: 99px;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $color }) => $color ?? 'var(--accent)'};
  transition: width 0.6s ease;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 20. INSIGHTS GRID
// ─────────────────────────────────────────────────────────────────────────────

export const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const InsightCard = styled(Card)`
  padding: 1.5rem;
`;
export const InsightIcon = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
`;
export const InsightTitle = styled.h4`
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;
export const InsightBody = styled.p`
  font-size: 0.8rem;
  color: var(--muted);
  line-height: 1.6;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 21. FOOTER
// ─────────────────────────────────────────────────────────────────────────────

export const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const FooterText = styled.span`
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: var(--dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

// ─────────────────────────────────────────────────────────────────────────────
// 22. CHART.JS DEFAULTS  (shared axis / legend config)
// ─────────────────────────────────────────────────────────────────────────────

const MONO = "'Space Mono'";

export const chartDefaults = {
  /** Pass to Chart.js options.scales */
  scales: {
    x: {
      grid: { color: 'rgba(148,163,184,.2)' },
      ticks: { color: '#94a3b8', font: { family: MONO, size: 10 } },
    },
    y: {
      grid: { color: 'rgba(148,163,184,.2)' },
      ticks: { color: '#94a3b8', font: { family: MONO, size: 10 } },
    },
  },
  legend: { labels: { color: '#94a3b8', font: { family: MONO, size: 10 } } },
};

/** Semantic color constants — import wherever Chart.js datasets are built */
export const ConstColor = {
  sky: '#0284c7',
  indigo: '#6366f1',
  violet: '#7c3aed',
  emerald: '#059669',
  rose: '#e11d48',
  amber: '#d97706',
  muted: '#94a3b8',
} as const;
