import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const ScoreWrapper = styled.div`
  padding-right: 10px;
  display: flex;
  gap: 16px;
  width: 100%;
  @media ${devices.tablet} {
    width: auto;
  }
`

export const ScoreText = styled.p`
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`
