import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { useRouter } from 'next/router'
import { getAudioConfElement, checkAnswer, ActivityName } from '@helpers/sound-helper'
import { ActivityProps } from '@components/pages/activity'
import CardList from '@components/card-list'
import { P5 } from '@components/typography/paragraph'
import SoundButton from '../../../sound-button'
import * as S from './styled'

export default forwardRef(function AudioDifferentiation(
  { complexity, onHandleChanged }: ActivityProps,
  ref
) {
  const router = useRouter()
  const activityName = router.query?.activityName as ActivityName
  const [audioElement] = useState(getAudioConfElement(complexity, activityName))
  const [selected, setSelected] = useState<string | undefined>()

  useImperativeHandle(ref, () => ({
    getResult: () => checkAnswer(complexity, audioElement.name, selected || '', activityName),
  }))

  const onCardSelectHandle = (cardName: string) => {
    onHandleChanged(Boolean(cardName))
    setSelected(cardName)
  }

  return (
    <div>
      <S.SoundWrapper>
        <P5 align="center" type="ghost">Přehrajde si zvuk</P5>
        <S.SoundButtonWrapper>
          <SoundButton fontSize="4rem" sound={audioElement.sound} />
        </S.SoundButtonWrapper>
      </S.SoundWrapper>
      <P5 align="center" type="ghost">Vyberte správnou odpověď</P5>
      <CardList
        cards={audioElement.pictures}
        onChange={onCardSelectHandle}
        selected={selected}
      />
    </div>
  )
})
