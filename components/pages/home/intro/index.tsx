import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { ButtonSizesEnum } from '@components/button'
import IconButton from '@components/icon-button'
import ClickableIcon from '@components/clickable-icon'
import Logousek from '@components/svg/templates/logousek'
import routes from '@constants/routes'
import { PageTitle } from '@components/typography/header'
import { P3 } from '@components/typography/paragraph'
import { useHomeIntroParallax } from '@hooks/useHomeIntroSectionParallax'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

type IntroProps = {
  scrollTarget: React.MutableRefObject<HTMLDivElement | null>
}

const Intro: React.FC<IntroProps> = ({ scrollTarget }) => {
  const {
    logousekParallax,
    descriptionWrapperParallax,
    hillParallax,
    firstTreeParallax,
    secondTreeParallax,
  } = useHomeIntroParallax(scrollTarget)

  const { tHome, tCommon } = useTranslateFunctions()
  const router = useRouter()
  const IntroElement = useRef(null)

  const redirectToGameMenu = () => {
    router.push(routes.gameMenu)
  }

  return (
    <S.IntroWrapper id="introduction">
      <S.IntroContainer ref={IntroElement} id="IntroContainerId">
        <S.Navbar>
          <IconButton
            size={ButtonSizesEnum.s}
            onClick={redirectToGameMenu}
            id="navbarPlayButton"
            icon={'play_arrow'}
          >
            {tCommon('buttons.play')}
          </IconButton>
        </S.Navbar>
        <S.DescriptionWrapper ref={descriptionWrapperParallax.ref}>
          <S.Description>
            <PageTitle type="ghost">{tCommon('appName')}</PageTitle>
            <P3 type="ghost">{tHome('intro.description')}</P3>
            <S.ButtonRow>
              <IconButton
                size={ButtonSizesEnum.s}
                onClick={redirectToGameMenu}
                id="mainPlayButton"
                icon={'play_arrow'}
              >
                {tCommon('buttons.play')}
              </IconButton>
            </S.ButtonRow>
          </S.Description>
        </S.DescriptionWrapper>
      </S.IntroContainer>
      <S.Hill ref={hillParallax.ref} />
      <S.LogousekWrapper ref={logousekParallax.ref} className="spinner">
        <Logousek />
      </S.LogousekWrapper>
      <S.FirstForegroundTreeWrapper ref={firstTreeParallax.ref}>
        <Image
          width="500"
          height="600"
          src="/images/trees/tree01.svg"
          alt="logousek tree"
        />
      </S.FirstForegroundTreeWrapper>
      <S.SecondForegroundTreeWrapper ref={secondTreeParallax.ref}>
        <Image
          width="500"
          height="600"
          src="/images/trees/tree02.svg"
          alt="logousek second tree"
        />
      </S.SecondForegroundTreeWrapper>
      <S.IntroPlayButton>
        <ClickableIcon
          icon="play_circle_filled"
          onClick={redirectToGameMenu}
          id="secondaryPlayButton"
        />
      </S.IntroPlayButton>
    </S.IntroWrapper>
  )
}

export default Intro
