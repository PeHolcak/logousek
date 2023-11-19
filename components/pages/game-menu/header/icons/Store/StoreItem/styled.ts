import styled, { css } from 'styled-components'

import { P2, P5 } from '@components/typography/paragraph'
import { devices } from '@constants/screens-conf'


type CharacterImageProps = {
  src: string
}

export const Image = styled.div<CharacterImageProps>`
  width: 100%;
  aspect-ratio: 1;

  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media ${devices.mobileL} {
    width: 112px;
  }

  @media ${devices.tablet} {
    width: 160px;
  }
  @media ${devices.desktop} {
    width: 240px;
  }
`

export const Label = styled(P2)`
`

export const Cost = styled(P5)`
  padding: 8px 0;
`



type StoreItemContainerProps = {
  isOwned: boolean
}

export const StoreItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  position: relative;

`

export const ImageContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
`
export const ImageWrapper = styled.div<StoreItemContainerProps>`
  ${({ isOwned }) => isOwned ? null : css`
    filter:  grayscale(100%) brightness(0.5) blur(5px);
  `}

  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ImageOverlapElementWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`