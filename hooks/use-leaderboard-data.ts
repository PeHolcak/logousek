import { useState, useEffect, useCallback, useMemo } from 'react'
import { MessageInstance } from 'antd/es/message/interface'
import { useSession } from 'next-auth/react'

import { getLeaderboard } from 'calls/credit-calls'
import { UserWithCredit } from 'pages/api/credit/get-leaderboard'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

type StateType = 'loading' | 'ready' | 'error'

const useLeaderboardData = (messageApi: MessageInstance) => {
    const [usersWithHighestCredit, setUsersWithHighestCredit] = useState<
        UserWithCredit[] | undefined
    >()
    const [currentUser, setCurrentUser] = useState<
        UserWithCredit | undefined
    >()
    const [state, setState] = useState<StateType>('loading')

    const { tError } = useTranslateFunctions()

    const sessionData = useSession()

    const userData = sessionData.data?.user as {
        email: string
        name: string
        id: string
    }

    const getData = useCallback(async () => {
        try {
            const res = await getLeaderboard(userData?.id)
            if (res.status === 200) {
                setUsersWithHighestCredit(res?.data?.users)
                setCurrentUser(res?.data?.currentUser)
                setState('ready')
            } else {
                messageApi.open({
                    type: 'error',
                    content: tError('errors.getDataError'),
                })
                setState('error')
            }
        } catch (err) {
            messageApi.open({
                type: 'error',
                content: tError('errors.getDataError'),
            })
            setState('error')
        }
    }, [messageApi, tError, userData?.id])

    useEffect(() => {
        setState('loading')
        getData()
    }, [getData])

    const usersWithCurrentUser = useMemo(() => {
        let wasCurrentUserInTop = false
        const result = usersWithHighestCredit?.map((user) => {
            if (user.userId === currentUser?.userId) {
                wasCurrentUserInTop = true
                return {
                    ...user,
                    isCurrentUser: true,
                    showTopSpace: false,
                }
            }
            return {
                ...user,
                isCurrentUser: false,
                showTopSpace: false,
            }
        })

        if (!wasCurrentUserInTop && currentUser) {
            result?.push({ ...currentUser, isCurrentUser: true, showTopSpace: true })
        }

        return result
    }, [currentUser, usersWithHighestCredit])

    return {
        state,
        firstThree: usersWithCurrentUser?.slice(0, 3),
        other: usersWithCurrentUser?.slice(3),
    }
}

export default useLeaderboardData
