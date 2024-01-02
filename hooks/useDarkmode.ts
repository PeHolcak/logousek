import { useEffect, useState } from 'react'

export const useDarkMode = (): [string, (mode: string) => void] => {
  const [theme, setTheme] = useState<string>('light')

  const changeTheme = (mode: string) => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])
  return [theme, changeTheme]
}
