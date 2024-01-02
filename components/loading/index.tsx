import { useEffect, useState, useMemo } from 'react'

import { P3 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { getEmptyArray } from '@helpers/array-helper'
import { TStylesType } from '@components/typography/text/styled'

import * as S from './styled'

type LoadingProps = {
  textType?: TStylesType['type']
  hideText?: boolean
}

const Loading: React.FC<LoadingProps> = ({ textType = 'ghost', hideText }) => {
  const { tCommon } = useTranslateFunctions()
  const [textDotsCount, setTextDotsCount] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextDotsCount((prevValue) => {
        if (prevValue === 3) {
          return 0
        }
        return prevValue + 1
      })
    }, 700)
    return () => clearInterval(interval)
  }, [])

  const loadingAnimationParts = useMemo(
    () =>
      getEmptyArray(4).map((_, index) => (
        <S.LoadingAnimationPart key={`animation_part_${index}`} index={index} />
      )),
    []
  )

  const dots = getEmptyArray(textDotsCount)
    .map(() => '.')
    .join('')

  return (
    <S.LoadingWrapper>
      <S.LoadingAnimation>{loadingAnimationParts}</S.LoadingAnimation>
      {!hideText ? (
        <P3 style={{ width: '120px', paddingLeft: '12px' }} type={textType}>
          {`${tCommon('loading')}${dots}`}
        </P3>
      ) : null}
    </S.LoadingWrapper>
  )
}

export default Loading
