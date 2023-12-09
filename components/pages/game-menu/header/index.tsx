import React from 'react'

import HeaderWrapper from '@components/header-wrapper/header-wrapper'

import Icons from './icons'
import User from './user'
import Cash from './cash'
import * as S from './styled'
import MobileMenu from './mobile-menu'
import DarkModeSwitch from '@components/dark-mode-switch'

const GameMenuHeader: React.FC = () => {
  return (<>
    <S.MobileOnly>
      <HeaderWrapper>
        <User />
        <Cash />
        <MobileMenu />
      </HeaderWrapper>
    </S.MobileOnly>
    <S.DesktopOnly>
      <HeaderWrapper>
        <User />
        <Cash />
        <Icons />
      </HeaderWrapper >
    </S.DesktopOnly>
  </>
  )
}

export default GameMenuHeader
