import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'

import { ActivityInterface } from '@components/pages/activity'
import DndContextProvider, {
  DndContextProviderInterface,
} from '@contexts/dnd-context/dnd-context-provider'
import { ActivityProps } from '@components/pages/activity'
import { P5 } from '@components/typography/paragraph'
import DropCards from '@components/activities/visual/a_s/as-drop-cards'
import CustomDragLayer from '@components/custom-drag-layer'
import useGetCards from '@hooks/use-get-cards'
import { SVGS_HASH } from '@hooks/use-get-cards'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import AvaibleCards from '../../../avaible-cards'

const AS = (
  { complexity, onHandleChanged, canBeEvaluated }: ActivityProps,
  ref: React.Ref<ActivityInterface> | undefined
) => {
  const { tActivity } = useTranslateFunctions()
  const [cardCount] = useState(
    complexity === '1' ? 2 : complexity === '2' ? 4 : 6
  )
  const [aspectRatio] = useState<string>(
    cardCount === 2 ? '1 / 2' : cardCount === 4 ? '1 / 1' : '3 / 2'
  )
  const contextProviderRef = useRef<DndContextProviderInterface>(null)
  const { cards } = useGetCards(cardCount)

  useImperativeHandle(
    ref,
    (): ActivityInterface => ({
      getResult: () => {
        const placedCards = contextProviderRef?.current?.getCards() || []
        const isCorrect = placedCards.reduce(
          (result, currentPlacedCard, index) => {
            const expressedCardKey = SVGS_HASH[cardCount][index]
            return currentPlacedCard?.keyImage !== expressedCardKey
              ? false
              : result
          },
          true
        )
        return isCorrect
      },
      generateNext: () => {},
    })
  )

  return (
    <DndContextProvider
      ref={contextProviderRef}
      count={cardCount}
      onHandleChanged={onHandleChanged}
      canBeEvaluated={canBeEvaluated}
      aspectRatio={aspectRatio}
      usedCards={cards}
    >
      <P5 align="center" type="ghost">
        {tActivity('as.title')}
      </P5>
      <CustomDragLayer />
      <DropCards />
      <AvaibleCards />
    </DndContextProvider>
  )
}

export default forwardRef(AS)
