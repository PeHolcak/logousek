import { TutorialConfigType } from '@hooks/useTutorial'
import { sounds } from './sounds-paths'

export const ActivityPageConf: TutorialConfigType = [
  {
    text: '',
    sound: sounds.welcome,
    confirm: false,
    minimize: true,
    waitMilis: 5000,
  },
  {
    text: '',
    sound: sounds.dragCards,
    confirm: false,
    minimize: true,
    waitMilis: 8000,
    higlighttedClassNames: ['dragCard'],
  },
  {
    text: '',
    sound: sounds.dropCards,
    confirm: false,
    minimize: true,
    waitMilis: 15000,
    higlighttedClassNames: ['dropCard'],
  },
]
