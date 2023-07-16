import styled, { css } from 'styled-components'
import { zIndex } from 'styles'

import { devices } from '@constants/screens-conf'

type TutorialWrapperProps = { isTutorialOpened: boolean }
type CharacterWrapperProps = { isTutorialOpened: boolean }

const getSizes = (mobileHeight: number, deviceHeight: number, mobileHeightOpened: number, deviceHeightOpened: number,) => css<{ isTutorialOpened: boolean }>`
  height: ${mobileHeight}px;
  aspect-ratio: 1;

  @media ${devices.laptop} {
    height: ${deviceHeight}px;
  }

  ${({ isTutorialOpened }) =>
    isTutorialOpened
      ? css`
          height: ${mobileHeightOpened}px;
          transition-duration: 1s;

          @media ${devices.laptop} {
            height: ${deviceHeightOpened}px;
          }
        `
      : null}
`

export const TutorialWrapper = styled.div<TutorialWrapperProps>`
  position: fixed;
  z-index: ${zIndex.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 1s;
  ${getSizes(120, 200, 200, 240)};

  ${({ isTutorialOpened }) =>
    isTutorialOpened
      ? css`
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          bottom: 24px;
          left: 24px;
                  
          @media ${devices.laptop} {
            bottom: 64px;
            left: 64px;
          }

          transform: translate(-0%, -0%);
        `}


  & > div {
    transition-duration: 1s;
    width: ${({ isTutorialOpened }) => (isTutorialOpened ? '344px' : 'auto')};

    @media ${devices.laptop} {
      width: ${({ isTutorialOpened }) => (isTutorialOpened ? '440px' : 'auto')};
    }
  }
`

export const BlobContainer = styled.div<TutorialWrapperProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`

export const CharacterWrapper = styled.div<CharacterWrapperProps>`
  cursor: pointer;

  ${getSizes(120, 200, 200, 240)};
`

export const Character = styled.img`
  width: 100%;
  height: 100%;
  /* padding: 20px; */
`

export const BubbleWrapper = styled.div`
  position: relative;
  margin-top: -32px;

  article > div > p {
    overflow: hidden;
    border-right: 2px solid transparent;
    padding-right: 2px;
    margin: 0 auto;
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.colors.red};
    }
  }

  @media ${devices.laptop} {
    width: 100%;
    position: absolute;    
    left: 300px;
    top: 150px;
    margin-top: 0;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  margin: 8px;
  gap: 8px;
`

export const TutorialContainer = styled.div`
  position: relative;
`
