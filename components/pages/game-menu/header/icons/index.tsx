import React, { useContext, useCallback, useMemo } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import GameMenuContext from '@contexts/game-menu-context'
import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import DarkModeSwitch from '@components/dark-mode-switch'
import routes from '@constants/routes'
import ModalContext from '@contexts/modal-context'
import UserStore from '@components/user-store'
import UsersLeaderboard from '@components/users-leaderboard'

import * as S from './styled'

const Icons: React.FC = () => {
  const router = useRouter()
  const sessionData = useSession()
  const modalContext = useContext(ModalContext)
  const gameMenuData = useContext(GameMenuContext)

  const userScore = useMemo(
    () => gameMenuData?.score ?? 0,
    [gameMenuData?.score]
  )

  const refreshUserScore = useMemo(
    () => gameMenuData?.refreshUserScore ?? (() => {}),
    [gameMenuData?.refreshUserScore]
  )

  const onLogoutHandler = useCallback(() => {
    signOut()
  }, [])

  const onAdminPagesRedirect = useCallback(() => {
    router.push({
      pathname: routes.adminPage,
    })
  }, [router])

  const editCharacter = useCallback(() => {
    modalContext?.showModal({
      header: 'Obchod',
      content: (
        <UserStore userScore={userScore} refreshUserScore={refreshUserScore} />
      ),
      autoWidth: true,
    })
  }, [modalContext, refreshUserScore, userScore])

  const showLeaderboard = useCallback(() => {
    modalContext?.showModal({
      header: 'Žebříček',
      content: <UsersLeaderboard />,
      autoWidth: true,
    })
  }, [modalContext])

  return (
    <ClickableIconWrapper key="game-menu-icons">
      <ClickableIcon icon="insert_chart" onClick={showLeaderboard} />
      <ClickableIcon icon="shopping_cart" onClick={editCharacter} />
      <S.DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>
      <ClickableIcon icon="logout" onClick={onLogoutHandler} />
      {(sessionData?.data?.user as any)?.role === 'ADMIN' ? (
        <ClickableIcon icon="people" onClick={onAdminPagesRedirect} />
      ) : (
        <></>
      )}
    </ClickableIconWrapper>
  )
}

export default Icons
