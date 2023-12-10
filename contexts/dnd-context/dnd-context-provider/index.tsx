import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback
} from 'react'

import { getEmptyArray } from '@helpers/array-helper'
import { CardType } from '@hooks/use-get-cards'

import DndContext from '..'

export type CardInGame = CardType | undefined
export type CardsInGame = CardInGame[]

export type DndContextProviderInterface = {
  getCards: () => CardsInGame
}

type DndContextProviderType = {
  children: any
  count: number
  onHandleChanged: (canBeChecked: boolean) => void
  aspectRatio?: string
  canBeEvaluated: boolean
  usedCards: CardsInGame
}


export type DndContextValueType = {
  avaibleCards: CardsInGame
  setAvaibleCards: React.Dispatch<React.SetStateAction<CardsInGame>>
  placedCards: CardsInGame
  setPlacedCards: React.Dispatch<React.SetStateAction<CardsInGame>>
  aspectRatio: string
  setSelectedCard: (value?: string) => void
  selectedCard: string | undefined

}

export default forwardRef(function DndContextProvider(
  {
    children,
    count,
    onHandleChanged,
    aspectRatio = '1 / 1',
    usedCards,
  }: DndContextProviderType,
  ref
) {
  const [cards, setCards] = useState<CardsInGame>(usedCards)
  const [placedCards, setPlacedCards] = useState<CardsInGame>(
    getEmptyArray(count)
  )
  const [selectedCard, setSelectedCard] = useState<string | undefined>()

  useEffect(() => {
    const isAllCardsPlaced = cards.length === 0

    if (isAllCardsPlaced) {
      onHandleChanged(true)
    }
  }, [cards, onHandleChanged])

  useImperativeHandle(
    ref,
    (): DndContextProviderInterface => ({
      getCards: () => placedCards,
    }),
    [placedCards]
  )

  const onSetSelectedCardChangeHandler = useCallback((value?: string) => {
    setSelectedCard((prevState?: string) => prevState === value ? undefined : value)
  }, [])

  const dndContextValue: DndContextValueType = {
    avaibleCards: cards,
    setAvaibleCards: setCards,
    placedCards,
    setPlacedCards,
    aspectRatio,
    setSelectedCard: onSetSelectedCardChangeHandler,
    selectedCard
  }

  return (
    <DndContext.Provider value={dndContextValue}>
      {children}
    </DndContext.Provider>
  )
})
