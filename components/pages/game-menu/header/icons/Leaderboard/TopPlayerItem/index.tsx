import React, { useMemo } from 'react'

import publicImages from '@constants/public-images'

import * as S from './styled'
import Reference from '@components/reference'
import { P3, P5 } from '@components/typography/paragraph'

type TopPlayerItemProps = {
  title: string
  score: number
  index: number
}

const TopPlayerItem: React.FC<TopPlayerItemProps> = ({ title, score, index }) => {
  const image = useMemo(() => {
    switch (index) {
      case 1:
        return publicImages.medals.gold
      case 2:
        return publicImages.medals.silver
      default:
        return publicImages.medals.bronze
    }
  }, [index])

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
      <P3 margin="0" align="center">
        {title}
      </P3>
      <P5 align="center">{score}</P5>
    </S.TopPlayerItemWrap>
  )
}

export default TopPlayerItem
