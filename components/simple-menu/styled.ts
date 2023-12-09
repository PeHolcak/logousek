import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const ItemListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${devices.laptop} {
    justify-content: start;
  }
`

export const SimpleMenuWrapper = styled.div`
  text-align: center;

  @media ${devices.laptop} {
    flex: 1;
  }
`
