import {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useActivitySouds } from '@hooks/useActivitySouds'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import routes from '@constants/routes'

import { games } from '../../../constants/activity-confs/activity-conf'
import ModalContext from '../../../contexts/modal-context'
import { GameType } from '../../../constants/activity-confs/activity-conf'
import axios from 'axios'
import { ActivityInterface } from '.'

const DEFAULT_POINTS_FOR_TASK = 10

const DEFAULT_DIFFICULTY = {
  id: 1,
  level: 1,
  points: DEFAULT_POINTS_FOR_TASK,
  exercisesCount: 5,
}

export const useActivity = () => {
  const { tActivity } = useTranslateFunctions()
  const [currentTask, setCurrentTask] = useState(1)
  const [correctTasks, setCorrectTasks] = useState(0)

  const [results, setResults] = useState<boolean[]>([])
  const [canBeEvaluated, setCanBeEvaluated] = useState(false)
  const [gameState, setGameState] = useState('playing')
  const router = useRouter()
  const { playWrongAudio, playSuccessAudio } = useActivitySouds()

  const activityRef = useRef<ActivityInterface>(null)
  const modalContext = useContext(ModalContext)
  const sessionData = useSession()

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

  const actualDifficulty = useMemo(() => {
    const difficultyList = getActivityFromConf()?.difficulty || []
    return (
      difficultyList.find(
        (difficulty) => difficulty.id.toString() === activityDifficulty
      ) || DEFAULT_DIFFICULTY
    )
  }, [activityDifficulty, getActivityFromConf])

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
  }, [])

  const sendResult = async (isLastSuccess: boolean) => {
    try {
      const userData = sessionData.data?.user as {
        email: string
        name: string
        id: string
      }

      const lastPoints = isLastSuccess ? 1 : 0

      await axios.post('/api/activity/add-score', {
        userId: userData?.id,
        activityType: activityName,
        points:
          (GetPointsForTask() ?? actualDifficulty.points) *
          (correctTasks + lastPoints),
        results: [...results, isLastSuccess ? true : false],
        difficulty: activityDifficulty,
      })
    } catch (error) {
      console.error(error)
    }
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
    setResults((v) => [...v, false])
  }

  const success = () => {
    playSuccessAudio()
    setCurrentTask((v) => ++v)
    setCorrectTasks((v) => ++v)
    setResults((v) => [...v, true])
  }

  const onHandleChanged = (canBeChecked?: boolean) => {
    if (canBeChecked) {
      setCanBeEvaluated(true)
    } else if (!canBeChecked) {
      setCanBeEvaluated(false)
    }
  }

  const checkResult = () => {
    const isSuccess = activityRef?.current?.getResult()
    if (isSuccess) {
      success()
    } else {
      fail()
    }

    if (currentTask === actualDifficulty.exercisesCount) {
      sendResult(!!isSuccess)
      setGameState('finish')
    } else {
      setCanBeEvaluated(false)
    }
  }

  return {
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
  }
}
