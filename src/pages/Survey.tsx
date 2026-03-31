import styled, { createGlobalStyle } from 'styled-components';
import { CodeBlock } from '@atlaskit/code';
import {
  surveyExploration,
  byGender,
  byCountry,
  byDegree,
  byAge,
  byMajor,
  bigdataPref,
  cloudPref,
  languagePref,
  mllibraryPref,
  mlservicePref,
  rdbPref,
  vizPref,
  kernelPref,
  whatData,
  whereData,
} from '../images/survey';

import {
  GlobalStyle,
  Page,
  SiteHeader,
  Logotype,
  Subtitle,
  Card,
  CardLabel,
  StatsRow,
  StatCard,
  StatVal,
  StatLabel,
  Section,
  SubItem,
  SubNum,
  SubTitle,
  Prose,
  ToolsRow,
  ToolBadge,
  ChartWrap,
  TwoColGrid,
  InsightsGrid,
  InsightCard,
  InsightIcon,
  InsightTitle,
  InsightBody,
} from '../components/CommonComponents';

const DatasetLink = styled.div`
  margin-bottom: 1.25rem;

  a {
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    color: var(--sky);
    word-break: break-all;
    text-decoration: none;
    border-bottom: 1px solid rgba(56, 189, 248, 0.3);
    transition: border-color 0.2s;

    &:hover {
      border-color: var(--sky);
    }
  }
`;

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
  $variant?: 'sky' | 'indigo' | 'emerald' | 'default';
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
        return `border: 1px solid rgba(56,189,248,0.4); color: #38bdf8;`;
      case 'indigo':
        return `border: 1px solid rgba(129,140,248,0.4); color: #818cf8;`;
      case 'emerald':
        return `border: 1px solid rgba(52,211,153,0.4); color: #34d399;`;
      default:
        return `border: 1px solid rgba(51,65,85,0.5); color: #94a3b8;`;
    }
  }}
`;

// ─────────────────────────────────────────────
// CodeBlock wrapper (override Atlaskit bg)
// ─────────────────────────────────────────────
const CodeWrap = styled.div`
  margin: 1rem 0;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--border);

  /* Atlaskit CodeBlock override */
  & > div,
  & pre {
    background: #f1f5f9 !important;
    font-family: 'Space Mono', monospace !important;
    font-size: 0.75rem !important;
  }
`;

// ─────────────────────────────────────────────
// R code strings (same as original)
// ─────────────────────────────────────────────
const exploration = `library(dplyr)
library(ggplot2)
library(tidyr)

MAIN_COLOR   <- "#4E79A7"
ACCENT_COLOR <- "#3399FF"

response <- read.csv('multipleChoiceResponses.csv', skip = 1)
head(response)`;

const genderCode = `response$Gender <- as.factor(response$Gender)

ggplot(response, aes(x = Gender)) +
    geom_bar(aes(y = (..count..)/sum(..count..)), fill = MAIN_COLOR) +
    coord_flip() +
    scale_y_continuous(labels = scales::percent) +
    theme_minimal() +
    labs(title = "Gender Distribution (%)", x = "Gender", y = "Percentage")`;

const countryCode = `top_10_country <- response |>
    group_by(Country) |>
    summarize(count = n()) |>
    arrange(desc(count)) |>
    slice_head(n = 11)

top_10_country <- top_10_country[-4, ]
top_10_country$Country[1] = "US"
top_10_country$Country[7] = "UK"

ggplot(top_10_country, aes(x = reorder(Country, -count), y = count)) +
    geom_col(fill = MAIN_COLOR) +
    labs(title = "Country distribution of Respondents", x = "Country", y = "Count")`;

const ageCode = `response$Age <- as.factor(response$Age)

ggplot(response, aes(x = Age)) +
    geom_bar(fill = MAIN_COLOR) +
    theme_minimal() +
    labs(title = "Age Group Distribution", x = "Age Group", y = "Count")`;

const degreeCode = `response$Degree <- as.factor(response$Degree)
levels(response$Degree)[levels(response$Degree) == "Some college/university study without earning a bachelor's degree"] <- "College/Univ without a degree"

degree_perc <- response |>
    count(Degree) |>
    mutate(perc = n / sum(n) * 100) |>
    arrange(desc(n))

ggplot(degree_perc, aes(x = reorder(Degree, perc), y = perc)) +
    geom_col(fill = MAIN_COLOR) +
    geom_text(aes(label = paste0(round(perc, 1), "%")), hjust = -0.1, size = 3.5) +
    coord_flip() +
    theme_minimal() +
    labs(title = "Degree Distribution (%)", x = "Degree", y = "Percentage")`;

const majorCode = `major_count <- response |>
    count(Major) |>
    mutate(perc = n / sum(n) * 100) |>
    arrange(desc(perc)) |>
    slice_head(n = 5)

ggplot(major_count, aes(x = "", y = perc, fill = Major)) +
    geom_col(width = 1, color = "white") +
    coord_polar(theta = "y") +
    geom_text(aes(label = paste0(round(perc, 1), "%")),
              position = position_stack(vjust = 0.5), color = "white", size = 3) +
    theme_void() +
    labs(title = "Major Distribution (%)")`;

const longerAndGraph = `longer_data <- function(df, name) {
    df |> pivot_longer(
        cols = everything(),
        names_to = name,
        values_to = "Selected"
    ) |>
    filter(Selected != "")
}

percentage_bargraph <- function(df, col, title, xlab) {
    graph <- df |>
        count({{ col }}) |>
        mutate(perc = round(n / sum(n) * 100, 1)) |>
        arrange(desc(perc)) |>
        ggplot(aes(x = reorder({{ col }}, perc), y = perc)) +
        geom_col(fill = ACCENT_COLOR) +
        geom_text(aes(label = paste0(perc, "%")), hjust = 0.2, size = 3.5) +
        coord_flip() +
        theme_minimal() +
        labs(title = title, x = xlab, y = "Percentage")
    return(graph)
}`;

const kernelCode = `response_kernel <- response[, 46:56]
colnames(response_kernel) <- c("Kaggle kernels", "Google Colab", "Azure Notebook",
    "Domino Datalab", "GCP Datalab", "Paperspace", "Floydhub", "Crestle",
    "JupyterHub Binder", "None", "Other")

kernel_long <- longer_data(response_kernel, "Kernel")
kernel_long <- kernel_long |> filter(Selected != "None")

percentage_bargraph(kernel_long, Selected, "Kernel Preference (%)", "Kernel Type")`;

const cloudCode = `response_cloud <- response[, 58:64]
colnames(response_cloud) <- c("GCP", "AWS", "Azure", "IBM Cloud", "Alibaba Cloud", "None", "Other")

cloud_long <- longer_data(response_cloud, "Cloud")
percentage_bargraph(cloud_long, Selected, "Cloud Preference (%)", "Cloud Type")`;

const languageCode = `response_language <- response[, 66:83]
colnames(response_language) <- c("Python", "R", "SQL", "Bash", "Java", "Javascript",
    "VBA", "C", "Matlab", "Scala", "Julia", "Go", ".NET", "PHP", "Ruby", "STATA", "None", "Other")

language_long <- longer_data(response_language, "Language")
percentage_bargraph(language_long, Selected, "Language Preference (%)", "Language")`;

const mllibraryCode = `response_ml_framework <- response[, 89:107]
colnames(response_ml_framework) <- c("Scikit Learn", "TensorFlow", "Keras", "Pytorch",
    "Spark MLlib", "H20", "Fastai", "Mxnet", "Caret", "Xgboost", "mlr", "Prophet",
    "randomForest", "lightgbm", "catboost", "CNTK", "Caffe", "None")

ml_framework_long <- longer_data(response_ml_framework, "ML Framework")
percentage_bargraph(ml_framework_long, Selected, "ML Library Preference (%)", "Library")`;

const vizCode = `response_visualize <- response[, 111:122]
colnames(response_visualize) <- c("ggplot2", "Matplotlib", "Altair", "Shiny", "D3",
    "Plotly", "Bokeh", "Seaborn", "Geoplotlib", "Lattice", "None", "Other")

visualize_long <- longer_data(response_visualize, "Viz tool")
percentage_bargraph(visualize_long, Selected, "Viz Tool Preference (%)", "Viz tool")`;

const mlserviceCode = `response_ml_service <- response[, 152:192]
# AWS, GCP, Azure, IBM ML services (41 columns)

ml_service_long <- longer_data(response_ml_service, "ML Service")
percentage_bargraph(ml_service_long, Selected, "ML Service Preference (%)", "ML Service")`;

const rdbCode = `response_RDB <- response[, 196:221]
colnames(response_RDB) <- c("AWS RDB", "AWS Aurora", "GCP SQL", "GCP Spanner",
    "AWS DynamoDB", "GCP Datastore", "GCP Bigtable", "AWS SimpleDB", "MS SQL Server",
    "MySQL", "PostgreSQL", "SQLite", "Oracle", ...)

RDB_long <- longer_data(response_RDB, "RDB")
percentage_bargraph(RDB_long, Selected, "RDB Preference (%)", "RDB")`;

const bigdataCode = `response_bigdata <- response[, 225:247]
colnames(response_bigdata) <- c("AWS MapReduce", "AWS Batch", "GCP Dataproc",
    "GCP Dataflow", "AWS Redshift", "GCP BigQuery", "Snowflake", "Databricks",
    "Azure SQL Data Warehouse", ...)

bigdata_long <- longer_data(response_bigdata, "big data")
percentage_bargraph(bigdata_long, Selected, "Big data tool Preference (%)", "Big data tool")`;

const whatDataCode = `response_what_data <- response[, 251:262]
colnames(response_what_data) <- c("Audio", "Categorical", "Genetic", "Geospatial",
    "Image", "Numerical", "Sensor", "Tabular", "Text", "Time series", "Video", "Other")

what_data_long <- longer_data(response_what_data, "Data Type")
percentage_bargraph(what_data_long, Selected, "What data do you interact with (%)", "Data Type")`;

const whereDataCode = `response_where_data <- response[, 266:276]
colnames(response_where_data) <- c("Government websites", "Univ research websites",
    "Non profit Research websites", "Kaggle", "Scraping",
    "Public data from private companies", "Google Search", "Google Dataset",
    "Github", "No public data", "Other")

where_data_long <- longer_data(response_where_data, "Where")
percentage_bargraph(where_data_long, Selected, "Where do you get data from (%)", "Where")`;

function TechItem({
  num,
  title,
  code,
  img,
  alt,
}: {
  num: string;
  title: string;
  code: string;
  img: string;
  alt: string;
}) {
  return (
    <Card>
      <SubItem style={{ marginTop: 0 }}>
        <SubNum>{num}</SubNum>
        <SubTitle>{title}</SubTitle>
      </SubItem>
      <CodeWrap>
        <CodeBlock language="R" text={code} />
      </CodeWrap>
      <ChartWrap>
        <img src={img} alt={alt} />
      </ChartWrap>
    </Card>
  );
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
export default function Survey() {
  return (
    <>
      <GlobalStyle />
      <Page>
        {/* ── HEADER ── */}
        <SiteHeader>
          <Logotype>
            DS Survey
            <br />
            Analysis
          </Logotype>
          <Subtitle>
            Analysis &amp; Data Visualization on Programmers in the Field of
            Data Science
          </Subtitle>
        </SiteHeader>

        {/* ── STATS ── */}
        <StatsRow>
          <StatCard>
            <StatVal>23,589</StatVal>
            <StatLabel>Total Respondents</StatLabel>
          </StatCard>
          <StatCard>
            <StatVal>19</StatVal>
            <StatLabel>Days Survey Period</StatLabel>
          </StatCard>
          <StatCard>
            <StatVal>90%+</StatVal>
            <StatLabel>STEM Background</StatLabel>
          </StatCard>
          <StatCard>
            <StatVal>80%+</StatVal>
            <StatLabel>Male Respondents</StatLabel>
          </StatCard>
        </StatsRow>

        {/* ── OVERVIEW ── */}
        <Card>
          <CardLabel>Overview</CardLabel>
          <Prose>
            As a software engineer transitioning toward Data and AI, I wanted to
            gain a concrete understanding of how professionals in this field
            actually work. This project explores their backgrounds, the tools
            they use, and where they are located.
          </Prose>
          <Prose>
            Using the Kaggle survey dataset, I visualized key aspects such as
            respondents' country, education, and preferred coding environments
            (e.g., Kaggle Kernels, Google Colab). This exploration helps
            beginners see the overall ecosystem of Data and AI practitioners and
            identify which technologies are most relevant to focus on.
          </Prose>
        </Card>

        {/* ── DATASET ── */}
        <Section num="01" title="Dataset Overview" />
        <Card>
          <CardLabel>Source · Kaggle Survey 2025</CardLabel>
          <DatasetLink>
            <a
              href="https://www.kaggle.com/datasets/kaggle/kaggle-survey-2025"
              target="_blank"
              rel="noreferrer"
            >
              https://www.kaggle.com/datasets/kaggle/kaggle-survey-2025
            </a>
          </DatasetLink>
          <MetaChips>
            <Chip $variant="sky">Aug 7–25, 2025</Chip>
            <Chip>23,589 respondents</Chip>
            <Chip $variant="indigo">
              Kaggle channels · email · forums · SNS
            </Chip>
          </MetaChips>
        </Card>

        {/* ── TOOLS ── */}
        <Section num="02" title="Used Tools" />
        <Card>
          <CardLabel>Tech Stack</CardLabel>
          <ToolsRow>
            {['R', 'ggplot2', 'dplyr', 'tidyr'].map((t) => (
              <ToolBadge key={t}>{t}</ToolBadge>
            ))}
          </ToolsRow>
        </Card>

        {/* ── LIBRARY SETUP ── */}
        <Section num="03" title="Library Setting & Data Exploration" />
        <CodeWrap>
          <CodeBlock language="R" text={exploration} />
        </CodeWrap>
        <ChartWrap>
          <img src={surveyExploration} alt="Data exploration output" />
        </ChartWrap>
        <Card style={{ marginTop: '1rem' }}>
          <Prose style={{ fontSize: '0.88rem' }}>
            Variables such as gender, age, country, degree, and major are
            categorical responses. Sections about kernel tools, cloud platforms,
            ML libraries, and programming languages are stored in wide format —
            each tool has its own column. These will be reshaped using{' '}
            <code
              style={{
                color: 'var(--sky)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.8rem',
              }}
            >
              pivot_longer()
            </code>{' '}
            and column names will be renamed during preprocessing.
          </Prose>
        </Card>

        {/* ── DEMOGRAPHIC ── */}
        <Section num="04" title="Demographic Analysis" />
        <Card style={{ marginBottom: '1rem' }}>
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            Focus columns: Gender (2), Age (4), Country (5), Degree (6), Major
            (7).
          </Prose>
          <CodeWrap style={{ margin: 0 }}>
            <CodeBlock
              language="R"
              text={`names(response)[c(2,4,5,6,7)] <- c("Gender", "Age", "Country", "Degree", "Major")`}
            />
          </CodeWrap>
        </Card>

        <SubItem>
          <SubNum>01</SubNum>
          <SubTitle>Top 10 countries with the most responses</SubTitle>
        </SubItem>
        <CodeWrap>
          <CodeBlock language="R" text={countryCode} />
        </CodeWrap>
        <ChartWrap>
          <img src={byCountry} alt="Country distribution" />
        </ChartWrap>

        <SubItem>
          <SubNum>02</SubNum>
          <SubTitle>Number of respondents by age</SubTitle>
        </SubItem>
        <CodeWrap>
          <CodeBlock language="R" text={ageCode} />
        </CodeWrap>
        <ChartWrap>
          <img src={byAge} alt="Age group distribution" />
        </ChartWrap>

        <SubItem>
          <SubNum>03</SubNum>
          <SubTitle>Distribution of respondents' majors</SubTitle>
        </SubItem>
        <CodeWrap>
          <CodeBlock language="R" text={majorCode} />
        </CodeWrap>
        <ChartWrap>
          <img src={byMajor} alt="Major distribution" />
        </ChartWrap>

        <SubItem>
          <SubNum>04</SubNum>
          <SubTitle>Distribution of respondents' gender</SubTitle>
        </SubItem>
        <CodeWrap>
          <CodeBlock language="R" text={genderCode} />
        </CodeWrap>
        <ChartWrap>
          <img src={byGender} alt="Gender distribution" />
        </ChartWrap>

        <SubItem>
          <SubNum>05</SubNum>
          <SubTitle>Distribution of respondents' degree</SubTitle>
        </SubItem>
        <CodeWrap>
          <CodeBlock language="R" text={degreeCode} />
        </CodeWrap>
        <ChartWrap>
          <img src={byDegree} alt="Degree distribution" />
        </ChartWrap>

        {/* ── TECH STACK ── */}
        <Section num="05" title="Technical Stack Analysis" />
        <Card style={{ marginBottom: '1rem' }}>
          <CardLabel>Reusable Helper Functions · DRY Principle</CardLabel>
          <Prose style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
            All tech-stack questions are multiple-choice stored in wide format.
            A shared{' '}
            <code
              style={{
                color: 'var(--sky)',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.8rem',
              }}
            >
              pivot_longer()
            </code>{' '}
            + visualization function handles all sections.
          </Prose>
          <CodeWrap style={{ margin: 0 }}>
            <CodeBlock language="R" text={longerAndGraph} />
          </CodeWrap>
        </Card>

        <TwoColGrid>
          <TechItem
            num="01"
            title="Which kernel do you use most?"
            code={kernelCode}
            img={kernelPref}
            alt="Kernel preference"
          />
          <TechItem
            num="02"
            title="Which cloud platform do you use most?"
            code={cloudCode}
            img={cloudPref}
            alt="Cloud preference"
          />
          <TechItem
            num="03"
            title="Which language do you most prefer?"
            code={languageCode}
            img={languagePref}
            alt="Language preference"
          />
          <TechItem
            num="04"
            title="Which ML library have you used?"
            code={mllibraryCode}
            img={mllibraryPref}
            alt="ML library preference"
          />
          <TechItem
            num="05"
            title="Which visualization tool do you prefer?"
            code={vizCode}
            img={vizPref}
            alt="Viz tool preference"
          />
          <TechItem
            num="06"
            title="Which ML service have you used?"
            code={mlserviceCode}
            img={mlservicePref}
            alt="ML service preference"
          />
          <TechItem
            num="07"
            title="Which relational database do you prefer?"
            code={rdbCode}
            img={rdbPref}
            alt="RDB preference"
          />
          <TechItem
            num="08"
            title="Which big data tool have you used?"
            code={bigdataCode}
            img={bigdataPref}
            alt="Big data tool preference"
          />
        </TwoColGrid>

        {/* ── DATA SOURCE ── */}
        <Section num="06" title="Data Source Analysis" />
        <TwoColGrid>
          <TechItem
            num="01"
            title="Which kind of data do you most interact with?"
            code={whatDataCode}
            img={whatData}
            alt="Data type preference"
          />
          <TechItem
            num="02"
            title="From where do you get your data?"
            code={whereDataCode}
            img={whereData}
            alt="Data source preference"
          />
        </TwoColGrid>

        {/* ── SUMMARY ── */}
        <Section num="07" title="Summary" />
        <InsightsGrid>
          <InsightCard>
            <InsightIcon>🌍</InsightIcon>
            <InsightTitle>Geography</InsightTitle>
            <InsightBody>
              The Data Science field is heavily concentrated in the United
              States and India, with most other participants coming from
              developed countries.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>👤</InsightIcon>
            <InsightTitle>Demographics</InsightTitle>
            <InsightBody>
              Most respondents are aged 20–40. Around 90% have a STEM background
              and over 80% are male. More than 90% hold at least a bachelor's
              degree.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🐍</InsightIcon>
            <InsightTitle>Languages</InsightTitle>
            <InsightBody>
              Python is the dominant language, followed by R and SQL. ML
              frameworks and visualization tools are broadly adopted across the
              community.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🗄️</InsightIcon>
            <InsightTitle>Databases</InsightTitle>
            <InsightBody>
              Open-source databases — MySQL and PostgreSQL — remain the most
              widely used. Enterprise solutions see considerably lower adoption.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>📦</InsightIcon>
            <InsightTitle>Data Sources</InsightTitle>
            <InsightBody>
              Very few respondents collect their own data. Most rely on publicly
              available or pre-processed datasets, with Kaggle being a primary
              source.
            </InsightBody>
          </InsightCard>
          <InsightCard>
            <InsightIcon>🎓</InsightIcon>
            <InsightTitle>Education</InsightTitle>
            <InsightBody>
              The "non-technical entry" narrative appears overstated — over 90%
              hold a degree, suggesting formal education remains the primary
              pathway.
            </InsightBody>
          </InsightCard>
        </InsightsGrid>
      </Page>
    </>
  );
}
