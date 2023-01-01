import React from 'react'
import * as S from "./styled"

type ClickableIconWrapperProps = {
  children: JSX.Element | JSX.Element[]
}

const ClickableIconWrapper: React.FC<ClickableIconWrapperProps> = ({ children }) => {
  return (
    <S.IconWrapper key="game-menu-icons">
      {children}
    </S.IconWrapper>
  )
}

export default ClickableIconWrapper
