import React, { useEffect, useState } from 'react'

import { getActivity } from '@helpers/get-activity'
import Loading from '@components/loading'
import { ActivityInterface, ActivityProps } from '@components/pages/activity'

import * as S from './styled'

type ActivityContentProps = {
  gameState: string
  currentTask: number
  onHandleChanged: (canBeChecked?: boolean | undefined) => void
  canBeEvaluated: boolean
  checkResult: () => void
  activityDifficulty: string
  activityRef: React.RefObject<ActivityInterface>
  activityName: string
}

const ActivityContent: React.FC<ActivityContentProps> = ({
  gameState,
  currentTask,
  onHandleChanged,
  canBeEvaluated,
  checkResult,
  activityDifficulty,
  activityRef,
  activityName,
}) => {
  const [Activity, setActivity] = useState<
    React.FC<ActivityProps> | undefined
  >()
  const [activityLoadingState, setActivityloadingState] = useState('loading')

  useEffect(() => {
    ;(async () => {
      const Activity = await getActivity(activityName)
      setActivity(Activity)
      setActivityloadingState('ready')
    })()
  })

  const content =
    gameState !== 'finish' && Activity ? (
      <Activity
        ref={activityRef}
        key={`activity_${currentTask}`}
        onHandleChanged={onHandleChanged}
        canBeEvaluated={canBeEvaluated}
        checkResult={checkResult}
        complexity={activityDifficulty || '1'}
        currentTask={currentTask}
      />
    ) : null

  return (
    <S.ActivityContentWrapper>
      <S.ActivityContentContainer>
        {activityLoadingState === 'loading' ? <Loading /> : content}
      </S.ActivityContentContainer>
    </S.ActivityContentWrapper>
  )
}

export default ActivityContent
