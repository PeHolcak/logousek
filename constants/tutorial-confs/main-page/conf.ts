import { TutorialConfigType } from '@hooks/useTutorial'
import { sounds } from './sounds-paths'

export const mainPageConf: TutorialConfigType = [
  {
    text: 'Ahoj, vítej v aplikaci Logoušek.',
    sound: sounds.welcome,
    confirm: false,
    waitMilis: 9000,
  },
  {
    text: '',
    sound: sounds.tutorialExplanation,
    confirm: false,
    waitMilis: 10000,
    minimize: true,
    higlighttedIds: ['character'],
  },
  {
    text: '',
    sound: sounds.continueToNext,
    confirm: false,
    minimize: true,
    waitMilis: 8000,
    higlighttedIds: [
      'navbarPlayButton',
      'mainPlayButton',
      'secondaryPlayButton',
    ],
  },
]
