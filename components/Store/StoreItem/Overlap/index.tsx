import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import * as S from './styled'
import Button, { ButtonSizesEnum } from '@components/button'
import Loading from '@components/loading'

type OverlapProps = {
  isOwned: boolean
  onItemBuyHandler: () => void
  disabled: boolean
  isInProgress: boolean
  cost: number
}

const Overlap: React.FC<OverlapProps> = ({
  isOwned,
  onItemBuyHandler,
  disabled,
  isInProgress,
  cost
}) => {
  const themeContextData = useContext(ThemeContext)


  if (!isOwned && cost) {
    if (isInProgress) {
      return (
        <S.ImageOverlapElementWrapper>
          <Loading />
        </S.ImageOverlapElementWrapper>
      )
    }
    return (
      <S.ImageOverlapElementWrapper>
        <Button
          onClick={onItemBuyHandler}
          color={themeContextData.colors.black}
          size={ButtonSizesEnum.s}
          backgroundColor={themeContextData?.colors?.lightGreen}
          disabled={disabled}
        >
          Koupit
        </Button>
      </S.ImageOverlapElementWrapper>
    )
  }
  return null
}

export default Overlap