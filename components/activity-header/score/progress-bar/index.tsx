import React, { useMemo } from 'react'
import * as S from './styled'

type ActivityHeaderProps = {
  tasksCount: number
  taskElapsed: number
}

const ProgressBar: React.FC<ActivityHeaderProps> = ({
  tasksCount,
  taskElapsed,
}) => {
  const width = useMemo(
    () => `${(100 / tasksCount) * taskElapsed}%`,
    [taskElapsed, tasksCount]
  )

  return (
    <S.ProgressBarWrap>
      <S.ProgressContainer>
        <S.ProgressBarInner width={width} />
      </S.ProgressContainer>
    </S.ProgressBarWrap>
  )
}

export default ProgressBar
