import React from 'react'
import { message } from 'antd'

import useLeaderboardData from '@hooks/use-leaderboard-data'

import * as S from './styled'
import TopPlayerItem from './TopPlayerItem'

const CharacterSelection: React.FC = () => {


  const [messageApi] = message.useMessage()
  const { state, usersWithHighestCredit, currentUser } = useLeaderboardData(
    messageApi
  )

  console.log("state33", state, usersWithHighestCredit, currentUser)

  const players = [
    { name: 'Petr Pavel', score: 55000 },
    { name: 'Anna Marie', score: 50000 },
    { name: 'Karel Václav', score: 45000 },
  ]

  const currentPlayer = { name: 'Petr Pavel', score: 55000 }

  return (
    <S.CharacterSelectionWrapper>
      <S.TopPlayerWrapper>
        <TopPlayerItem title="Petr Pavel" score={55000} index={2} />
        <TopPlayerItem title="Petr Pavel" score={55000} index={1} />
        <TopPlayerItem title="Petr Pavel" score={55000} index={3} />
      </S.TopPlayerWrapper>

      <S.Others>
        {players.map((player, index) => (
          <S.Player key={index}>
            <S.Rank>{index + 1}.</S.Rank>
            <S.Name>{player.name}</S.Name>
            <S.Score>{player.score}</S.Score>
          </S.Player>
        ))}
      </S.Others>

      <S.Space>
        <S.Dot />
        <S.Dot />
        <S.Dot />
      </S.Space>

      <S.CurrentPlayer>
        <S.Player>
          <S.Rank>128.</S.Rank>
          <S.Name>{currentPlayer.name}</S.Name>
          <S.Score>{currentPlayer.score}</S.Score>
        </S.Player>
      </S.CurrentPlayer>
    </S.CharacterSelectionWrapper>
  )
}

export default CharacterSelection
