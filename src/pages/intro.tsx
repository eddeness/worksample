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
          <div className="section-title">About Me</div>
          <DefaultDiv style={{ paddingTop: 40 }}>
            💻 I am a software engineer with 6+ years of industry experience and
            a proven track record of delivering data-driven features that
            contribute to company growth.
          </DefaultDiv>
          <DefaultDiv>
            🦾 My current focus is on iOS development, and I also have expertise
            in backend programming using Python and PHP to handle end-to-end
            requirements as needed. Much of my work has guided by analyzing user
            behavior and optimizing features to inform strategic product
            decisions.
          </DefaultDiv>
          <DefaultDiv>
            👩🏼‍💻 To deepen my expertise and apply these skills effectively, I am
            currently pursuing a Master of Data Science at the University of
            British Columbia.
          </DefaultDiv>
          <DefaultDiv>
            💡 I thrive on solving complex challenges and am dedicated to
            incorporating AI technologies into mobile ecosystems to create more
            intelligent, user-centric applications.
          </DefaultDiv>
          <DefaultDiv>
            🛠 This website was developed from scratch using React, TypeScript,
            and GitHub Pages.
          </DefaultDiv>
        </Container>
      </div>
      <div className="work-sample-section">
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
