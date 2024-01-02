import styled from 'styled-components'

export const Svg = styled.svg`
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const ClipPathElement = styled.g`
  clip-path: url(#clip-path);
`
