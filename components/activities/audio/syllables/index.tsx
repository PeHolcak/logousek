import React, {
    useState,
    forwardRef,
    useRef,
    useImperativeHandle,
    useMemo,
} from 'react'

import { ActivityInterface } from '@components/pages/activity'
import DndContextProvider, {
    DndContextProviderInterface,
} from '@contexts/dnd-context/dnd-context-provider'
import { ActivityProps } from '@components/pages/activity'
import { P5 } from '@components/typography/paragraph'
import SyllablesDropCards from './syllables-drop-cards'
import CustomDragLayer from '@components/custom-drag-layer'
import AvaibleCards from '@components/avaible-cards'

import ActivityCard from '@components/activity-card'
import { checkSyllablesAnswer, getSyllablesConfElement } from '@helpers/sound-helper'
import {
    Syllable,
    SyllablesConfType,
} from '@constants/activity-confs/syllables-conf'

import * as S from './styled'
import { CardType } from '@hooks/use-get-cards'

const ASPECT_RATIO = '1 / 1'

const Syllables = (
    { onHandleChanged, wasChanged, complexity }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const contextProviderRef = useRef<DndContextProviderInterface>(null)
    const [element] = useState<Syllable>(getSyllablesConfElement(complexity))
    const cards = useMemo(
        () =>
            element.pairs.reduce(
                (result: { first: CardType[]; second: CardType[] }, pair) => {
                    result.first.push({
                        img: pair.first.svg,
                        keyImage: pair.first.name,
                        reference: pair.first.reference,
                    })

                    result.second.push({
                        img: pair.second.svg,
                        keyImage: pair.second.name,
                        reference: pair.second.reference,
                    })

                    return result
                },
                { first: [], second: [] }
            ),
        [element.pairs]
    )

    useImperativeHandle(
        ref,
        (): ActivityInterface => ({
            getResult: () => {
                const placedCards = contextProviderRef?.current?.getCards()
                const isCorrect = checkSyllablesAnswer(complexity, element.name, placedCards?.map(placedCard => placedCard.keyImage) || [])
                return isCorrect
            },
            generateNext: () => { },
        })
    )
    return (
        <div>
            <DndContextProvider
                ref={contextProviderRef}
                count={3}
                onHandleChanged={onHandleChanged}
                wasChanged={wasChanged}
                aspectRatio={ASPECT_RATIO}
                usedCards={cards.second}
            >
                <P5 align="center" type="ghost">
                    Slož obrázek
                </P5>
                <S.Container>
                    <S.TaskWrapper>
                        {cards.first.map((modelCard) => {
                            return < ActivityCard
                                key={`activity_card_${modelCard.keyImage}`
                                }
                                cursor="default"
                                reference={modelCard.reference}
                            >
                                {modelCard.img}
                            </ActivityCard>
                        })}
                    </S.TaskWrapper>
                    <SyllablesDropCards />
                </S.Container>
                <AvaibleCards />
                <CustomDragLayer />
            </DndContextProvider>
        </div >
    )
}

export default forwardRef(Syllables)
