import React from 'react'

import ClickableIcon from '@components/clickable-icon'
import { useSoundButton } from '@hooks/useSoundButton'

import * as S from './styled'
import Reference from '@components/reference'

type SoundButtonProps = {
  sound: string
  fontSize: string
  customSound?: HTMLAudioElement
  reference?: string | React.ReactNode
}
const SoundButton: React.FC<SoundButtonProps> = ({
  sound,
  fontSize,
  customSound,
  reference,
}) => {
  const { stopAudio, playAudio, isPlayed } = useSoundButton(sound, customSound)

  return (
    <S.SoundButtonWrapper>
      <ClickableIcon
        fontSize={fontSize}
        {...(isPlayed
          ? {
            onClick: stopAudio,
            icon: 'pause_circle_outline',
          }
          : {
            onClick: playAudio,
            icon: 'play_circle_outline',
          })}
      />
      <S.ReferenceWrapper>
        <Reference reference={reference} />
      </S.ReferenceWrapper>
    </S.SoundButtonWrapper>
  )
}

export default SoundButton
