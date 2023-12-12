import { useState, useEffect } from 'react'
import {
    getRandomSvgs,
    getRandomSvgsWithChangeConfig,
    getHideConfig,
} from '@helpers/svg-helpers'
import { shuffle } from '@helpers/array-helper'
import {
    CardType,
    AnswerType,
} from '@components/activities/visual/visual_differentiation'

const START_COUNT_CARDS = 2

const PICTURES_FOR_2 = [
    'car',
    'cloud',
    'ladyBug',
    'lego',
    'logousek',
    'lolipop',
    'bear',
]
const PICTURES_FOR_3 = ['car', 'flower', 'cloud', 'ladyBug', 'sun', 'bear']
const PICTURES_FOR_4 = ['car', 'flower', 'ladyBug', 'bear']

const getCardsWithSettings = (complexity: string) => {
    switch (complexity) {
        case '1':
            const [CorrectCardComponent, WrongCardComponent] = getRandomSvgs(2)
            return { WrongCardComponent, CorrectCardComponent }
        case '2':
            const ROTATE_DEGREES_CORRECT = 0
            const ROTATE_DEGREES_WRONG = 180
            const [UsedCard] = getRandomSvgsWithChangeConfig(1, PICTURES_FOR_2)

            return {
                WrongCardComponent: UsedCard.component,
                CorrectCardComponent: UsedCard.component,
                wrongAnswersAdditionalObj: { rotateDegrees: ROTATE_DEGREES_WRONG },
                correctAnswersAdditionalObj: {
                    rotateDegrees: ROTATE_DEGREES_CORRECT,
                },
            }
        case '3':
        case '4':
        default:
            const usedPictures = complexity === '3' ? PICTURES_FOR_3 : PICTURES_FOR_4
            const [usedCard] = getRandomSvgsWithChangeConfig(1, usedPictures)

            return {
                WrongCardComponent: usedCard.component,
                CorrectCardComponent: usedCard.component,
                wrongAnswersAdditionalObj: {},
                correctAnswersAdditionalObj: {
                    hideConfing: getHideConfig(
                        complexity === '3'
                            ? [...usedCard.hideSettings]
                            : [...(usedCard.hideDetailsSettings || [])]
                    ),
                },
            }
    }
}

const getAnswerTypes = (
    complexity: string,
    currentTask: number
): AnswerType => {
    if (START_COUNT_CARDS > 1) {
        const {
            WrongCardComponent,
            CorrectCardComponent,
            wrongAnswersAdditionalObj,
            correctAnswersAdditionalObj,
        } = getCardsWithSettings(complexity)

        const wrongCards: CardType[] = Array.from(
            new Array(START_COUNT_CARDS + Math.floor(currentTask / 4)),
            (_, index) => {
                return {
                    name: `wrong_${index}`,
                    isCorrect: false,
                    ...wrongAnswersAdditionalObj,
                    Component: WrongCardComponent,
                }
            }
        )

        const correctAnswers: string[] = []
        const correctCards: CardType[] = Array.from(new Array(1), (_, index) => {
            const cardName = `correct_${index}`
            correctAnswers.push(cardName)

            return {
                name: cardName,
                ...correctAnswersAdditionalObj,
                Component: CorrectCardComponent,
            }
        })

        const mixedCards = [...wrongCards, ...correctCards]

        return {
            cards: shuffle<CardType>(mixedCards),
            correctAnswers: correctAnswers,
        }
    } else {
        return { cards: [], correctAnswers: [] }
    }
}

const useGetCards = (complexity: string, currentTask: number) => {
    const [cards, setCards] = useState<CardType[]>()
    const [correctAnswers, setCorrectAnswers] = useState<string[]>()

    useEffect(() => {
        const { cards, correctAnswers } = getAnswerTypes(complexity, currentTask)
        setCards(cards)
        setCorrectAnswers(correctAnswers)
    }, [complexity, currentTask])

    return { cards, correctAnswers }
}

export default useGetCards
