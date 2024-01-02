import { TutorialConfigType } from '@hooks/useTutorial'
import { sounds } from './sounds-paths'

export const gameMenuPageConf: TutorialConfigType = [
  {
    text: '',
    sound: sounds.welcome,
    confirm: false,
    minimize: true,
    waitMilis: 6000,
  },
  {
    text: '',
    sound: sounds.activityType,
    confirm: false,
    minimize: true,
    waitMilis: 7000,
    higlighttedIds: ['roundFooter'],
  },
  {
    text: '',
    sound: sounds.activity,
    confirm: false,
    minimize: true,
    waitMilis: 5000,
    higlighttedClassNames: ['gameCard'],
  },

  {
    text: '',
    sound: sounds.difficulty,
    confirm: false,
    minimize: true,
    waitMilis: 9000,
  },
  {
    text: '',
    sound: sounds.difficultyExplanation,
    confirm: false,
    minimize: true,
    waitMilis: 8000,
  },
]
