import React from 'react'
import FadeRight from '../animations/fade-right'
import FadeLeft from '../animations/fade-left'
import * as S from './styled'

type BubbleProps = {
  leftSide: boolean
  desc: string
  caption?: string
  fillWidth?: boolean
  hideBeak?: boolean
}

const Bubble: React.FC<BubbleProps> = ({
  leftSide,
  desc,
  caption,
  fillWidth,
  hideBeak,
}) => {
  const UsedAnimationWrapper = leftSide ? FadeLeft : FadeRight

  return (
    <UsedAnimationWrapper>
      <S.TimeLineItemWrapper leftSide={leftSide}>
        <S.Container fillWidth={fillWidth}>
          {hideBeak ? null : <S.Beak leftSide={leftSide} />}
          <S.Content>
            {caption ? <S.Date>{caption}</S.Date> : null}
            <S.Desc>{desc}</S.Desc>
          </S.Content>
        </S.Container>
      </S.TimeLineItemWrapper>
    </UsedAnimationWrapper>
  )
}

export default Bubble
