import React, { useMemo } from 'react'
import { ColorsEnum } from 'styles/colors'

import * as S from './styled'
import RoundFooterItem from './round-footer-item'

export type FooterConf = {
  name: string
  clickable: boolean
  title?: React.ReactElement | string
  disabled?: boolean
  color?: ColorsEnum
  background?: string
  onClick?: () => void
  icon?: string
  shortTitle?: string
}

type RoundFooterType = {
  footerConf: FooterConf[]
  activeItemName?: string
  selectNewItem?: (name: string, index: number) => void
  children?: React.ReactElement
  customHeight?: string
}

const RoundFooter: React.FC<RoundFooterType> = ({
  footerConf = [],
  activeItemName,
  selectNewItem,
  children,
  customHeight,
}) => {
  const footerConfButtons = useMemo(
    () =>
      footerConf.map((footerItem, index) => {

        const onClick = footerItem.disabled ? undefined : footerItem.onClick
        return (
          <RoundFooterItem
            key={`round_footer_item_${footerItem.name}`}
            {...footerItem}
            isActive={footerItem.name === activeItemName}
            selectNewItem={selectNewItem}
            index={index}
            onClick={onClick}
          />
        )
      }),
    [activeItemName, footerConf, selectNewItem]
  )

  return (
    <S.FooterWrap>
      <S.AnimatedFooterContent
        initial="initialState"
        animate="animateState"
        transition={{
          duration: 1.4,
        }}
        variants={{
          initialState: {
            y: 100,
          },
          animateState: {
            y: 0,
          },
        }}
      >
        <S.FooterContainer customHeight={customHeight} id="roundFooter">
          {children || footerConfButtons}
        </S.FooterContainer>
      </S.AnimatedFooterContent>
    </S.FooterWrap>
  )
}

export default RoundFooter
