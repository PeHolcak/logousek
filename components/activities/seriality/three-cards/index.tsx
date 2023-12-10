import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useEffect,
} from 'react'
import { useRouter } from 'next/router'

import SerialityContextProvider, {
    SerialityContextProviderInterface,
} from '@contexts/seriality-context/seriality-context-provider'
import { ActivityInterface } from '@components/pages/activity'
import { ActivityProps } from '@components/pages/activity'
import ThreeCardContent from './tree-card-content'

export interface Item {
    id: number
    text: string
}

const ThreeCards = (
    { onHandleChanged, currentTask }: ActivityProps,
    ref: React.Ref<ActivityInterface> | undefined
) => {
    const router = useRouter()
    const activityName = router.query?.activityName as string
    const serialityContextProviderRef =
        useRef<SerialityContextProviderInterface>(null)

    useImperativeHandle(
        ref,
        (): ActivityInterface => {

            // getResult: serialityContextProviderRef?.current?.checkResult || (() => false),
            return ({
                getResult: () => {
                    return serialityContextProviderRef?.current?.checkResult() || false
                },
                generateNext: () => { },
            })
        }
    )

    useEffect(() => {
        onHandleChanged(true)
    }, [onHandleChanged])

    return (
        <SerialityContextProvider
            currentTask={currentTask}
            ref={serialityContextProviderRef}
            type={activityName === '3_pictures' ? 'threePictures' : 'twoPictures'}
        >
            <ThreeCardContent />
        </SerialityContextProvider>
    )
}

export default forwardRef(ThreeCards)
