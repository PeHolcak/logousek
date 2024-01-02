import React from 'react'
import * as S from './styled'

type GainedPointsProps = { pointsForTask: number; correctTasks: number }

const GainedPoints: React.FC<GainedPointsProps> = ({
  pointsForTask,
  correctTasks,
}) => {
  return (
    <S.GainedPointsWrapper
      key={`gained-point-wrapper-${correctTasks}`}
      animate={Boolean(correctTasks)}
      dataContent={pointsForTask}
    >
      <i className={'material-icons'}>payments</i>
      <p>{pointsForTask * correctTasks}</p>
    </S.GainedPointsWrapper>
  )
}

export default GainedPoints
