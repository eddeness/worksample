import styled from 'styled-components';

// Color constants for consistency
const COLORS = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    dark: '#333',
    medium: '#3e424b',
    cadet: '#5f9ea0',
    slate: '#708090',
    dim: '#544c4a',
  },
} as const;

// Main container with responsive padding
export const Container = styled.div`
  padding: 4.375rem 15.625rem 6.25rem;

  @media (max-width: 1400px) {
    padding: 4.375rem 8rem 6.25rem;
  }

  @media (max-width: 992px) {
    padding: 4.375rem 4rem 6.25rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
  }
`;

// Menu components
export const Menu = styled.div`
  height: 100vh;
  position: sticky;
  display: flex;
  align-items: center;
  width: 15.625rem;
  background-color: ${COLORS.gray.dark};
  color: ${COLORS.white};
  padding: 1.25rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MenuTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
`;

export const MenuDiv = styled.div`
  font-size: 1.125rem;
  color: ${COLORS.gray.medium};
  padding-left: 1.25rem;
  padding-top: 0.625rem;
  line-height: 1.5;
`;

// Typography components
export const BigTitle = styled.h1`
  font-size: 2.5rem;
  color: ${COLORS.gray.cadet};
  font-weight: bold;
  margin: 0;
`;

export const SemiTitle = styled.h2`
  font-size: 1.5625rem;
  color: ${COLORS.gray.slate};
  font-weight: bold;
  padding: 1.875rem 0 0.625rem;
  margin: 0;
`;

export const NumberTitle = styled.h3`
  font-size: 1.375rem;
  color: ${COLORS.gray.dim};
  font-weight: 600;
  padding: 0.9375rem 0;
  margin: 0;
`;

export const DefaultDiv = styled.div`
  font-size: 1.25rem;
  color: ${COLORS.black};
  padding-top: 1.875rem;
  line-height: 1.2;
`;

// Card components
export const CardContent = styled.p`
  font-size: 0.875rem;
  padding: 0.625rem 0;
  margin: 0;
  line-height: 1.5;
`;

// Utility type for styled component props
export type StyledComponentProps = {
  className?: string;
  children?: React.ReactNode;
};
