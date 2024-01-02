import { useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/react'

import { getUserCredit } from 'calls/credit-calls'

type UsePlayerScoreReturnType = { score?: number; refreshUserScore: () => void }

const DEFAULT_SCORE = 0

export const usePlayerScore = (): UsePlayerScoreReturnType => {
  const sessionData = useSession()
  const [score, setScore] = useState<number | undefined>()

  const refreshUserScore = useCallback(() => {
    const userData = sessionData.data?.user as {
      email: string
      name: string
      id: string
    }
    if (userData?.id) {
      const getData = async () => {
        try {
          const res = await getUserCredit(userData?.id)
          if ('points' in res?.data && res?.data?.points !== null) {
            setScore(res?.data?.points)
          } else {
            setScore(DEFAULT_SCORE)
          }
        } catch (err) {
          setScore(DEFAULT_SCORE)
          console.error(err)
        }
      }
      getData()
    }
  }, [sessionData.data?.user])

  useEffect(() => {
    refreshUserScore()
  }, [refreshUserScore])

  return { score, refreshUserScore }
}
