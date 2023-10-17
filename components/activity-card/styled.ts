import styled, { css } from 'styled-components'
import { ActivityCardType } from '.'

export const ActivityCardWrapper = styled.div<ActivityCardType>`
  position: relative;
  border-radius: ${({ customRadius }) => customRadius};
  background-color: ${({ color, theme }) => {
    return color || theme.colors.white
  }};
  cursor: ${({ cursor }) => cursor};
  border: ${({ theme, selected }) =>
    selected ? `0.4rem solid ${theme.colors.blue}` : '0.4rem solid transparent'};
  transition-duration: 0.3s;
  overflow: hidden;

  ${({ fill, customAspectRatio }) =>
    fill
      ? css`
          height: 100%;
          width: 100%;
        `
      : css`
          aspect-ratio: ${customAspectRatio};
          height: fit-content;
          width: 10rem;
        `}

  &>svg {
    transform: rotate(${({ rotate }) => rotate}deg);
  }
`

const Icon = styled.i`
  color: white;
  width: 1.5rem;
  height: 1.5rem;
`

export const CheckIcon = styled(Icon)`
  position: absolute;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.blue};
  animation: pump 0.5s forwards;

  @keyframes pump {
    from {
      opacity: 0;
      transform: translateY(-0.5rem) translateX(-1.5rem) scale(0);
    }
    to {
      opacity: 1;
      transform: translateY(0rem) translateX(0rem) scale(1);
    }
  }
`

export const ReferenceIcon = styled(Icon)`
  margin: 4px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.secondary};
`

export const ReferenceWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.xl};

  & a {
    color: ${({ theme }) => theme.colors.blue} !important;
  }
`

export const ReferenceContent = styled.div`
  a {
    color: ${({ theme }) => theme.colors.blue} !important;
  }
`
