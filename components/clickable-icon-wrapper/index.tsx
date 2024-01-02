import React from 'react'
import * as S from './styled'

type ClickableIconWrapperProps = {
  children: JSX.Element | JSX.Element[]
}

const ClickableIconWrapper: React.FC<ClickableIconWrapperProps> = ({
  children,
}) => {
  return <S.IconWrapper>{children}</S.IconWrapper>
}

export default ClickableIconWrapper
