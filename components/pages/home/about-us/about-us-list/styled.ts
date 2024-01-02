import styled from 'styled-components'
import { devices } from 'constants/screens-conf'

export const AboutUsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media only screen and (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${devices.laptop} {
    grid-column-gap: 64px;
  }
`
