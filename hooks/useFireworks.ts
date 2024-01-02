import { useMemo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import type { ISourceOptions } from 'tsparticles-engine'

export const useFireworks = () => {
  const themeContext = useContext(ThemeContext)

  const fireworksOptions: ISourceOptions = useMemo(
    () => ({
      preset: 'fireworks',
      background: {
        color: {
          value: themeContext.colors.blue,
        },
      },
      fpsLimit: 120,
      emitters: {
        direction: 'top',
        life: {
          duration: 0.1,
          delay: 0.1,
        },
      },
    }),
    [themeContext.colors.blue]
  )

  return fireworksOptions
}
