import { getRandomElementFromList } from './array-helper'
import { shuffle } from './array-helper'
import getSoundConf from 'constants/activity-confs/sound-conf'
import getWordDiffConf from 'constants/activity-confs/word-diff-conf'
import getSyllables, { Syllable } from 'constants/activity-confs/syllables-conf'

export type PictureType = {
  name: string
  svg: React.ReactNode
  rotateDegrees?: number
  hideConfing?: { [key: string]: boolean }
  reference?: React.ReactNode
}

export type AudioDiffConfType = {
  [key: string]: {
    name: string
    incorrect: PictureType[]
    correct: PictureType
    sound: string
    soundReference?: string | React.ReactNode
  }[]
}

export type ActivityName = "word_differentiation" | "audio_memory" | "sound_differentiation" | "syllables"

const getAudioConf = (activityName: Omit<"syllables", ActivityName>): AudioDiffConfType => {
  if (activityName === "word_differentiation") {
    return getWordDiffConf()
  } else if (activityName === "audio_memory") {
    return getSoundConf()
  } else {
    return getSoundConf()
  }
}

const getSyllablesConf = () => {
  return getSyllables()
}



export const getAudioConfElement = (
  difficulty: string,
  activityName: ActivityName
) => {
  const conf = getAudioConf(activityName)
  const currentDiffConf = conf[difficulty]
  const audiosArray = [...(currentDiffConf ? currentDiffConf : conf[1])]
  const audioElement = getRandomElementFromList(audiosArray, 1)[0] || {}
  return {
    name: audioElement.name,
    sound: audioElement.sound,
    soundReference: audioElement.soundReference,
    pictures:
      audioElement.incorrect && audioElement.correct
        ? shuffle([...audioElement.incorrect, audioElement.correct])
        : [],
  }
}

export const getSyllablesConfElement = (
  difficulty: string
): Syllable => {
  const conf = getSyllablesConf()
  const audiosArray = [...conf[difficulty]]
  const audioElement: Syllable = getRandomElementFromList(audiosArray, 1)[0] || {}
  return audioElement
}

export const checkAnswer = (
  difficulty: string,
  audioName: string,
  selectedCardName: string,
  activityName: ActivityName
) => {

  const audioConf = getAudioConf(activityName)
  const audiosArray = audioConf[difficulty] ? audioConf[difficulty] : audioConf[1]
  const correctAnswer = audiosArray.find(
    (audio) => audio.name === audioName
  )?.correct
  return correctAnswer?.name === selectedCardName

}


export const checkSyllablesAnswer = (
  difficulty: string,
  name: string,
  cardNames: string[]
) => {

  const syllablesConf = getSyllablesConf()
  const syllablesArray = syllablesConf[difficulty]
  const correctAnswer = syllablesArray.find(
    (syllable) => syllable.name === name
  )

  if (correctAnswer) {
    return correctAnswer.pairs.reduce((result, pair, index) => {
      const isTrue = pair.second.name === cardNames[index]

      if (isTrue) {
        return result;
      }
      return false
    }, true)
  }
  return false
}

