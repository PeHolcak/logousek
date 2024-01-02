import styled from 'styled-components'

export const CardList = styled.div`
  display: flex;
  justify-content: center;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: fit-content;
`
