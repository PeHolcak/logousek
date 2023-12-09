import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { H4 } from '@components/typography/header'

import ItemList from './item-list'
import { ItemType } from './item-list/item'
import * as S from './styled'

type DataType = Omit<ItemType, 'isMenuShow'>[]

type SimpleMenuProps = {
  data: DataType
  setIsMenuShow: (value: boolean) => void
  isMenuShow: boolean
}

const SimpleMenu: React.FC<SimpleMenuProps> = ({
  data,
  setIsMenuShow,
  isMenuShow,
}) => {
  const { tCommon } = useTranslateFunctions()

  return (
    <S.SimpleMenuWrapper>
      <H4 align="center">{tCommon('sideBar.currentSiteNavigation.title')}</H4>
      <S.ItemListWrapper>
        <ItemList
          itemList={data}
          setIsMenuShow={setIsMenuShow}
          isMenuShow={isMenuShow}
        />
      </S.ItemListWrapper>
    </S.SimpleMenuWrapper>
  )
}

export default SimpleMenu
