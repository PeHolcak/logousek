import { useState, useEffect, useCallback } from 'react'
import { MessageInstance } from 'antd/es/message/interface'
import { useSession } from 'next-auth/react'

import { getLeaderboard } from 'calls/credit-calls'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

type StateType = 'loading' | 'ready' | 'error'

const useLeaderboardData = (messageApi: MessageInstance) => {
    const [usersWithHighestCredit, setUsersWithHighestCredit] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [state, setState] = useState<StateType>('loading')

    const { tError } = useTranslateFunctions()

    const sessionData = useSession()

    const userData = sessionData.data?.user as {
        email: string
        name: string
        id: string
    }

    console.log("userData", userData)

    const getData = useCallback(async () => {
        try {
            const res = await getLeaderboard(userData?.id)
            if (res.status === 200) {
                setUsersWithHighestCredit(res?.data?.users)
                setCurrentUser(res?.data?.currentser)
            } else {
                messageApi.open({
                    type: 'error',
                    content: tError("errors.getDataError"),
                })
            }
        } catch (err) {
            messageApi.open({
                type: 'error',
                content: tError("errors.getDataError"),
            })
        }
    }, [messageApi, tError, userData?.id])

    useEffect(() => {
        setState('loading')
        getData()
    }, [getData])

    return {
        state,
        usersWithHighestCredit,
        currentUser
    }
}

export default useLeaderboardData
