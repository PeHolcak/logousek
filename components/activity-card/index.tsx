import React from 'react'
import { Popover } from 'antd'

import * as S from './styled'

export type ActivityCardType = {
  children?: React.ReactNode
  onClick?: () => void
  selected?: boolean
  rotate?: number
  color?: string
  customRadius?: string
  customAspectRatio?: string
  cursor?: 'default' | 'pointer'
  fill?: boolean
  reference?: React.ReactNode
}

const ActivityCard: React.FC<ActivityCardType> = ({
  children,
  onClick,
  selected,
  rotate,
  color,
  customRadius = '1rem',
  customAspectRatio = '1 / 1',
  cursor = 'pointer',
  fill,
  reference,
}) => {
  return (
    <S.ActivityCardWrapper
      onClick={onClick}
      selected={selected}
      rotate={rotate}
      color={color}
      customRadius={customRadius}
      customAspectRatio={customAspectRatio}
      fill={fill}
      cursor={cursor}
    >
      {selected ? (
        <S.CheckIcon className={'material-icons'}>check</S.CheckIcon>
      ) : null}
      {reference ?
        <S.ReferenceWrapper>
          <Popover content={<S.ReferenceContent>{reference}</S.ReferenceContent>} trigger="hover">
            <S.ReferenceIcon className={'material-icons'}>
              open_in_browser
            </S.ReferenceIcon>
          </Popover>
        </S.ReferenceWrapper>
        : null}
      {children}
    </S.ActivityCardWrapper>
  )
}

export default ActivityCard
