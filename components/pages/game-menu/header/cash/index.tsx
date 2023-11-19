import React, { useContext } from 'react'

import GameMenuContext from '@contexts/game-menu-context'

import * as S from './styled'
import CashValue from '../cash-value'


const Cash: React.FC = () => {
  const gameMenuData = useContext(GameMenuContext)
  return (
    <S.CashWrapper key="game-menu-coins">
      <CashValue score={gameMenuData?.score} />
    </S.CashWrapper>
  )
}

export default Cash
