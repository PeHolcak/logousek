import React, { useMemo } from 'react'

import CashValue from '@components/pages/game-menu/header/cash-value'

import * as S from './styled'
import Space from './space'

type PlayerProps = {
  isFirst: boolean
  isLast: boolean
  isCurrent: boolean
  player: {
    isCurrentUser: boolean
    nickName: string
    amount?: number | undefined
    index?: number | undefined
    userId?: string | undefined
    creditId?: string | undefined
    showTopSpace: boolean
    rank?: number
  }
}

const Player: React.FC<PlayerProps> = ({
  isFirst,
  isLast,
  player,
  isCurrent,
}) => {
  const content = <>
    <S.Rank>{player.rank ? player.rank + 1 : ''}.</S.Rank>
    <S.Name>{player.nickName}</S.Name>
    <S.Score>
      <CashValue score={player.amount} />
    </S.Score>
  </>

  return (
    <div>
      {player.showTopSpace ? <Space /> : null}
      <S.PlayerContainer isFirst={isFirst} isLast={isLast} isCurrent={isCurrent}>
        {content}
      </S.PlayerContainer>
    </div>
  )
}

export default Player
