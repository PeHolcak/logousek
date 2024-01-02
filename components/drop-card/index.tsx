import React, { useCallback, useContext, useMemo } from 'react'

import { CardType } from '@hooks/use-get-cards'
import useDrop from '@hooks/use-drop'

import InnerDropCard from '@components/drop-card/inner-drop-card'
import DragCard from '@components/drag-card'
import DndContext from '@contexts/dnd-context'

import * as S from './styled'

type DropCardProps = {
  index: number
  card?: CardType
}

const RADIUS = '0'

const DropCard: React.FC<DropCardProps> = ({ index, card }) => {
  const dndContext = useContext(DndContext)
  const { onItemDropHandle, onDropCardClick } = useDrop(dndContext)

  const cursor = useMemo(
    () => (dndContext?.selectedCard ? 'pointer' : 'default'),
    [dndContext?.selectedCard]
  )

  const onDragableAreaClickHandler = useCallback(() => {
    onDropCardClick(index, dndContext?.avaibleCards)
  }, [dndContext?.avaibleCards, index, onDropCardClick])

  return (
    <InnerDropCard
      key={`drag-card-${index}`}
      onDrop={(item: CardType) => onItemDropHandle(item, index)}
      customRadius={RADIUS}
    >
      {card ? (
        <DragCard
          item={card}
          customRadius={RADIUS}
          key={`drag-card-${card.keyImage}`}
          reference={card.reference}
          isDragged
          selected={false}
        >
          {card?.img}
        </DragCard>
      ) : (
        <S.DragableArea cursor={cursor} onClick={onDragableAreaClickHandler}>
          <S.DragableAreaIcon className="material-icons">
            play_for_work
          </S.DragableAreaIcon>
        </S.DragableArea>
      )}
    </InnerDropCard>
  )
}

export default DropCard
