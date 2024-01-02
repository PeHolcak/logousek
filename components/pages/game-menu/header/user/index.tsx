import React from 'react'
import { useSession } from 'next-auth/react'

import * as S from './styled'

const User: React.FC = () => {
  const sessionData = useSession()

  return (
    <S.UserWrapper key="game-menu-user">
      <S.UserPhoto>
        <S.ProfileIcon className={'material-icons'}>person</S.ProfileIcon>
      </S.UserPhoto>
      <S.UserName type="primary" variant="T5">
        {sessionData?.data?.user?.name || ''}
      </S.UserName>
    </S.UserWrapper>
  )
}

export default User
