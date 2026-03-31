import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { defaultByS, imbalance, multicol } from '../images/credit';
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
  ChartWrap,
  TwoColGrid,
  ThreeColGrid,
  MetricRow,
  MetricKey,
  MetricVal,
  BestBadge,
  Callout,
  CalloutTitle,
  TableWrap,
  Table,
  Th,
  Td,
  TdHigh,
  TrHighlight,
  ScoreBarWrap,
  ScoreBarLabel,
  ScoreBarTrack,
  ScoreBarFill,
  InsightsGrid,
  InsightCard,
  InsightIcon,
  InsightTitle,
  InsightBody,
  ConstColor,
} from '../components/CommonComponents';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
);

// ─────────────────────────────────────────────
// Chips
// ─────────────────────────────────────────────
const MetaChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1rem;
`;

interface ChipProps {
  $variant?: 'sky' | 'indigo' | 'rose' | 'amber' | 'emerald' | 'default';
}

const Chip = styled.span<ChipProps>`
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);

  ${({ $variant }) => {
    switch ($variant) {
      case 'sky':
        return `border: 1px solid rgba(2,132,199,0.4);   color: var(--sky);`;
      case 'indigo':
        return `border: 1px solid rgba(99,102,241,0.4);  color: var(--indigo);`;
      case 'rose':
        return `border: 1px solid rgba(225,29,72,0.4);   color: var(--rose);`;
      case 'amber':
        return `border: 1px solid rgba(217,119,6,0.4);   color: var(--amber);`;
      case 'emerald':
        return `border: 1px solid rgba(5,150,105,0.4);   color: var(--emerald);`;
      default:
        return `border: 1px solid var(--border);          color: var(--muted);`;
    }
  }}
`;

// ─────────────────────────────────────────────
// Dataset link
// ─────────────────────────────────────────────
const DatasetLink = styled.div`
  margin-bottom: 1.25rem;
  a {
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    color: var(--sky);
    word-break: break-all;
    text-decoration: none;
    border-bottom: 1px solid rgba(2, 132, 199, 0.3);
    transition: border-color 0.2s;
    &:hover {
      border-color: var(--sky);
    }
  }
`;

// ─────────────────────────────────────────────
// Grid layouts
// ─────────────────────────────────────────────
const ChartCard = styled(Card)`
  padding: 1.5rem;
`;

const ChartWrapDiv = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

// ─────────────────────────────────────────────
// Model result cards
// ─────────────────────────────────────────────
const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

interface ModelCardProps {
  $rank?: 'best' | 'second' | 'third';
}
const ModelCard = styled(Card)<ModelCardProps>`
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
    ${({ $rank }) => {
      switch ($rank) {
        case 'best':
          return `background: linear-gradient(90deg, #0284c7, #6366f1);`;
        case 'second':
          return `background: #d97706;`;
        case 'third':
          return `background: #94a3b8;`;
        default:
          return '';
      }
    }}
  }
`;

const ModelName = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const ModelOpt = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  color: var(--dim);
  margin-bottom: 1rem;
`;

const baseOpts = {
  plugins: { legend: { display: false as const } },
  scales: {
    x: {
      grid: { color: 'rgba(148,163,184,.2)' },
      ticks: {
        color: ConstColor.muted,
        font: { family: "'Space Mono'", size: 10 },
      },
    },
    y: {
      grid: { color: 'rgba(148,163,184,.2)' },
      ticks: {
        color: ConstColor.muted,
        font: { family: "'Space Mono'", size: 10 },
      },
    },
  },
  maintainAspectRatio: false,
};

// ─────────────────────────────────────────────
// Python code strings
// ─────────────────────────────────────────────
const splitCode = `X = card_data.drop(['ID', 'Is_Default'], axis=1)
y = card_data['Is_Default']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)
# X_train: (21000, 23)   X_test: (9000, 23)`;

const imbalanceCode = `imbalance_chart = alt.Chart(card_data).mark_bar().encode(
  x=alt.X('Is_Default:N', title='Default'),
  y=alt.Y('count()', title='Total Count')
).properties(
  title='Default Credit Card Clients - target value - data unbalance (Default = 0, Not Default = 1)',
  width = 300,
  height = 200
)`;

const defaultBySCode = `married_map = {1: 'Married', 2: 'Single', 3: 'Others'}
gender_map = {1: 'Male', 2: 'Female'}
edu_map = {1: 'Graduate', 2: 'University', 3: 'High School', 4: 'Others'}
plot_data = card_data.copy()
plot_data['Gender'] = plot_data['Gender'].map(gender_map)
plot_data['Education_Level'] = plot_data['Education_Level'].map(edu_map)
plot_data['Marital_Status'] = plot_data['Marital_Status'].map(married_map)
default_rate_by_gender = alt.Chart(plot_data).mark_bar().encode(
  x=alt.X('Gender:N', title='Gender'),
  y=alt.Y('mean(Is_Default):Q', title='Default Rate'),
  color='Gender:N'
).properties(
  title='Default Rate by Gender',
  width=150,
  height=300
)
default_rate_by_education = alt.Chart(plot_data).mark_bar().encode(
  x=alt.X('Education_Level:N', title='Education Level'),
  y=alt.Y('mean(Is_Default):Q', title='Default Rate'),
  color='Education_Level:N'
).transform_filter(
  alt.FieldOneOfPredicate(field='Education_Level', oneOf=['Graduate', 'University', 'High School', 'Others'])
).properties(
  title='Default Rate by Education Level',
  width=150,
  height=300
)
default_rate_by_marital = alt.Chart(plot_data).mark_bar().encode(
  x=alt.X('Marital_Status:N', title='Marital Status'),
  y=alt.Y('mean(Is_Default):Q', title='Default Rate'),
  color='Marital_Status:N'
).transform_filter(
  alt.FieldOneOfPredicate(field='Marital_Status', oneOf=['Married', 'Single', 'Others'])
).properties(
  title='Default Rate by Marital Status',
  width=150,
  height=300
)
default_rate_by_gender | default_rate_by_education | default_rate_by_marital`;

const heatMapCode = `heatmap = alt.Chart(corr_df).mark_rect().encode(
  x=alt.X('Variable 1:N', title=''),
  y=alt.Y('Variable 2:N', title=''),
  color=alt.Color('Correlation:Q',
  scale=alt.Scale(scheme='redblue', domain=[-1, 1], reverse=True),
  title='Correlation'),
  tooltip=[
  alt.Tooltip('Variable 1:N'),
  alt.Tooltip('Variable 2:N'),
  alt.Tooltip('Correlation:Q', format='.3f')
  ]
).`;

const preprocessorCode = `preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ],
    verbose_feature_names_out=False
)`;

const baselineCode = `baselines = {
  'Most Frequent (Always No Default)': DummyClassifier(strategy='most_frequent'),
  'Stratified (Random Guessing)': DummyClassifier(strategy='stratified')
}
for name, model in baselines.items():
  pipeline = Pipeline([
  ('preprocessor', preprocessor),
  ('classifier', model)
  ])
  pipeline.fit(X_train, y_train)
  y_pred = pipeline.predict(X_test)`;

const logRegCode = `log_reg_pipeline = Pipeline([
  ('preprocessor', preprocessor),
  ('classifier', LogisticRegression(max_iter=1000, random_state=42))
])
param_grid = {
  'classifier__C': [0.001, 0.01, 0.1, 1, 10, 100],
  'classifier__penalty': ['l1', 'l2'],
  'classifier__solver': ['liblinear']
}
cv = StratifiedKFold(
  n_splits=5,
  shuffle=True,
  random_state=42
)
grid_search = GridSearchCV(
  log_reg_pipeline,
  param_grid,
  cv=cv,
  scoring='f1',
  n_jobs=-1,
  verbose=1
)
grid_search.fit(X_train, y_train)
grid_search.best_params_`;

const differentTrainingCode = `models = {
  'Decision Tree': DecisionTreeClassifier(random_state=42, max_depth=10),
  'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1),
  'XGBoost': XGBClassifier(random_state=42, eval_metric='logloss', n_jobs=-1)
}
  
results = []
for name, model in models.items():
  print(f"\nTraining: {name}")
  print("-" * 60)
  pipeline = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", model)
  ])
  cv_scores = cross_val_score(
    pipeline,
    X_train,
    y_train,
    cv=cv,
    scoring="f1",
    n_jobs=-1
  )
  start_time = time.time()
  pipeline.fit(X_train, y_train)
  fit_time = time.time() - start_time
  start_time = time.time()
  y_train_pred = pipeline.predict(X_train)
  y_test_pred = pipeline.predict(X_test)
  pred_time = time.time() - start_time
  train_f1 = f1_score(y_train, y_train_pred)
  test_f1 = f1_score(y_test, y_test_pred)
  train_roc = roc_auc_score(
    y_train, pipeline.predict_proba(X_train)[:, 1]
  )
  test_roc = roc_auc_score(
    y_test, pipeline.predict_proba(X_test)[:, 1]
  )
  results.append({
    "Model": name,
    "CV F1 Mean": cv_scores.mean(),
    "CV F1 Std": cv_scores.std(),
    "Train F1": train_f1,
    "Test F1": test_f1,
    "Train ROC-AUC": train_roc,
    "Test ROC-AUC": test_roc,
    "Train-Test Gap": train_f1 - test_f1,
    "Fit Time (s)": fit_time,
    "Predict Time (s)": pred_time
  })`;

const bayesCode = `from sklearn.model_selection import GridSearchCV
import time
print("1. GridSearchCV - Random Forest")
rf_pipeline = Pipeline([
  ('preprocessor', preprocessor),
  ('classifier', models['Random Forest'])
])
param_grid_rf = {
  'classifier__n_estimators': [100, 200],
  'classifier__max_depth': [10, 20, None],
  'classifier__min_samples_split': [2, 10],
  'classifier__max_features': ['sqrt']
}
start_time = time.time()
grid_search_rf = GridSearchCV(
  rf_pipeline,
  param_grid_rf,
  cv=cv,
  scoring='f1',
  n_jobs=-1,
  verbose=0
)
grid_search_rf.fit(X_train, y_train)
grid_time = time.time() - start_time

print("2. RandomizedSearchCV - XGBoost")
xgb_pipeline = Pipeline([
  ('preprocessor', preprocessor),
  ('classifier', models['XGBoost'])
])
param_dist_xgb = {
  'classifier__n_estimators': randint(100, 300),
  'classifier__max_depth': randint(3, 8),
  'classifier__learning_rate': uniform(0.01, 0.2),
  'classifier__subsample': uniform(0.7, 0.3),
  'classifier__colsample_bytree': uniform(0.7, 0.3),
  'classifier__min_child_weight': randint(1, 5)
}
start_time = time.time()
random_search_xgb = RandomizedSearchCV(
  xgb_pipeline,
  param_distributions=param_dist_xgb,
  n_iter=30,
  cv=cv,
  scoring='f1',
  n_jobs=-1,
  verbose=0,
  random_state=42
)
random_search_xgb.fit(X_train, y_train)
random_time = time.time() - start_time

print("3. Bayesian Optimization - Decision Tree")
dt_pipeline = Pipeline([
  ('preprocessor', preprocessor),
  ('classifier', models['Decision Tree'])
])
search_spaces_dt = {
  'classifier__max_depth': Integer(3, 20),
  'classifier__min_samples_split': Integer(2, 50),
  'classifier__min_samples_leaf': Integer(1, 30),
  'classifier__max_features': Categorical(['sqrt', 'log2', None]),
  'classifier__criterion': Categorical(['gini', 'entropy']),
  'classifier__class_weight': Categorical([None, 'balanced'])
}
start_time = time.time()
  bayes_search_dt = BayesSearchCV(
  dt_pipeline,
  search_spaces_dt,
  n_iter=20,
  cv=cv,
  scoring='f1',
  n_jobs=-1,
  verbose=0,
  random_state=42
)
bayes_search_dt.fit(X_train, y_train)
bayes_time = time.time() - start_time
`;

function ScoreBar({
  label,
  value,
  max = 1,
  color = ConstColor.sky,
}: {
  label: string;
  value: number;
  max?: number;
  color?: string;
}) {
  return (
    <ScoreBarWrap>
      <ScoreBarLabel>
        <span>{label}</span>
        <span
          style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700 }}
        >
          {value.toFixed(4)}
        </span>
      </ScoreBarLabel>
      <ScoreBarTrack>
        <ScoreBarFill $pct={(value / max) * 100} $color={color} />
      </ScoreBarTrack>
    </ScoreBarWrap>
  );
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function CreditDefault() {
  return (
    <>
      <GlobalStyle />
      <Page>
        {/* ── HEADER ── */}
        <SiteHeader>
          <Logotype>
            Credit Default
            <br />
            Prediction
          </Logotype>
          <Subtitle>
            End-to-end ML pipeline predicting credit card default risk — from
            EDA and preprocessing to model comparison, and Bayesian
            hyperparameter tuning.
          </Subtitle>
        </SiteHeader>
        {/* ── OVERVIEW ── */}
        <Card>
          <CardLabel>Overview</CardLabel>
          <Prose>
            This project applies the full ML pipeline — EDA, preprocessing,
            feature engineering, model training, hyperparameter tuning, and
            interpretability — to predict credit card default risk. The dataset
            contains 30,000 Taiwanese credit card clients from 2005, with
            repayment history, billing amounts, and demographic features.
          </Prose>
          <Prose>
            The primary metric is{' '}
            <strong style={{ color: 'var(--text)' }}>F1-score</strong>, chosen
            to balance precision and recall under class imbalance (~22% default
            rate). ROC-AUC is used as a secondary ranking metric. Accuracy was
            avoided as it would be misleadingly high even if the model always
            predicted "no default."
          </Prose>
        </Card>
        {/* ── DATASET ── */}
        <Section num="01" title="Dataset Overview" />
        <Card>
          <CardLabel>
            Source · Default of Credit Card Clients (UCI / Kaggle)
          </CardLabel>
          <DatasetLink>
            <a
              href="https://www.kaggle.com/datasets/uciml/default-of-credit-card-clients-dataset"
              target="_blank"
              rel="noreferrer"
            >
              https://www.kaggle.com/datasets/uciml/default-of-credit-card-clients-dataset
            </a>
          </DatasetLink>
          <Prose style={{ marginBottom: '1rem' }}>
            Taiwanese credit card data from April–September 2005. No missing
            values across all 30,000 rows. Average credit limit ≈ 167,484 NTD.
            Column names were renamed for clarity.
          </Prose>
          <MetaChips>
            <Chip $variant="sky">
              Demographics · Gender, Age, Education, Marital Status, Credit
              Limit
            </Chip>
            <Chip $variant="indigo">
              Repayment Status · PAY_0→PAY_6 (Apr–Sep 2005)
            </Chip>
            <Chip $variant="amber">
              Financial Amounts · BILL_AMT1–6, PAY_AMT1–6
            </Chip>
          </MetaChips>
        </Card>
        {/* Feature groups */}
        <ThreeColGrid style={{ marginTop: '1rem' }}>
          <Card style={{ padding: '1.25rem' }}>
            <CardLabel>Demographics</CardLabel>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                marginTop: '0.5rem',
              }}
            >
              {[
                ['Gender', '1=Male, 2=Female'],
                ['Education', '1=Grad, 2=Univ, 3=HS, 4+=Other'],
                ['Marital Status', '0=Unknown, 1=Married, 2=Single, 3=Other'],
                ['Age', '21–79 years'],
                ['Credit Limit', '10K–1M NTD'],
              ].map(([k, v]) => (
                <div key={k} style={{ fontSize: '0.78rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text)' }}>
                    {k}
                  </span>
                  <span style={{ color: 'var(--muted)', marginLeft: 6 }}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: '1.25rem' }}>
            <CardLabel>Repayment Status (PAY)</CardLabel>
            <Prose style={{ fontSize: '0.8rem' }}>
              Monthly delay codes from April to September 2005.
            </Prose>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
                marginTop: '0.75rem',
              }}
            >
              {[
                ['-2', 'No consumption'],
                ['-1', 'Paid duly'],
                ['0', 'Revolving credit used'],
                ['1–9', 'Months of payment delay'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                  }}
                >
                  <InlineCode>{k}</InlineCode>
                  <span style={{ color: 'var(--muted)' }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: '1.25rem' }}>
            <CardLabel>Financial Amounts</CardLabel>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
                marginTop: '0.5rem',
              }}
            >
              {[
                ['BILL_AMT1–6', 'Monthly bill statement (Sep→Apr)'],
                ['PAY_AMT1–6', 'Actual payment amount (Sep→Apr)'],
              ].map(([k, v]) => (
                <div key={k} style={{ fontSize: '0.78rem' }}>
                  <div
                    style={{
                      fontWeight: 700,
                      color: 'var(--text)',
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.7rem',
                    }}
                  >
                    {k}
                  </div>
                  <div style={{ color: 'var(--muted)', marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
            <Callout
              $tone="info"
              style={{ marginTop: '0.75rem', padding: '0.6rem 0.9rem' }}
            >
              <span style={{ fontSize: '0.78rem' }}>
                Min bill: -339,603 (refund credit). Mean paid: ~5,663 NTD/month.
              </span>
            </Callout>
          </Card>
        </ThreeColGrid>
        {/* ── TOOLS ── */}
        <Section num="02" title="Tools & Stack" />
        <Card>
          <CardLabel>Tech Stack</CardLabel>
          <ToolsRow>
            {[
              'Python',
              'scikit-learn',
              'XGBoost',
              'scikit-optimize',
              'pandas',
              'NumPy',
              'scipy',
            ].map((t) => (
              <ToolBadge key={t}>{t}</ToolBadge>
            ))}
          </ToolsRow>
        </Card>
        {/* ── DATA SPLITTING ── */}
        <Section num="03" title="Data Splitting" />
        <Card>
          <CodeBlock lang="Python" code={splitCode} />
          <Callout $tone="info">
            <CalloutTitle>Stratified Split</CalloutTitle>
            <InlineCode>stratify=y</InlineCode> ensures both train and test sets
            preserve the original 22% default ratio, preventing leakage of class
            distribution imbalance.
          </Callout>
        </Card>
        {/* ── EDA ── */}
        <Section num="04" title="Exploratory Data Analysis" />
        <Card>
          <CardLabel>Default Rate by Demographics</CardLabel>
          <Prose style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
            The charts show that default rates are highest among males,
            individuals with a high school education, and those in the "others"
            marital status category.
          </Prose>
          <ChartWrap>
            <CodeBlock lang="python" code={defaultBySCode} />
            <img src={defaultByS} />
          </ChartWrap>
        </Card>
        <TwoColGrid style={{ marginTop: '1rem' }}>
          <ChartCard>
            <Prose style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
              Multicollinearity: Strong correlations between consecutive months'
              variables (Bill_Amt and Pay_Status) suggest potential
              multicollinearity issues.
            </Prose>
            <CodeBlock lang="python" code={heatMapCode} />
            <ChartWrap>
              <img src={multicol} />
            </ChartWrap>
          </ChartCard>
          <ChartCard>
            <Prose style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
              ~78% non-default vs 22% default. Moderate imbalance — not extreme
              enough for aggressive resampling, but F1 is preferred over
              accuracy.
            </Prose>
            <CodeBlock lang="python" code={imbalanceCode} />
            <ChartWrap>
              <img src={imbalance} />
            </ChartWrap>
          </ChartCard>
        </TwoColGrid>
        {/* ── PREPROCESSING ── */}
        <Section num="05" title="Preprocessing & Transformations" />
        <Card>
          <Prose style={{ marginBottom: '1rem', fontSize: '0.88rem' }}>
            Features were split into two groups. Numeric features (20 cols) →{' '}
            <InlineCode>StandardScaler</InlineCode>. Categorical features (3
            cols) →{' '}
            <InlineCode>OneHotEncoder(handle_unknown='ignore')</InlineCode>.
          </Prose>
          <TwoColGrid>
            <div>
              <SubItem style={{ marginTop: 0 }}>
                <SubNum>Numeric (×20)</SubNum>
                <SubTitle>StandardScaler</SubTitle>
              </SubItem>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[
                  'Credit_Limit',
                  'Age',
                  'Pay_Status_Sep→Apr',
                  'Bill_Amt_Sep→Apr',
                  'Paid_Amt_Sep→Apr',
                ].map((f) => (
                  <span
                    key={f}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.65rem',
                      padding: '2px 8px',
                      borderRadius: 4,
                      background: 'rgba(2,132,199,0.08)',
                      border: '1px solid rgba(2,132,199,0.2)',
                      color: 'var(--sky)',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SubItem style={{ marginTop: 0 }}>
                <SubNum>Categorical (×3)</SubNum>
                <SubTitle>OneHotEncoder</SubTitle>
              </SubItem>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['Gender', 'Marital_Status', 'Education_Level'].map((f) => (
                  <span
                    key={f}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.65rem',
                      padding: '2px 8px',
                      borderRadius: 4,
                      background: 'rgba(99,102,241,0.08)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      color: 'var(--indigo)',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Prose style={{ fontSize: '0.8rem', marginTop: '0.75rem' }}>
                OHE expands 3 cols → 10 cols, resulting in 33 total features
                post-transform.
              </Prose>
            </div>
          </TwoColGrid>
          <CodeBlock lang="Python" code={preprocessorCode} />
        </Card>
        {/* ── BASELINE ── */}
        <Section num="06" title="Baseline Models & Logistic Regresion " />
        <TwoColGrid>
          <Card>
            <CardLabel>DummyClassifier Results</CardLabel>
            <CodeBlock lang="python" code={baselineCode} />
            <TableWrap>
              <Table>
                <thead>
                  <tr>
                    <Th>Strategy</Th>
                    <Th>F1-Score</Th>
                    <Th>ROC-AUC</Th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <Td>most_frequent</Td>
                    <TdHigh $tone="bad">0.0000</TdHigh>
                    <Td>0.5000</Td>
                  </tr>
                  <tr>
                    <Td>stratified</Td>
                    <Td>0.2126</Td>
                    <Td>0.4953</Td>
                  </tr>
                </tbody>
              </Table>
            </TableWrap>
          </Card>
          <Card>
            <CardLabel>Logistic Regression (Linear Model)</CardLabel>
            <CodeBlock lang="Python" code={logRegCode} />
            <div style={{ marginTop: '0.5rem' }}>
              <ScoreBar
                label="CV F1-Score (mean)"
                value={0.3703}
                max={0.6}
                color={ConstColor.sky}
              />
              <ScoreBar
                label="Test F1-Score"
                value={0.3574}
                max={0.6}
                color={ConstColor.indigo}
              />
              <ScoreBar
                label="Test ROC-AUC"
                value={0.6053}
                max={1.0}
                color={ConstColor.amber}
              />
            </div>
            <Prose style={{ fontSize: '0.8rem', marginTop: '0.75rem' }}>
              Significant improvement over baseline. 95% CI: [0.3478, 0.3928]
              with low std (0.0115) indicates stable generalization, but
              linearity limits performance.
            </Prose>
          </Card>
        </TwoColGrid>
        {/* ── MODELS ── */}
        <Section num="07" title="Model Training & Comparison" />
        <Card style={{ marginBottom: '1rem' }}>
          <CardLabel>Pre-tuning Results · 3 Tree-Based Models</CardLabel>
          <CodeBlock lang="python" code={differentTrainingCode} />
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            All three significantly outperform Logistic Regression (F1≈0.37).
            Decision Tree shows the best generalization (smallest gap), while
            Random Forest exhibits severe overfitting despite the highest raw
            test score.
          </Prose>
          <ChartWrapDiv style={{ height: 240 }}>
            <Bar
              data={{
                labels: ['Decision Tree', 'Random Forest', 'XGBoost'],
                datasets: [
                  {
                    label: 'Train F1',
                    data: [0.5948, 0.9988, 0.716],
                    backgroundColor: 'rgba(148,163,184,.35)',
                    borderRadius: 4,
                  },
                  {
                    label: 'Test F1',
                    data: [0.456, 0.4622, 0.4536],
                    backgroundColor: [
                      ConstColor.sky,
                      ConstColor.amber,
                      ConstColor.indigo,
                    ],
                    borderRadius: 4,
                  },
                ],
              }}
              options={{
                ...baseOpts,
                plugins: {
                  legend: {
                    display: true,
                    labels: {
                      color: ConstColor.muted,
                      font: { family: "'Space Mono'", size: 10 },
                    },
                  },
                },
              }}
            />
          </ChartWrapDiv>
        </Card>
        <ModelGrid>
          <ModelCard $rank="second">
            <ModelName>Random Forest</ModelName>
            <ModelOpt>Default · n_estimators=100</ModelOpt>
            <MetricRow>
              <MetricKey>CV F1 (5-fold)</MetricKey>
              <MetricVal>0.4763 ±0.0165</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train F1</MetricKey>
              <MetricVal $tone="bad">0.9988</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test F1</MetricKey>
              <MetricVal>0.4622</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test ROC-AUC</MetricKey>
              <MetricVal>0.7571</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train-Test Gap</MetricKey>
              <MetricVal $tone="bad">+0.537</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Fit Time</MetricKey>
              <MetricVal>0.80s</MetricVal>
            </MetricRow>
          </ModelCard>
          <ModelCard $rank="third">
            <ModelName>XGBoost</ModelName>
            <ModelOpt>Default · eval_metric='logloss'</ModelOpt>
            <MetricRow>
              <MetricKey>CV F1 (5-fold)</MetricKey>
              <MetricVal>0.4638 ±0.0188</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train F1</MetricKey>
              <MetricVal $tone="warn">0.7160</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test F1</MetricKey>
              <MetricVal>0.4536</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test ROC-AUC</MetricKey>
              <MetricVal>0.7545</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train-Test Gap</MetricKey>
              <MetricVal $tone="warn">+0.262</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Fit Time</MetricKey>
              <MetricVal>0.19s</MetricVal>
            </MetricRow>
          </ModelCard>
          <ModelCard $rank="best">
            <ModelName>Decision Tree</ModelName>
            <ModelOpt>max_depth=10 · Best generalization</ModelOpt>
            <MetricRow>
              <MetricKey>CV F1 (5-fold)</MetricKey>
              <MetricVal>0.4567 ±0.0210</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train F1</MetricKey>
              <MetricVal $tone="good">0.5948</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test F1</MetricKey>
              <MetricVal>0.4560</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test ROC-AUC</MetricKey>
              <MetricVal>0.7183</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train-Test Gap</MetricKey>
              <MetricVal $tone="good">+0.139</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Fit Time</MetricKey>
              <MetricVal>0.21s</MetricVal>
            </MetricRow>
          </ModelCard>
        </ModelGrid>
        {/* ── HYPERPARAMETER OPT ── */}
        <Section num="08" title="Hyperparameter Optimization" />
        <Card style={{ marginTop: '1rem' }}>
          <CardLabel>
            Bayesian Optimization — Decision Tree · Best Result
          </CardLabel>
          <CodeBlock lang="Python" code={bayesCode} />
        </Card>
        <TwoColGrid>
          <Card>
            <CardLabel>Before vs After Tuning · F1-Score</CardLabel>
            <ChartWrapDiv style={{ height: 220 }}>
              <Bar
                data={{
                  labels: [
                    'Decision Tree\n(BayesOpt)',
                    'Random Forest\n(GridSearch)',
                    'XGBoost\n(RandomSearch)',
                  ],
                  datasets: [
                    {
                      label: 'Before',
                      data: [0.456, 0.462, 0.454],
                      backgroundColor: 'rgba(148,163,184,.4)',
                      borderRadius: 4,
                    },
                    {
                      label: 'After',
                      data: [0.522, 0.461, 0.46],
                      backgroundColor: [
                        ConstColor.sky,
                        ConstColor.amber,
                        ConstColor.indigo,
                      ],
                      borderRadius: 4,
                    },
                  ],
                }}
                options={{
                  ...baseOpts,
                  plugins: {
                    legend: {
                      display: true,
                      labels: {
                        color: ConstColor.muted,
                        font: { family: "'Space Mono'", size: 10 },
                      },
                    },
                  },
                  scales: {
                    ...baseOpts.scales,
                    y: { ...baseOpts.scales.y, min: 0.4, max: 0.55 },
                  },
                }}
              />
            </ChartWrapDiv>
          </Card>
          <Card style={{ padding: '1.5rem' }}>
            <CardLabel>Optimization Method Comparison</CardLabel>
            <TableWrap style={{ margin: 0 }}>
              <Table>
                <thead>
                  <tr>
                    <Th>Method</Th>
                    <Th>Model</Th>
                    <Th>ΔF1</Th>
                    <Th>Time</Th>
                    <Th>Iter</Th>
                  </tr>
                </thead>
                <tbody>
                  <TrHighlight>
                    <Td>BayesOpt</Td>
                    <Td>Decision Tree</Td>
                    <TdHigh $tone="good">+0.066</TdHigh>
                    <Td>7.84s</Td>
                    <Td>20</Td>
                  </TrHighlight>
                  <tr>
                    <Td>RandomSearch</Td>
                    <Td>XGBoost</Td>
                    <TdHigh $tone="warn">+0.007</TdHigh>
                    <Td>9.44s</Td>
                    <Td>30</Td>
                  </tr>
                  <tr>
                    <Td>GridSearch</Td>
                    <Td>Random Forest</Td>
                    <TdHigh $tone="bad">-0.002</TdHigh>
                    <Td>37.8s</Td>
                    <Td>12</Td>
                  </tr>
                </tbody>
              </Table>
            </TableWrap>
          </Card>
        </TwoColGrid>
        {/* Tuned model cards */}
        <ModelGrid>
          <ModelCard $rank="best">
            <BestBadge>★ Best F1</BestBadge>
            <ModelName>Decision Tree (Tuned)</ModelName>
            <ModelOpt>BayesianOpt · 20 iterations · 7.84s</ModelOpt>
            <MetricRow>
              <MetricKey>CV F1 (5-fold)</MetricKey>
              <MetricVal $tone="good">0.5295</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test F1</MetricKey>
              <MetricVal $tone="good">0.5223</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test ROC-AUC</MetricKey>
              <MetricVal>0.7554</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train-Test Gap</MetricKey>
              <MetricVal $tone="good">+0.007</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Best params</MetricKey>
              <MetricVal style={{ fontSize: '0.6rem' }}>
                depth=5, balanced, gini
              </MetricVal>
            </MetricRow>
          </ModelCard>
          <ModelCard $rank="second">
            <ModelName>Random Forest (Tuned)</ModelName>
            <ModelOpt>GridSearchCV · 12 combos · 37.8s</ModelOpt>
            <MetricRow>
              <MetricKey>CV F1 (5-fold)</MetricKey>
              <MetricVal>0.4806</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test F1</MetricKey>
              <MetricVal>0.4606</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test ROC-AUC</MetricKey>
              <MetricVal>0.7682</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train-Test Gap</MetricKey>
              <MetricVal $tone="bad">+0.537</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Note</MetricKey>
              <MetricVal $tone="warn" style={{ fontSize: '0.62rem' }}>
                Severe overfit
              </MetricVal>
            </MetricRow>
          </ModelCard>
          <ModelCard $rank="third">
            <BestBadge>★ Best ROC-AUC</BestBadge>
            <ModelName>XGBoost (Tuned)</ModelName>
            <ModelOpt>RandomizedSearchCV · 30 iters · 9.44s</ModelOpt>
            <MetricRow>
              <MetricKey>CV F1 (5-fold)</MetricKey>
              <MetricVal>0.4844</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test F1</MetricKey>
              <MetricVal>0.4601</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Test ROC-AUC</MetricKey>
              <MetricVal $tone="good">0.7750</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Train-Test Gap</MetricKey>
              <MetricVal $tone="warn">+0.262</MetricVal>
            </MetricRow>
            <MetricRow>
              <MetricKey>Note</MetricKey>
              <MetricVal style={{ fontSize: '0.62rem' }}>
                Fast · good generalization
              </MetricVal>
            </MetricRow>
          </ModelCard>
        </ModelGrid>
        {/* ── FEATURE IMPORTANCE ── */}
        <Section num="09" title="Feature Importance (Permutation)" />
        <TwoColGrid>
          <ChartCard>
            <CardLabel>Permutation Importance · XGBoost (Tuned)</CardLabel>
            <Prose style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text)' }}>Pay_Status_Sep</strong>{' '}
              dominates at 0.2093 — 10× higher than any other feature. Recency
              is king.
            </Prose>
            <ChartWrapDiv style={{ height: 280 }}>
              <Bar
                data={{
                  labels: [
                    'Pay_Status_Sep',
                    'Bill_Amt_Sep',
                    'Pay_Status_Jul',
                    'Pay_Status_Apr',
                    'Paid_Amt_Sep',
                    'Pay_Status_Aug',
                    'Pay_Status_May',
                    'Pay_Status_Jun',
                    'Credit_Limit',
                    'Age',
                  ],
                  datasets: [
                    {
                      data: [
                        0.2093, 0.0196, 0.0178, 0.0106, 0.0104, 0.0098, 0.0087,
                        0.0079, 0.0064, -0.0006,
                      ],
                      backgroundColor: [
                        0.2093, 0.0196, 0.0178, 0.0106, 0.0104, 0.0098, 0.0087,
                        0.0079, 0.0064, -0.0006,
                      ].map((v) => (v >= 0 ? ConstColor.sky : ConstColor.rose)),
                      borderRadius: 3,
                    },
                  ],
                }}
                options={{ ...baseOpts, indexAxis: 'y' as const }}
              />
            </ChartWrapDiv>
          </ChartCard>
          <Card style={{ padding: '1.5rem' }}>
            <CardLabel>Key Observations</CardLabel>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
                marginTop: '0.5rem',
              }}
            >
              {[
                {
                  icon: '📅',
                  title: 'Recency dominates',
                  body: 'September features collectively explain most variance. Pay_Status_Sep alone is 10× more important than the next feature — the most recent repayment is the single strongest signal.',
                },
                {
                  icon: '👤',
                  title: 'Demographics ≈ noise',
                  body: 'Age (-0.0006) and Gender (-0.0003) show near-zero or slightly negative permutation importance. These are consistent with the weak linear correlations seen in EDA.',
                },
                {
                  icon: '💳',
                  title: 'Credit limit is weak',
                  body: 'Ranks 9th (0.0064) despite having r=-0.15 linear correlation — non-linear models capture its effect through interactions with other features.',
                },
                {
                  icon: '⚠️',
                  title: 'Over-reliance risk',
                  body: 'Heavy dependence on Pay_Status_Sep explains the false positives: clients with identical Sep patterns but different trajectories get misclassified (see SHAP below).',
                },
              ].map(({ icon, title, body }) => (
                <div key={title}>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      marginBottom: '0.25rem',
                      color: 'var(--text)',
                    }}
                  >
                    {icon} {title}
                  </div>
                  <p
                    style={{
                      fontSize: '0.79rem',
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </TwoColGrid>
        {/* ── VALIDATION vs TEST ── */}
        <Section num="10" title="Test Set Results & Optimization Bias" />
        <TwoColGrid>
          <Card>
            <CardLabel>Validation vs Test — Optimization Bias Check</CardLabel>
            <div
              style={{
                marginTop: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              <ScoreBar
                label="Validation F1 (CV mean)"
                value={0.5295}
                max={0.65}
                color={ConstColor.sky}
              />
              <ScoreBar
                label="Test F1"
                value={0.5223}
                max={0.65}
                color={ConstColor.indigo}
              />
              <ScoreBar
                label="Gap (Val − Test)"
                value={0.0072}
                max={0.065}
                color={ConstColor.emerald}
              />
            </div>
            <Callout $tone="success" style={{ marginTop: '1rem' }}>
              <CalloutTitle>✅ No Optimization Bias</CalloutTitle>
              Gap of only +0.0072 — within 1 std dev (0.0086). Validation F1
              (0.5295) closely matches Test F1 (0.5223), confirming results are
              trustworthy and not over-optimized to validation folds.
            </Callout>
          </Card>
          <Card style={{ padding: '1.5rem' }}>
            <CardLabel>
              Final Model Scorecard · Decision Tree (BayesOpt)
            </CardLabel>
            <TableWrap style={{ margin: '0.75rem 0 0' }}>
              <Table>
                <thead>
                  <tr>
                    <Th>Metric</Th>
                    <Th>Value</Th>
                    <Th>Notes</Th>
                  </tr>
                </thead>
                <tbody>
                  <TrHighlight>
                    <Td>Test F1</Td>
                    <TdHigh $tone="good">0.5223</TdHigh>
                    <Td>Primary metric</Td>
                  </TrHighlight>
                  <tr>
                    <Td>Test ROC-AUC</Td>
                    <TdHigh $tone="sky">0.7554</TdHigh>
                    <Td>Secondary metric</Td>
                  </tr>
                  <tr>
                    <Td>CV F1 (5-fold)</Td>
                    <Td>0.5295 ±0.0086</Td>
                    <Td>Low variance</Td>
                  </tr>
                  <tr>
                    <Td>Val-Test Gap</Td>
                    <TdHigh $tone="good">+0.0072</TdHigh>
                    <Td>No overfit</Td>
                  </tr>
                  <tr>
                    <Td>Tune Time</Td>
                    <Td>7.84s</Td>
                    <Td>vs RF 37.8s</Td>
                  </tr>
                </tbody>
              </Table>
            </TableWrap>
          </Card>
        </TwoColGrid>
        {/* ── SUMMARY ── */}
        <Section num="11" title="Summary & Conclusions" />
        {/* Final comparison table */}
        <Card style={{ marginBottom: '1.5rem' }}>
          <CardLabel>Final Model Comparison Table</CardLabel>
          <TableWrap style={{ margin: '0.75rem 0 0' }}>
            <Table>
              <thead>
                <tr>
                  <Th>Model</Th>
                  <Th>Optimization</Th>
                  <Th>CV F1</Th>
                  <Th>Test F1</Th>
                  <Th>ROC-AUC</Th>
                  <Th>Time (s)</Th>
                  <Th>Gap</Th>
                  <Th>Remark</Th>
                </tr>
              </thead>
              <tbody>
                <TrHighlight>
                  <Td>Decision Tree</Td>
                  <Td>BayesOpt</Td>
                  <TdHigh $tone="good">0.5295</TdHigh>
                  <TdHigh $tone="good">0.5223</TdHigh>
                  <Td>0.7554</Td>
                  <TdHigh $tone="good">7.84</TdHigh>
                  <TdHigh $tone="good">+0.007</TdHigh>
                  <Td>★ Best F1</Td>
                </TrHighlight>
                <tr>
                  <Td>Random Forest</Td>
                  <Td>GridSearch</Td>
                  <Td>0.4806</Td>
                  <Td>0.4606</Td>
                  <Td>0.7682</Td>
                  <TdHigh $tone="bad">37.80</TdHigh>
                  <TdHigh $tone="bad">+0.537</TdHigh>
                  <Td>Severe overfit</Td>
                </tr>
                <tr>
                  <Td>XGBoost</Td>
                  <Td>RandomSearch</Td>
                  <Td>0.4844</Td>
                  <Td>0.4601</Td>
                  <TdHigh $tone="sky">0.7750</TdHigh>
                  <Td>9.44</Td>
                  <TdHigh $tone="warn">+0.262</TdHigh>
                  <Td>★ Best ROC-AUC</Td>
                </tr>
                <tr>
                  <Td>Logistic Reg.</Td>
                  <Td>GridSearch</Td>
                  <Td>0.3746</Td>
                  <Td>0.3703</Td>
                  <Td>0.6053</Td>
                  <Td>—</Td>
                  <TdHigh $tone="good">+0.004</TdHigh>
                  <Td>Linear baseline</Td>
                </tr>
                <tr>
                  <Td>DummyClassifier</Td>
                  <Td>—</Td>
                  <TdHigh $tone="bad">0.0000</TdHigh>
                  <TdHigh $tone="bad">0.0000</TdHigh>
                  <Td>0.5000</Td>
                  <Td>—</Td>
                  <Td>—</Td>
                  <Td>Lower bound</Td>
                </tr>
              </tbody>
            </Table>
          </TableWrap>
        </Card>
        <InsightsGrid>
          <InsightCard>
            <InsightIcon>🏆</InsightIcon>
            <InsightTitle>Best Model</InsightTitle>
            <InsightBody>
              Bayesian-optimized Decision Tree achieved Test F1 = 0.5223 with
              negligible CV-to-test gap (+0.007), demonstrating strong
              generalization despite being a single tree.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>⚖️</InsightIcon>
            <InsightTitle>Class Imbalance</InsightTitle>
            <InsightBody>
              Setting <InlineCode>class_weight='balanced'</InlineCode> during
              Bayesian search was the single most impactful change — more
              impactful than architecture or depth tuning.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🔍</InsightIcon>
            <InsightTitle>Feature Insight</InsightTitle>
            <InsightBody>
              Recency dominates. Pay_Status_Sep alone explains most variance.
              Demographic features (Gender, Age) contribute essentially nothing
              to predictive power.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🚀</InsightIcon>
            <InsightTitle>Further Ideas</InsightTitle>
            <InsightBody>
              SMOTE-NC for minority oversampling, decision threshold tuning
              (e.g., 0.35 instead of 0.5), and stacking ensemble with LR
              meta-learner could further improve recall.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>⚡</InsightIcon>
            <InsightTitle>Efficiency</InsightTitle>
            <InsightBody>
              BayesOpt explored 20 iterations in 7.84s vs GridSearchCV's 12
              combos in 37.8s — 5× faster with superior results. Smarter search
              clearly wins here.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>📊</InsightIcon>
            <InsightTitle>Optimization Bias</InsightTitle>
            <InsightBody>
              Minimal bias — validation F1 (0.5295) vs test F1 (0.5223) gap of
              only +0.007, within 1 std dev. Results are trustworthy.
            </InsightBody>
          </InsightCard>
        </InsightsGrid>
      </Page>
    </>
  );
}
