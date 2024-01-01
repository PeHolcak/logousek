import { useEffect, useState, useCallback } from 'react'
import { useTutorialData } from './useTutorialData'

type TutorialConfigItemType = {
    text: string
    sound: string
    higlighttedIds?: string[]
    higlighttedClassNames?: string[]
    confirm: boolean
    waitMilis?: number
    minimize?: boolean
}

export type TutorialConfigType = TutorialConfigItemType[]

export const useTutorial = () => {
    const config = useTutorialData()
    const [isTutorialOpened, setIsTutorialOpened] = useState(false)
    const [index, setIndex] = useState<number | undefined>(undefined)
    const [activeItem, setActiveItem] = useState<
        TutorialConfigItemType | undefined
    >()
    const [_document, set_document] = useState<any>(null)
    const [timerIdForNextItem, setTimerIdForNextItem] =
        useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        set_document(document)
    }, [])

    const runTutorial = () => {
        if (config.length) {
            setIsTutorialOpened(true)
            next()
        }
    }

    const handleHiglighttedIds = useCallback(
        (
            type: 'remove' | 'add',
            higlighttedIds?: string[],
            higlighttedClassNames?: string[]
        ) => {
            higlighttedClassNames?.forEach((higlighttedClassName) => {
                const elements = _document.getElementsByClassName(
                    higlighttedClassName
                ) as NodeListOf<HTMLElement>
                Array.from(elements).forEach((element) => {
                    if (type === 'add') {
                        element?.classList?.add('highlight')
                    } else {
                        element?.classList?.remove('highlight')
                    }
                })
            })

            higlighttedIds?.forEach((higlighttedId) => {
                const classList = _document.getElementById(higlighttedId)?.classList
                if (classList) {
                    if (type === 'add') {
                        classList.add('highlight')
                    } else {
                        classList.remove('highlight')
                    }
                }
            })
        },
        [_document]
    )

    const next = useCallback(() => {
        const newIndex = typeof index === 'number' ? index + 1 : 0
        const newActiveItem = config[newIndex]
        const newHiglighttedIds = newActiveItem?.higlighttedIds
        const newHiglighttedClassNames = newActiveItem?.higlighttedClassNames
        const currentHiglighttedIds = activeItem?.higlighttedIds
        const currentHiglighttedClassNames = activeItem?.higlighttedClassNames

        if (_document) {
            if (
                Array.isArray(currentHiglighttedIds) ||
                Array.isArray(currentHiglighttedClassNames)
            ) {
                handleHiglighttedIds(
                    'remove',
                    currentHiglighttedIds,
                    currentHiglighttedClassNames
                )
            }
            if (
                Array.isArray(newHiglighttedIds) ||
                Array.isArray(newHiglighttedClassNames)
            ) {
                handleHiglighttedIds('add', newHiglighttedIds, newHiglighttedClassNames)
            }
        }

        if (newActiveItem.sound && window) {
            const audio = new Audio(newActiveItem.sound)
            audio.pause()
            audio.currentTime = 0
            audio.play()
        }

        setIndex(newIndex)
        setActiveItem(newActiveItem)
    }, [
        _document,
        activeItem?.higlighttedClassNames,
        activeItem?.higlighttedIds,
        config,
        handleHiglighttedIds,
        index,
    ])

    const reset = useCallback(() => {
        setIsTutorialOpened(false)
        setActiveItem(undefined)
        setIndex(undefined)
        if (timerIdForNextItem) {
            clearTimeout(timerIdForNextItem)
        }
    }, [timerIdForNextItem])

    useEffect(() => {
        if (
            activeItem?.waitMilis &&
            typeof index === 'number' &&
            config[index + 1] &&
            isTutorialOpened
        ) {
            const showNextTimer = setTimeout(() => {
                next()
            }, activeItem?.waitMilis)

            setTimerIdForNextItem(showNextTimer)
            return () => clearTimeout(showNextTimer)
        } else if (
            isTutorialOpened &&
            typeof index === 'number' &&
            config[index] &&
            !config[index + 1]
        ) {
            const currentHiglighttedIds = activeItem?.higlighttedIds
            const currentHiglighttedClassnames = activeItem?.higlighttedClassNames
            if (
                _document &&
                (Array.isArray(currentHiglighttedIds) ||
                    Array.isArray(currentHiglighttedClassnames))
            ) {
                setTimeout(() => {
                    handleHiglighttedIds(
                        'remove',
                        currentHiglighttedIds,
                        currentHiglighttedClassnames
                    )
                }, activeItem?.waitMilis)
            }
            setIsTutorialOpened(false)
            setActiveItem(undefined)
            setIndex(undefined)
        }
    }, [
        _document,
        activeItem,
        config,
        handleHiglighttedIds,
        index,
        isTutorialOpened,
        next,
    ])

    return {
        runTutorial,
        text: activeItem?.text,
        index,
        isTutorialOpened,
        reset,
        next,
        canBeConfirmed: activeItem?.confirm,
        minimize: activeItem?.minimize,
    }
}
