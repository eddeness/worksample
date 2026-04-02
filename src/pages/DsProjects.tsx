import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { transfer1, transfer2 } from '../images/coreml';
import { cowLabelled } from '../images/transferlearning';
import { byMajor } from '../images/survey';
import { defaultByS } from '../images/credit';

// ─────────────────────────────────────────────
// Global styles & tokens
// ─────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

  :root {
    --bg:      #f8f8f6;
    --white:   #ffffff;
    --ink:     #111110;
    --muted:   #888880;
    --dim:     #c4c4bc;
    --border:  #e4e4e0;
    --accent:  #1a6bff;
    --accent2: #e8400c;
    --green:   #1a9e5c;
    --tag-bg:  #f0f0ec;
    --sans:    'DM Sans', sans-serif;
    --mono:    'DM Mono', monospace;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: var(--sans);
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
`;

// ─────────────────────────────────────────────
// Keyframes
// ─────────────────────────────────────────────
const fadeUp = keyframes`
  to { opacity: 1; transform: translateY(0); }
`;

// ─────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────
const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2.5rem 8rem;

  @media (max-width: 680px) {
    padding: 0 1.25rem 5rem;
  }
`;

// ─────────────────────────────────────────────
// Intro
// ─────────────────────────────────────────────
const Intro = styled.section`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 5rem;
  align-items: center;
  padding: 6rem 0 5.5rem;
  border-bottom: 1px solid var(--border);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const IntroEyebrow = styled.div`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--accent);
  }
`;

const IntroTitle = styled.h1`
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 2rem;

  em {
    font-style: italic;
    font-weight: 300;
  }
`;

const IntroBody = styled.div`
  font-size: 0.95rem;
  line-height: 1.85;
  color: #555550;
  font-weight: 300;
  max-width: 460px;

  p + p {
    margin-top: 1rem;
  }

  strong {
    font-weight: 500;
    color: var(--ink);
  }
`;

const IntroPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

interface PillProps {
  $accent?: boolean;
}

const Pill = styled.span<PillProps>`
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 13px;
  border-radius: 999px;
  border: 1px solid
    ${({ $accent }) => ($accent ? 'rgba(26,107,255,0.3)' : 'var(--border)')};
  color: ${({ $accent }) => ($accent ? 'var(--accent)' : 'var(--muted)')};
  background: ${({ $accent }) =>
    $accent ? 'rgba(26,107,255,0.04)' : 'var(--white)'};
`;

// ─────────────────────────────────────────────
// Section heading
// ─────────────────────────────────────────────
const SectionHeading = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 4rem 0 2rem;
`;

const SectionNum = styled.h2`
  font-size: 0.65rem;
  font-family: var(--mono);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
`;

const SectionTitle = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--ink);
`;

const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background: var(--border);
`;

// ─────────────────────────────────────────────
// Project grid & card
// ─────────────────────────────────────────────
const ProjGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const ProjCard = styled.div<{ $delay: number }>`
  background: var(--white);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  opacity: 0;
  transform: translateY(8px);
  animation: ${fadeUp} 0.4s ease forwards;
  animation-delay: ${({ $delay }) => $delay}s;
`;

// Image area
const ProjImg = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: #ededea;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.25, 0, 0, 1);
  }

  ${ProjCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjImgPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  opacity: 0.2;
`;

const ProjIndex = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-family: var(--mono);
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(6px);
  padding: 2px 7px;
  border-radius: 2px;
`;

// Body
const ProjBody = styled.div`
  padding: 1.2rem 1.4rem 1.4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  border-top: 1px solid var(--border);
`;

const ProjTags = styled.div`
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
`;

type TagVariant = 'blue' | 'red' | 'green' | 'default';

const Tag = styled.span<{ $variant?: TagVariant }>`
  font-family: var(--mono);
  font-size: 0.52rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 2px;

  ${({ $variant }) => {
    switch ($variant) {
      case 'blue':
        return `background: rgba(26,107,255,0.07); color: var(--accent);`;
      case 'red':
        return `background: rgba(232,64,12,0.07);  color: var(--accent2);`;
      case 'green':
        return `background: rgba(26,158,92,0.08);  color: var(--green);`;
      default:
        return `background: var(--tag-bg);          color: var(--muted);`;
    }
  }}
`;

const ProjTitle = styled.h3`
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.4;
  color: var(--ink);
`;

const ProjDesc = styled.p`
  font-size: 0.75rem;
  line-height: 1.7;
  color: var(--muted);
  font-weight: 300;
  flex: 1;
`;

const ProjFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border);
  margin-top: auto;
`;

const ProjStack = styled.span`
  font-family: var(--mono);
  font-size: 0.52rem;
  color: var(--dim);
  letter-spacing: 0.04em;
`;

const ArrowIcon = () => (
  <svg
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ width: 9, height: 9, transition: 'transform 0.15s' }}
  >
    <path d="M1 9L9 1M9 1H3M9 1V7" />
  </svg>
);

const ProjLink = styled.a`
  font-family: var(--mono);
  font-size: 0.56rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
  transition:
    color 0.15s,
    border-color 0.15s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
interface ProjectData {
  index: string;
  img: string;
  placeholder: string;
  tags: { label: string; variant?: TagVariant }[];
  title: string;
  desc: string;
  stack: string;
  href: string;
  delay: number;
}

const PROJECTS_TL: ProjectData[] = [
  {
    index: '1',
    img: cowLabelled,
    placeholder: '🧠',
    tags: [
      { label: 'YOLO', variant: 'blue' },
      { label: 'Fine-tuning', variant: 'red' },
      { label: 'Object Detection' },
    ],
    title: 'YOLO Fine-Tuning & Model Export',
    desc: 'Fine-tuning YOLO11n on a custom cow detection dataset (814 train / 90 val)',
    stack: 'Python · Ultralytics',
    href: '#/transferlearning',
    delay: 0.24,
  },
  {
    index: '2',
    img: transfer1,
    placeholder: '📖',
    tags: [
      { label: 'YOLO', variant: 'blue' },
      { label: 'Transfer Learning', variant: 'red' },
    ],
    title: 'Data Preparation & Transfer Learning',
    desc: 'End-to-end pipeline for custom data collection, annotation, and training optimized YOLO models for mobile via transfer learning.',
    stack: 'Python · Ultralytics',
    href: 'https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%AC%B8%EC%84%9C-%EC%9D%B8%EC%8B%9D-%EB%AA%A8%EB%8D%B8-coreml-%EA%B0%9C%EB%B0%9C%EA%B8%B0-81b20b5e8571',
    delay: 0.08,
  },
  {
    index: '3',
    img: transfer2,
    placeholder: '📱',
    tags: [{ label: 'CoreML', variant: 'blue' }, { label: 'Swift' }],
    title: 'Embedding a Model into an iOS App',
    desc: 'Edge AI: Real-time document detection deploying custom models via CoreML for on-device inference on the Neural Engine.',
    stack: 'Swift · Xcode · Vision',
    href: 'https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-coreml-%EB%AA%A8%EB%8D%B8-%EB%84%A3%EA%B3%A0-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A1%9C-%EC%9D%B8%EC%8B%9D%EC%8B%9C%ED%82%A4%EA%B8%B0-890ac737b476',
    delay: 0.16,
  },
];

const PROJECTS_DS: ProjectData[] = [
  {
    index: '01',
    img: byMajor,
    placeholder: '🌍',
    tags: [
      { label: 'Visualization', variant: 'green' },
      { label: 'R' },
      { label: 'ggplot' },
    ],
    title: 'DS Survey Analysis',
    desc: 'Analysis & Data Visualization on Programmers in the Field of Data Science',
    stack: 'R · ggplot',
    href: '#/survey',
    delay: 0.32,
  },
  {
    index: '02',
    img: defaultByS,
    placeholder: '🗺️',
    tags: [{ label: 'Data science', variant: 'green' }, { label: 'Data Viz' }],
    title: 'Credit Default Prediction',
    desc: 'End-to-end ML pipeline predicting credit card default risk — from EDA and preprocessing to model comparison, and Bayesian hyperparameter tuning.',
    stack: 'Python · scikit-learn· pandas · numpy · scipy',
    href: '#/credit',
    delay: 0.4,
  },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function ProjectCard({ project }: { project: ProjectData }) {
  const { index, img, placeholder, tags, title, desc, stack, href, delay } =
    project;

  return (
    <ProjCard $delay={delay}>
      <ProjImg>
        <img
          src={img}
          alt={title}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
            (e.currentTarget.nextElementSibling as HTMLElement).style.display =
              'flex';
          }}
        />
        <ProjImgPlaceholder style={{ display: 'none' }}>
          {placeholder}
        </ProjImgPlaceholder>
        <ProjIndex>{index}</ProjIndex>
      </ProjImg>

      <ProjBody>
        <ProjTags>
          {tags.map((t) => (
            <Tag key={t.label} $variant={t.variant}>
              {t.label}
            </Tag>
          ))}
        </ProjTags>
        <ProjTitle>{title}</ProjTitle>
        <ProjDesc>{desc}</ProjDesc>
        <ProjFooter>
          <ProjStack>{stack}</ProjStack>
          <ProjLink>
            <a href={href}>
              Read
              <ArrowIcon />
            </a>
          </ProjLink>
        </ProjFooter>
      </ProjBody>
    </ProjCard>
  );
}

function CategorySection({
  num,
  title,
  projects,
}: {
  num: string;
  title: string;
  projects: ProjectData[];
}) {
  return (
    <>
      <SectionHeading>
        <SectionNum>{num}</SectionNum>
        <SectionTitle>{title}</SectionTitle>
        <SectionLine />
      </SectionHeading>
      <ProjGrid>
        {projects.map((p) => (
          <ProjectCard key={p.index} project={p} />
        ))}
      </ProjGrid>
    </>
  );
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function Projects() {
  return (
    <>
      <GlobalStyle />
      <Page>
        {/* ── INTRO ── */}
        <Intro>
          <div>
            <IntroEyebrow>Project Showcase</IntroEyebrow>
            <IntroTitle>
              Applied <em>research</em>
              <br />
              from MDS to
              <br />
              real-world.
            </IntroTitle>
            <IntroBody>
              <p>
                This page showcases projects built and extended throughout the{' '}
                <strong>Master of Data Science</strong> programme — and beyond.
                Each project applies academic concepts to concrete problems:
                from training custom vision models and deploying them on-device
                with <strong>CoreML</strong>, to uncovering patterns in
                real-world datasets through <strong>data visualization</strong>.
              </p>
              <p>
                The work spans the full pipeline — data collection, modelling,
                evaluation, and delivery — reflecting a commitment to end-to-end
                understanding rather than isolated theory.
              </p>
            </IntroBody>
            <IntroPills>
              {(['Python', 'R', 'Swift'] as const).map((t) => (
                <Pill key={t} $accent>
                  {t}
                </Pill>
              ))}
              {(
                [
                  'Machine Learning',
                  'Computer Vision',
                  'Data Viz',
                  'CoreML',
                ] as const
              ).map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </IntroPills>
          </div>
        </Intro>

        {/* ── CATEGORIES ── */}
        <CategorySection
          num="01"
          title="Transfer Learning & YOLO & CoreML"
          projects={PROJECTS_TL}
        />
        <CategorySection
          num="02"
          title="Kaggle & Data Science"
          projects={PROJECTS_DS}
        />
      </Page>
    </>
  );
}
