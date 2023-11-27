import React from 'react'
import * as S from './styled'

export type ClickableIconProps = {
  onClick: () => void
  icon: string
  fontSize?: string
  id?: string
  color?: string
}

const ClickableIcon: React.FC<ClickableIconProps> = ({
  onClick,
  icon,
  fontSize,
  id,
  color,
}) => {
  return (
    <S.Link onMouseDown={typeof onClick === 'function' ? onClick : undefined}>
      <S.StyledIcon
        fontSize={fontSize}
        className={'material-icons'}
        id={id}
        color={color}
      >
        {icon}
      </S.StyledIcon>
    </S.Link>
  )
}

export default ClickableIcon
