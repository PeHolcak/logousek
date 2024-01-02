import { useState, useCallback, useEffect } from 'react'

export const useSoundButton = (
  sound: string,
  customSound?: HTMLAudioElement
) => {
  const [isPlayed, setIsPlayed] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>()

  const getSound = useCallback(() => {
    return customSound || audio
  }, [audio, customSound])

  useEffect(() => {
    setAudio(new Audio(sound))
  }, [sound])

  useEffect(() => {
    const sound = getSound()
    sound && (sound.loop = true)

    return () => {
      sound && sound.pause()
    }
  }, [getSound])

  const playAudio = () => {
    setIsPlayed(true)
    const sound = getSound()
    try {
      sound && sound.play()
    } catch (e) {
      console.error(e)
    }
  }

  const stopAudio = () => {
    const sound = getSound()
    setIsPlayed(false)
    sound && sound.pause()
  }

  return { stopAudio, playAudio, isPlayed }
}
