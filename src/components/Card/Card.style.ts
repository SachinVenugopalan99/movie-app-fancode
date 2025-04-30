import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  background: var(--mediumGray);
  border-radius: 8px;
  padding: 16px;
  margin: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.5s ease-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  /* Add a stagger effect for multiple cards */
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(n+5) { animation-delay: 0.5s; }
`; 