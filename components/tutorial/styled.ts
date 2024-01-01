import styled, { css } from 'styled-components'
import { zIndex } from 'styles'

import { devices, size } from '@constants/screens-conf'
import { OffsetType } from '@components/route-wrapper'

type BlobContainer = { isTutorialOpened: boolean }

type TutorialWrapperProps = { isTutorialOpened: boolean, mobileOffset: OffsetType, desktopOffset: OffsetType }

type CharacterWrapperProps = { isTutorialOpened: boolean }

const OFFSET = "72px"

const getOffset = (offsetType: OffsetType) => {
  switch (offsetType) {
    case "left":
      return css`left: ${OFFSET};`
    case "right":
      return css`right: ${OFFSET};`
    case "top":
      return css`top: ${OFFSET};`
    case "bottom":
      return css`bottom: ${OFFSET};`
    default:
      return css``
  }
}

export const TutorialWrapper = styled.div<TutorialWrapperProps>`
  position: fixed;
  z-index: ${zIndex.xxl};
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition-duration: 1s;
  transition-property: left, bottom, transform;

  ${({ isTutorialOpened, mobileOffset, desktopOffset }) =>
    isTutorialOpened
      ? css`
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-image-slice: 1;
          background-color: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          -webkit-mask-image: radial-gradient(circle at center, black 70%, transparent 100%);
          mask-image: radial-gradient(circle at center, black 80%, transparent 100%);
          border-radius: 64px;
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
          left: 0;
          bottom: 0;

          @media (max-width: ${size.laptop}){
          ${getOffset(mobileOffset)}
          }

          @media ${devices.laptop} {
            bottom: 0;
            ${getOffset(desktopOffset)}
          }

          transform: translate(-0%, -0%);
          background: transparent;
          box-shadow: none;
        `}
        
 
`

export const BlobContainer = styled.div<BlobContainer>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CharacterWrapper = styled.div<CharacterWrapperProps>`
  cursor: pointer;
  height: 96px;
  width: 96px;

  @media ${devices.tablet} {
    height: 200px;
    width: 200px;
  }

  ${({ isTutorialOpened }) =>
    isTutorialOpened
      ? css`
          height: 200px;
          width: 200px;
          padding: 40px;
          transition-duration: 1s;

          @media ${devices.tablet} {
            height: 360px;
            width: 360px;
            padding: 64px;
          }
        `
      : css`
          padding: 8px;

          @media ${devices.tablet} {
            padding: 12px;
          }
      `}
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

  border-radius: ${({ theme }) => theme.radius.primary};
`

type CharacterImageProps = {
  src: string
}

export const CharacterImage = styled.div<CharacterImageProps>`
  width: 100%;
  height: 100%;

  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`