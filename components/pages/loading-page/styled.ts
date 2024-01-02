import styled from 'styled-components'

export const LoadingPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ClickableIconWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  padding: 8px;
  border-radius: 50%;
  transition-duration: 0.5s;

  &:hover {
    transform: scale(1.2);
    & i {
      opacity: 0.85;
    }
  }
`
