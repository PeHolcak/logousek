import { useEffect, useState, useCallback } from 'react'

type TutorialConfigItemType = {
    text: string
    sound: string
    higlighttedIds?: string[]
    confirm: boolean
    waitMilis?: number
}

export type TutorialConfigType = TutorialConfigItemType[]

export const useTutorial = (config: TutorialConfigType) => {
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
        setIsTutorialOpened(true)
        next()
    }

    const next = useCallback(() => {
        const newIndex = typeof index === 'number' ? index + 1 : 0
        const higlighttedIds = config[newIndex]?.higlighttedIds

        if (_document && Array.isArray(higlighttedIds)) {
            higlighttedIds.map((higlighttedId) => {
                _document.getElementById(higlighttedId)?.classList.add('highlight')
            })
        }

        setIndex(newIndex)
        setActiveItem(config[newIndex])
    }, [_document, config, index])

    useEffect(() => {
        if (
            activeItem?.waitMilis &&
            typeof index === 'number' &&
            config[index + 1] &&
            isTutorialOpened
        ) {
            console.log('waiting...', activeItem)
            // Nastavíme časovač
            const showNextTimer = setTimeout(() => {
                next()
            }, activeItem?.waitMilis) // Po 5 sekundách

            setTimerIdForNextItem(showNextTimer)
            // Úklid: vymazání časovače, pokud se komponenta odstraní dříve, než časovač skončí
            return () => clearTimeout(showNextTimer)
        }
    }, [activeItem, config, index, isTutorialOpened, next])

    const reset = useCallback(() => {
        setIsTutorialOpened(false)
        setActiveItem(undefined)
        setIndex(undefined)
        if (timerIdForNextItem) {
            clearTimeout(timerIdForNextItem)
        }
    }, [timerIdForNextItem])

    return {
        runTutorial,
        text: activeItem?.text,
        index,
        isTutorialOpened,
        reset,
        next,
        canBeConfirmed: activeItem?.confirm,
    }
}
