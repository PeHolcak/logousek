import styled from 'styled-components'

export const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    transform: scale(1.1) rotate(90deg);
  }
`

export const Icon = styled.i`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
`
