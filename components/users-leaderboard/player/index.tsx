import React, { useMemo } from 'react'

import CashValue from '@components/pages/game-menu/header/cash-value'

import * as S from './styled'
import Space from '../Space'

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
  const content = useMemo(
    () => (
      <>
        <S.Rank>{player.rank ? player.rank + 1 : ''}.</S.Rank>
        <S.Name>{player.nickName}</S.Name>
        <S.Score>
          <CashValue score={player.amount} />
        </S.Score>
      </>
    ),
    [player.amount, player.nickName, player.rank]
  )

  return (
    <div>
      {player.showTopSpace ? <Space /> : null}
      <S.Player isFirst={isFirst} isLast={isLast} isCurrent={isCurrent}>
        {content}
      </S.Player>
    </div>
  )
}

export default Player
