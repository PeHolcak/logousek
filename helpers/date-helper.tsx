export const getFormatedDate = (date: Date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as any
  return date.toLocaleDateString('cs-CZ', options)
}

export const getFormatedDateTime = (date: Date) => {
  const options = {} as any
  return date.toLocaleString('cs-CZ', options)
}

export const getDateFromString = (stringDate: string) => {
  return new Date(stringDate)
}

export const getStartOfDay = (stringDate: string) => {
  const date = getDateFromString(stringDate)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  return date.toISOString()
}

export const getEndOfDay = (stringDate: string) => {
  const date = getDateFromString(stringDate)
  date.setHours(23)
  date.setMinutes(59)
  date.setSeconds(59)
  date.setMilliseconds(999)
  return date.toISOString()
}
