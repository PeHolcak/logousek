import React, {
  useContext,
} from 'react'
import { ThemeContext } from 'styled-components'

import Timer from '@components/timer'

import ActivityHeader from '../../activity-header/inedex'
import RouteWrapper from '../../route-wrapper'
import RoundFooter from '../../round-footer'
import GainedPoints from './gained-points'
import * as S from './styled'
import { useActivity } from './useActivity'
import ActivityContent from './activity-content'

export type ActivityInterface = {
  getResult: () => boolean
  generateNext: () => void
}

export type ActivityProps = {
  ref: React.RefObject<ActivityInterface>
  complexity: string
  onHandleChanged: (canBeChecked?: boolean) => void
  canBeEvaluated: boolean
  checkResult: () => void
  currentTask: number
}

const Activity = () => {
  const themeContext = useContext(ThemeContext)
  const {
    checkResult,
    onHandleChanged,
    activityName,
    GetPointsForTask,
    actualDifficulty,
    correctTasks,
    canBeEvaluated,
    getActivityFromConf,
    currentTask,
    gameState,
    activityRef,
    activityDifficulty,
  } = useActivity()

  const footerActivityTypes = [
    {
      name: '',
      clickable: false,
      title: (
        <GainedPoints
          pointsForTask={GetPointsForTask() || actualDifficulty.points}
          correctTasks={correctTasks}
        />
      ),
    },
    {
      name: 'timer',
      title: (
        <S.TimerWrapper>
          <Timer />
        </S.TimerWrapper>
      ),
      clickable: false,
    },
    {
      name: 'sendButton',
      title: (
        <S.SendButton>
          <i className="material-icons">done</i>
          <span>Potvrdit</span>
        </S.SendButton>
      ),
      clickable: canBeEvaluated,
      onClick: checkResult,
      disabled: !canBeEvaluated,
      background: canBeEvaluated
        ? themeContext.colors.lightGreen
        : themeContext.colors.white,
    },
  ]

  return (
    <RouteWrapper
      colorScheme={themeContext.colors.primary}
      title={`Logoušek - ${getActivityFromConf()?.title}`}
      type="private"
      tutorial={{
        mobileOffset: 'bottom',
      }}
    >
      <ActivityHeader
        tasksCount={actualDifficulty.exercisesCount}
        currentTask={currentTask}
        title={getActivityFromConf()?.title || ''}
      />
      <ActivityContent
        gameState={gameState}
        currentTask={currentTask}
        onHandleChanged={onHandleChanged}
        canBeEvaluated={canBeEvaluated}
        checkResult={checkResult}
        activityDifficulty={activityDifficulty}
        activityRef={activityRef}
        activityName={activityName}
      />
      <RoundFooter footerConf={footerActivityTypes} />
    </RouteWrapper>
  )
}

export default Activity
