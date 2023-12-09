import styled from 'styled-components'

import { devices } from '@constants/screens-conf'

export const MobileOnly = styled.div`
  @media ${devices.tablet} {
    display: none;
  }
`

export const DesktopOnly = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: block;
  }
`
