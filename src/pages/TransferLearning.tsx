import { useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Chart from 'chart.js/auto';
import {
  transferRawPredcit,
  transferRawShow,
  cowLabelled,
  transferTunedPredict,
} from '../images/transferlearning';

import {
  GlobalStyle,
  Page,
  SiteHeader,
  Logotype,
  Subtitle,
  Card,
  CardLabel,
  Section,
  SubItem,
  SubNum,
  SubTitle,
  Prose,
  InlineCode,
  ToolsRow,
  ToolBadge,
  CodeBlock,
  MetricRow,
  MetricKey,
  MetricVal,
  InsightsGrid,
  InsightCard,
  InsightIcon,
  InsightTitle,
  InsightBody,
} from '../components/CommonComponents';

// ─────────────────────────────────────────────
// YOLO before/after
// ─────────────────────────────────────────────
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

interface PhaseLabelProps {
  $phase: 'before' | 'after';
}

const PhaseLabel = styled.div<PhaseLabelProps>`
  display: inline-flex;
  align-items: center;
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 0.75rem;

  ${({ $phase }) =>
    $phase === 'before'
      ? `background:rgba(217,119,6,.1); color:#d97706; border:1px solid rgba(217,119,6,.3);`
      : `background:rgba(5,150,105,.1); color:#059669; border:1px solid rgba(5,150,105,.3);`}
`;

// ─────────────────────────────────────────────
// Chart hook
// ─────────────────────────────────────────────
const ChartWrap = styled.div`
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

const EPOCHS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

interface DatasetConfig {
  label: string;
  data: number[];
  color: string;
  dashed?: boolean;
  fill?: boolean;
}

function useLineChart(
  ref: React.RefObject<HTMLCanvasElement>,
  datasets: DatasetConfig[],
  opts?: { yMin?: number; yMax?: number; yPercent?: boolean },
) {
  useEffect(() => {
    if (!ref.current) return;
    const mono = "'Space Mono'";
    const chart = new Chart(ref.current, {
      type: 'line',
      data: {
        labels: EPOCHS,
        datasets: datasets.map((d) => ({
          label: d.label,
          data: d.data,
          borderColor: d.color,
          backgroundColor: d.fill ? d.color + '14' : 'transparent',
          tension: 0.4,
          fill: d.fill ?? false,
          borderWidth: 2.5,
          pointRadius: 2,
          borderDash: d.dashed ? [4, 3] : [],
        })),
      },
    });
    return () => chart.destroy();
  }, []);
}

function YoloChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useLineChart(
    ref,
    [
      {
        label: 'mAP@50',
        data: [
          0.287, 0.671, 0.797, 0.847, 0.883, 0.877, 0.903, 0.892, 0.894, 0.897,
          0.894, 0.911, 0.924, 0.922, 0.926, 0.936, 0.932, 0.932, 0.937, 0.937,
        ],
        color: '#059669',
        fill: true,
      },
    ],
    { yMin: 0.2, yMax: 1.0 },
  );
  return (
    <ChartWrap>
      <canvas ref={ref} />
    </ChartWrap>
  );
}

function TransferChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useLineChart(
    ref,
    [
      {
        label: 'Feature Extractor',
        data: [
          42, 62.67, 72.67, 79, 83.33, 84.67, 85.33, 86.33, 87.33, 88.33, 88.67,
          90.33, 91, 90.67, 91, 90, 92, 91.33, 91.67, 91.67,
        ],
        color: '#d97706',
      },
      {
        label: 'Partial Fine-Tune',
        data: [
          93.67, 93.33, 93.33, 93.67, 93.67, 94.33, 93.33, 94, 94.67, 94.67,
          94.33, 93.67, 95.33, 94.67, 95.33, 91.67, 93, 91.67, 91.33, 93,
        ],
        color: '#7c3aed',
      },
      {
        label: 'Full Fine-Tune',
        data: [
          76.33, 76.33, 88, 73, 78.67, 82.33, 86.33, 81.67, 75.33, 88.33, 85.67,
          84.67, 89.33, 91.33, 89.33, 81.33, 77.67, 65, 70, 88,
        ],
        color: '#94a3b8',
        dashed: true,
      },
    ],
    { yPercent: true, yMin: 40 },
  );
  return (
    <ChartWrap>
      <canvas ref={ref} />
    </ChartWrap>
  );
}

// ─────────────────────────────────────────────
// Code strings
// ─────────────────────────────────────────────
const featureExtractorCode = `model = models.densenet121(weights=models.DenseNet121_Weights.IMAGENET1K_V1)

for param in model.features.parameters():
    param.requires_grad = False        # freeze all feature layers

in_features = model.classifier.in_features
model.classifier = nn.Linear(in_features, num_classes)

optimizer = torch.optim.Adam(model.classifier.parameters(), lr=1e-4)`;

const partialFTCode = `# Unfreeze only top layers — denseblock4 + norm5 + classifier
for p in model.features.parameters():              p.requires_grad = False
for p in model.features.denseblock4.parameters(): p.requires_grad = True
for p in model.features.norm5.parameters():        p.requires_grad = True
for p in model.classifier.parameters():            p.requires_grad = True

optimizer = optim.Adam(
    filter(lambda p: p.requires_grad, model.parameters()),
    lr=LEARNING_RATE
)`;

const yoloSetupCode = `from ultralytics import YOLO
from pathlib import Path
import random
import cv2

model = YOLO("yolo11n.pt")   # pretrained on COCO (80 classes, includes 'cow')
val_dir = Path("/kaggle/input/colo-object-detection/data/images/valid")
images = list(val_dir.glob("*.*"))
sample_imgs = random.sample(images, 5)
results = model.predict(
  source=[str(p) for p in sample_imgs],
  conf=0.25,
  save=False
)
fig, axes = plt.subplots(1, len(results), figsize=(20, 5))
for ax, r in zip(axes, results):
  img = r.plot()
  ax.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
  ax.axis("off")
  plt.tight_layout()
  plt.show()`;

const yoloPredictCode = `results = model.predict(
  source=[str(p) for p in sample_imgs],
  conf=0.1,
  save=False
)
fig, axes = plt.subplots(1, len(results), figsize=(20, 5))
for ax, r in zip(axes, results):
  img = r.plot()
  ax.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
  ax.axis("off")
  plt.tight_layout()
  plt.show()`;

const yoloTrainCode = `model.train(
    data='/kaggle/working/datasets/data.yaml',  # single class: cow
    epochs=20,
    verbose=False
)`;

const trainedDetectCode = `results_best = best_model.predict(
  source=[str(p) for p in sample_imgs],
  conf=0.5,
  save=False
)
fig, axes = plt.subplots(1, len(results_best), figsize=(20, 5))
  if len(results_best) == 1:
  axes = [axes]
  for ax, r in zip(axes, results_best):
  img = r.plot()
  ax.imshow(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
  ax.axis("off")
  plt.tight_layout()
  plt.show()`;

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function TransferLearning() {
  return (
    <>
      <GlobalStyle />
      <Page>
        {/* ══ HEADER ══ */}
        <SiteHeader>
          <Logotype>
            Transfer
            <br />
            Learning
          </Logotype>
          <Subtitle>Cow object detection — YOLO fine-tuning</Subtitle>
        </SiteHeader>

        {/* ══ 01. PROBLEM DEFINITION ══ */}
        <Section num="01" title="Problem Definition" />

        <Card>
          <CardLabel>Overview</CardLabel>
          <Prose>
            This lab tackles a computer vision problem that illustrates the full
            transfer learning spectrum. The task is single-class object
            detection on cow images, used to evaluate how much domain-specific
            fine-tuning matters even when the pretrained model already knows the
            target class.
          </Prose>
          <Prose>
            This experiment asks the core question:{' '}
            <em style={{ color: 'var(--text)' }}>
              how much does pretrained knowledge help, and how should it be
              adapted?
            </em>
          </Prose>
        </Card>

        <SubItem>
          <SubNum>Dataset</SubNum>
          <SubTitle>Cow Object Detection · single class</SubTitle>
        </SubItem>
        <Card>
          <CardLabel>
            814 train / 90 val · 850 instances · YOLO label format
          </CardLabel>
          <Prose style={{ fontSize: '0.88rem' }}>
            Annotated bounding box dataset with varied scenes — crowded pens,
            overhead angles, low-contrast lighting. Evaluated with mAP@50 via{' '}
            <InlineCode>single_cls=True</InlineCode>.
          </Prose>
        </Card>

        <SubItem>
          <SubNum>Tools</SubNum>
          <SubTitle>Stack</SubTitle>
        </SubItem>
        <Card>
          <ToolsRow>
            {['PyTorch', 'torchvision', 'YOLO11n', 'ultralytics'].map((t) => (
              <ToolBadge key={t}>{t}</ToolBadge>
            ))}
          </ToolsRow>
        </Card>

        <Section num="02" title="Object Detection · YOLO11" />

        <Card style={{ marginBottom: '1rem' }}>
          <CardLabel>YOLO11n · Pretrained on COCO (80 classes)</CardLabel>
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            YOLO11n (nano) pretrained on COCO is evaluated zero-shot on the cow
            dataset. COCO already includes a "cow" class, so this tests how well
            general pretraining transfers to a domain-specific detection task.
            The model has 2.59M parameters and 6.4 GFLOPs. The following results
            were obtained by directly running inference using the pretrained
            YOLO11n model without any additional fine-tuning.
          </Prose>
          <CodeBlock code={yoloSetupCode} />
          <ChartWrap>
            <img src={transferRawShow} />
          </ChartWrap>
          <CodeBlock code={yoloPredictCode} />
          <ChartWrap>
            <img src={transferRawPredcit} />
          </ChartWrap>
        </Card>

        <SubItem>
          <SubNum>Zero-shot</SubNum>
          <SubTitle>Pretrained Model Evaluation</SubTitle>
        </SubItem>
        <Card style={{ marginBottom: '1rem' }}>
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            mAP@50 = 0.442 — moderate performance. Precision is reasonable
            (0.589) but recall is critically low (0.378): the model misses 6 in
            10 cows, especially in crowded or partially-occluded scenes.
            Lowering <InlineCode>conf</InlineCode> from 0.25 → 0.10 recovers
            more detections but introduces false positives (boats, trains
            misidentified as cows).
          </Prose>
          <MetricRow>
            <MetricKey>mAP@50</MetricKey>
            <MetricVal $tone="warn">0.442</MetricVal>
          </MetricRow>
          <MetricRow>
            <MetricKey>Precision</MetricKey>
            <MetricVal>0.589</MetricVal>
          </MetricRow>
          <MetricRow>
            <MetricKey>Recall</MetricKey>
            <MetricVal $tone="bad">0.378 ← main weakness</MetricVal>
          </MetricRow>
          <MetricRow>
            <MetricKey>mAP@50-95</MetricKey>
            <MetricVal $tone="bad">0.232</MetricVal>
          </MetricRow>
        </Card>

        <SubItem>
          <SubNum>Fine-tuning</SubNum>
          <SubTitle>Domain Adaptation (20 epochs)</SubTitle>
        </SubItem>
        <Card>
          The data comes from here:{' '}
          <a
            href="https://www.kaggle.com/datasets/prajeetbajpai/colo-object-detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kaggle Dataset
          </a>
          <CodeBlock code={yoloTrainCode} />
          Only bounding boxes for the cow object are labeled. A sample image
          looks like this:
          <ChartWrap>
            <img src={cowLabelled} />
          </ChartWrap>
        </Card>

        <TwoCol style={{ marginTop: '1rem' }}>
          <Card style={{ padding: '1.5rem' }}>
            <PhaseLabel $phase="before">Before fine-tuning</PhaseLabel>
            <MetricRow>
              <MetricKey>mAP@50</MetricKey>
              <MetricVal $tone="warn">0.442</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Precision</MetricKey>
              <MetricVal>0.589</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Recall</MetricKey>
              <MetricVal $tone="bad">0.378</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>mAP@50-95</MetricKey>
              <MetricVal $tone="bad">0.232</MetricVal>
            </MetricRow>
          </Card>
          <Card style={{ padding: '1.5rem' }}>
            <PhaseLabel $phase="after">★ After fine-tuning (ep.20)</PhaseLabel>
            <MetricRow>
              <MetricKey>mAP@50</MetricKey>
              <MetricVal $tone="good">0.936</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Precision</MetricKey>
              <MetricVal $tone="good">0.928</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Recall</MetricKey>
              <MetricVal $tone="good">0.839</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>mAP@50-95</MetricKey>
              <MetricVal $tone="good">0.620</MetricVal>
            </MetricRow>
          </Card>
        </TwoCol>

        <Card style={{ padding: '1.5rem', marginTop: '1rem' }}>
          <CardLabel>YOLO mAP@50 per Epoch</CardLabel>
          <Prose style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
            mAP@50 improves from 0.287 → 0.937 across 20 epochs — a 3.2× gain.
            Domain-specific adaptation is critical even when the pretrained
            model already knows the target class.
          </Prose>
          <YoloChart />
        </Card>

        {/* ══ 04. FINE-TUNING ══ */}
        <Section num="04" title="Fine-Tuning Strategies" />

        <Card style={{ marginBottom: '1rem' }}>
          <CardLabel>Three Strategies on DenseNet121</CardLabel>
          <Prose style={{ fontSize: '0.88rem' }}>
            Having established that scratch training fails on small data, three
            transfer learning strategies are compared using DenseNet121
            pretrained on ImageNet as the backbone: feature extraction (frozen),
            partial fine-tuning (top layers unfrozen), and full fine-tuning (all
            layers trainable).
          </Prose>
        </Card>

        <SubItem>
          <SubNum>Strategy A</SubNum>
          <SubTitle>Feature Extractor — frozen backbone</SubTitle>
        </SubItem>
        <Card style={{ marginBottom: '1rem' }}>
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            All feature layers frozen. Only the final linear classifier head is
            trained. The optimizer receives only{' '}
            <InlineCode>model.classifier.parameters()</InlineCode>, skipping
            gradient computation for the entire backbone.
          </Prose>
          <CodeBlock code={featureExtractorCode} />
        </Card>

        <SubItem>
          <SubNum>Strategy B</SubNum>
          <SubTitle>Partial Fine-Tuning — top layers unfrozen</SubTitle>
        </SubItem>
        <Card style={{ marginBottom: '1rem' }}>
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            Only denseblock4 + norm5 + classifier are unfrozen. Lower layers
            remain frozen, preserving generic low-level features (edges,
            textures) while allowing the model to adapt high-level
            representations to cat-specific patterns.
          </Prose>
          <CodeBlock code={partialFTCode} />
        </Card>

        <SubItem>
          <SubNum>Strategy C</SubNum>
          <SubTitle>Full Fine-Tuning — all layers trainable</SubTitle>
        </SubItem>
        <Card style={{ marginBottom: '1rem' }}>
          <Prose style={{ fontSize: '0.88rem' }}>
            All layers set to <InlineCode>requires_grad = True</InlineCode>.
            Maximum flexibility but risks catastrophic forgetting and overfit on
            small datasets, especially without a lower learning rate for early
            layers.
          </Prose>
        </Card>

        <Card style={{ marginBottom: '1rem' }}>
          <CardLabel>Val Accuracy · All Three Strategies (20 Epochs)</CardLabel>
          <Prose style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
            Feature extraction converges smoothly to 91.67%. Partial fine-tuning
            starts high and peaks at 95.33%. Full fine-tuning drops to 65% at
            epoch 18 — overfit instability on small data.
          </Prose>
          <TransferChart />
        </Card>

        <Section num="05" title="Results" />
        <Card>
          <Prose>
            The following results are generated by the fine-tuned model.
            Compared to the baseline, it detects more objects with higher
            confidence scores.
          </Prose>
          <CodeBlock code={trainedDetectCode} />
          <ChartWrap>
            <img src={transferTunedPredict} />
          </ChartWrap>
        </Card>

        {/* ══ 05. INSIGHTS ══ */}
        <Section num="06" title="Key Takeaways" />
        <InsightsGrid>
          <InsightCard>
            <InsightIcon>🧊</InsightIcon>
            <InsightTitle>Small data → freeze first</InsightTitle>
            <InsightBody>
              With only 1,200 training images, frozen features already give
              91.67% val accuracy — more than double the scratch CNN. ImageNet
              representations transfer to fine-grained cat breeds out of the
              box.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🎯</InsightIcon>
            <InsightTitle>Partial beats full</InsightTitle>
            <InsightBody>
              Unfreezing denseblock4+ adds 3.6pp over full freeze (95.33% vs
              91.67%) while avoiding the instability of full fine-tuning. Lower
              layers encode generic edges and textures — no reason to disturb
              them.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🐄</InsightIcon>
            <InsightTitle>Knowing ≠ detecting</InsightTitle>
            <InsightBody>
              YOLO already "knows" what a cow looks like from COCO, yet mAP@50
              triples after fine-tuning (0.442 → 0.936). Domain shift — crowded
              scenes, overhead angles, low contrast — requires targeted
              adaptation even for known classes.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>📈</InsightIcon>
            <InsightTitle>Recall drives usefulness</InsightTitle>
            <InsightBody>
              A pretrained detector with recall of 0.378 misses 6 in 10 cows —
              practically useless for a monitoring application. Fine-tuning
              raises recall to 0.839. Precision was never the bottleneck.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>⚡</InsightIcon>
            <InsightTitle>GPU cost is negligible</InsightTitle>
            <InsightBody>
              Full YOLO fine-tuning completed in ~3.6 minutes on Tesla T4.
              Kaggle's free 30hr/week GPU quota comfortably covers multiple full
              experiments at this scale.
            </InsightBody>
          </InsightCard>
        </InsightsGrid>
      </Page>
    </>
  );
}
