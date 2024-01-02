import { TutorialConfigType } from '@hooks/useTutorial'
import { sounds } from './sounds-paths'

export const loginPageConf: TutorialConfigType = [
  {
    text: '',
    sound: sounds.welcome,
    confirm: false,
    minimize: true,
    waitMilis: 7000,
  },
  {
    text: '',
    sound: sounds.registration,
    confirm: false,
    minimize: true,
    waitMilis: 7000,
    higlighttedIds: ['registerButton'],
  },
  {
    text: '',
    sound: sounds.loginAfterRegistration,
    confirm: false,
    minimize: true,
    waitMilis: 9000,
    higlighttedIds: ['loginAsUserButton'],
  },

  {
    text: '',
    sound: sounds.loginAsGuess,
    confirm: false,
    minimize: true,
    waitMilis: 9000,
    higlighttedIds: ['loginAsGuessButton'],
  },
  {
    text: '',
    sound: sounds.loginAsGuessEntry,
    confirm: false,
    minimize: true,
    waitMilis: 4000,
  },
]
