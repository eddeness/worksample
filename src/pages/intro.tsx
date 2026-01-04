import React from 'react';
import { Container } from '../components/CommonComponents';
import {
  IntroSection,
  IntroTextSection,
  IntroName,
  IntroGreeting,
  IntroTitle,
  IntroSubtitle,
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
import {
  scanToDoc1,
  scanToDoc2,
  scanningBooks,
  shareBook,
} from '../images/scantodoc';
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
            <IntroSubtitle>
              Crafting intelligent apps with advanced analytics and AI
              integration.
            </IntroSubtitle>
          </IntroTextSection>
        </Container>
      </IntroSection>

      <AboutMeSection>
        <Container>
          <SectionContentWrapper>
            <SectionTitle>About Me</SectionTitle>
            <p>
              💻 I am a software engineer with 6+ years of industry experience
              and a proven track record of delivering data-driven features that
              contribute to company growth.
            </p>
            <p>
              🦾 My current focus is on iOS development, and I also have
              expertise in backend programming using Python and PHP to handle
              end-to-end requirements as needed. Much of my work has guided by
              analyzing user behavior and optimizing features to inform
              strategic product decisions.
            </p>
            <p>
              👩🏼‍💻 To deepen my expertise and apply these skills effectively, I am
              currently pursuing a Master of Data Science at the University of
              British Columbia.
            </p>
            <p>
              💡 I thrive on solving complex challenges and am dedicated to
              incorporating AI technologies into mobile ecosystems to create
              more intelligent, user-centric applications.
            </p>
            <p>
              🛠 This website was developed from scratch using React, TypeScript,
              and GitHub Pages.
            </p>
          </SectionContentWrapper>
        </Container>
      </AboutMeSection>

      <PersonalProjectsSection>
        <Container>
          <SectionTitle>Personal Projects</SectionTitle>

          <SectionContentWrapper>
            <SectionSemiTitle>Scan To Doc</SectionSemiTitle>
            <SectionExplanation>
              Intelligent Document Digitization App
            </SectionExplanation>
            <TechStack>
              Technologies: OpenCV (C++), Objective-C/C++, RxSwift, SnapKit,
              PencilKit
            </TechStack>
            <AppDescription>
              - Engineered core image processing features using OpenCV (C++) to
              implement real-time sharpening and brightness optimization.
            </AppDescription>
            <AppDescription>
              - Implemented Vision-based document recognition to automate
              precise boundary detection and perspective correction.
            </AppDescription>
            <AppDescription>
              - Architected a robust document management system using
              directory-based file structures and PencilKit integration.
            </AppDescription>
            <AppDescription>
              - Developed data sharing workflows using Share Extensions and App
              Groups for cross-platform utility.
            </AppDescription>

            <ImageGallery>
              <ProjectImage
                src={scanToDoc1}
                width={150}
                height={300}
                alt="Scan To Doc screenshot 1"
              />
              <ProjectImage
                src={scanToDoc2}
                width={150}
                height={300}
                alt="Scan To Doc screenshot 2"
              />
              <ProjectImage
                src={scanningBooks}
                width={150}
                height={300}
                alt="Scanning books"
              />
              <ProjectImage
                src={shareBook}
                width={200}
                height={300}
                alt="Share book"
              />
            </ImageGallery>

            <AppLinks ios="https://apps.apple.com/gb/app/scan-to-doc/id1542458261" />
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
                link="https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%AC%B8%EC%84%9C-%EC%9D%B8%EC%8B%9D-%EB%AA%A8%EB%8D%B8-coreml-%EA%B0%9C%EB%B0%9C%EA%B8%B0-81b20b5e8571"
              />
              <ProjectCardComponent
                title="Embedding a model into an iOS app"
                image={transfer2}
                imageWidth={100}
                imageHeight={145}
                description="Edge AI: Real-time Document - Detection Deploying Custom Transfer Learning Models via CoreML for On-device Inference."
                link="https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-coreml-%EB%AA%A8%EB%8D%B8-%EB%84%A3%EA%B3%A0-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A1%9C-%EC%9D%B8%EC%8B%9D%EC%8B%9C%ED%82%A4%EA%B8%B0-890ac737b476"
              />
            </ProjectGrid>
          </SectionContentWrapper>
        </Container>
      </PersonalProjectsSection>

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
                <EducationContent>GPA: 3.86/4.0</EducationContent>
              </div>
            </EducationWrapper>
          </SectionContentWrapper>
        </Container>
      </EducationSection>
    </>
  );
};

export default Intro;
