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
import {
  checkSyllablesAnswer,
  getSyllablesConfElement,
} from '@helpers/sound-helper'
import { Syllable } from '@constants/activity-confs/syllables-conf'
import { CardType } from '@hooks/use-get-cards'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

const ASPECT_RATIO = '1 / 1'

const Syllables = (
  { onHandleChanged, canBeEvaluated, complexity }: ActivityProps,
  ref: React.Ref<ActivityInterface> | undefined
) => {
  const { tActivity } = useTranslateFunctions()
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
        const cardNames =
          placedCards?.reduce((result: string[], placedCard) => {
            if (placedCard) {
              result.push(placedCard.keyImage)
            }
            return result
          }, []) || []
        const isCorrect = checkSyllablesAnswer(
          complexity,
          element.name,
          cardNames
        )
        return isCorrect
      },
      generateNext: () => {},
    })
  )

  return (
    <DndContextProvider
      ref={contextProviderRef}
      count={3}
      onHandleChanged={onHandleChanged}
      canBeEvaluated={canBeEvaluated}
      aspectRatio={ASPECT_RATIO}
      usedCards={cards.second}
    >
      <P5 align="center" type="ghost" margin="0 0 16px 0">
        {tActivity('audio.syllables.title')}
      </P5>
      <S.Container>
        <S.TaskWrapper>
          {cards.first.map((modelCard) => {
            return (
              <ActivityCard
                key={`activity_card_${modelCard.keyImage}`}
                cursor="default"
                reference={modelCard.reference}
              >
                {modelCard.img}
              </ActivityCard>
            )
          })}
        </S.TaskWrapper>
        <SyllablesDropCards />
      </S.Container>
      <AvaibleCards />
      <CustomDragLayer />
    </DndContextProvider>
  )
}

export default forwardRef(Syllables)
