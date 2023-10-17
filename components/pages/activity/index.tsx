import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ThemeContext } from 'styled-components'

import { useActivitySouds } from '@hooks/useActivitySouds'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import routes from '@constants/routes'
import Timer from '@components/timer'

import ActivityHeader from '../../activity-header/inedex'
import RouteWrapper from '../../route-wrapper'
import { getActivity } from '../../../helpers/get-activity'
import { games } from '../../../constants/activity-confs/activity-conf'
import RoundFooter from '../../round-footer'
import ModalContext from '../../../contexts/modal-context'
import GainedPoints from './gained-points'
import { GameType } from '../../../constants/activity-confs/activity-conf'
import axios from 'axios'
import * as S from './styled'

const DEFAULT_POINTS_FOR_TASK = 10

export type ActivityInterface = {
  getResult: () => boolean
  generateNext: () => void
}

export type ActivityProps = {
  complexity: string
  onHandleChanged: (canBeChecked?: boolean) => void
  wasChanged: boolean
  tasksElapsed: number
  checkResult: () => void
  currentTask: number
}

const DEFAULT_DIFFICULTY = {
  id: 1,
  level: 1,
  points: DEFAULT_POINTS_FOR_TASK,
  exercisesCount: 5,
}

const Activity = () => {
  const { tActivity } = useTranslateFunctions()
  const [currentTask, setCurrentTask] = useState(1)
  const [correctTasks, setCorrectTasks] = useState(0)

  const [results, setResults] = useState<boolean[]>([])
  const [wasChanged, setWasChanged] = useState(false)
  const [gameState, setGameState] = useState('playing')
  const router = useRouter()
  const { playWrongAudio, playSuccessAudio } = useActivitySouds()

  const activityName = router.query?.activityName as string
  const activityDifficulty = router.query?.difficulty as string
  const getActivityFromConf = useCallback(
    () =>
      Object.values(games).reduce(
        (result: GameType | undefined, gamesInType: GameType[]) => {
          const foundGame = gamesInType.find(
            (game) => game.name === activityName
          )
          if (foundGame) {
            result = foundGame
          }
          return result
        },
        undefined
      ),
    [activityName]
  )
  const getDifficulty = () => {
    const difficultyList = getActivityFromConf()?.difficulty || []
    return (
      difficultyList.find(
        (difficulty) => difficulty.id.toString() === activityDifficulty
      ) || DEFAULT_DIFFICULTY
    )
  }
  const actualDifficulty = getDifficulty()

  const activityRef = useRef<ActivityInterface>(null)
  const Activity = getActivity(activityName)
  const modalContext = useContext(ModalContext)
  const sessionData = useSession()
  const themeContext = useContext(ThemeContext)

  const GetPointsForTask = useCallback(() => {
    return actualDifficulty?.points
  }, [actualDifficulty?.points])

  useEffect(() => {
    const showAlert = (event: { returnValue: string }) => {
      event.returnValue = 'string'
    }
    window.addEventListener('beforeunload', showAlert)
    return () => {
      window.removeEventListener('beforeunload', showAlert)
    }
  })

  const sendResult = async () => {
    try {
      const userData = sessionData.data?.user as {
        email: string
        name: string
        id: string
      }
      await axios.post('/api/activity/add-score', {
        userId: userData?.id,
        activityType: activityName,
        points: (GetPointsForTask() || actualDifficulty.points) * correctTasks,
        results,
        difficulty: activityDifficulty,
      })
    } catch (error) { }
  }

  useEffect(() => {
    if (gameState === 'finish') {
      const redirectToGameMenu = () => {
        modalContext?.closeModal()
        router.push(routes.gameMenu)
      }

      modalContext?.showModal(
        {
          header: tActivity('completionModal.header'),
          onOkClick: redirectToGameMenu,
          onOkText: tActivity('completionModal.complete'),
          closeDisabled: true,
          autoWidth: true,
        },
        {
          backgroundType: 'party',
        }
      )
    }
  }, [
    gameState,
    modalContext,
    router,
    correctTasks,
    GetPointsForTask,
    sessionData,
    activityName,
    results,
    tActivity,
  ])

  const fail = () => {
    playWrongAudio()
    setCurrentTask((v) => ++v)
    setResults((v) => ([...v, false]))
  }

  const success = () => {
    playSuccessAudio()
    setCurrentTask((v) => ++v)
    setCorrectTasks((v) => ++v)
    setResults((v) => ([...v, true]))
  }

  const onHandleChanged = (canBeChecked?: boolean) => {
    console.log("canBeChecked", canBeChecked, wasChanged)

    if ((canBeChecked || canBeChecked === undefined) && !wasChanged) {
      setWasChanged(true)
    } else if (wasChanged) {
      setWasChanged(false)
    }
  }

  const _checkResult = () => {
    const isSuccess = activityRef?.current?.getResult()
    isSuccess ? success() : fail()
    if (currentTask === actualDifficulty.exercisesCount) {
      isSuccess && setCorrectTasks((prevCorrectTasks) => ++prevCorrectTasks)
      sendResult()
      setGameState('finish')
    } else {
      setWasChanged(false)
    }
  }

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
        <TimerWrapper>
          <Timer />
        </TimerWrapper>
      ),
      clickable: false,
    },
    {
      name: 'sendButton',
      title: (
        <S.SendButton>
          <i className="material-icons">done</i><span>Potvrdit</span>
        </S.SendButton>
      ),
      clickable: true,
      onClick: _checkResult,
      disabled: !wasChanged,
      background: wasChanged
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
        mobileOffset: "bottom",
      }}
    >
      <ActivityHeader
        tasksCount={actualDifficulty.exercisesCount}
        currentTask={currentTask}
        title={getActivityFromConf()?.title || ''}
      />
      <S.ActivityWrapper>
        <S.ContentWrapper>
          {gameState !== 'finish' && (
            <Activity
              ref={activityRef}
              key={`activity_${currentTask}`}
              tasksElapsed={currentTask}
              onHandleChanged={onHandleChanged}
              wasChanged={wasChanged}
              checkResult={_checkResult}
              complexity={activityDifficulty || '1'}
              currentTask={currentTask}
            />
          )}
        </S.ContentWrapper>
      </S.ActivityWrapper>
      <RoundFooter footerConf={footerActivityTypes} />
    </RouteWrapper>
  )
}

export default Activity

const TimerWrapper = styled.div`
  margin: 0px 0.5rem;
`
