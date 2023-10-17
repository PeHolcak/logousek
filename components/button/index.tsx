import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import * as S from './styled'

export enum ButtonSizesEnum {
  xs = 'xs',
  s = 's',
}

export type ButtonProps = {
  children?: string | React.ReactNode
  title?: string
  onClick?: () => void
  size?: ButtonSizesEnum
  disabled?: boolean
  color?: string
  backgroundColor?: string
  type?: "button" | "submit" | "reset" | undefined
  id?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  title,
  onClick,
  size,
  disabled,
  color,
  backgroundColor,
  type,
  id
}) => {
  const themeContext = useContext(ThemeContext)
  const colors = themeContext.colors || {}
  return (
    <S.ButtonRowWrapper
      color={color || colors.seventy}
      backgroundColor={
        disabled
          ? colors.lightGrey
          : backgroundColor || colors.white
      }
      disabled={disabled}
      size={size}
      onClick={onClick}
      type={type}
      id={id}
    >
      {children || title}
    </S.ButtonRowWrapper>
  )
}
export default Button
