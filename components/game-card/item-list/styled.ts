import styled from 'styled-components'

export const StyledList = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const StyledListItem = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  height: 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  user-select: none;
  margin: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.primary};
  transition: 0.7s;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};;

  &>span{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover{
    transform: scale(1.05);
  }
`

export const StarsWrap = styled.span<{ level: number }>`
  color: ${({ theme, level }) => {
    switch (level) {
      case 1:
        return theme.colors.blue
      case 2:
        return theme.colors.yellow
      case 3:
        return theme.colors.orrange
      case 4:
        return theme.colors.red
      default:
        return theme.colors.white
    }
  }}
`