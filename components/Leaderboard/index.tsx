import React, { useMemo } from 'react'
import { message } from 'antd'

import useLeaderboardData from '@hooks/use-leaderboard-data'

import Loading from '@components/loading'
import * as S from './styled'
import TopPlayerItem from './TopPlayerItem'
import Player from './Player'

const Leaderboard: React.FC = () => {
  const [messageApi] = message.useMessage()
  const { state, firstThree, other } = useLeaderboardData(messageApi)

  const usersContent = useMemo(
    () =>
      other?.map((player, index) => {
        const isFirst = index === 0
        const isLast = index + 1 === (other?.length ?? 0)

        return (
          <Player
            key={`player_${player.nickName}`}
            isFirst={isFirst}
            isLast={isLast}
            player={player}
            isCurrent={player.isCurrentUser}
          />
        )
      }),
    [other]
  )

  const topPlayersContent = useMemo(
    () => {
      if (firstThree) {
        const sortedArray = [firstThree[1], firstThree[0], firstThree[2]]
        return sortedArray?.map((user) => (
          <TopPlayerItem
            key={`top_player_${user.nickName}`}
            title={user.nickName}
            score={user.amount ?? 0}
            rank={user.rank}
            isCurrentPlayer={user.isCurrentUser}
          />
        ))
      } return undefined
    }
    ,
    [firstThree]
  )

  if (state === 'loading') {
    return (
      <S.LeaderboardWrapper>
        <S.LoadingWrap>
          <Loading />
        </S.LoadingWrap>
      </S.LeaderboardWrapper>
    )
  }

  if (state === 'error') {
    return (
      <S.LeaderboardWrapper>
        Data se nepodařilo načíst
      </S.LeaderboardWrapper>
    )
  }

  return (
    <S.LeaderboardWrapper>
      <S.TopPlayerWrapper>{topPlayersContent}</S.TopPlayerWrapper>
      <S.Others>{usersContent}</S.Others>
    </S.LeaderboardWrapper>
  )
}

export default Leaderboard
