export const shuffle = <T>(array: T[]): T[] => {
  array?.sort(() => Math.random() - 0.5)
  return array
}

export const getRandomElementFromList = (list: any[], count: number): any => {
  const result = []
  for (let i = 0; i < count; i++) {
    const choosedIndex = Math.floor(Math.random() * list.length)
    const selectedElement = list.splice(choosedIndex, 1)[0]
    selectedElement && result.push(selectedElement)
  }

  return result
}

export const isEmptyArray = (value: any) => {
  return Array.isArray(value) && value.length
}

export const getEmptyArray = (length: number) => {
  return new Array(length).fill(undefined)
}

export const getIncorectItems = (
  itemName: string,
  array: { name: string; svg: React.ReactNode }[]
) => {
  const filtredArray = array.filter((item) => item.name !== itemName)
  return getRandomElementFromList(filtredArray, 2)
}
