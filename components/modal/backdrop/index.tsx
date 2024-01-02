import React, { useState, useImperativeHandle, forwardRef } from 'react'
import * as S from './styled'
import Fireworks from '@components/modal/backdrop/particles/fireworks'
import Confetti from '@components/modal/backdrop/particles/confetti'
import { getRandomElementFromList } from '@helpers/array-helper'

interface Backdrop {
  children: React.ReactNode
}

export type ShowBackdropParam = {
  backgroundType?: string
}

export interface BackdropInterfaceType {
  show: (backdropDetail?: ShowBackdropParam) => void
  close: () => void
}

export default forwardRef(function Backdrop({ children }: Backdrop, ref) {
  const [show, setShow] = useState(false)
  const [backdropDetail, setBackdropDetail] = useState<ShowBackdropParam>({})

  useImperativeHandle(ref, () => ({
    show: showBackdrop,
    close: closeBackdrop,
  }))

  const showBackdrop = (showBackdropParam?: ShowBackdropParam) => {
    setShow(true)
    setBackdropDetail(showBackdropParam || {})
  }

  const closeBackdrop = () => {
    setShow(false)
    setBackdropDetail({})
  }

  const getBackground = () => {
    switch (backdropDetail?.backgroundType) {
      case 'party':
        return getRandomElementFromList(
          [<Confetti key={`confetti`} />, <Fireworks key={`fireworks`} />],
          1
        )
      default:
        return
    }
  }

  return (
    <S.StyledBackdrop show={show}>
      {children}
      {getBackground()}
    </S.StyledBackdrop>
  )
})
