import styled from 'styled-components'

export const StyledVideo = styled.video`
  border-radius: ${({ theme }) => theme.radius.tertialy};
  width: 60vw;
  height: auto;
  max-height: 60vh;
`

export const LanguagePracticingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
