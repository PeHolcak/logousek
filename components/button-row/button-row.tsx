import React from 'react'
import * as S from './styled'

interface ButtonRowProps {
  children: React.ReactElement | React.ReactElement[]
}

const ButtonRow: React.FC<ButtonRowProps> = ({ children }) => {
  return <S.ButtonRowWrapper>{children}</S.ButtonRowWrapper>
}

export default ButtonRow
