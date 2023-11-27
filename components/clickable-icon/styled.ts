import styled from 'styled-components'

interface StyledIconProps {
  fontSize?: string
  color?: string
}

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    cursor: pointer;
    user-select: none;


    &:hover {
      opacity: 0.5;
    }
`

export const StyledIcon = styled.i<StyledIconProps>`
  font-size: ${({ fontSize }) => fontSize ?? "32px"};
  color: ${({ theme, color }) => color || theme.colors.black};
`
