import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ThemeContext } from 'styled-components'

import ClickableIcon from '@components/clickable-icon'
import routes from '@constants/routes'
import { fontSize } from 'styles'

import Loading from '../../loading'
import * as S from './styled'

const LoadingPage: React.FC = () => {
  const router = useRouter()
  const themeContext = useContext(ThemeContext)

  const redirectToHome = () => {
    router.push({
      pathname: routes.home,
    })
  }

  return (
    <S.LoadingPageWrapper>
      <S.ClickableIconWrapper>
        <ClickableIcon
          onClick={redirectToHome}
          icon="home"
          fontSize={fontSize.xxl}
          color={themeContext.colors.white}
        />
      </S.ClickableIconWrapper>
      <Loading />
    </S.LoadingPageWrapper>
  )
}

export default LoadingPage
