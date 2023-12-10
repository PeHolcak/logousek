import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef,
} from 'react'
import { ActivityInterface, ActivityProps } from '@components/pages/activity'
import { videosArray } from '@constants/activity-confs/language-practicing-conf'
import { P5 } from '@components/typography/paragraph'

import * as S from './styled'

const LanguagePracticing = (
    { onHandleChanged, currentTask }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const videoEl = useRef<any>(null)
    useImperativeHandle(
        ref,
        (): ActivityInterface => ({
            getResult: () => true,
            generateNext: () => { },
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
        <div>
            <P5 align="center" type="ghost">Opakuj po mě</P5>
            <S.StyledVideo
                ref={videoEl}
                autoPlay
                loop
                onLoadedMetadata={handleLoadedMetadata}
            >
                <source src={`/videos/oromotorics/${video}.mp4`} />
            </S.StyledVideo>
        </div>
    )
}

export default forwardRef(LanguagePracticing)
