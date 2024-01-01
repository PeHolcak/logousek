import styled, { css } from 'styled-components'

import { devices } from '@constants/screens-conf'

type BlobContainer = { isTutorialOpened: boolean }

type CharacterWrapperProps = { isTutorialOpened: boolean }



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