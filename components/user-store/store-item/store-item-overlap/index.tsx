import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import * as S from './styled'
import Button, { ButtonSizesEnum } from '@components/button'
import Loading from '@components/loading'

type StoreItemOverlapProps = {
  isOwned: boolean
  onItemBuyHandler: () => void
  disabled: boolean
  isInProgress: boolean
  cost: number
}

const StoreItemOverlap: React.FC<StoreItemOverlapProps> = ({
  isOwned,
  onItemBuyHandler,
  disabled,
  isInProgress,
  cost,
}) => {
  const themeContextData = useContext(ThemeContext)

  if (!isOwned && cost) {
    if (isInProgress) {
      return (
        <S.StoreItemOverlapWrapper>
          <Loading />
        </S.StoreItemOverlapWrapper>
      )
    }
    return (
      <S.StoreItemOverlapWrapper>
        <Button
          onClick={onItemBuyHandler}
          color={themeContextData.colors.black}
          size={ButtonSizesEnum.s}
          backgroundColor={themeContextData?.colors?.lightGreen}
          disabled={disabled}
        >
          Koupit
        </Button>
      </S.StoreItemOverlapWrapper>
    )
  }
  return null
}

export default StoreItemOverlap
