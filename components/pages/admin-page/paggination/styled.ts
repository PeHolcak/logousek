import styled from 'styled-components'

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`

export const Link = styled.a<{ isActive: boolean }>`
  text-decoration: underline;
  padding: 8px;
  text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  color: ${({ isActive }) => (isActive ? 'green' : 'black')};
`
