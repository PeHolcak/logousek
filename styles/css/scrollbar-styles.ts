import { css } from 'styled-components'

export const hideScrollBarCss = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
