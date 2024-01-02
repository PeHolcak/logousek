import styled from 'styled-components'

type LabelWrapperProps = {
  background: string
}

export const LabelWrapper = styled.div<LabelWrapperProps>`
  width: fit-content;
  padding: 0.3rem 0.7rem;
  margin: 0px 0.25rem;
  border-radius: ${({ theme }) => theme.radius.primary};
  background: ${({ background }) => background};
`

export const LabelText = styled.p`
  font-size: 0.7rem;
  margin: 0px;
  color: ${({ theme }) => theme.colors.white};
`
