export const formatTime = (time: number) => {
  const minutes = Math.round(time / (1000 * 60))
  const seconds = Math.round((time % (1000 * 60)) / 1000)

  let minutesString = 'minut'
  if (minutes === 1) {
    minutesString = 'minuta'
  } else if ([2, 3, 4].includes(minutes)) {
    minutesString = 'minuty'
  }

  let secondString = 'sekund'
  if (seconds === 1) {
    secondString = 'sekunda'
  } else if ([2, 3, 4].includes(seconds)) {
    secondString = 'sekundy'
  }

  const minutesResult = minutes ? `${minutes} ${minutesString}` : null
  const secondsResult = `${seconds} ${secondString}`

  return [minutesResult, secondsResult]
}
