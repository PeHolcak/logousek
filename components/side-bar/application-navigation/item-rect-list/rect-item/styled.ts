import styled from 'styled-components'
import { P5 } from '@components/typography/paragraph'

export const RectItemWrapper = styled.li`
  width: 156px;
  transition-duration: 0.5s;
  border-radius: ${({ theme }) => theme.radius.primary};
  cursor: pointer;

  &:hover {
    box-shadow: 0 3rem 5rem rgb(0 0 0 / 8%);
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`

export const RectItemDesc = styled(P5)`
  margin: 0px;
  text-align: center;
  padding: 0 0.5rem 0.5rem;
  color: ${({ theme }) => theme.colors.tenth};
`

export const Picture = styled.img`
  height: 140px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.primary};
`
