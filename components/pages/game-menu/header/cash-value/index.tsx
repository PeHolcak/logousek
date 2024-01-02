import React from 'react'

import { TextWrap } from '@components/typography/text/styled'

import * as S from './styled'

type CashValueProps = { score?: string | number }

const CashValue: React.FC<CashValueProps> = ({ score = 0 }) => {
  return (
    <S.CashContainer>
      <S.Icon className={'material-icons'}>payments</S.Icon>
      <TextWrap type="primary" variant="T5">
        {score}
      </TextWrap>
    </S.CashContainer>
  )
}

export default CashValue
