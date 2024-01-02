import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const SectionLayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const SectionLayoutContainer = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 0 16px;

  @media ${devices.laptop} {
    padding: 0px;
  }
`
