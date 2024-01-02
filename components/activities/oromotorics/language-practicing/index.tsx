import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from 'react'

import { ActivityInterface, ActivityProps } from '@components/pages/activity'
import { videosArray } from '@constants/activity-confs/language-practicing-conf'
import { P5 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

const LanguagePracticing = (
  { onHandleChanged, currentTask }: ActivityProps,
  ref: React.Ref<ActivityInterface> | undefined
) => {
  const { tActivity } = useTranslateFunctions()
  const videoEl = useRef<any>(null)
  useImperativeHandle(
    ref,
    (): ActivityInterface => ({
      getResult: () => true,
      generateNext: () => {},
    })
  )

  useEffect(() => {
    onHandleChanged(true)
  }, [onHandleChanged])

  const handleLoadedMetadata = () => {
    const video = videoEl.current
    if (!video) return
  }

  const video = videosArray[currentTask - 1]

  return (
    <S.LanguagePracticingWrap>
      <P5 align="center" type="ghost" margin="0 0 16px 0">
        {tActivity('audio.audioDiff.chooseCorrectAnswer')}
      </P5>
      <S.StyledVideo
        ref={videoEl}
        autoPlay
        loop
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={`/videos/oromotorics/${video}.mp4`} />
      </S.StyledVideo>
    </S.LanguagePracticingWrap>
  )
}

export default forwardRef(LanguagePracticing)
