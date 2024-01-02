import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import Bubble from '@components/bubble'
import Button, { ButtonSizesEnum } from '@components/button'

import * as S from './styled'

type TutorialProps = {
  text: string
  canBeConfirmed?: boolean
  next: () => void
  reset: () => void
}

const BubblePart: React.FC<TutorialProps> = ({
  text,
  canBeConfirmed,
  next,
  reset,
}) => {
  const themeContext = useContext(ThemeContext)

  return (
    <S.BubbleWrapper>
      <Bubble hideBeak leftSide desc={text} fillWidth={true} />
      <S.ButtonRow>
        {canBeConfirmed ? (
          <Button
            backgroundColor={themeContext.colors.darkGreen}
            color={themeContext.colors.white}
            size={ButtonSizesEnum.xs}
            onClick={next}
          >
            Další
          </Button>
        ) : null}
        <Button
          backgroundColor={themeContext.colors.red}
          color={themeContext.colors.white}
          size={ButtonSizesEnum.xs}
          onClick={reset}
        >
          Zavřít
        </Button>
      </S.ButtonRow>
    </S.BubbleWrapper>
  )
}

export default BubblePart
