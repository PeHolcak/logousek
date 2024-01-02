export type UserData = {
  userName: string | null
  points: string | null
  isNewUser: string | null
}

export const setToLocalSotrage = (
  key: string,
  value: string | number | boolean
) => {
  const newValue = typeof value === 'string' ? value : value.toString()
  localStorage.setItem(key, newValue)
}

export const getItemFromLocalStorage = (key: string) =>
  localStorage.getItem(key)

export const removeItemFromLocalStorage = (key: string) =>
  localStorage.removeItem(key)

export const clearLocalStorage = () => localStorage.clear()

export const logoutUser = clearLocalStorage

export const getGuestData = () => {
  return {
    userName: getItemFromLocalStorage('userName'),
    points: getItemFromLocalStorage('points'),
    isNewUser: getItemFromLocalStorage('isNewUser'),
  }
}

export const setUserPoints = (gainedPoints: number) => {
  const currentPoints = Number(getItemFromLocalStorage('points'))
  setToLocalSotrage(
    'points',
    (!currentPoints ? 0 : currentPoints) + gainedPoints
  )
}
