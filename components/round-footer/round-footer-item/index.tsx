import React, { useCallback, useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { ColorsEnum } from 'styles/colors'

import { TextWrap } from '@components/typography/text/styled'

import * as S from './styled'
import { FooterConf } from '..'

type RoundFooterItemType = FooterConf & {
  isActive: boolean
  index: number
  selectNewItem?: (name: string, index: number) => void
}

const RoundFooterItem: React.FC<RoundFooterItemType> = ({
  isActive,
  color,
  clickable,
  disabled,
  selectNewItem,
  onClick,
  name,
  index,
  background,
  icon,
  shortTitle,
  title,
}) => {
  const themeContext = useContext(ThemeContext)
  const isActiveItem = isActive

  const customStyles = useMemo(() => {
    if (disabled) {
      return {
        color: themeContext?.colors[ColorsEnum.lightGrey],
        cursor: 'default',
      }
    } else if (clickable === false) {
      return { cursor: 'default' }
    } else if (isActiveItem) {
      return {
        color: color
          ? themeContext?.colors[color]
          : themeContext?.colors?.primary,
      }
    }
  }, [clickable, color, disabled, isActiveItem, themeContext?.colors])

  const onLinkClickHandler = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick()
    } else if (!disabled || clickable === true) {
      typeof selectNewItem === 'function'
        ? selectNewItem(name, index)
        : undefined
    }
  }, [clickable, disabled, index, name, onClick, selectNewItem])

  return (
    <S.FooterLink
      key={`FooterConfButton-${name}`}
      onMouseDown={onLinkClickHandler}
      style={customStyles}
      background={background}
    >
      {icon ? <S.Icon className={`material-icons`}>{icon}</S.Icon> : null}
      <TextWrap variant="T6" color={customStyles?.color}>
        {shortTitle || title}
      </TextWrap>
    </S.FooterLink>
  )
}

export default RoundFooterItem
