import React from 'react'

import { formatTime } from '@helpers/time-helper'
import { useTimer } from '@hooks/useTime'
import { P5 } from '@components/typography/paragraph'

import * as S from './styled'

type TimerType = { countdownTime?: number; timerIsDone?: () => void }

const Timer: React.FC<TimerType> = ({ countdownTime, timerIsDone }) => {
  const elapsedTime = useTimer(countdownTime, timerIsDone)

  const formattedTimeArray = formatTime(elapsedTime)

  const timeParagraphs = formattedTimeArray.reduce(
    (
      result: React.ReactNode[],
      formattedTime: string | null,
      index: number
    ) => {
      if (formattedTime) {
        result.push(<P5 key={`formatted_time_${index}`}>{formattedTime}</P5>)
      }
      return result
    },
    [] as React.ReactNode[]
  )

  return <S.TimerWrapper>{timeParagraphs}</S.TimerWrapper>
}

export default Timer
