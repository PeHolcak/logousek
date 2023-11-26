import React, { useContext, useCallback, useMemo } from 'react'

import DndContext from '@contexts/dnd-context'
import DragCard from '@components/drag-card'

import { CardList } from './styled'

const AvaibleCards: React.FC = () => {
  const asContext = useContext(DndContext)

  const onDragCardClickHandler = useCallback(
    (itemName: string) => {
      asContext?.setSelectedCard(itemName)
    },
    [asContext]
  )

  const selectedCard = useMemo(() => asContext?.selectedCard, [asContext?.selectedCard])

  return (
    <CardList>
      {asContext?.avaibleCards?.map((card) => {
        const isSelected = card.keyImage === selectedCard
        return (
          <DragCard
            item={card}
            key={`drag-card-${card.keyImage}`}
            reference={card.reference}
            onClick={onDragCardClickHandler}
            selected={isSelected}
          >
            {card.img}
          </DragCard>
        )
      })}
    </CardList>
  )
}

export default AvaibleCards
