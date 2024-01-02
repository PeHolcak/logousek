import styled from 'styled-components'

type StyledIProps = { isLight?: boolean }

export const StyledI = styled.i<StyledIProps>`
  font-size: 21px;
  transition-duration: 0.7s;
  color: ${({ theme, isLight }) =>
    isLight ? theme.colors.orrange : theme.colors.black};
  user-select: none;
`
