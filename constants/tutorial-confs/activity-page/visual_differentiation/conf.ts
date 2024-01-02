import { TutorialConfigType } from '@hooks/useTutorial'
import { sounds } from './sounds-paths'

export const ActivityPageConf: TutorialConfigType = [
  {
    text: '',
    sound: sounds.welcome,
    confirm: false,
    minimize: true,
    waitMilis: 7000,
    higlighttedClassNames: ['activityCard'],
  },
]
