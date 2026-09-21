// Lightweight i18n for the landing page.
// Language is auto-detected from the browser (navigator.language); no manual toggle.

export type Lang = 'en' | 'ko';

interface Section {
  title: string;
  subtitle?: string;
  tech: string;
  points: string[];
}

export interface Translations {
  greetingPrefix: string;
  greetingSuffix: string;
  name: string;
  jobTitle: string;

  aboutTitle: string;
  about: string[];

  workTitle: string;
  autocapture: Section;
  sticpayIos: Section;
  sticpayRn: Section;
  supervank: Section & { note: string };

  personalTitle: string;
  scanolio: Section;
  vox: Section;
  coremlTitle: string;
  card1: { title: string; description: string };
  card2: { title: string; description: string };
  readCaseStudy: string;

  educationTitle: string;
  educationYear: string;
  educationDegree: string;
  educationGpa: string;
}

const en: Translations = {
  greetingPrefix: "Hello, I'm ",
  greetingSuffix: '',
  name: 'Seungmyun Park',
  jobTitle: 'Software engineer 😎',

  aboutTitle: 'About Me',
  about: [
    '💻 I am a software engineer with 7+ years of industry experience and a proven track record of delivering data-driven features that contribute to company growth.',
    '💡 I thrive on solving complex challenges and am dedicated to incorporating AI technologies into mobile ecosystems to create more intelligent, user-centric applications.',
    '🦾 My current focus is on iOS development, and I also have expertise in backend programming using Python and PHP to handle end-to-end requirements as needed. Much of my work has guided by analyzing user behavior and optimizing features to inform strategic product decisions.',
    '🛠 This website was developed from scratch using React, TypeScript, and GitHub Pages.',
  ],

  workTitle: 'Work experience',
  autocapture: {
    title: 'AutoCapture(iOS) / AutoCompose(Mac)',
    subtitle: 'Enterprise Car-Capture & 360° View Generation System',
    tech: 'Technologies: OpenCV, Canon SDK, Bluetooth, GCD web server, Firebase MLKit',
    points: [
      '- Executed a full-scale legacy migration from Objective-C to Swift, leveraging SwiftRewriter to enhance codebase maintainability and performance.',
      '- Implemented Computer Vision algorithms to detect and segment vehicles, automating the creation of seamless 360° interactive views.',
      "- Orchestrated complex hardware integrations with the Canon SDK via Bluetooth, utilizing Apple's Combine (zip, flatMap, retry) to handle multiple concurrent asynchronous events.",
      '- Refactored networking infrastructure from AFNetworking to native URLSession, significantly improving system robustness and reducing external dependencies.',
    ],
  },
  sticpayIos: {
    title: 'Sticpay iOS Application',
    subtitle: 'Payment and money transfer application',
    tech: 'Technologies: Swift, MVVM, SnapKit, RxSwift, Alamofire, Firebase, SwiftLint',
    points: [
      '- Native Migration: Spearheaded the migration of the Sticpay application from React Native to a fully native iOS environment to enhance performance and user experience.',
      '- Core Fintech Features: Developed mission-critical features: multi-currency wallet management, real-time currency exchange, and secure payment processing.',
      '- Regional Optimization: Configured multi-target build schemes to efficiently manage and distribute Global and China-specific versions from a single codebase.',
      '- Full Lifecycle Ownership: Owned the entire development lifecycle, from initial architecture design and implementation to App Store distribution and maintenance.',
    ],
  },
  sticpayRn: {
    title: 'Sticpay React-Native Application',
    tech: 'Technologies: JavaScript (ES6), Redux, Flow, Axios, Jest, ESLint/Prettier',
    points: [
      '- Architectural Transition: Collaborated on transitioning a legacy web-view-based application to React Native, significantly improving app responsiveness and fluidity.',
      '- State & Async Management: Engineered complex state management and asynchronous data flows using Redux and modern JavaScript (ES6+) patterns.',
      '- Native Bridge Development: Developed custom Native Modules in Java (Android) and Objective-C (iOS) to bridge platform-specific functionalities into the React Native',
      '- Stability Optimization: Maintained high application stability, keeping the crash-free rate above 99.7% through proactive monitoring and debugging via Firebase Crashlytics.',
    ],
  },
  supervank: {
    title: 'Supervank Android application',
    subtitle: 'Stock market-linked reward platform with investment simulation',
    tech: 'Technologies: Java, MVC, Ad SDK (Meta, Unity, Google), Camera API, Glide, ContentProvider',
    points: [
      '- Pedometer Engineering: Developed an activity tracking system using gyro sensors to provide detailed fitness analytics (steps, distance, and calories).',
      '- Investment Simulation: Created intuitive UI/UX for users to track investment outcomes based on real-world stock market data.',
      '- Optimized Media Handling: Engineered custom-built Camera and Gallery modules to improve user experience beyond standard system components.',
    ],
    note: "- Due to the company's policy, this app is currently down from the play store",
  },

  personalTitle: 'Personal Projects',
  scanolio: {
    title: 'Scanolio',
    subtitle: 'Document Scanner with On-Device ML Corner Detection',
    tech: 'Technologies: Swift, UIKit, SnapKit, RxSwift, CoreML, Kotlin, Jetpack Compose, CameraX, TensorFlow Lite, OpenCV, Firebase Analytics, Crashlytics, Claude Code',
    points: [
      '- Built a custom document corner detection pipeline: YOLO segmentation model trained via transfer learning, deployed with CoreML on iOS and TensorFlow Lite on Android, with OpenCV post-processing for corner extraction and perspective correction.',
      '- Shipped the iOS app first (UIKit, SnapKit, RxSwift), then ported it to Android with Jetpack Compose and CameraX, reusing the same detection model and OpenCV logic.',
      '- Used Claude Code for agentic development of the Android port, including build verification on the emulator and signed release builds.',
      '- Integrated Firebase Analytics and Crashlytics with GDPR-based consent gating for EU users.',
      '- Released on both the App Store and Google Play within about a month, with store metadata localized into 8 languages.',
    ],
  },
  vox: {
    title: 'VoxNoteAI',
    subtitle: 'On-Device Voice Transcription, Summarization & Translation App',
    tech: 'Technologies: SwiftUI, Claude Code, Claude Design, WhisperKit, MLX Swift, Apple Translation API, SwiftData, AVAudioEngine',
    points: [
      '- Built a fully on-device voice AI app using WhisperKit (Whisper large-v3) for speech-to-text transcription with no data leaving the device',
      '- Integrated WhisperKit, MLX (Qwen2.5), and Apple Translation API for a complete offline AI pipeline',
      '- Engineered real-time transcription via AVAudioEngine with live streaming output',
      '- Architected multiplatform SwiftUI app with @Observable MVVM and SwiftData',
      '- Designed a hierarchical folder system with drag-and-drop organization and persistent transcript storage',
    ],
  },
  coremlTitle: 'CoreML & iOS',
  card1: {
    title: 'Data Preparation & transfer learning',
    description:
      'End-to-end pipeline for custom data collection, annotation, and training optimized YOLO models for mobile via transfer learning.',
  },
  card2: {
    title: 'Embedding a model into an iOS app',
    description:
      'Edge AI: Real-time Document - Detection Deploying Custom Transfer Learning Models via CoreML for On-device Inference.',
  },
  readCaseStudy: 'Read case study',

  educationTitle: 'Education',
  educationYear: '2025 - 2026',
  educationDegree:
    'Master of Data Science, University of British Columbia, Vancouver, Canada',
  educationGpa: 'GPA: 3.94/4.0',
};

const ko: Translations = {
  greetingPrefix: '안녕하세요, 저는 ',
  greetingSuffix: '입니다',
  name: 'Seungmyun Park',
  jobTitle: '소프트웨어 엔지니어 😎',

  aboutTitle: '소개',
  about: [
    '💻 7년 이상의 실무 경험을 갖춘 소프트웨어 엔지니어로서, 회사의 성장에 기여하는 데이터 기반 기능을 꾸준히 제공해 왔습니다.',
    '💡 복잡한 문제를 해결하는 데에서 보람을 느끼며, AI 기술을 모바일 생태계에 접목해 더 지능적이고 사용자 중심적인 애플리케이션을 만드는 데 집중하고 있습니다.',
    '🦾 현재는 iOS 개발에 주력하고 있으며, Python과 PHP를 활용한 백엔드 개발 역량도 갖추고 있어 필요에 따라 엔드투엔드 요구사항을 처리할 수 있습니다. 제 업무의 상당 부분은 사용자 행동을 분석하고 기능을 최적화하여 전략적인 제품 의사결정을 이끌어내는 데 초점을 맞춰 왔습니다.',
    '🛠 이 웹사이트는 React, TypeScript, GitHub Pages를 사용해 처음부터 직접 개발했습니다.',
  ],

  workTitle: '경력',
  autocapture: {
    title: 'AutoCapture(iOS) / AutoCompose(Mac)',
    subtitle: '차량 촬영 및 360° 뷰 생성 엔터프라이즈 시스템',
    tech: '기술 스택: OpenCV, Canon SDK, Bluetooth, GCD web server, Firebase MLKit',
    points: [
      '- SwiftRewriter를 활용해 Objective-C에서 Swift로 대규모 레거시 마이그레이션을 수행하여 코드베이스의 유지보수성과 성능을 개선했습니다.',
      '- 컴퓨터 비전 알고리즘을 구현해 차량을 감지·분할하고, 매끄러운 360° 인터랙티브 뷰 생성을 자동화했습니다.',
      "- Bluetooth를 통한 Canon SDK 하드웨어 연동을 구축하고, Apple의 Combine(zip, flatMap, retry)을 활용해 여러 동시 비동기 이벤트를 처리했습니다.",
      '- 네트워킹 인프라를 AFNetworking에서 네이티브 URLSession으로 리팩터링하여 시스템 안정성을 크게 높이고 외부 의존성을 줄였습니다.',
    ],
  },
  sticpayIos: {
    title: 'Sticpay iOS 애플리케이션',
    subtitle: '결제 및 송금 애플리케이션',
    tech: '기술 스택: Swift, MVVM, SnapKit, RxSwift, Alamofire, Firebase, SwiftLint',
    points: [
      '- 네이티브 마이그레이션: Sticpay 앱을 React Native에서 완전한 네이티브 iOS 환경으로 마이그레이션하여 성능과 사용자 경험을 향상했습니다.',
      '- 핵심 핀테크 기능: 다중 통화 지갑 관리, 실시간 환전, 안전한 결제 처리 등 핵심 기능을 개발했습니다.',
      '- 지역별 최적화: 다중 타깃 빌드 스킴을 구성해 단일 코드베이스에서 글로벌 및 중국 전용 버전을 효율적으로 관리·배포했습니다.',
      '- 전체 라이프사이클 담당: 초기 아키텍처 설계와 구현부터 App Store 배포 및 유지보수까지 전체 개발 라이프사이클을 담당했습니다.',
    ],
  },
  sticpayRn: {
    title: 'Sticpay React-Native 애플리케이션',
    tech: '기술 스택: JavaScript (ES6), Redux, Flow, Axios, Jest, ESLint/Prettier',
    points: [
      '- 아키텍처 전환: 레거시 웹뷰 기반 애플리케이션을 React Native로 전환하는 작업에 참여하여 앱의 반응성과 부드러움을 크게 개선했습니다.',
      '- 상태 및 비동기 관리: Redux와 최신 JavaScript(ES6+) 패턴을 활용해 복잡한 상태 관리와 비동기 데이터 흐름을 구현했습니다.',
      '- 네이티브 브리지 개발: Java(Android)와 Objective-C(iOS)로 커스텀 네이티브 모듈을 개발해 플랫폼별 기능을 React Native에 연동했습니다.',
      '- 안정성 최적화: Firebase Crashlytics를 통한 선제적 모니터링과 디버깅으로 크래시 없는 사용률을 99.7% 이상으로 유지했습니다.',
    ],
  },
  supervank: {
    title: 'Supervank Android 애플리케이션',
    subtitle: '주식 시장 연동 리워드 플랫폼 및 투자 시뮬레이션',
    tech: '기술 스택: Java, MVC, Ad SDK (Meta, Unity, Google), Camera API, Glide, ContentProvider',
    points: [
      '- 만보기 엔지니어링: 자이로 센서를 활용한 활동 추적 시스템을 개발해 걸음 수, 거리, 칼로리 등 상세한 피트니스 분석을 제공했습니다.',
      '- 투자 시뮬레이션: 실제 주식 시장 데이터를 기반으로 투자 성과를 추적할 수 있는 직관적인 UI/UX를 구현했습니다.',
      '- 미디어 처리 최적화: 표준 시스템 컴포넌트를 넘어서는 사용자 경험을 위해 커스텀 카메라 및 갤러리 모듈을 개발했습니다.',
    ],
    note: '- 회사 정책에 따라 현재 이 앱은 Play 스토어에서 내려간 상태입니다.',
  },

  personalTitle: '개인 프로젝트',
  scanolio: {
    title: 'Scanolio',
    subtitle: '온디바이스 ML 코너 감지 기능을 갖춘 문서 스캐너',
    tech: '기술 스택: Swift, UIKit, SnapKit, RxSwift, CoreML, Kotlin, Jetpack Compose, CameraX, TensorFlow Lite, OpenCV, Firebase Analytics, Crashlytics, Claude Code',
    points: [
      '- 커스텀 문서 코너 감지 파이프라인을 구축했습니다. 전이 학습으로 훈련한 YOLO 세그멘테이션 모델을 iOS에서는 CoreML, Android에서는 TensorFlow Lite로 배포하고, OpenCV 후처리로 코너 추출과 원근 보정을 수행했습니다.',
      '- iOS 앱(UIKit, SnapKit, RxSwift)을 먼저 출시한 뒤, 동일한 감지 모델과 OpenCV 로직을 재사용해 Jetpack Compose와 CameraX로 Android에 이식했습니다.',
      '- Android 포팅에는 Claude Code를 활용한 에이전트 기반 개발을 적용했으며, 에뮬레이터 빌드 검증과 서명된 릴리스 빌드까지 포함했습니다.',
      '- Firebase Analytics와 Crashlytics를 통합하고, EU 사용자를 위한 GDPR 기반 동의 게이팅을 적용했습니다.',
      '- 약 한 달 만에 App Store와 Google Play에 모두 출시했으며, 스토어 메타데이터를 8개 언어로 현지화했습니다.',
    ],
  },
  vox: {
    title: 'VoxNoteAI',
    subtitle: '온디바이스 음성 전사, 요약 및 번역 앱',
    tech: '기술 스택: SwiftUI, Claude Code, Claude Design, WhisperKit, MLX Swift, Apple Translation API, SwiftData, AVAudioEngine',
    points: [
      '- WhisperKit(Whisper large-v3)을 활용해 데이터가 기기를 벗어나지 않는 완전한 온디바이스 음성-텍스트 전사 앱을 구축했습니다.',
      '- WhisperKit, MLX(Qwen2.5), Apple Translation API를 통합해 완전한 오프라인 AI 파이프라인을 구성했습니다.',
      '- AVAudioEngine을 통한 실시간 전사를 구현하고 라이브 스트리밍 출력을 제공했습니다.',
      '- @Observable MVVM과 SwiftData를 기반으로 멀티플랫폼 SwiftUI 앱을 설계했습니다.',
      '- 드래그 앤 드롭 정리와 영구 전사 저장을 지원하는 계층형 폴더 시스템을 설계했습니다.',
    ],
  },
  coremlTitle: 'CoreML & iOS',
  card1: {
    title: '데이터 준비 및 전이 학습',
    description:
      '커스텀 데이터 수집, 어노테이션, 전이 학습을 통한 모바일용 최적화 YOLO 모델 훈련의 엔드투엔드 파이프라인.',
  },
  card2: {
    title: '모델을 iOS 앱에 임베딩하기',
    description:
      '엣지 AI: CoreML을 통해 커스텀 전이 학습 모델을 배포하여 온디바이스 추론으로 실시간 문서 감지를 구현.',
  },
  readCaseStudy: '케이스 스터디 보기',

  educationTitle: '학력',
  educationYear: '2025 - 2026',
  educationDegree:
    '데이터 사이언스 석사, 브리티시컬럼비아대학교(UBC), 밴쿠버, 캐나다',
  educationGpa: 'GPA: 3.94/4.0',
};

const translations: Record<Lang, Translations> = { en, ko };

/** Detect the preferred language from the browser. Falls back to English. */
export function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const langs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  return langs.some((l) => l && l.toLowerCase().startsWith('ko')) ? 'ko' : 'en';
}

export function getTranslations(lang: Lang = detectLang()): Translations {
  return translations[lang];
}
