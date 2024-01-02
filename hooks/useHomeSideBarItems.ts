import { useRouter } from 'next/router'
import { useMemo, useCallback } from 'react'

import publicImages from '@constants/public-images'
import routes from '@constants/routes'

import { useTranslateFunctions } from './useTranslateFunctions'

export const useHomeSideBarItems = () => {
  const { tHome, tActivity } = useTranslateFunctions()
  const router = useRouter()
  const redirect = useCallback(
    (url: string) => {
      router.push(url)
    },
    [router]
  )

  const applicationNavItems = useMemo(
    () => [
      {
        name: 'introduction',
        icon: publicImages.activityIcons.differentiation,
        title: tActivity('visual.title'),
        onClick: () =>
          redirect(`${routes.gameMenu}?activityType=visual_perception`),
      },
      {
        name: 'gameInfo',
        icon: publicImages.activityIcons.differentiation,
        title: tActivity('audio.title'),
        onClick: () =>
          redirect(`${routes.gameMenu}?activityType=auditory_perception`),
      },
      {
        name: 'seriality',
        icon: publicImages.activityIcons.seriality,
        title: tActivity('seriality.title'),
        onClick: () => redirect(`${routes.gameMenu}?activityType=seriality`),
      },
      {
        name: 'oromotorics',
        icon: publicImages.activityIcons.oromotorics,
        title: tActivity('oromotorics.title'),
        onClick: () =>
          redirect(`${routes.gameMenu}?activityType=language_practicing`),
      },
    ],
    []
  )

  const sideBarPageNavItems = useMemo(
    () => [
      {
        name: 'introduction',
        icon: 'pageview',
        title: tHome('intro.header'),
        onClick: () => redirect('#introduction'),
      },
      {
        name: 'gameInfo',
        icon: 'videogame_asset',
        title: tHome('gameInfo.header'),
        onClick: () => redirect('#gameInfo'),
      },
      {
        name: 'news',
        icon: 'library_books',
        title: tHome('news.header'),
        onClick: () => redirect('#news'),
      },
      {
        name: 'aboutAs',
        icon: 'person',
        title: tHome('aboutAs.header'),
        onClick: () => redirect('#aboutAs'),
      },
    ],
    [redirect, tHome]
  )

  return { applicationNavItems, sideBarPageNavItems }
}
