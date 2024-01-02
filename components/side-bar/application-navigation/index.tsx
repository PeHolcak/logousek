import React from 'react'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { H4 } from '@components/typography/header'

import ItemRectList from './item-rect-list'
import DarkModeSwitch from '../../dark-mode-switch'
import { RectItemProps } from './item-rect-list/rect-item'
import * as S from './styled'

type ApplicationNavType = RectItemProps[]

type SidebarProps = {
  applicationNav: ApplicationNavType
  isMenuShow: boolean
}

const ApplicationNavigation: React.FC<SidebarProps> = ({
  applicationNav,
  isMenuShow,
}) => {
  const { tCommon } = useTranslateFunctions()

  return (
    <S.ApplicationNavigationWrapper>
      <H4 align="center">{tCommon('sideBar.applicationNavigation.title')}</H4>
      <S.ItemRectListWrapper>
        <ItemRectList itemList={applicationNav} />
      </S.ItemRectListWrapper>
      <S.DarkModeSwitchWrapper isMenuShow={isMenuShow}>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>
    </S.ApplicationNavigationWrapper>
  )
}

export default ApplicationNavigation
