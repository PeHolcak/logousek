import styled from 'styled-components'

export const WelcomeRowWrapper = styled.a<{ isSelected: boolean }>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.black} !important;
`
