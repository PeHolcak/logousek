import styled from 'styled-components'

type TemplateWrapperProps = {
  isQuesionpart: boolean
}

export const TemplateWrapper = styled.div<TemplateWrapperProps>`
  width: 200vw;
  display: flex;
  transition-duration: 0.5s;
  transform: translateX(
    ${({ isQuesionpart }) => (isQuesionpart ? '-100' : '0')}vw
  );
`

export const ShowedPart = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const QuestionPart = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const ActivityCardList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const QuestionsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 0.5rem;
`
