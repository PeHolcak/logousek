import React, { useCallback, useRef, useEffect } from 'react'
import { useDragDropManager } from 'react-dnd'
import { useScroll } from 'hooks/useScroll'
import { CardType } from '@contexts/seriality-context/seriality-context-provider'
import * as S from './styled'
import Card from './card'

type CardListType = {
  cards: CardType[]
  onHandleChange: (cards: CardType[]) => void
}

const CardList: React.FC<CardListType> = ({ cards, onHandleChange }) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null)

  const { updatePosition } = useScroll(wrapperRef)

  const dragDropManager = useDragDropManager()
  const monitor = dragDropManager.getMonitor()

  useEffect(() => {
    const unsubscribe = monitor.subscribeToOffsetChange(() => {
      const offset = monitor.getSourceClientOffset()?.x as number
      updatePosition({ position: offset, isScrollAllowed: true })
    })
    return unsubscribe
  }, [monitor, updatePosition])

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedCards = [...cards]
      const draggedCard = cards[dragIndex]
      updatedCards.splice(dragIndex, 1)
      updatedCards.splice(hoverIndex, 0, draggedCard)
      onHandleChange(updatedCards)
    },
    [cards, onHandleChange]
  )

  const renderCard = useCallback(
    (card: CardType, index: number) => {
      return (
        <Card
          key={card.keyImage}
          index={index}
          id={card.keyImage}
          content={card.img}
          moveCard={moveCard}
        />
      )
    },
    [moveCard]
  )

  return (
    <S.Wrapper>
      <S.Container ref={wrapperRef}>
        {cards.map((card, i) => renderCard(card, i))}
      </S.Container>
    </S.Wrapper>
  )
}

export default CardList
