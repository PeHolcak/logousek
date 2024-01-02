import { ActivityProps } from '@components/pages/activity'
import React from 'react'

const ActivityNotFound: React.FC<ActivityProps> = () => {
  return <div>Typ Aktivity nebyla nalezena</div>
}

export const getActivity = (
  activityName: string
): Promise<React.FC<ActivityProps>> => {
  switch (activityName) {
    case 'a_s':
      return import('@components/activities/visual/a_s').then(
        (module) => module.default as React.FC<ActivityProps>
      )
    case 'visual_memory':
      return import('@components/activities/visual/visual_memory').then(
        (module) => module.default as React.FC<ActivityProps>
      )
    case 'visual_differentiation':
      return import(
        '@components/activities/visual/visual_differentiation'
      ).then((module) => module.default as React.FC<ActivityProps>)
    case 'sound_differentiation':
    case 'word_differentiation':
      return import('@components/activities/audio/audio-differentiation').then(
        (module) => module.default as React.FC<ActivityProps>
      )
    case 'audio_memory':
      return import('@components/activities/audio/memory').then(
        (module) => module.default as React.FC<ActivityProps>
      )
    case 'syllables':
      return import('@components/activities/audio/syllables').then(
        (module) => module.default as React.FC<ActivityProps>
      )
    case '3_pictures':
      return import('@components/activities/seriality/three-cards').then(
        (module) => module.default as React.FC<ActivityProps>
      )
    case 'language_practicing':
      return import(
        '@components/activities/oromotorics/language-practicing'
      ).then((module) => module.default as React.FC<ActivityProps>)
    default:
      return Promise.resolve(ActivityNotFound as React.FC<ActivityProps>)
  }
}
