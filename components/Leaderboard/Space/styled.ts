import styled from 'styled-components'

export const Space = styled.span`
  display: flex;
  justify-content: center;
  gap: 4px;

  padding: 16px;
`

export const Dot = styled.div`
  width: 8px;
  aspect-ratio: 1;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
`
