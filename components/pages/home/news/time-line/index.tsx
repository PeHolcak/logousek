import React from 'react'
import useGetNews from '@hooks/useGetNews'
import Bubble from '@components/bubble'
import { getFormatedDate } from '@helpers/date-helper'
import * as S from './styled'

const TimeLine = () => {
  const { news } = useGetNews()

  return (
    <S.Wrapper>
      <S.CenterLine />
      {news.map((newObj, index) => (
        <Bubble
          key={`new-${index}`}
          leftSide={index % 2 === 0}
          desc={newObj.desc}
          caption={
            newObj.data ? getFormatedDate(newObj.data) : 'Zatím neproběhlo'
          }
        />
      ))}
    </S.Wrapper>
  )
}

export default TimeLine
