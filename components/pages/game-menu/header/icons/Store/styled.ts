import { devices } from '@constants/screens-conf'
import styled from 'styled-components'

export const CharacterSelectionWrap = styled.div`
  margin-top: 16px;
`

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  background-color: rgba(155,155,155, 0.4);
  padding: 12px;
  border-radius: 16px;

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`


export const CharacterSelectionContainer = styled.div`
  max-height: 80vh;
  height: 100%;
  
  overflow-x: hidden;
  overflow-y: auto;
  
`