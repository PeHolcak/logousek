import styled from 'styled-components'
import { StylesType } from '.'

export const AnimateWrapper = styled.div<StylesType>`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* display: block; */
  opacity: ${({ opacity }) => opacity};
  translate: ${({ translateTo }) => translateTo};
  transform: scale(${({ scale }) => scale});
  transition: 400ms linear;
`
