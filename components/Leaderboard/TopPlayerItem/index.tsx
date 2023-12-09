import React, { useMemo } from 'react'

import publicImages from '@constants/public-images'

import * as S from './styled'
import Reference from '@components/reference'
import { P5 } from '@components/typography/paragraph'
import CashValue from '@components/pages/game-menu/header/cash-value'

type TopPlayerItemProps = {
  title: string
  score: number
  isCurrentPlayer: boolean
  rank?: number
}

const TopPlayerItem: React.FC<TopPlayerItemProps> = ({
  title,
  score,
  isCurrentPlayer,
  rank
}) => {
  const image = useMemo(() => {
    const notNullrank = typeof rank === "number" ? rank + 1 : undefined
    switch (notNullrank) {
      case 1:
        return publicImages.medals.gold
      case 2:
        return publicImages.medals.silver
      default:
        return publicImages.medals.bronze
    }
  }, [rank])

  return (
    <S.TopPlayerItemWrap>
      <S.ImageWrap>
        <S.Image src={image} />
        <Reference
          reference={
            <>
              <a href="https://www.freepik.com/free-vector/medals-gradient-colour_35202530.htm#query=medals&position=2&from_view=search&track=sph">
                Image by juicy_fish
              </a>{' '}
              on Freepik
            </>
          }
        />
      </S.ImageWrap>
      <S.Title isCurrentPlayer={isCurrentPlayer} margin="0" align="center">
        {title}
      </S.Title>
      <P5 align="center">
        <CashValue score={score} />
      </P5>
    </S.TopPlayerItemWrap>
  )
}

export default TopPlayerItem
