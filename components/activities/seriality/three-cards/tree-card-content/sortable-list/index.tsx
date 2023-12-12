import React from 'react'

import { CardType } from '@contexts/seriality-context/seriality-context-provider'
import { P5 } from '@components/typography/paragraph'

import CardList from './card-list'
import CustomDragLayer from './custom-drag-layer'

export interface Item {
    id: number
    text: string
}

type CardListType = {
    cards: CardType[],
    onHandleChange: (cards: CardType[]) => void
}

const SortableList: React.FC<CardListType> = (
    { cards, onHandleChange }
) => {
    return (
        <div>
            <P5 align="center" type="ghost">Slož správně příběh</P5>
            <CardList cards={cards} onHandleChange={onHandleChange} />
            <CustomDragLayer />
        </div>
    )
}

export default SortableList
