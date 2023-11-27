import React, { useMemo } from 'react'

import * as S from './styled'
import { P4, P5 } from '@components/typography/paragraph'

type DailyBonusItemProps = {
  day: number | "8+"
  bonusAmountPercent: number
  index: number
}

const DailyBonusItem: React.FC<DailyBonusItemProps> = ({ day, bonusAmountPercent, index }) => {

  const bonusAmoutLabel = useMemo(() => `+${bonusAmountPercent}%`, [bonusAmountPercent])

  const dayString = useMemo(() => typeof day === "string" ? day : `${day}.`, [day])

  return (
    <S.DailyBonusItemWrap isActive={index == 3}>
      <P5>{dayString} den</P5>
      <S.StarWrap>
        <i className={'material-icons'}>payments</i>
      </S.StarWrap>
      <P4 margin='0' color='green'>{bonusAmoutLabel}</P4>
    </S.DailyBonusItemWrap>
  )
}

export default DailyBonusItem
