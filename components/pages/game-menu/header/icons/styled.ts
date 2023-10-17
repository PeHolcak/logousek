import styled from 'styled-components'

import { devices } from '@constants/screens-conf'

export const CharacterSelectionContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const DarkModeSwitchWrapper = styled.div`
  display: none;
  align-items: center;
  margin: 0px 0.3rem;
  @media ${devices.mobileL} {
    display: flex;
  }
`