import styled, { keyframes } from 'styled-components'

type GainedPointsWrapperProps = {
  dataContent: number
  animate: boolean
}

export const pointsAddedAnim = keyframes`
     from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateY(-7rem) scale(3);
    }
`

export const GainedPointsWrapper = styled.div<GainedPointsWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    padding: 0.2rem;
  }

  &::before {
    content: ${({ dataContent, animate }) =>
      `"${animate ? `+${dataContent}` : ''}"`};
    position: absolute;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGreen};
    animation: ${({ animate }) => (animate ? pointsAddedAnim : 'none')} 2s
      forwards;
    transform: translateY(-0.5rem);
  }
`
