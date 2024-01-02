import styled from 'styled-components'

export const CardWrapper = styled.div<{ opacity: number }>`
  width: 10rem;
  opacity: ${({ opacity }) => opacity};
  align-self: center;
`
