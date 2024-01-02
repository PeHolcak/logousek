import styled from 'styled-components'

export const ReferenceIcon = styled.i`
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  margin: 4px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.secondary};
`

export const ReferenceWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.xl};

  & a {
    color: ${({ theme }) => theme.colors.blue} !important;
  }
`

export const ReferenceContent = styled.div`
  a {
    color: ${({ theme }) => theme.colors.blue} !important;
  }
`
