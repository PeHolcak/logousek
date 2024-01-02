import React from 'react'
import CardList from 'components/card-list'
import { PictureType } from '@helpers/sound-helper'

import { CardType } from '..'

type CardListType = {
  cards: CardType[]
  selectedName?: string
  setSelectedName: (name?: string) => void
}

const VisualCardList: React.FC<CardListType> = ({
  cards,
  selectedName,
  setSelectedName,
}) => {
  const chooseItem = (name: string) => {
    if (name !== selectedName) {
      setSelectedName(name)
    } else {
      setSelectedName(undefined)
    }
  }

  const getCard = (card: CardType): PictureType => {
    const Component = card.Component

    return {
      name: card.name,
      svg: <Component changeConfig={card.hideConfing} />,
      rotateDegrees: card.rotateDegrees,
      reference: card.reference,
    }
  }

  const getCards = () => {
    return cards.map((correctAnswer: CardType) => getCard(correctAnswer))
  }
  return (
    <CardList
      cards={getCards()}
      onChange={chooseItem}
      selected={selectedName}
    />
  )
}

export default VisualCardList
