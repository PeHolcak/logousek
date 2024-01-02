import { useCallback } from 'react'

import { usePathname } from 'next/navigation'
import { TutorialConfigType } from './useTutorial'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

export const useTutorialData = (): TutorialConfigType => {
  const currentPath = usePathname()
  const [conf, setConf] = useState<TutorialConfigType>([])
  const router = useRouter()

  const [params, setParams] = useState<ParsedUrlQuery | undefined>()

  useEffect(() => {
    if (router.isReady) {
      setParams(router.query)
    }
  }, [router.isReady, router.query])

  const getActivityConf = useCallback(async () => {
    switch (params?.activityName) {
      case 'language_practicing':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/language-practicing/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break
      case '3_pictures':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/three-pictures/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break
      case 'sound_differentiation':
      case 'word_differentiation':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/differentiation/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break
      case 'syllables':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/syllables/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break

      case 'audio_memory':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/memory/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break

      case 'visual_memory':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/memory/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break
      case 'visual_differentiation':
        setConf(
          await import(
            '@constants/tutorial-confs/activity-page/visual_differentiation/conf'
          ).then((module) => module.ActivityPageConf as TutorialConfigType)
        )
        break
      case 'a_s':
        setConf(
          await import('@constants/tutorial-confs/activity-page/a_s/conf').then(
            (module) => module.ActivityPageConf as TutorialConfigType
          )
        )
        break
      default:
        setConf([])
        break
    }
  }, [params?.activityName])

  useEffect(() => {
    const getConf = async () => {
      switch (currentPath) {
        case '/':
          setConf(
            await import('@constants/tutorial-confs/main-page/conf').then(
              (module) => module.mainPageConf as TutorialConfigType
            )
          )
          break
        case '/login':
          setConf(
            await import('@constants/tutorial-confs/login-page/conf').then(
              (module) => module.loginPageConf as TutorialConfigType
            )
          )
          break
        case '/game-menu':
          setConf(
            await import('@constants/tutorial-confs/game-menu-page/conf').then(
              (module) => module.gameMenuPageConf as TutorialConfigType
            )
          )
          break
        case '/activity':
          getActivityConf()
          break

        default:
          setConf([])
      }
    }
    getConf()
  }, [currentPath, getActivityConf, params?.activityName])
  return conf
}
