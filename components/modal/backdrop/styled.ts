import styled, { css } from 'styled-components'

interface StyledBackdrop {
  show: boolean
}

export const StyledBackdrop = styled.div<StyledBackdrop>`
  ${({ show }) =>
    show
      ? css`
          position: fixed;
          opacity: 0.6;
        `
      : css`
          position: static;
          opacity: 1;
        `};

  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.xxl};
  background-color: ${({ theme }) => theme.colors.black};
  filter: ${({ show }) => (show ? 'blur(0.25rem)' : 'none')};
`
