import React, {
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react'

import { ActivityProps } from '@components/pages/activity'
import ActivitySlider from '@components/activity-slider'
import { getRandomSvgsWithChangeConfig } from '@helpers/svg-helpers'
import { SvgListType } from '@helpers/svg-helpers'
import { shuffle } from '@helpers/array-helper'

import * as S from './styled'
import ActivityCard from '../../../activity-card'

export default forwardRef(function VisualMemoryActivity(
  { complexity, onHandleChanged }: ActivityProps,
  ref
) {
  const [generatedSvgs, setGeneratedSvgs] = useState<SvgListType[]>([])
  const [correctAnswers, setCorrectAnswers] = useState<SvgListType[]>([])
  const [selectedElements, setSelectedElements] = useState<string[]>([])
  useImperativeHandle(ref, () => ({
    getResult: () => {
      return (
        selectedElements?.length === correctAnswers.length &&
        selectedElements?.reduce(
          (res, currElement) =>
            correctAnswers.find((answer) => answer.name === currElement)
              ? res
              : false,
          true
        )
      )
    },
  }))

  useEffect(() => {
    const svgs = getRandomSvgsWithChangeConfig(
      complexity === '1' ? 4 : complexity === '2' ? 6 : 9
    )

    const correctAnswersName =
      complexity === '1' ? 1 : complexity === '2' ? 2 : 4

    const correctSvgsName = svgs.slice(0, correctAnswersName)
    setGeneratedSvgs(shuffle(svgs))
    setCorrectAnswers(correctSvgsName)
  }, [complexity])

  const getCardData = () => {
    return generatedSvgs.map((generatedSvg) => {
      const SvgComponent = generatedSvg.component
      return {
        name: generatedSvg.name,
        svg: <SvgComponent key={`result-element-card-${generatedSvg.name}`} />,
      }
    })
  }

  const getActivityCards = () => {
    return generatedSvgs
      .filter((Svg) =>
        correctAnswers.find((correctAnswer) => correctAnswer.name === Svg.name)
      )
      .map((element) => {
        const Component = element.component
        return (
          <ActivityCard key={`show-element-card-${element.name}`}>
            <Component />
          </ActivityCard>
        )
      })
  }

  const canBeChecked = (newSelectedElements: string[]) => {
    if (
      correctAnswers.length === newSelectedElements?.length &&
      newSelectedElements?.length
    ) {
      onHandleChanged(true)
    } else if (newSelectedElements?.length) {
      onHandleChanged(false)
    }
  }

  const onChange = (value: string) => {
    setSelectedElements((v) => {
      let newValue = []
      if (v.includes(value)) {
        newValue = v.filter((vItem) => vItem !== value)
      } else {
        newValue = [...v, value]
      }
      canBeChecked(newValue)
      return newValue
    })
  }

  return (
    <ActivitySlider
      questionPart={
        <S.ActivityCardList>{getActivityCards()}</S.ActivityCardList>
      }
      cardData={getCardData()}
      setSelectedElement={onChange}
      selectedElements={selectedElements}
    />
  )
})
