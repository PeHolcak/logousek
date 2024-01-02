import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Link from 'next/link'

import RouteWrapper from '@components/route-wrapper'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import Button, { ButtonSizesEnum } from '@components/button'
import { H1 } from '@components/typography/header'

import * as S from './styled'

function NotFoundPage() {
  const themeContext = useContext(ThemeContext)
  const { tNotFound } = useTranslateFunctions()

  return (
    <RouteWrapper
      colorScheme={themeContext.colors.primary}
      title={tNotFound('title')}
    >
      <S.NotFoundPageWrapper>
        <H1 type="ghost">{tNotFound('title')}</H1>
        <Link href="/">
          <Button size={ButtonSizesEnum.s}>{tNotFound('description')}</Button>
        </Link>
      </S.NotFoundPageWrapper>
    </RouteWrapper>
  )
}

export default NotFoundPage
