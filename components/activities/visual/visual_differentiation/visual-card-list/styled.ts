import styled from 'styled-components'

export const CardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  max-width: 100vw;

  @media (orientation: landscape) {
    flex-direction: row;
  }

  @media (orientation: portrait) {
    flex-direction: column;
  }
`
