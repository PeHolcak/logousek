import React from 'react'
import { Popover } from 'antd'

import * as S from './styled'

export type ReferenceType = {
    reference?: React.ReactNode
}

const Reference: React.FC<ReferenceType> = ({
    reference,
}) => {
    return (
        <S.ReferenceWrapper>
            <Popover content={<S.ReferenceContent>{reference}</S.ReferenceContent>} trigger="hover">
                <S.ReferenceIcon className={'material-icons'}>
                    open_in_browser
                </S.ReferenceIcon>
            </Popover>
        </S.ReferenceWrapper>
    )
}

export default Reference
