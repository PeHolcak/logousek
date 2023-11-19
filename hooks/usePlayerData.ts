import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react'

import { getUserCredit } from 'calls/credit-calls';

type UsePlayerScoreReturnType = { score?: number, refreshUserScore: () => void }

export const usePlayerScore = (): UsePlayerScoreReturnType => {

    const sessionData = useSession()
    const [score, setScore] = useState<number | undefined>();

    const refreshUserScore = useCallback(() => {
        const userData = sessionData.data?.user as {
            email: string
            name: string
            id: string
        }
        if (userData?.id) {
            const getData = async () => {
                const res = await getUserCredit(userData?.id);
                setScore(res?.data?.points)
            }
            getData()
        }
    }, [sessionData.data?.user])


    useEffect(() => {
        refreshUserScore()
    }, [refreshUserScore])


    return { score, refreshUserScore }
};