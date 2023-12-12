import styled, { css } from 'styled-components'

import { P3 } from '@components/typography/paragraph'
import { devices } from '@constants/screens-conf'

export const TopPlayerItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 40px;
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
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
  ${({ isCurrentPlayer }) =>
        isCurrentPlayer
            ? css`
          color: white;
          background: green;
          border-radius: 8px;
          padding: 4px;
        `
            : null}
`
