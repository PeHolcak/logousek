import React from 'react'

import { usePlayerScore } from '@hooks/usePlayerData'

import * as S from './styled'
import CashValue from '../cash-value'


const Cash: React.FC = () => {
  const [{ score }] = usePlayerScore()
  return (
    <S.CashWrapper key="game-menu-coins">
      <CashValue score={score} />
    </S.CashWrapper>
  )
}

export default Cash
