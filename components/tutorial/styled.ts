import styled, { css } from 'styled-components'
import { zIndex } from 'styles'

import { devices } from '@constants/screens-conf'

type TutorialWrapperProps = { isTutorialOpened: boolean }
type LogosekWrapperProps = { isTutorialOpened: boolean }

export const TutorialWrapper = styled.div<TutorialWrapperProps>`
  position: fixed;
  z-index: ${zIndex.xl};
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  left: 0px;
  
  transition-duration: 1s;

  ${({ isTutorialOpened, theme }) =>
    isTutorialOpened
      ? css`
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 64px;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
          border: 8px double ${theme.colors.lightGreen};
          height: fit-content;
          padding: 0 48px;
          
          width: 90%;

          @media ${devices.tablet} {
            width: 60%;
          }
          @media ${devices.laptop} {
            width: 460px;
          }
          
        `
      : css`
          left: 0%;
          bottom: 0%;

          transform: translate(-0%, -0%);
          background: transparent;
          box-shadow: none;
        `}
        
        transition-property: left, bottom, transform;
 
`

export const BlobContainer = styled.div<TutorialWrapperProps>`
  position: relative;

  display: flex;
  flex-direction: column;
`

export const LogosekWrapper = styled.div<LogosekWrapperProps>`
  cursor: pointer;
  height: 160px;
  width: 160px;

  @media ${devices.laptop} {
    height: 280px;
    width: 280px;
  }

  ${({ isTutorialOpened }) =>
    isTutorialOpened
      ? css`
          height: 280px;
          width: 280px;
          transition-duration: 1s;

          @media ${devices.laptop} {
            height: 360px;
            width: 360px;
          }
        `
      : null}
`

export const BubbleWrapper = styled.div`
  position: relative;

  article > div > p {
    overflow: hidden;
    border-right: 2px solid transparent;
    padding-right: 2px;
    margin: 0 auto;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
  gap: 8px;
`

export const TutorialContainer = styled.div`
  position: relative;
`
