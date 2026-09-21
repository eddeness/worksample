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
import { getTranslations } from '../i18n/translations';

interface ProjectCardProps {
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  link: string;
  buttonLabel: string;
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
  buttonLabel,
}) => (
  <ProjectCard>
    <ProjectCardTitle>{title}</ProjectCardTitle>
    <ChartImg src={image} width={imageWidth} height={imageHeight} alt={title} />
    <p>{description}</p>
    <ProjectCardButton href={link} target="_blank" rel="noopener noreferrer">
      {buttonLabel}
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
  const t = getTranslations();
  return (
    <>
      <IntroSection>
        <Container>
          <IntroTextSection>
            <IntroGreeting>
              {t.greetingPrefix}
              <IntroName>{t.name}</IntroName>
              {t.greetingSuffix}
            </IntroGreeting>
            <IntroTitle>{t.jobTitle}</IntroTitle>
          </IntroTextSection>
        </Container>
      </IntroSection>

      <AboutMeSection>
        <Container>
          <SectionContentWrapper>
            <SectionTitle>{t.aboutTitle}</SectionTitle>
            {t.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </SectionContentWrapper>
        </Container>
      </AboutMeSection>

      <WorkExperienceSection>
        <Container>
          <SectionTitle>{t.workTitle}</SectionTitle>

          <SectionContentWrapper>
            <SectionSemiTitle>{t.autocapture.title}</SectionSemiTitle>
            <SectionExplanation>{t.autocapture.subtitle}</SectionExplanation>
            <TechStack>{t.autocapture.tech}</TechStack>
            {t.autocapture.points.map((point, i) => (
              <AppDescription key={i}>{point}</AppDescription>
            ))}

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
            <SectionSemiTitle>{t.sticpayIos.title}</SectionSemiTitle>
            <SectionExplanation>{t.sticpayIos.subtitle}</SectionExplanation>
            <TechStack>{t.sticpayIos.tech}</TechStack>
            {t.sticpayIos.points.map((point, i) => (
              <AppDescription key={i}>{point}</AppDescription>
            ))}

            <SectionSemiTitle style={{ marginTop: '2rem' }}>
              {t.sticpayRn.title}
            </SectionSemiTitle>
            <TechStack>{t.sticpayRn.tech}</TechStack>
            {t.sticpayRn.points.map((point, i) => (
              <AppDescription key={i}>{point}</AppDescription>
            ))}

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
            <SectionSemiTitle>{t.supervank.title}</SectionSemiTitle>
            <SectionExplanation>{t.supervank.subtitle}</SectionExplanation>
            <TechStack>{t.supervank.tech}</TechStack>
            {t.supervank.points.map((point, i) => (
              <AppDescription key={i}>{point}</AppDescription>
            ))}
            <AppDescription style={{ color: '#dc3545' }}>
              {t.supervank.note}
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
          <SectionTitle>{t.personalTitle}</SectionTitle>

          <SectionContentWrapper>
            <SectionSemiTitle>{t.scanolio.title}</SectionSemiTitle>
            <SectionExplanation>{t.scanolio.subtitle}</SectionExplanation>
            <TechStack>{t.scanolio.tech}</TechStack>
            {t.scanolio.points.map((point, i) => (
              <AppDescription key={i}>{point}</AppDescription>
            ))}

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
            <SectionSemiTitle>{t.vox.title}</SectionSemiTitle>
            <SectionExplanation>{t.vox.subtitle}</SectionExplanation>
            <TechStack>{t.vox.tech}</TechStack>
            {t.vox.points.map((point, i) => (
              <AppDescription key={i}>{point}</AppDescription>
            ))}

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
            <SectionSemiTitle>{t.coremlTitle}</SectionSemiTitle>
            <ProjectGrid>
              <ProjectCardComponent
                title={t.card1.title}
                image={transfer1}
                imageWidth={320}
                imageHeight={150}
                description={t.card1.description}
                link="https://medium.com/@eden.parkdev/developing-a-document-recognition-model-with-coreml-through-transfer-learning-95a2554cbf51"
                buttonLabel={t.readCaseStudy}
              />
              <ProjectCardComponent
                title={t.card2.title}
                image={transfer2}
                imageWidth={100}
                imageHeight={145}
                description={t.card2.description}
                link="https://medium.com/@eden.parkdev/integrating-a-transfer-learning-based-coreml-model-for-real-time-camera-inference-39e8c470dd36"
                buttonLabel={t.readCaseStudy}
              />
            </ProjectGrid>
          </SectionContentWrapper>
        </Container>
      </PersonalProjectsSection>

      <EducationSection>
        <Container>
          <SectionTitle>{t.educationTitle}</SectionTitle>
          <SectionContentWrapper>
            <EducationWrapper>
              <EducationYear>{t.educationYear}</EducationYear>
              <div>
                <EducationContent>{t.educationDegree}</EducationContent>
                <EducationContent>{t.educationGpa}</EducationContent>
              </div>
            </EducationWrapper>
          </SectionContentWrapper>
        </Container>
      </EducationSection>
    </>
  );
};

export default Intro;
