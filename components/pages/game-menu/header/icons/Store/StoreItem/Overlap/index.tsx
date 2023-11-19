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
}

const Overlap: React.FC<OverlapProps> = ({
  isOwned,
  onItemBuyHandler,
  disabled,
  isInProgress,
}) => {
  const themeContextData = useContext(ThemeContext)


  if (!isOwned) {
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
          size={ButtonSizesEnum.md}
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