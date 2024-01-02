import React, { useCallback, useContext } from 'react'
import { useRouter } from 'next/router'

import { P3 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import HeaderWrapper from 'components/header-wrapper'
import CloseIcon from '../close-icon'
import ModalContext from '../../contexts/modal-context'
import Score from './score/inedex'
import * as S from './styled'

type ActivityHeaderProps = {
  tasksCount: number
  currentTask: number
  title: string
}

const ActivityHeader: React.FC<ActivityHeaderProps> = ({
  tasksCount,
  currentTask,
  title,
}) => {
  const router = useRouter()
  const modalContext = useContext(ModalContext)
  const { tActivity } = useTranslateFunctions()

  const routeBack = useCallback(() => {
    modalContext?.showModal({
      onOkClick: () => {
        router.back()
        modalContext.closeModal()
      },
      onStornoClick: modalContext.closeModal,
      header: tActivity('goBackModal.wantToLeave'),
      autoWidth: true,
    })
  }, [modalContext, router, tActivity])

  return (
    <HeaderWrapper>
      <S.CloseIconWrapper>
        <CloseIcon onClick={routeBack} />
      </S.CloseIconWrapper>
      <S.TitleWrapper>
        <P3 margin="0">{title}</P3>
      </S.TitleWrapper>
      <Score tasksCount={tasksCount} currentTask={currentTask} />
    </HeaderWrapper>
  )
}

export default ActivityHeader
