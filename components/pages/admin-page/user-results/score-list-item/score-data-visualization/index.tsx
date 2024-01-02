import React, { useContext } from 'react'
import * as S from './styled'
import { ThemeContext } from 'styled-components'

import { P5 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

type ScoreDataVisualizationProps = {
  data: boolean[]
}

const ScoreDataVisualization: React.FC<ScoreDataVisualizationProps> = ({
  data,
}) => {
  const themeContext = useContext(ThemeContext)
  const { tAdmin } = useTranslateFunctions()

  const listScoredataVisualization = (scoreData: boolean[]) => {
    return scoreData.map((scoreDataItem, index) => {
      const color = scoreDataItem
        ? themeContext?.colors?.success
        : themeContext?.colors?.alert
      return (
        <S.ScoreDataItem key={`score-data-item-${index}`}>
          <S.ScoreDataItemSpan>{index + 1}</S.ScoreDataItemSpan>
          <S.ScoreDataItemSpan color={color}>
            <i className={`material-icons`}>
              {scoreDataItem ? 'done' : 'close'}
            </i>
          </S.ScoreDataItemSpan>
        </S.ScoreDataItem>
      )
    })
  }

  return (
    <S.ScoreDataVisualizationWrapper>
      <P5 align="center" margin="16px 0">
        {tAdmin('results')}
      </P5>
      <S.ScoreDataVisualizationContainer>
        {listScoredataVisualization(data)}
      </S.ScoreDataVisualizationContainer>
    </S.ScoreDataVisualizationWrapper>
  )
}

export default ScoreDataVisualization
