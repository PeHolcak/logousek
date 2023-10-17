import React from 'react'

import * as S from './styled'
import DailyBonusItem from './DailyBonusItem'

type DailyBonusConfType = { day: number | "8+", bonusAmountPercent: number }[]

const dailyBonusConf: DailyBonusConfType = [
  {
    day: 1,
    bonusAmountPercent: 5,
  },
  {
    day: 2,
    bonusAmountPercent: 15,
  },
  {
    day: 3,
    bonusAmountPercent: 30,
  },
  {
    day: 4,
    bonusAmountPercent: 50,
  },
  {
    day: 5,
    bonusAmountPercent: 75,
  },
  {
    day: 6,
    bonusAmountPercent: 105,
  },
  {
    day: 7,
    bonusAmountPercent: 140,
  },
  {
    day: "8+",
    bonusAmountPercent: 180,
  },
]

const DailyBonus: React.FC = () => {
  return (
    <S.DailyBonusWrapper>
      <S.DailyBonusList>
        {dailyBonusConf.map((bonus, index) => (
          <DailyBonusItem
            key={`bonus_${index}`}
            bonusAmountPercent={bonus.bonusAmountPercent}
            day={bonus.day}
            index={index}
          />
        ))}
      </S.DailyBonusList>
    </S.DailyBonusWrapper>
  )
}

export default DailyBonus
