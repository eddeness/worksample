import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, CardContent } from '../components/CommonComponents';
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

export default function Intro() {
  return (
    <>
      <div className="introsection">
        <Container>
          <div className="d-flex flex-column justify-content-center Im-text-section">
            <span className="Im-text">
              Hello, I'm <span className="name-Im-text">Seungmyun Park</span>
            </span>
            <br />
            <br />
            <span className="Im-text-enthusiastic py-2">
              Software engineer 😎
            </span>
            <br />
            <br />

            <DefaultDiv style={{ color: 'white' }}>
              Crafting intelligent apps with advanced analytics and AI
              integration.
            </DefaultDiv>
          </div>
        </Container>
      </div>

      <div className="about-me-section">
        <Container style={{ paddingTop: 40 }}>
          <div className="section-content-wrapper">
            <div className="section-title">About Me</div>
            <DefaultDiv style={{ paddingTop: 40 }}>
              💻 I am a software engineer with 6+ years of industry experience
              and a proven track record of delivering data-driven features that
              contribute to company growth.
            </DefaultDiv>
            <DefaultDiv>
              🦾 My current focus is on iOS development, and I also have
              expertise in backend programming using Python and PHP to handle
              end-to-end requirements as needed. Much of my work has guided by
              analyzing user behavior and optimizing features to inform
              strategic product decisions.
            </DefaultDiv>
            <DefaultDiv>
              👩🏼‍💻 To deepen my expertise and apply these skills effectively, I am
              currently pursuing a Master of Data Science at the University of
              British Columbia.
            </DefaultDiv>
            <DefaultDiv>
              💡 I thrive on solving complex challenges and am dedicated to
              incorporating AI technologies into mobile ecosystems to create
              more intelligent, user-centric applications.
            </DefaultDiv>
            <DefaultDiv>
              🛠 This website was developed from scratch using React, TypeScript,
              and GitHub Pages.
            </DefaultDiv>
          </div>
        </Container>
      </div>

      <div className="personal-sample-section">
        <Container style={{ paddingTop: 40 }}>
          <div className="section-title">Personal Projects</div>

          <div className="section-content-wrapper">
            <div className="section-semi-title">Scan To Doc</div>
            <div className="section-semi-explanation">
              Intelligent Document Digitization App
            </div>
            <div className="section-tech-explanation">
              Technologies: OpenCV (C++), Objective-C/C++, RxSwift, SnapKit,
              PencilKit
            </div>
            <div className="section-app-description">
              - Engineered core image processing features using OpenCV (C++) to
              implement real-time sharpening and brightness optimization.
            </div>
            <div className="section-app-description">
              - Implemented Vision-based document recognition to automate
              precise boundary detection and perspective correction.
            </div>
            <div className="section-app-description">
              - Architected a robust document management system using
              directory-based file structures and PencilKit integration.
            </div>
            <div className="section-app-description">
              - Developed data sharing workflows using Share Extensions and App
              Groups for cross-platform utility.
            </div>

            <div className="scantodoc-gallery">
              <div>
                <img src={scanToDoc1} style={{ width: 150, height: 300 }} />
              </div>
              <div>
                <img src={scanToDoc2} style={{ width: 150, height: 300 }} />
              </div>
              <div>
                <img src={scanningBooks} style={{ width: 150, height: 300 }} />
              </div>
              <div>
                <img src={shareBook} style={{ width: 200, height: 300 }} />
              </div>
            </div>
            <div className="app-link-wrapper">
              <a
                href="https://apps.apple.com/gb/app/scan-to-doc/id1542458261"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="app-link-button">iOS</button>
              </a>
            </div>
          </div>

          <div className="section-content-wrapper">
            <div className="section-semi-title">CoreML & iOS</div>
            <div className="project-grid">
              <div className="project-card">
                <p className="project-card-title">
                  Data Preparation & transfer learning
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <ChartImg
                    src={transfer1}
                    style={{ width: 320, height: 150 }}
                  />
                </div>
                <CardContent>
                  End-to-end pipeline for custom data collection, annotation,
                  and training optimized YOLO models for mobile via transfer
                  learning.
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a
                    href="https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%AC%B8%EC%84%9C-%EC%9D%B8%EC%8B%9D-%EB%AA%A8%EB%8D%B8-coreml-%EA%B0%9C%EB%B0%9C%EA%B8%B0-81b20b5e8571"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="project-card-button">
                      Read case study
                    </button>
                  </a>
                </div>
              </div>
              <div className="project-card">
                <p className="project-card-title">
                  Embedding a model into an iOS app
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <ChartImg
                    src={transfer2}
                    style={{ width: 100, height: 145 }}
                  />
                </div>
                <CardContent>
                  Edge AI: Real-time Document - Detection Deploying Custom
                  Transfer Learning Models via CoreML for On-device Inference.
                </CardContent>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <a
                    href="https://medium.com/@eden.parkdev/%EC%A0%84%EC%9D%B4-%ED%95%99%EC%8A%B5%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A0-coreml-%EB%AA%A8%EB%8D%B8-%EB%84%A3%EA%B3%A0-%EC%B9%B4%EB%A9%94%EB%9D%BC%EB%A1%9C-%EC%9D%B8%EC%8B%9D%EC%8B%9C%ED%82%A4%EA%B8%B0-890ac737b476"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="project-card-button">
                      Read case study
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="work-sample-section">
          <Container style={{ paddingTop: 40 }}>
            <div className="section-title">Work experience</div>
            <div className="section-content-wrapper">
              <div className="section-semi-title">
                AutoCapture(iOS) / AutoCompose(Mac)
              </div>
              <div className="section-semi-explanation">
                Enterprise Car-Capture & 360° View Generation System
              </div>
              <div className="section-tech-explanation">
                Technologies: OpenCV, Canon SDK, Bluetooth, GCD web server,
                Firebase MLKit
              </div>
              <div className="section-app-description">
                - Executed a full-scale legacy migration from Objective-C to
                Swift, leveraging SwiftRewriter to enhance codebase
                maintainability and performance.
              </div>
              <div className="section-app-description">
                - Implemented Computer Vision algorithms to detect and segment
                vehicles, automating the creation of seamless 360° interactive
                views.
              </div>
              <div className="section-app-description">
                - Orchestrated complex hardware integrations with the Canon SDK
                via Bluetooth, utilizing Apple’s Combine (zip, flatMap, retry)
                to handle multiple concurrent asynchronous events.
              </div>
              <div className="section-app-description">
                - Refactored networking infrastructure from AFNetworking to
                native URLSession, significantly improving system robustness and
                reducing external dependencies.
              </div>
              <div className="autocapture-gallery">
                <div>
                  <img
                    src={multipleCapture}
                    style={{ width: 250, height: 125 }}
                  />
                </div>
                <p>→</p>
                <div>
                  <img src={carCapture} style={{ width: 250, height: 125 }} />
                </div>
              </div>
              <div className="autocapture-gallery">
                <div>
                  <img src={cutAppCars} style={{ width: 200, height: 100 }} />
                </div>
                <p>→</p>
                <div>
                  <img src={carsOnWeb} style={{ width: 250, height: 150 }} />
                </div>
                <p>→</p>
                <div>
                  <img src={rotatingCar} style={{ width: 200, height: 100 }} />
                </div>
              </div>
              <div className="app-link-wrapper">
                <a
                  href="https://apps.apple.com/gb/app/aos-autocapture/id1115610872"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="app-link-button">iOS</button>
                </a>
                <a
                  href="https://download.aos.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="app-link-button">macOS</button>
                </a>
              </div>
            </div>

            <div className="section-content-wrapper">
              <div className="section-semi-title">Sticpay iOS Application</div>
              <div className="section-semi-explanation">
                Payment and money transfer application
              </div>
              <div className="section-tech-explanation">
                Technologies: Swift, MVVM, SnapKit, RxSwift, Alamofire,
                Firebase, SwiftLint
              </div>
              <div className="section-app-description">
                - Native Migration: Spearheaded the migration of the Sticpay
                application from React Native to a fully native iOS environment
                to enhance performance and user experience.
              </div>
              <div className="section-app-description">
                - Core Fintech Features: Developed mission-critical features:
                multi-currency wallet management, real-time currency exchange,
                and secure payment processing.
              </div>
              <div className="section-app-description">
                - Regional Optimization: Configured multi-target build schemes
                to efficiently manage and distribute Global and China-specific
                versions from a single codebase.
              </div>
              <div className="section-app-description">
                - Full Lifecycle Ownership: Owned the entire development
                lifecycle, from initial architecture design and implementation
                to App Store distribution and maintenance.
              </div>

              <div className="section-semi-title">
                Sticpay React-Native Application
              </div>
              <div className="section-tech-explanation">
                Technologies: JavaScript (ES6), Redux, Flow, Axios, Jest,
                ESLint/Prettier
              </div>
              <div className="section-app-description">
                - Architectural Transition: Collaborated on transitioning a
                legacy web-view-based application to React Native, significantly
                improving app responsiveness and fluidity.
              </div>
              <div className="section-app-description">
                - State & Async Management: Engineered complex state management
                and asynchronous data flows using Redux and modern JavaScript
                (ES6+) patterns.
              </div>
              <div className="section-app-description">
                - Native Bridge Development: Developed custom Native Modules in
                Java (Android) and Objective-C (iOS) to bridge platform-specific
                functionalities into the React Native
              </div>
              <div className="section-app-description">
                - Stability Optimization: Maintained high application stability,
                keeping the crash-free rate above 99.7% through proactive
                monitoring and debugging via Firebase Crashlytics.
              </div>

              <div className="scantodoc-gallery">
                <div>
                  <img src={sticpay1} style={{ width: 150, height: 300 }} />
                </div>
                <div>
                  <img src={sticpay2} style={{ width: 150, height: 300 }} />
                </div>
                <div>
                  <img src={sticpay3} style={{ width: 150, height: 300 }} />
                </div>
                <div>
                  <img src={sticpay4} style={{ width: 150, height: 300 }} />
                </div>
              </div>
              <div className="app-link-wrapper">
                <a
                  href="https://apps.apple.com/gb/app/sticpay/id1274956968"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="app-link-button">iOS</button>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sticpay.app.sticpay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="app-link-button">Android</button>
                </a>
              </div>
            </div>

            <div className="section-content-wrapper">
              <div className="section-semi-title">
                Supervank Android application
              </div>
              <div className="section-semi-explanation">
                Stock market-linked reward platform with investment simulation
              </div>
              <div className="section-tech-explanation">
                Technologies: Java, MVC, Ad SDK (Meta, Unity, Google), Camera
                API, Glide, ContentProvider
              </div>
              <div className="section-app-description">
                - Pedometer Engineering: Developed an activity tracking system
                using gyro sensors to provide detailed fitness analytics (steps,
                distance, and calories).
              </div>
              <div className="section-app-description">
                - Investment Simulation: Created intuitive UI/UX for users to
                track investment outcomes based on real-world stock market data.
              </div>
              <div className="section-app-description">
                - Optimized Media Handling: Engineered custom-built Camera and
                Gallery modules to improve user experience beyond standard
                system components.
              </div>
              <div className="section-app-description" style={{ color: 'red' }}>
                - Due to the company's policy, this app is currently down from
                the play store
              </div>

              <div className="scantodoc-gallery">
                <div>
                  <img src={supervank1} style={{ width: 150, height: 300 }} />
                </div>
                <div>
                  <img src={supervank2} style={{ width: 150, height: 300 }} />
                </div>
                <div>
                  <img src={supervank3} style={{ width: 150, height: 300 }} />
                </div>
                <div>
                  <img src={supervank4} style={{ width: 200, height: 300 }} />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="education-section">
          <Container style={{ paddingTop: 40 }}>
            <div className="section-title">Education</div>
            <div className="section-content-wrapper">
              <div className="education-wrapper">
                <div className="education-year">2025 - 2026</div>
                <div>
                  <div className="education-content">
                    Master of Data Science, University of British Columbia,
                    Vancouver, Canada
                  </div>
                  <div className="education-content" style={{ paddingTop: 5 }}>
                    GPA: 3.86/4.0
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

const DefaultDiv = styled.div`
  font-size: 18px;
  padding-top: 20px;
  color: #000000;
  line-height: 120%;
`;

const ChartImg = styled.img`
  width: 300px;
  height: 150px;
  resizeMode: 'cover'
  padding-top: 5px;
  padding-bottom: 5px;
`;
