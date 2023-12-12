import React from 'react'

import HeaderWrapper from '@components/header-wrapper'

import Icons from './icons'
import User from './user'
import Cash from './cash'
import * as S from './styled'
import MobileMenu from './mobile-menu'

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
