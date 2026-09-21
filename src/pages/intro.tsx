import React from 'react';
import { Container } from '../components/CommonComponents';
import {
  IntroSection,
  IntroTextSection,
  IntroName,
  IntroGreeting,
  IntroTitle,
  AboutMeSection,
  SectionContentWrapper,
  SectionTitle,
  SectionSemiTitle,
  SectionExplanation,
  TechStack,
  AppDescription,
  ImageGallery,
  AppLinkWrapper,
  AppLinkButton,
  PersonalProjectsSection,
  WorkExperienceSection,
  EducationSection,
  EducationWrapper,
  EducationYear,
  EducationContent,
  ProjectGrid,
  ProjectCard,
  ProjectCardTitle,
  ProjectCardButton,
  ChartImg,
  ProjectImage,
  GalleryArrow,
} from './Intro.styles';

import { transfer1, transfer2 } from '../images/coreml';
import { scanolio_preview, scanolio1, scanolio2, scanolio3} from '../images/scanolio';
import {
  carsOnWeb,
  carCapture,
  cutAppCars,
  multipleCapture,
  rotatingCar,
} from '../images/autocapture';
import { sticpay1, sticpay2, sticpay3, sticpay4 } from '../images/sticpay';
import {
  supervank1,
  supervank2,
  supervank3,
  supervank4,
} from '../images/supervank';
import { vox1, vox2 } from '../images/vox';

interface ProjectCardProps {
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  link: string;
}

interface AppLinkProps {
  ios?: string;
  android?: string;
  macos?: string;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({
  title,
  image,
  imageWidth,
  imageHeight,
  description,
  link,
}) => (
  <ProjectCard>
    <ProjectCardTitle>{title}</ProjectCardTitle>
    <ChartImg src={image} width={imageWidth} height={imageHeight} alt={title} />
    <p>{description}</p>
    <ProjectCardButton href={link} target="_blank" rel="noopener noreferrer">
      Read case study
    </ProjectCardButton>
  </ProjectCard>
);

const AppLinks: React.FC<AppLinkProps> = ({ ios, android, macos }) => (
  <AppLinkWrapper>
    {ios && (
      <AppLinkButton href={ios} target="_blank" rel="noopener noreferrer">
        iOS
      </AppLinkButton>
    )}
    {android && (
      <AppLinkButton href={android} target="_blank" rel="noopener noreferrer">
        Android
      </AppLinkButton>
    )}
    {macos && (
      <AppLinkButton href={macos} target="_blank" rel="noopener noreferrer">
        macOS
      </AppLinkButton>
    )}
  </AppLinkWrapper>
);

const Intro: React.FC = () => {
  return (
    <>
      <IntroSection>
        <Container>
          <IntroTextSection>
            <IntroGreeting>
              Hello, I'm <IntroName>Seungmyun Park</IntroName>
            </IntroGreeting>
            <IntroTitle>Software engineer 😎</IntroTitle>
          </IntroTextSection>
        </Container>
      </IntroSection>

      <AboutMeSection>
        <Container>
          <SectionContentWrapper>
            <SectionTitle>About Me</SectionTitle>
            <p>
              💻 I am a software engineer with 7+ years of industry experience
              and a proven track record of delivering data-driven features that
              contribute to company growth.
            </p>
            <p>
              💡 I thrive on solving complex challenges and am dedicated to
              incorporating AI technologies into mobile ecosystems to create
              more intelligent, user-centric applications.
            </p>
            <p>
              🦾 My current focus is on iOS development, and I also have
              expertise in backend programming using Python and PHP to handle
              end-to-end requirements as needed. Much of my work has guided by
              analyzing user behavior and optimizing features to inform
              strategic product decisions.
            </p>
            <p>
              🛠 This website was developed from scratch using React,
              TypeScript, and GitHub Pages.
            </p>
          </SectionContentWrapper>
        </Container>
      </AboutMeSection>

      <WorkExperienceSection>
        <Container>
          <SectionTitle>Work experience</SectionTitle>

          <SectionContentWrapper>
            <SectionSemiTitle>
              AutoCapture(iOS) / AutoCompose(Mac)
            </SectionSemiTitle>
            <SectionExplanation>
              Enterprise Car-Capture & 360° View Generation System
            </SectionExplanation>
            <TechStack>
              Technologies: OpenCV, Canon SDK, Bluetooth, GCD web server,
              Firebase MLKit
            </TechStack>
            <AppDescription>
              - Executed a full-scale legacy migration from Objective-C to
              Swift, leveraging SwiftRewriter to enhance codebase
              maintainability and performance.
            </AppDescription>
            <AppDescription>
              - Implemented Computer Vision algorithms to detect and segment
              vehicles, automating the creation of seamless 360° interactive
              views.
            </AppDescription>
            <AppDescription>
              - Orchestrated complex hardware integrations with the Canon SDK
              via Bluetooth, utilizing Apple's Combine (zip, flatMap, retry) to
              handle multiple concurrent asynchronous events.
            </AppDescription>
            <AppDescription>
              - Refactored networking infrastructure from AFNetworking to native
              URLSession, significantly improving system robustness and reducing
              external dependencies.
            </AppDescription>

            <ImageGallery>
              <ProjectImage
                src={multipleCapture}
                width={250}
                height={125}
                alt="Multiple capture"
              />
              <GalleryArrow>→</GalleryArrow>
              <ProjectImage
                src={carCapture}
                width={250}
                height={125}
                alt="Car capture"
              />
            </ImageGallery>

            <ImageGallery>
              <ProjectImage
                src={cutAppCars}
                width={200}
                height={100}
                alt="Cut app cars"
              />
              <GalleryArrow>→</GalleryArrow>
              <ProjectImage
                src={carsOnWeb}
                width={250}
                height={150}
                alt="Cars on web"
              />
              <GalleryArrow>→</GalleryArrow>
              <ProjectImage
                src={rotatingCar}
                width={200}
                height={100}
                alt="Rotating car"
              />
            </ImageGallery>

            <AppLinks
              ios="https://apps.apple.com/gb/app/aos-autocapture/id1115610872"
              macos="https://download.aos.tv/"
            />
          </SectionContentWrapper>

          <SectionContentWrapper>
            <SectionSemiTitle>Sticpay iOS Application</SectionSemiTitle>
            <SectionExplanation>
              Payment and money transfer application
            </SectionExplanation>
            <TechStack>
              Technologies: Swift, MVVM, SnapKit, RxSwift, Alamofire, Firebase,
              SwiftLint
            </TechStack>
            <AppDescription>
              - Native Migration: Spearheaded the migration of the Sticpay
              application from React Native to a fully native iOS environment to
              enhance performance and user experience.
            </AppDescription>
            <AppDescription>
              - Core Fintech Features: Developed mission-critical features:
              multi-currency wallet management, real-time currency exchange, and
              secure payment processing.
            </AppDescription>
            <AppDescription>
              - Regional Optimization: Configured multi-target build schemes to
              efficiently manage and distribute Global and China-specific
              versions from a single codebase.
            </AppDescription>
            <AppDescription>
              - Full Lifecycle Ownership: Owned the entire development
              lifecycle, from initial architecture design and implementation to
              App Store distribution and maintenance.
            </AppDescription>

            <SectionSemiTitle style={{ marginTop: '2rem' }}>
              Sticpay React-Native Application
            </SectionSemiTitle>
            <TechStack>
              Technologies: JavaScript (ES6), Redux, Flow, Axios, Jest,
              ESLint/Prettier
            </TechStack>
            <AppDescription>
              - Architectural Transition: Collaborated on transitioning a legacy
              web-view-based application to React Native, significantly
              improving app responsiveness and fluidity.
            </AppDescription>
            <AppDescription>
              - State & Async Management: Engineered complex state management
              and asynchronous data flows using Redux and modern JavaScript
              (ES6+) patterns.
            </AppDescription>
            <AppDescription>
              - Native Bridge Development: Developed custom Native Modules in
              Java (Android) and Objective-C (iOS) to bridge platform-specific
              functionalities into the React Native
            </AppDescription>
            <AppDescription>
              - Stability Optimization: Maintained high application stability,
              keeping the crash-free rate above 99.7% through proactive
              monitoring and debugging via Firebase Crashlytics.
            </AppDescription>

            <ImageGallery>
              <ProjectImage
                src={sticpay1}
                width={150}
                height={300}
                alt="Sticpay screenshot 1"
              />
              <ProjectImage
                src={sticpay2}
                width={150}
                height={300}
                alt="Sticpay screenshot 2"
              />
              <ProjectImage
                src={sticpay3}
                width={150}
                height={300}
                alt="Sticpay screenshot 3"
              />
              <ProjectImage
                src={sticpay4}
                width={150}
                height={300}
                alt="Sticpay screenshot 4"
              />
            </ImageGallery>

            <AppLinks
              ios="https://apps.apple.com/gb/app/sticpay/id1274956968"
              android="https://play.google.com/store/apps/details?id=com.sticpay.app.sticpay"
            />
          </SectionContentWrapper>

          <SectionContentWrapper>
            <SectionSemiTitle>Supervank Android application</SectionSemiTitle>
            <SectionExplanation>
              Stock market-linked reward platform with investment simulation
            </SectionExplanation>
            <TechStack>
              Technologies: Java, MVC, Ad SDK (Meta, Unity, Google), Camera API,
              Glide, ContentProvider
            </TechStack>
            <AppDescription>
              - Pedometer Engineering: Developed an activity tracking system
              using gyro sensors to provide detailed fitness analytics (steps,
              distance, and calories).
            </AppDescription>
            <AppDescription>
              - Investment Simulation: Created intuitive UI/UX for users to
              track investment outcomes based on real-world stock market data.
            </AppDescription>
            <AppDescription>
              - Optimized Media Handling: Engineered custom-built Camera and
              Gallery modules to improve user experience beyond standard system
              components.
            </AppDescription>
            <AppDescription style={{ color: '#dc3545' }}>
              - Due to the company's policy, this app is currently down from the
              play store
            </AppDescription>

            <ImageGallery>
              <ProjectImage
                src={supervank1}
                width={150}
                height={300}
                alt="Supervank screenshot 1"
              />
              <ProjectImage
                src={supervank2}
                width={150}
                height={300}
                alt="Supervank screenshot 2"
              />
              <ProjectImage
                src={supervank3}
                width={150}
                height={300}
                alt="Supervank screenshot 3"
              />
              <ProjectImage
                src={supervank4}
                width={200}
                height={300}
                alt="Supervank screenshot 4"
              />
            </ImageGallery>
          </SectionContentWrapper>
        </Container>
      </WorkExperienceSection>

      <PersonalProjectsSection>
        <Container>
          <SectionTitle>Personal Projects</SectionTitle>

          <SectionContentWrapper>
            <SectionSemiTitle>Scanolio</SectionSemiTitle>
            <SectionExplanation>
              Document Scanner with On-Device ML Corner Detection
            </SectionExplanation>
            <TechStack>
              Technologies: Swift, UIKit, SnapKit, RxSwift, CoreML, Kotlin,
              Jetpack Compose, CameraX, TensorFlow Lite, OpenCV, Firebase
              Analytics, Crashlytics, Claude Code
            </TechStack>
            <AppDescription>
              - Built a custom document corner detection pipeline: YOLO
              segmentation model trained via transfer learning, deployed with
              CoreML on iOS and TensorFlow Lite on Android, with OpenCV
              post-processing for corner extraction and perspective correction.
            </AppDescription>
            <AppDescription>
              - Shipped the iOS app first (UIKit, SnapKit, RxSwift), then ported
              it to Android with Jetpack Compose and CameraX, reusing the same
              detection model and OpenCV logic.
            </AppDescription>
            <AppDescription>
              - Used Claude Code for agentic development of the Android port,
              including build verification on the emulator and signed release
              builds.
            </AppDescription>
            <AppDescription>
              - Integrated Firebase Analytics and Crashlytics with GDPR-based
              consent gating for EU users.
            </AppDescription>
            <AppDescription>
              - Released on both the App Store and Google Play within about a
              month, with store metadata localized into 8 languages.
            </AppDescription>

            <ImageGallery>
              <ProjectImage
                src={scanolio_preview}
                width={150}
                height={300}
                alt="Scanolio preview"
              />
              <ProjectImage
                src={scanolio1}
                width={150}
                height={300}
                alt="Scanolio screenshot 1"
              />
              <ProjectImage
                src={scanolio2}
                width={150}
                height={300}
                alt="Scanolio screenshot 2"
              />
              <ProjectImage
                src={scanolio3}
                width={150}
                height={300}
                alt="Scanolio screenshot 3"
              />
            </ImageGallery>

            <AppLinks
              ios="https://apps.apple.com/us/app/scanolio-scan-pdf/id6806903517"
              android="https://play.google.com/store/apps/details?id=com.seungpark.scanolio"
            />
          </SectionContentWrapper>

          <SectionContentWrapper>
            <SectionSemiTitle>VoxNoteAI</SectionSemiTitle>
            <SectionExplanation>
              On-Device Voice Transcription, Summarization & Translation App
            </SectionExplanation>
            <TechStack>
              Technologies: SwiftUI, Claude Code, Claude Design, WhisperKit, MLX Swift, Apple Translation API, SwiftData, AVAudioEngine
            </TechStack>
            <AppDescription>
              - Built a fully on-device voice AI app using WhisperKit (Whisper large-v3) for speech-to-text transcription with no data leaving the device
            </AppDescription>
            <AppDescription>
              - Integrated WhisperKit, MLX (Qwen2.5), and Apple Translation API for a complete offline AI pipeline
            </AppDescription>
            <AppDescription>
              - Engineered real-time transcription via AVAudioEngine with live streaming output
            </AppDescription>
            <AppDescription>
              - Architected multiplatform SwiftUI app with @Observable MVVM and SwiftData
            </AppDescription>
            <AppDescription>
              - Designed a hierarchical folder system with drag-and-drop organization and persistent transcript storage
            </AppDescription>

            <ImageGallery>
              <ProjectImage
                src={vox1}
                width={400}
                height={300}
                alt="VoxNoteAI screenshot 1"
              />
              <ProjectImage
                src={vox2}
                width={400}
                height={300}
                alt="VoxNoteAI screenshot 2"
              />
            </ImageGallery>

            <AppLinks macos="https://apps.apple.com/us/app/voxnoteai/id6772690463?mt=12" />
          </SectionContentWrapper>


          <SectionContentWrapper>
            <SectionSemiTitle>CoreML & iOS</SectionSemiTitle>
            <ProjectGrid>
              <ProjectCardComponent
                title="Data Preparation & transfer learning"
                image={transfer1}
                imageWidth={320}
                imageHeight={150}
                description="End-to-end pipeline for custom data collection, annotation, and training optimized YOLO models for mobile via transfer learning."
                link="https://medium.com/@eden.parkdev/developing-a-document-recognition-model-with-coreml-through-transfer-learning-95a2554cbf51"
              />
              <ProjectCardComponent
                title="Embedding a model into an iOS app"
                image={transfer2}
                imageWidth={100}
                imageHeight={145}
                description="Edge AI: Real-time Document - Detection Deploying Custom Transfer Learning Models via CoreML for On-device Inference."
                link="https://medium.com/@eden.parkdev/integrating-a-transfer-learning-based-coreml-model-for-real-time-camera-inference-39e8c470dd36"
              />
            </ProjectGrid>
          </SectionContentWrapper>
        </Container>
      </PersonalProjectsSection>

      <EducationSection>
        <Container>
          <SectionTitle>Education</SectionTitle>
          <SectionContentWrapper>
            <EducationWrapper>
              <EducationYear>2025 - 2026</EducationYear>
              <div>
                <EducationContent>
                  Master of Data Science, University of British Columbia,
                  Vancouver, Canada
                </EducationContent>
                <EducationContent>GPA: 3.94/4.0</EducationContent>
              </div>
            </EducationWrapper>
          </SectionContentWrapper>
        </Container>
      </EducationSection>
    </>
  );
};

export default Intro;
