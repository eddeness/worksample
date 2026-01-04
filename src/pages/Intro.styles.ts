import styled from 'styled-components';

// Color constants
const COLORS = {
  primary: '#02203c',
  secondary: '#001528',
  standout: '#fffb00',
  workBackground: '#f1f3f5',
  white: '#ffffff',
  black: '#000000',
  gray: {
    light: '#f1f3f5',
    medium: '#495057',
    dark: '#333',
  },
  blue: {
    light: '#4facfe',
    medium: '#1e3a8a',
    dark: '#0f172a',
    accent: '#1f456e',
  },
  danger: '#dc3545',
} as const;

// Intro Section
export const IntroSection = styled.section`
  display: block;
  width: 100vw;
  position: relative;
  background: linear-gradient(-90deg, ${COLORS.primary}, ${COLORS.secondary});
  clip-path: polygon(0 0, 100% 0, 100% 84%, 75% 100%, 25% 100%, 0 84%);
`;

export const IntroTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  text-align: center;
`;

export const IntroGreeting = styled.p`
  font-family: 'Ubuntu', sans-serif;
  color: ${COLORS.white};
  font-weight: 700;
  font-size: 1.4rem;
  margin: 0;
`;

export const IntroName = styled.span`
  color: ${COLORS.standout};
  font-size: 1.75rem;
`;

export const IntroTitle = styled.h1`
  font-family: sans-serif;
  color: ${COLORS.white};
  font-size: 2.5rem;
  font-weight: 400;
  padding: 1rem 0;
  margin: 1rem 0;
`;

export const IntroSubtitle = styled.p`
  color: ${COLORS.white};
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 1rem;
`;

// About Me Section
export const AboutMeSection = styled.section`
  display: block;
  width: 100vw;
  background: ${COLORS.white};

  p {
    font-size: 1.125rem;
    padding-top: 1.25rem;
    color: ${COLORS.black};
    line-height: 1.6;
    margin: 0;
  }
`;

// Personal Projects Section
export const PersonalProjectsSection = styled.section`
  display: block;
  width: 100vw;
  padding: 3.125rem 0 6.25rem;
  background: ${COLORS.workBackground};
`;

// Work Experience Section
export const WorkExperienceSection = styled.section`
  display: block;
  width: 100vw;
  padding: 3.125rem 0 6.25rem;
  background: ${COLORS.white};
`;

// Education Section
export const EducationSection = styled.section`
  display: block;
  width: 100vw;
  padding: 3.125rem 0 6.25rem;
  background: ${COLORS.workBackground};
`;

// Common Section Components
export const SectionContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.875rem;
  padding-left: 0.625rem;
`;

export const SectionTitle = styled.h2`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 3rem;
  text-decoration: underline;
  text-align: center;
  margin: 0;
  padding: 2.5rem 0 0;
`;

export const SectionSemiTitle = styled.h3`
  font-family: monospace;
  padding-top: 2.5rem;
  padding-left: 0.625rem;
  font-weight: 800;
  font-size: 2rem;
  letter-spacing: 0.0625rem;
  margin: 0;
`;

export const SectionExplanation = styled.p`
  color: ${COLORS.gray.medium};
  padding: 0.3125rem 0.3125rem 0;
  font-size: 1.5rem;
  margin: 0;
`;

export const TechStack = styled.p`
  color: ${COLORS.blue.accent};
  padding: 1.25rem 0.3125rem 0.3125rem;
  font-size: 1rem;
  font-weight: bold;
  font-style: italic;
  margin: 0;
`;

export const AppDescription = styled.p`
  font-size: 1rem;
  padding: 0 0.3125rem 0.125rem;
  margin: 0;
`;

// Image Gallery Components
export const ImageGallery = styled.div`
  padding-top: 1.25rem;
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

interface ProjectImageProps {
  width: number;
  height: number;
}

export const ProjectImage = styled.img<ProjectImageProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const GalleryArrow = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: ${COLORS.gray.dark};
`;

// App Links
export const AppLinkWrapper = styled.div`
  padding-top: 1.25rem;
  display: flex;
  gap: 3.125rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const AppLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${COLORS.blue.dark} 0%,
    ${COLORS.blue.medium} 100%
  );
  color: ${COLORS.white};
  padding: 0.75rem 1.75rem;
  border-radius: 3.125rem;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  min-width: 8.75rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 0.25rem 0.9375rem rgba(79, 172, 254, 0.4);

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.375rem 1.25rem rgba(79, 172, 254, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Project Grid and Cards
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.875rem;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  border-radius: 1rem;
  box-shadow: 0 0.375rem 1.125rem rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  transition: all 0.25s ease;
  justify-content: space-between;
  gap: 1rem;

  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15);
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${COLORS.gray.medium};
    margin: 0;
    padding: 0;
  }
`;

export const ProjectCardTitle = styled.h4`
  font-family: sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0.5rem 0;
`;

interface ChartImgProps {
  width: number;
  height: number;
}

export const ChartImg = styled.img<ChartImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  object-fit: cover;
  margin: 0 auto;
  display: block;
  border-radius: 0.5rem;
`;

export const ProjectCardButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0.875rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: ${COLORS.white};
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.75rem rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Education Components
export const EducationWrapper = styled.div`
  padding-top: 1.25rem;
  display: flex;
  gap: 6.25rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const EducationYear = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${COLORS.black};
  min-width: 8rem;
`;

export const EducationContent = styled.div`
  padding-top: 0.3125rem;
  font-size: 1.125rem;
  color: ${COLORS.black};
  line-height: 1.6;
`;
