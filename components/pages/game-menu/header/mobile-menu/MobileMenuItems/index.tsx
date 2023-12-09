import React, { useCallback, useContext, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import * as S from './styled'
import SimpleMenu from '@components/simple-menu'
import Cash from '../../cash'
import DarkModeSwitch from '@components/dark-mode-switch'
import ModalContext from '@contexts/modal-context'
import routes from '@constants/routes'
import { useRouter } from 'next/router'
import Store from '@components/Store'
import GameMenuContext from '@contexts/game-menu-context'
import Leaderboard from '@components/Leaderboard'

type MobileMenuItemsProps = {
  isOpen: boolean
  setIsMenuShow: (value: boolean) => void
}

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
  closed: {
    y: '-100%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'tween',
    },
  },
}

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({
  isOpen,
  setIsMenuShow,
}) => {
  const router = useRouter()
  const sessionData = useSession()
  const modalContext = useContext(ModalContext)
  const gameMenuData = useContext(GameMenuContext)
  console.log(
    '(sessionData?.data?.user as any)?.role',
    (sessionData?.data?.user as any)?.role
  )

  const userScore = useMemo(
    () => gameMenuData?.score ?? 0,
    [gameMenuData?.score]
  )

  const refreshUserScore = useMemo(
    () => gameMenuData?.refreshUserScore ?? (() => { }),
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
        <Store userScore={userScore} refreshUserScore={refreshUserScore} />
      ),
      autoWidth: true,
    })
  }, [modalContext, refreshUserScore, userScore])

  const showLeaderboard = useCallback(() => {
    modalContext?.showModal({
      header: 'Žebříček',
      content: <Leaderboard />,
      autoWidth: true,
    })
  }, [modalContext])

  const addictionalMenuItems = useMemo(
    () =>
      (sessionData?.data?.user as any)?.role === 'ADMIN'
        ? [
          {
            name: 'adminPages',
            icon: 'poll',
            title: 'Stránky pro administrátory',
            onClick: onAdminPagesRedirect,
          },
        ]
        : [],
    [onAdminPagesRedirect, sessionData?.data?.user]
  )

  const simpleMenuData = useMemo(
    () => [
      {
        name: 'leaderboard',
        icon: 'insert_chart',
        title: 'Žebříček',
        onClick: showLeaderboard,
      },
      {
        name: 'store',
        icon: 'people',
        title: 'Obchod',
        onClick: editCharacter,
      },
      ...addictionalMenuItems,
      {
        name: 'logout',
        icon: 'logout',
        title: 'Odhlásit se',
        onClick: onLogoutHandler,
      },
    ],
    [addictionalMenuItems, editCharacter, onLogoutHandler, showLeaderboard]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          exit="closed"
          animate="open"
          variants={menuVariants}
          className="menu"
          style={{
            position: 'fixed',
            top: -6,
            left: 0,
            width: '100%',
            zIndex: 900,
            margin: 0,
          }}
        >
          <S.MobileMenuItemsWrapper>
            <S.CashWrapper>
              <Cash />
            </S.CashWrapper>
            <SimpleMenu
              isMenuShow={isOpen}
              setIsMenuShow={setIsMenuShow}
              data={simpleMenuData}
            />
            <S.DarkModeSwitchWrapper>
              <DarkModeSwitch />
            </S.DarkModeSwitchWrapper>
          </S.MobileMenuItemsWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenuItems
