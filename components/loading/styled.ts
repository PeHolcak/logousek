import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`

export const LoadingAnimation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 64px;
  @keyframes pump2 {
    from {
      transform: scaleX(0.8);
    }

    to {
      transform: scaleX(1.1);
      opacity: 1;
    }
  }

  animation: pump2 2s linear infinite;
  animation-direction: alternate-reverse;
`

export const LoadingAnimationPart = styled.div<{ index: number }>`
  @keyframes downsizing {
    from {
      height: 80px;
      opacity: 1;
    }

    to {
      height: 24px;
      opacity: 0.5;
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }

  height: 80px;
  width: 16px;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 8px;

  animation: 2s ease-in-out ${({ index }) => index / 2}s infinite downsizing;
`
