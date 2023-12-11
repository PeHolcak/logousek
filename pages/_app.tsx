import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import 'normalize.css/normalize.css';

import '../styles/globals.css'
import Modal, { ModalInterfaceType } from '../components/modal'
import Backdrop, { BackdropInterfaceType } from '../components/modal/backdrop'
import ModalContext from '../contexts/modal-context'
import CoreContext from '../contexts/core-context'
import {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  radius,
  lightColors,
  darkColors,
  zIndex
} from '../styles'
import { useDarkMode } from '../hooks/useDarkmode'
import { appWithTranslation } from 'next-i18next'
import { ModalDetailType } from '@components/modal'
import { ShowBackdropParam } from '../components/modal/backdrop'
import { ParallaxProvider } from 'react-scroll-parallax'
import UserSettingsProvider from '@contexts/user-settings-context/user-settings-context-provider'

function MyApp({
  Component,
  pageProps,
  session,
}: {
  Component: React.FC
  pageProps: any
  session: any
}) {
  const [theme, changeTheme] = useDarkMode()
  const modalRef = useRef<ModalInterfaceType>(null)
  const backdropRef = useRef<BackdropInterfaceType>(null)

  const showModal = (
    modalDetail: ModalDetailType,
    backdropDetail?: ShowBackdropParam
  ) => {
    if (typeof modalRef?.current?.show === 'function') {
      modalRef?.current?.show(modalDetail)
      backdropRef?.current?.show(backdropDetail)
    }
  }

  const closeModal = () => {
    typeof modalRef?.current?.close === 'function' && modalRef.current.close()
    closeBackdrop()
  }

  const closeBackdrop = () => {
    backdropRef?.current?.close()
  }

  const themeObject = {
    colors: theme === 'light' ? lightColors : darkColors,
    typography: {
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
    },
    radius,
    zIndex
  }

  function getDropTargetElementsAtPoint(
    x: number,
    y: number,
    dropTargets: any[]
  ) {
    return dropTargets.filter((t) => {
      const rect = t.getBoundingClientRect()
      return (
        x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
      )
    })
  }

  const backendOptions = {
    getDropTargetElementsAtPoint,
    enableMouseEvents: true,
    enableTouchEvents: true,
  }

  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait">
        <ParallaxProvider>
          <DndProvider backend={TouchBackend} options={backendOptions}>
            <ThemeProvider theme={themeObject}>
              <CoreContext.Provider value={{ theme, changeTheme }}>
                <UserSettingsProvider>
                  <ModalContext.Provider value={{ showModal, closeModal }}>
                    <Modal ref={modalRef} closeBackdrop={closeBackdrop} />
                    <Backdrop ref={backdropRef}>
                      <Component {...pageProps} />
                    </Backdrop>
                  </ModalContext.Provider>
                </UserSettingsProvider>
              </CoreContext.Provider>
            </ThemeProvider>
          </DndProvider>
        </ParallaxProvider>
      </AnimatePresence>
    </SessionProvider>
  )
}

export default appWithTranslation<never>(MyApp)
