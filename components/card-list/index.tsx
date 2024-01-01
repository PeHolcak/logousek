import React from 'react'
import * as S from './styled'
import { PictureType } from '@helpers/sound-helper'
import ActivityCard from '@components/activity-card'

type ActivityCardProps = {
  cards: PictureType[]
  selected?: string
  onChange: (selectedCardName: string) => void
}

const CardList: React.FC<ActivityCardProps> = ({ cards, selected, onChange }) => {
  const getCards = () => {
    return cards.map((card) => {
      const PictureSvg = card.svg
      const isSelected = selected === card.name
      const onClickHandler = () => { onChange(card.name) }

      return (
        <ActivityCard
          key={`activity-card-${card.name}`}
          onClick={onClickHandler}
          selected={isSelected}
          rotate={card.rotateDegrees}
          reference={card.reference}
        >
          {PictureSvg}
        </ActivityCard>
      )
    })
  }

  return <S.CardListWrapper>{getCards()}</S.CardListWrapper>
}

export default CardList
