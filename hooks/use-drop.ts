import { useCallback } from 'react'
import { CardType } from '@hooks/use-get-cards'
import { CardsInGame, DndContextValueType } from '@contexts/dnd-context/dnd-context-provider'

const filterItemFromCardType = (
    arrayToFilter: CardsInGame,
    keyImage: string
) => {
    return arrayToFilter.filter(
        (avaibleCard) => avaibleCard?.keyImage !== keyImage
    )
}

const useDrop = (dndContext: DndContextValueType | null) => {
    const onItemDropHandle = useCallback(
        (item: CardType, index: number) => {
            const previousPositionOfItem = dndContext?.placedCards.findIndex(
                (placedCard) => {
                    if (placedCard) {
                        return placedCard?.keyImage === item.keyImage
                    }
                    return false
                }
            )
            const isItemInPlacedCard = previousPositionOfItem !== -1

            if (isItemInPlacedCard) {
                dndContext?.setAvaibleCards((previousAvaibleValue) =>
                    filterItemFromCardType(previousAvaibleValue, item?.keyImage)
                )
            } else {

                const cardOnPreviousPlace =
                    dndContext?.placedCards[previousPositionOfItem]

                dndContext?.setAvaibleCards((previousAvaibleValue) => {
                    if (previousPositionOfItem && cardOnPreviousPlace) {
                        return [
                            ...filterItemFromCardType(previousAvaibleValue, item?.keyImage),
                            cardOnPreviousPlace,
                        ]
                    }
                    return filterItemFromCardType(previousAvaibleValue, item?.keyImage)
                })
            }

            dndContext?.setPlacedCards((previousPlacedValue) => {
                const indexOfPreviousPlaceOfItem = previousPlacedValue.reduce(
                    (result: number | undefined, placedItem, index) => {
                        if (placedItem?.keyImage === item?.keyImage) {
                            return index
                        } else {
                            return result
                        }
                    },
                    undefined
                )

                const updatedPlacedCards = [...previousPlacedValue]
                const currentValue = updatedPlacedCards[index]
                updatedPlacedCards[index] = item

                if (typeof indexOfPreviousPlaceOfItem === 'number') {
                    updatedPlacedCards[indexOfPreviousPlaceOfItem] = currentValue
                }
                return updatedPlacedCards
            })

        },
        [dndContext]
    )

    const onDropCardClick = useCallback((index: number, avaibleCards?: CardsInGame) => {
        const item = avaibleCards?.find((avaibleCard) => avaibleCard?.keyImage === dndContext?.selectedCard)
        if (item) {
            dndContext?.setSelectedCard(undefined)
            onItemDropHandle(item, index)
        }
    }, [dndContext, onItemDropHandle])


    return { onItemDropHandle, onDropCardClick }
}

export default useDrop
