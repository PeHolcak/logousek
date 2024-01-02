import { useEffect, useState, useMemo } from 'react'

enum COLORS {
  'red' = 'red',
  'orange' = 'orange',
  'green' = 'green',
}

export const useTrafficLights = (
  countdownTime: number,
  timerIsDone?: () => void
) => {
  const startTime = new Date().getTime()
  const [activeColor, setActiveColor] = useState(COLORS.red)
  const [elapsedMilis, setElapsedMilis] = useState(
    startTime - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedMilis(elapsedMilis + (new Date().getTime() - startTime))
    }, 1000)

    if (countdownTime - elapsedMilis < 4000) {
      setActiveColor(COLORS.orange)
    }

    if (countdownTime - elapsedMilis < 2000) {
      setActiveColor(COLORS.green)
    }

    if (countdownTime && elapsedMilis >= countdownTime) {
      clearInterval(interval)
      timerIsDone && timerIsDone()
    }

    return () => clearInterval(interval)
  }, [countdownTime, elapsedMilis, startTime, timerIsDone])

  const trafficLights = useMemo(
    () =>
      Object.keys(COLORS).map((color) => {
        const isActive = activeColor === color
        return {
          name: color,
          isActive,
        }
      }),
    [activeColor]
  )

  return { trafficLights }
}
