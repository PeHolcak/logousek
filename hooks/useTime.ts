import { useEffect, useMemo, useState } from 'react'

export const useTimer = (countdownTime?: number, timerIsDone?: () => void) => {
  const startTime = new Date().getTime()
  const [elapsedMilis, setElapsedMilis] = useState(
    startTime - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedMilis(elapsedMilis + (new Date().getTime() - startTime))
    }, 1000)

    if (countdownTime && elapsedMilis >= countdownTime) {
      clearInterval(interval)
      timerIsDone && timerIsDone()
    }

    return () => clearInterval(interval)
  }, [countdownTime, elapsedMilis, startTime, timerIsDone])

  const remainingTime = useMemo(
    () => (countdownTime ? countdownTime - elapsedMilis : elapsedMilis),
    [countdownTime, elapsedMilis]
  )

  return remainingTime
}
