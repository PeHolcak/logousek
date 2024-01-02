import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import SerialityContext from '..'
import { SvgWrapper } from './styled'
import { shuffle } from '@helpers/array-helper'
import { threePictures } from 'constants/activity-confs/seriality-conf'

export type SerialityContextProviderInterface = {
  checkResult: () => boolean
}

type SerialityContextProviderType = {
  children: any
  type: string
  currentTask: number
}

export type CardType = { img: React.ReactNode; keyImage: string }

export type SerialityContextValueType = {
  cards: CardType[]
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>

  correctCards: string[]
}

export default forwardRef(function DndContextProvider(
  { children, type, currentTask }: SerialityContextProviderType,
  ref
) {
  const [correctCards, setCorrectCards] = useState<string[]>([])
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    const svgs = threePictures[currentTask - 1] || threePictures[0]
    const svgInCardType = svgs?.map((Card: React.ReactNode, index: number) => {
      return {
        img: <SvgWrapper>{Card}</SvgWrapper>,
        keyImage: `image_${index}`,
      }
    })
    setCorrectCards(svgInCardType.map((svg) => svg.keyImage))
    setCards(shuffle(svgInCardType))
  }, [currentTask, type])

  useImperativeHandle(
    ref,
    (): SerialityContextProviderInterface => {
      return {
        checkResult: () => {
          const isCorrect = cards.reduce((result, current, index) => {
            current.keyImage !== correctCards[index] && (result = false)
            return result
          }, true)
          return isCorrect
        },
      }
    },
    [cards, correctCards]
  )

  const serialityContextValue: SerialityContextValueType = {
    cards,
    setCards,
    correctCards,
  }

  return (
    <SerialityContext.Provider value={serialityContextValue}>
      {children}
    </SerialityContext.Provider>
  )
})
