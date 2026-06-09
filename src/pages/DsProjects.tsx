import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { transfer1, transfer2 } from '../images/coreml';
import { cowLabelled } from '../images/transferlearning';
import { RAG1, RAG2, RAG3 } from '../images/rag';
import { byMajor } from '../images/survey';
import { defaultByS } from '../images/credit';

// ─────────────────────────────────────────────
// Global styles & tokens — "Working paper":
// warm paper, ink, hairlines, IBM Plex Sans + Mono
// ─────────────────────────────────────────────
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

  :root {
    /* paper + ink (warm neutral, very low chroma) */
    --paper:     #faf8f3;
    --paper-2:   #f1ede4;
    --paper-3:   #e8e3d8;
    --ink:       #1a1813;
    --ink-2:     #34302a;
    --ink-mut:   #6b665a;
    --ink-faint: #9c968a;
    --rule:      #ddd7ca;
    --rule-2:    #cbc4b4;

    --mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
    --sans: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

    --maxw: 880px;
  }

  *, *::before, *::after { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }

  body {
    margin: 0;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--sans);
    font-weight: 400;
    line-height: 1.6;
    font-size: 17px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  img { display: block; max-width: 100%; }
  a { color: inherit; }

  ::selection { background: var(--ink); color: var(--paper); }
`;

// ─────────────────────────────────────────────
// Keyframes
// ─────────────────────────────────────────────
const fadeUp = keyframes`
  to { opacity: 1; transform: translateY(0); }
`;

// ─────────────────────────────────────────────
// Shared atoms
// ─────────────────────────────────────────────
const Tag = styled.span`
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-mut);
  border: 1px solid var(--rule-2);
  border-radius: 999px;
  padding: 3px 9px;
  white-space: nowrap;
`;

const TagRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const ReadLink = styled.a`
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 0.55em;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: gap 0.18s ease, opacity 0.18s ease;

  &:hover {
    gap: 0.95em;
    opacity: 0.65;
  }

  .arr {
    transition: transform 0.18s ease;
  }

  &:hover .arr {
    transform: translateX(2px);
  }
`;

// ─────────────────────────────────────────────
// Masthead
// ─────────────────────────────────────────────
const Masthead = styled.header`
  border-bottom: 1px solid var(--ink);
`;

const MastheadRow = styled.div`
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-mut);

  b {
    color: var(--ink);
    font-weight: 600;
  }
`;

// ─────────────────────────────────────────────
// Layout
// ─────────────────────────────────────────────
const Wrap = styled.main`
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 32px;
`;

// ─────────────────────────────────────────────
// Title block
// ─────────────────────────────────────────────
const TitleBlock = styled.div`
  padding: 84px 0 56px;

  @media (max-width: 680px) {
    padding: 60px 0 40px;
  }
`;

const Eyebrow = styled.div`
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ink-mut);
`;

const Title = styled.h1`
  font-size: clamp(40px, 7vw, 72px);
  line-height: 1.02;
  letter-spacing: -0.025em;
  font-weight: 600;
  margin: 22px 0 0;
  white-space: pre-line;
  text-wrap: balance;
`;

const Abstract = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const FieldLabel = styled.div`
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-faint);
  padding-top: 5px;
`;

const AbstractBody = styled.div`
  p {
    margin: 0 0 16px;
    max-width: 60ch;
    color: var(--ink-2);
  }
  p:last-child {
    margin-bottom: 0;
  }
`;

const Keywords = styled.div`
  margin-top: 34px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0 28px;
  align-items: start;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const KwList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// ─────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────
const Section = styled.section`
  padding-top: 72px;
`;

const SecHead = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--ink);
`;

const SecNo = styled.span`
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--ink-mut);
  padding-top: 9px;
  min-width: 34px;
`;

const SecTitle = styled.h2`
  font-size: clamp(24px, 3.4vw, 34px);
  line-height: 1.08;
  letter-spacing: -0.018em;
  font-weight: 600;
  margin: 0;
`;

const SecCaption = styled.p`
  margin: 8px 0 0;
  color: var(--ink-mut);
  font-size: 15px;
  max-width: 52ch;
`;

// ─────────────────────────────────────────────
// Project entry
// ─────────────────────────────────────────────
const Entry = styled.article<{ $delay: number }>`
  padding: 46px 0;
  border-bottom: 1px solid var(--rule);

  &:last-child {
    border-bottom: 0;
  }

  opacity: 0;
  transform: translateY(10px);
  animation: ${fadeUp} 0.45s ease forwards;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const EntryTop = styled.div`
  display: flex;
  gap: 14px;
  align-items: baseline;
  flex-wrap: wrap;
`;

const EntryRef = styled.span`
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-mut);
`;

const EntryTitle = styled.h3`
  font-size: clamp(22px, 2.8vw, 28px);
  line-height: 1.12;
  letter-spacing: -0.015em;
  font-weight: 600;
  margin: 0;
  flex: 1 1 auto;
`;

const EntryDesc = styled.p`
  margin: 16px 0 0;
  max-width: 64ch;
  color: var(--ink-2);
`;

const EntryMeta = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Stack = styled.span`
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--ink-mut);
  letter-spacing: 0.01em;
`;

// ─────────────────────────────────────────────
// Figure plate
// ─────────────────────────────────────────────
const Plate = styled.figure`
  margin: 26px 0 0;
`;

const FigFrame = styled.div`
  background: var(--paper-2);
  border: 1px solid var(--rule);
  overflow: hidden;
  aspect-ratio: 16 / 8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


// ─────────────────────────────────────────────
// Colophon
// ─────────────────────────────────────────────
const Colophon = styled.footer`
  margin-top: 90px;
  border-top: 1px solid var(--ink);
  padding: 26px 0 90px;
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-faint);
  flex-wrap: wrap;
  gap: 12px;
`;

// ─────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────
const Arrow = () => <span className="arr">→</span>;

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
interface ProjectData {
  ref: string;
  tags: string[];
  title: string;
  desc: string;
  stack: string;
  img: string;
  href: string;
}

interface SectionData {
  no: string;
  title: string;
  caption: string;
  projects: ProjectData[];
}

const SECTIONS: SectionData[] = [
  {
    no: '01',
    title: 'Transfer Learning, YOLO & CoreML',
    caption: 'Custom vision models trained, optimized, and shipped to the edge.',
    projects: [
      {
        ref: '1.1',
        tags: ['YOLO', 'Fine-Tuning', 'Object Detection'],
        title: 'YOLO Fine-Tuning & Model Export',
        desc: 'Fine-tuning YOLO11n on a custom cow-detection dataset (814 train / 90 val), then exporting the optimized weights for downstream deployment.',
        stack: 'Python · Ultralytics',
        img: cowLabelled,
        href: '#/transferlearning',
      },
      {
        ref: '1.2',
        tags: ['YOLO', 'Transfer Learning'],
        title: 'Data Preparation & Transfer Learning',
        desc: 'End-to-end pipeline for custom data collection, annotation, and training of YOLO models optimized for mobile via transfer learning.',
        stack: 'Python · Ultralytics',
        img: transfer1,
        href: 'https://medium.com/@eden.parkdev/developing-a-document-recognition-model-with-coreml-through-transfer-learning-95a2554cbf51',
      },
      {
        ref: '1.3',
        tags: ['CoreML', 'Swift'],
        title: 'Embedding a Model into an iOS App',
        desc: 'Edge AI: real-time document detection, deploying custom models via CoreML for on-device inference on the Neural Engine.',
        stack: 'Swift · Xcode · Vision',
        img: transfer2,
        href: 'https://medium.com/@eden.parkdev/integrating-a-transfer-learning-based-coreml-model-for-real-time-camera-inference-39e8c470dd36',
      },
    ],
  },
  {
    no: '02',
    title: 'RAG & LLM Applications',
    caption: 'Retrieval-augmented generation pipelines grounded in private data.',
    projects: [
      {
        ref: '2.1',
        tags: ['RAG', 'LLM', 'Vector DB'],
        title: 'RAG Implementation — Part 1',
        desc: 'End-to-end Retrieval-Augmented Generation pipeline: query routing, retrieval over private data, and grounded generation.',
        stack: 'Python · LLM',
        img: RAG1,
        href: 'https://medium.com/@eden.parkdev/building-a-revolut-customer-support-bot-part-1-why-rag-3fa40dd39e67',
      },
      {
        ref: '2.2',
        tags: ['RAG', 'LLM', 'Vector DB'],
        title: 'RAG Implementation — Part 2',
        desc: 'Augmenting the prompt with retrieved context and generating a grounded final answer with the language model.',
        stack: 'Python · LLM',
        img: RAG2,
        href: 'https://medium.com/@eden.parkdev/building-a-revolut-customer-support-bot-part-2-bm25-vs-semantic-vs-hybrid-and-how-to-actually-d0061412088c',
      },
      {
        ref: '2.3',
        tags: ['RAG', 'LLM', 'Vector DB'],
        title: 'RAG Implementation — Source Code',
        desc: 'Reference implementation: hybrid retrieval (BM25 + semantic) over Help-Center content, passing the top chunks as context to the model.',
        stack: 'Python · LLM',
        img: RAG3,
        href: 'https://github.com/eddeness/RAG_revolut',
      },
    ],
  },
  {
    no: '03',
    title: 'Kaggle & Data Science',
    caption:
      'Statistical analysis and end-to-end modelling on real-world datasets.',
    projects: [
      {
        ref: '3.1',
        tags: ['Visualization', 'R', 'ggplot'],
        title: 'DS Survey Analysis',
        desc: 'Analysis and data visualization of programmers working in the field of data science — demographics, tooling, and majors.',
        stack: 'R · ggplot',
        img: byMajor,
        href: '#/survey',
      },
      {
        ref: '3.2',
        tags: ['Data Science', 'Data Viz'],
        title: 'Credit Default Prediction',
        desc: 'End-to-end ML pipeline predicting credit-card default risk — from EDA and preprocessing to model comparison and Bayesian hyperparameter tuning.',
        stack: 'Python · scikit-learn · pandas · numpy · scipy',
        img: defaultByS,
        href: '#/credit',
      },
    ],
  },
];

const KEYWORDS = [
  'Python',
  'R',
  'Swift',
  'Machine Learning',
  'Computer Vision',
  'Data Viz',
  'CoreML',
];

const ABSTRACT = [
  'This page showcases projects built and extended throughout the Master of Data Science programme — and beyond. Each project applies academic concepts to concrete problems: from training custom vision models and deploying them on-device with CoreML, to uncovering patterns in real-world datasets through data visualization.',
  'The work spans the full pipeline — data collection, modelling, evaluation, and delivery — reflecting a commitment to end-to-end understanding rather than isolated theory.',
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function ProjectEntry({
  project,
  delay,
}: {
  project: ProjectData;
  delay: number;
}) {
  const { ref, tags, title, desc, stack, img, href } = project;

  return (
    <Entry $delay={delay}>
      <EntryTop>
        <EntryRef>{ref}</EntryRef>
        <EntryTitle>{title}</EntryTitle>
        <TagRow>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagRow>
      </EntryTop>

      <EntryDesc>{desc}</EntryDesc>

      <EntryMeta>
        <Stack>{stack}</Stack>
        <ReadLink href={href}>
          Read <Arrow />
        </ReadLink>
      </EntryMeta>

      <Plate>
        <FigFrame>
          <img
            src={img}
            alt={title}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = '0';
            }}
          />
        </FigFrame>
      </Plate>
    </Entry>
  );
}

function CategorySection({ section }: { section: SectionData }) {
  const { no, title, caption, projects } = section;

  return (
    <Section>
      <SecHead>
        <SecNo>§ {no}</SecNo>
        <div>
          <SecTitle>{title}</SecTitle>
          <SecCaption>{caption}</SecCaption>
        </div>
      </SecHead>
      {projects.map((p, i) => (
        <ProjectEntry key={p.ref} project={p} delay={0.08 + i * 0.08} />
      ))}
    </Section>
  );
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function Projects() {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        {/* ── TITLE BLOCK ── */}
        <TitleBlock>
          <Eyebrow>Project Showcase</Eyebrow>
          <Title>{'Applied research,\nfrom MDS to the real world.'}</Title>

          <Abstract>
            <FieldLabel>Abstract</FieldLabel>
            <AbstractBody>
              {ABSTRACT.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </AbstractBody>
          </Abstract>

          <Keywords>
            <FieldLabel>Keywords</FieldLabel>
            <KwList>
              {KEYWORDS.map((k) => (
                <Tag key={k}>{k}</Tag>
              ))}
            </KwList>
          </Keywords>
        </TitleBlock>

        {/* ── SECTIONS ── */}
        {SECTIONS.map((s) => (
          <CategorySection key={s.no} section={s} />
        ))}
      </Wrap>
    </>
  );
}
