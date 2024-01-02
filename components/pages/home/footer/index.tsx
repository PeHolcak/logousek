import React, { useMemo, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { P3, P6 } from '@components/typography/paragraph'

import * as S from './styled'

const Footer = () => {
  const { tHome, tCommon } = useTranslateFunctions()
  const themeContext = useContext(ThemeContext)

  const ICONS = useMemo(
    () => [
      {
        name: 'facebook',
        path: '',
      },
      {
        name: 'instagram',
        path: '',
      },
      {
        name: 'tiktok',
        path: '',
      },
    ],
    []
  )

  return (
    <S.FooterWrapper>
      <S.FooterSection>
        <P3 align="center">{tCommon('appName')}</P3>
        <S.ClickableIconContainer>
          <ClickableIconWrapper>
            {ICONS.map((icon) => (
              <ClickableIcon
                key={`clickable_icon_${icon.name}`}
                icon={icon.name}
                onClick={() => {}}
                color={themeContext.colors.white}
              />
            ))}
          </ClickableIconWrapper>
        </S.ClickableIconContainer>
        <P6>{tHome('footer.yearAndAuthor')}</P6>
      </S.FooterSection>

      <S.FooterSection>
        <P6>
          <a href="https://www.freepik.com/free-psd/smartphone-mock-up-isolated_4075457.htm#query=phone&position=0&from_view=search&track=sph">
            Image by zlatko_plamenov
          </a>{' '}
          on Freepik
        </P6>
        <P6>
          Image by
          <a href="https://www.freepik.com/free-vector/flat-design-green-type-trees_18895291.htm#query=tree&position=48&from_view=search&track=sph">
            Freepik
          </a>
        </P6>
      </S.FooterSection>
    </S.FooterWrapper>
  )
}

export default Footer
