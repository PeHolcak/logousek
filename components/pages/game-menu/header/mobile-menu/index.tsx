import React, { useState } from 'react'

import HeaderWrapper from '@components/header-wrapper/header-wrapper'

import * as S from './styled'
import MobileMenuItems from './MobileMenuItems'

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onSetIsMenuOpenHandler = (value: boolean) => {
    setIsMenuOpen(value)
  }

  return (
    <S.MobileMenuWrap>
      <S.MenuButton
        onClick={() => {
          setIsMenuOpen((v) => !v)
        }}
        isMenuOpen={isMenuOpen}
      >
        <S.Stripe />
        <S.Stripe />
        <S.Stripe />
      </S.MenuButton>
      <MobileMenuItems
        isOpen={isMenuOpen}
        setIsMenuShow={onSetIsMenuOpenHandler}
      />
    </S.MobileMenuWrap>
  )
}

export default MobileMenu
