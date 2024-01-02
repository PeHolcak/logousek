import styled from 'styled-components'

export const FlowerWrapper = styled.div`
  scale: ${({ scaleFlower }) => (scaleFlower ? '0.85' : '1')};
`
