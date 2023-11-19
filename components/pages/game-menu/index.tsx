import React, { useCallback } from 'react'
import useGameMenu from '@hooks/useGameMenu'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import activityConf from '@constants/activity-confs/activity-conf'
import RoundFooter from '@components/round-footer'
import RouteWrapper from '@components/route-wrapper'

import Header from './header'
import SlideList from './slide-list'
import * as S from './styled'
import GameMenuProvider from '@contexts/game-menu-context/game-menu-context-provider'

const activityTypes = activityConf.map((activity) => ({
  name: activity.name,
  icon: activity.icon,
  title: activity.title,
  shortTitle: activity.shortTitle,
  color: activity.color,
  clickable: !activity.disabled,
  disabled: activity.disabled,
}))

const GameMenu: React.FC = () => {
  const {
    currentSlide,
    activeActivity,
    selectNewActivityHandle,
    activeActivitColor,
  } = useGameMenu()
  const { tGameMenu } = useTranslateFunctions()

  const getTitle = useCallback(() => {
    return tGameMenu('title', { test: activeActivity.title })
  }, [activeActivity.title, tGameMenu])

  return (
    <RouteWrapper
      colorScheme={activeActivitColor}
      title={getTitle()}
      type="private"
      tutorial={{
        mobileOffset: 'bottom',
        desktopOffset: 'none',
        hide: false,
      }}
    >
      <GameMenuProvider>
        <S.MenuWrapper>
          <Header />
          <SlideList currentSlide={currentSlide} />
          <RoundFooter
            footerConf={activityTypes}
            activeItemName={activeActivity.name}
            selectNewItem={selectNewActivityHandle}
          />
        </S.MenuWrapper>
      </GameMenuProvider>
    </RouteWrapper>
  )
}

export default GameMenu
