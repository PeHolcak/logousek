import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import type { Preview } from '@storybook/react'
import mermaid from 'mermaid'

import {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  radius,
  lightColors,
  darkColors,
  zIndex,
} from '../styles'

import * as S from './styled'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview

export const decorators = [
  (Story: React.FC) => {
    const themeObject = {
      colors: darkColors,
      typography: {
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
      },
      radius,
      zIndex,
    }

    useEffect(() => {
      mermaid.initialize({
        theme: 'base',
      })
    })

    return (
      <ThemeProvider theme={themeObject}>
        {/* <div style={{ background: "red" }}> */}
        <S.PreviewWrapper>
          <Story />
        </S.PreviewWrapper>
        {/* </div> */}
      </ThemeProvider>
    )
  },
]
