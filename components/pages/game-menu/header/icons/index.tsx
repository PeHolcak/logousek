import React, { useContext, useCallback } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import ClickableIcon from '@components/clickable-icon'
import ClickableIconWrapper from '@components/clickable-icon-wrapper'
import DarkModeSwitch from '@components/dark-mode-switch'
import routes from '@constants/routes'
import ModalContext from '@contexts/modal-context'

import * as S from './styled'
import Store from './Store'
import Leaderboard from "./Leaderboard"
import DailyBonus from './DailyBonus'


const Icons: React.FC = () => {
  const router = useRouter()
  const sessionData = useSession()
  const modalContext = useContext(ModalContext)

  const onLogoutHandler = useCallback(() => {
    signOut()
  }, [])

  const onAdminPagesRedirect = useCallback(() => {
    router.push({
      pathname: routes.adminPage,
    })
  }, [router]
  )

  const editCharacter = useCallback(() => {
    modalContext?.showModal({
      header: "Obchod",
      content: <Store />,
      autoWidth: true,
    })
  }, [modalContext])

  const showLeaderboard = useCallback(() => {
    modalContext?.showModal({
      header: "Žebříček",
      content: <Leaderboard />,
      autoWidth: true,
    })
  }, [modalContext])

  const showDailyBonus = useCallback(() => {
    modalContext?.showModal({
      header: "Denní bonus",
      content: <DailyBonus />,
      autoWidth: true,
    })
  }, [modalContext])

  return (
    <ClickableIconWrapper key="game-menu-icons">
      <ClickableIcon icon="today" onClick={showDailyBonus} />
      <ClickableIcon icon="insert_chart" onClick={showLeaderboard} />
      <ClickableIcon icon="people" onClick={editCharacter} />
      <S.DarkModeSwitchWrapper>
        <DarkModeSwitch />
      </S.DarkModeSwitchWrapper>

      <ClickableIcon icon="logout" onClick={onLogoutHandler} />
      {(sessionData?.data?.user as any)?.role === "ADMIN" ? <ClickableIcon icon="poll" onClick={onAdminPagesRedirect} /> : <></>}
    </ClickableIconWrapper>
  )
}

export default Icons
