import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import IconButton from '@components/icon-button'

import ButtonRow from '../../button-row/button-row'
import { ButtonSizesEnum } from '../../button'

interface ModalButtonsProps {
  onStornoText?: string | React.ReactNode
  onOkText?: string | React.ReactNode
  onStornoClick?: () => void
  onOkClick?: () => void
}

const ModalButtons: React.FC<ModalButtonsProps> = ({
  onOkClick,
  onStornoClick,
  onOkText,
  onStornoText,
}) => {
  const { tCommon } = useTranslateFunctions()
  const themeContextData = useContext(ThemeContext)

  return (
    <>
      {onOkClick != null || onStornoClick != null ? (
        <ButtonRow>
          <>
            {onOkClick !== undefined ? (
              <IconButton
                onClick={onOkClick}
                color={themeContextData?.colors?.white}
                backgroundColor={themeContextData?.colors?.tertiary}
                size={ButtonSizesEnum.xs}
                icon="check"
              >
                {onOkText || tCommon('modal.buttons.continue')}
              </IconButton>
            ) : undefined}
            {onStornoClick !== undefined ? (
              <IconButton
                color={themeContextData?.colors?.white}
                size={ButtonSizesEnum.xs}
                backgroundColor={themeContextData?.colors?.seventy}
                onClick={onStornoClick}
                icon="close"
              >
                {onStornoText || tCommon('modal.buttons.storno')}
              </IconButton>
            ) : undefined}
          </>
        </ButtonRow>
      ) : undefined}
    </>
  )
}

export default ModalButtons
