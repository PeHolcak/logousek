import React, { useRef } from 'react'
import useElementOnScreen from '@hooks/useElementOnScreen'
import * as S from './styled'

export type StylesType = {
  opacity: number
  translateTo: string
  scale: number
}

type AnimateProps = {
  fromStyles: StylesType
  toStyles: StylesType
  children: React.ReactElement
}

const Animate: React.FC<AnimateProps> = ({
  fromStyles,
  toStyles,
  children,
}) => {
  const ref = useRef(null)
  const onScreen = useElementOnScreen(ref)
  const usedStyles = onScreen ? toStyles : fromStyles
  return (
    <S.AnimateWrapper
      ref={ref}
      opacity={usedStyles.opacity}
      translateTo={usedStyles.translateTo}
      scale={usedStyles.scale}
    >
      {children}
    </S.AnimateWrapper>
  )
}

export default Animate
