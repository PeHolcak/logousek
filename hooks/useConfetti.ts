import { useMemo, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import type { ISourceOptions } from 'tsparticles-engine'

export const useConfetti = () => {
  const themeContext = useContext(ThemeContext)

  const confettiOptions: ISourceOptions = useMemo(
    () => ({
      particles: {
        color: {
          value: [
            themeContext.colors.blue,
            themeContext.colors.darkGreen,
            themeContext.colors.red,
            themeContext.colors.yellow,
          ],
        },
        move: {
          direction: 'top-right',
        },
      },
      preset: 'confetti',
      startCount: 100,
      position: {
        x: 200,
        y: 200,
      },
      size: {
        width: 10,
        height: 10,
      },
      rate: {
        delay: 0,
        quantity: 50,
      },
      emitters: {
        direction: 'top',
        life: {
          duration: 2,
          delay: 1,
        },
      },
    }),
    [
      themeContext.colors.blue,
      themeContext.colors.darkGreen,
      themeContext.colors.red,
      themeContext.colors.yellow,
    ]
  )

  return confettiOptions
}
