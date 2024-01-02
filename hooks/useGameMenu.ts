import { useState, useEffect, useContext, useMemo } from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from 'styled-components'

import activityConf from '@constants/activity-confs/activity-conf'
import { ActivityType } from '@constants/activity-confs/activity-conf'

function useGameMenu() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(1)
  const [activeActivity, setActiveActivity] = useState(activityConf[0])
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    const DEFAULT_INDEX = 0
    const { newActiveActivity, index } = activityConf.reduce(
      (
        result: { newActiveActivity?: ActivityType; index?: number },
        activity,
        index
      ) => {
        if (activity.name === router.query.activityType) {
          result = { newActiveActivity: activity, index }
        }
        return result
      },
      {}
    )

    setCurrentSlide(index || DEFAULT_INDEX)
    newActiveActivity &&
      setActiveActivity(newActiveActivity || activityConf[DEFAULT_INDEX])
  }, [router.query.activityType])

  const selectNewActivityHandle = (name: string) => {
    router.push({
      query: { activityType: name },
    })
  }

  const activeActivitColor = useMemo(
    () => themeContext?.colors[activeActivity.color],
    [activeActivity, themeContext]
  )

  return {
    currentSlide,
    activeActivity,
    selectNewActivityHandle,
    activeActivitColor,
  }
}

export default useGameMenu
