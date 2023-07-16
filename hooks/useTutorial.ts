import React, { useEffect, useState } from "react"
import { css } from "styled-components";

export type TutorialConfigType = {
    text: string,
    sound: string,
    higlighttedIds?: string[],
    confirm: boolean,
    waitMilis: number
}[]

export const useTutorial = (config: TutorialConfigType) => {
    const [isTutorialOpened, setIsTutorialOpened] = useState(false);
    const [index, setIndex] = useState<number | undefined>()
    const [document, setDocument] = useState<any>(null)

    useEffect(() => {
        setDocument(document)
    }, [document])

    const runTutorial = () => {
        setIsTutorialOpened(true)
        next();
    }

    const getText = () => {
        if (typeof index === "number") {
            return config[index]?.text
        }
        return null;
    }

    const next = () => {
        const newIndex = typeof index === "number" ? index + 1 : 0
        const higlighttedIds = config[newIndex]?.higlighttedIds;

        if (document && Array.isArray(higlighttedIds)) {
            higlighttedIds.map(higlighttedId => {
                document.getElementById(higlighttedId)?.classList.add("highlight");
            })
        }

        setIndex(newIndex)

    }

    const reset = () => {
        setIsTutorialOpened(false);
        setIndex(undefined)
    }

    return { runTutorial, text: getText(), index, isTutorialOpened, reset, next }
};