import React, { useState, useContext } from 'react'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import { ThemeContext } from 'styled-components'

import RouteWrapper from '@components/route-wrapper'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import ClickableIcon from '@components/clickable-icon'
import routes from '@constants/routes'

import UserSearch from './user-search'
import UserResult from './user-results'
import * as S from './styled'
import { fontSize } from 'styles'

function AdminPage() {
  const themeContext = useContext(ThemeContext)
  const { tAdmin } = useTranslateFunctions()
  const [selectedUser, setselectedUser] = useState<string | undefined>()
  const router = useRouter()

  const onUserSelect = (userId: string) => {
    setselectedUser(userId)
  }

  const redirectToHome = () => {
    router.push(routes.gameMenu)
  }

  return (
    <RouteWrapper
      colorScheme={themeContext.colors.white}
      title={tAdmin('title')}
      type="privateForAdmin"
      tutorial={{
        hide: true,
      }}
    >
      <S.AdminPageWrapper>
        <S.ClickableIconWrapper>
          <ClickableIcon icon="home" onClick={redirectToHome} fontSize={fontSize.xl} />
        </S.ClickableIconWrapper>
        <S.AdminPageContainer>
          <S.AdminPageInnerContainer>
            <Row style={{ width: '100%' }} gutter={24}>
              <Col xs={24} lg={12}>
                <UserSearch
                  onUserSelect={onUserSelect}
                  selectedUser={selectedUser}
                />
              </Col>
              {selectedUser && (
                <Col xs={24} lg={12}>
                  <UserResult selectedUser={selectedUser} />
                </Col>
              )}
            </Row>
          </S.AdminPageInnerContainer>
        </S.AdminPageContainer>
      </S.AdminPageWrapper>
    </RouteWrapper>
  )
}

export default AdminPage
