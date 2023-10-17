import React, { useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import PrivateRoute from '@components/auth/private-route'
import OnlyPublicRoute from '@components/auth/only-public-route'
import PublicRoute from '@components/auth/public-route'
import PrivateRouteForAdmin from '@components/auth/private-route-for-admin'
import Tutorial from '@components/tutorial'
import * as S from './styled'

export type OffsetType = 'left' | 'bottom' | 'right' | 'top' | "none"

type TutorialConf = {
  mobileOffset?: OffsetType
  desktopOffset?: OffsetType
  hide?: boolean
}

type RouteWrapperProps = {
  title: string
  children: React.ReactElement | React.ReactElement[]
  colorScheme: string
  type?: 'private' | 'onlyPublic' | 'all' | 'privateForAdmin'
  tutorial?: TutorialConf
}

const BACKGROUND_VARIANTS = {
  initialState: {
    opacity: 0,
  },
  animateState: {
    opacity: 1,
  },
  exitState: {
    opacity: 0,
  },
}

const CONTENT_VARIANTS = {
  initialState: {
    opacity: 0,
    x: 100,
  },
  animateState: {
    opacity: 1,
    x: 0,
  },
  exitState: {
    opacity: 0,
    x: -100,
  },
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  title,
  children,
  colorScheme,
  type = 'all',
  tutorial,
}) => {
  const router = useRouter()

  const AuthWrapper = useMemo(() => {
    switch (type) {
      case 'private':
        return PrivateRoute
      case 'onlyPublic':
        return OnlyPublicRoute
      case 'privateForAdmin':
        return PrivateRouteForAdmin
      default:
        return PublicRoute
    }
  }, [type])

  const tutorialSection = !tutorial?.hide ? (
    <Tutorial
      mobileOffset={tutorial?.mobileOffset}
      desktopOffset={tutorial?.desktopOffset}
    />
  ) : null

  return (
    <AuthWrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <S.BackgroundWapper
        style={{
          background: colorScheme,
          position: 'relative',
          transitionDuration: '0.5s',
        }}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.7,
        }}
        variants={BACKGROUND_VARIANTS}
      >
        <S.ContentWrapper
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.7,
          }}
          variants={CONTENT_VARIANTS}
        >
          {children}
          {tutorialSection}
        </S.ContentWrapper>
      </S.BackgroundWapper>
    </AuthWrapper>
  )
}
export default RouteWrapper
