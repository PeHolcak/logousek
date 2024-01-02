import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { ActivityProps } from '@components/pages/activity'
import { P5 } from '@components/typography/paragraph'
import useGetCards from '@hooks/visual-activity/use-get-cards'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import CardList from './visual-card-list'

export type AddictionObjType = {
  rotateDegrees?: number
  hideConfing?: { [key: string]: boolean }
}

export type CardType = {
  name: string
  Component: React.FC<{ changeConfig?: { [key: string]: boolean } }>
  reference?: string
} & AddictionObjType

export type AnswerType = {
  cards: CardType[]
  correctAnswers: string[]
}

export default forwardRef(function VisualDifActivity(
  { complexity, currentTask, onHandleChanged }: ActivityProps,
  ref
) {
  const { tActivity } = useTranslateFunctions()
  const [selectedName, setSelectedName] = useState<string | undefined>()
  const { cards, correctAnswers } = useGetCards(complexity, currentTask)

  useImperativeHandle(ref, () => ({
    getResult: () => {
      return selectedName ? correctAnswers?.includes(selectedName) : false
    },
  }))

  const onCardClickHandle = (cardName?: string) => {
    onHandleChanged(Boolean(cardName))
    setSelectedName(cardName)
  }

  return (
    <div>
      <P5 align="center" type="ghost" margin="0 0 16px 0">
        {tActivity('visual.visualDifferentation.description')}
      </P5>
      <CardList
        cards={Array.isArray(cards) ? cards : []}
        selectedName={selectedName}
        setSelectedName={onCardClickHandle}
      />
    </div>
  )
})
