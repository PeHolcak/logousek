import React from 'react'
import { ShowBackdropParam } from '@components/modal/backdrop'
import { ModalDetailType } from '@components/modal'

type ModalContextType =
    | {
        showModal: (
            modalDetail: ModalDetailType,
            backdropDetail?: ShowBackdropParam
        ) => void
        closeModal: () => void
    }
    | undefined
export default React.createContext<ModalContextType>(undefined)
