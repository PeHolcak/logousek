import React, {
    useContext
} from 'react'
import SerialityContext from '@contexts/seriality-context'
import { CardType } from '@contexts/seriality-context/seriality-context-provider'
import SortableList from './sortable-list'


export interface Item {
    id: number
    text: string
}

const ThreeCardContent = (

) => {
    const serialityContext = useContext(SerialityContext);

    const onHandleChange = (cards: CardType[]) => {
        serialityContext?.setCards([...cards])
    }

    return (
        <SortableList onHandleChange={onHandleChange} cards={serialityContext?.cards || []} />
    )
}

export default ThreeCardContent
