import React, { useState } from 'react'

import ActivityCard from '@components/activity-card'
import Timer from '@components/timer/index'
import TrafficLights from '@components/traffic-lights'
import { PictureType } from '@helpers/sound-helper'
import { P2 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

const TIMER_COUNT_DOWN_TIME = 6000

type ActivitySliderProps = {
    questionPart?: React.ReactElement
    cardData: PictureType[]
    setSelectedElement: (value: string) => void
    selectedElements: string[]
    onTimerIsDoneHandler?: () => void
}

const ActivitySlider: React.FC<ActivitySliderProps> = ({
    questionPart,
    cardData,
    setSelectedElement,
    selectedElements,
    onTimerIsDoneHandler,
}) => {
    const [isQuesionpart, setIsQuesionpart] = useState(false)
    const { tActivity } = useTranslateFunctions()

    const onTimerDone = () => {
        if (typeof onTimerIsDoneHandler === 'function') {
            onTimerIsDoneHandler()
        }
    }

    const _onTimerIsDoneHandler = () => {
        onTimerDone()
        setIsQuesionpart(true)
    }

    const onSkipHandle = () => {
        onTimerDone()
        setIsQuesionpart(true)
    }
    const answerPart = cardData.map((Element) => {
        const elementName = Element?.name
        return (
            <ActivityCard
                key={`element-card-${elementName}`}
                onClick={() => setSelectedElement(elementName)}
                selected={selectedElements?.includes(elementName)}
            >
                {Element.svg}
            </ActivityCard>
        )
    })

    return (
        <S.TemplateWrapper isQuesionpart={isQuesionpart}>
            <S.ShowedPart>
                <P2>
                    <Timer
                        countdownTime={TIMER_COUNT_DOWN_TIME}
                        timerIsDone={_onTimerIsDoneHandler}
                    />
                </P2>
                <TrafficLights countdownTime={TIMER_COUNT_DOWN_TIME} />
                {questionPart}
                <S.SkipButton onClick={onSkipHandle}>
                    {tActivity('buttons.skip')}
                </S.SkipButton>
            </S.ShowedPart>
            <S.AnswerPart>{answerPart}</S.AnswerPart>
        </S.TemplateWrapper>
    )
}

export default ActivitySlider
