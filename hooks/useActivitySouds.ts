import { useCallback } from "react"

import { feedbackSound } from "@constants/activity-confs/feedback-sounds"
import { getRandomElementFromList } from '@helpers/array-helper'

export const useActivitySouds = () => {
    const playAudio = (audioPath?: string) => {
        if (audioPath && window) {
            const audio = new Audio(audioPath)
            audio.pause()
            audio.currentTime = 0
            audio.play()
        }
    }

    const getNewAudio = (path: string[]) => {
        return getRandomElementFromList(path, 1)
    }

    const playWrongAudio = useCallback(() => {
        playAudio(getNewAudio(feedbackSound.wrong))
    }, [])

    const playSuccessAudio = useCallback(() => {
        playAudio(getNewAudio(feedbackSound.success))
    }, [])

    return { playWrongAudio, playSuccessAudio }
}
