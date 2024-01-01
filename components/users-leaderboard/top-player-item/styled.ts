import styled, { css } from 'styled-components'

import { P3 } from '@components/typography/paragraph'
import { devices } from '@constants/screens-conf'

export const TopPlayerItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin-bottom: 40px;
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  width: 18vw;
  @media ${devices.tablet} {
    width: auto;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 160px;

  @media ${devices.tablet} {
    width: 144px;
  }
`

type TitleType = {
  isCurrentPlayer: boolean
}

export const Title = styled(P3) <TitleType>`
  max-width: 88px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isCurrentPlayer }) =>
    isCurrentPlayer
      ? css`
          color: white;
          background: green;
          border-radius: 8px;
          padding: 4px;
        `
      : null}

  @media ${devices.tablet} {
   max-width: 100px;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`
