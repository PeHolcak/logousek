import React from 'react'
import { Col, Row, Spin, Form, message } from 'antd'

import useUserData from '../../../../hooks/use-user-data'
import SearchForm from './search-form'
import SearchList from './search-list'

type UserSearchType = {
  onUserSelect: (userId: string) => void
  selectedUser?: string
}

type FormValues = {
  activityTypes: string
}

const UserSearch: React.FC<UserSearchType> = ({
  onUserSelect,
  selectedUser,
}) => {
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()
  const {
    users,
    state,
    search,
    totalUsersCount,
    limit,
    cursor,
    onPaginationChange,
    deleteUser,
    onReset,
    searchText,
  } = useUserData(messageApi)

  const onSearchHandler = (values: FormValues) => {
    search(values.activityTypes)
  }

  const onResetHandler = () => {
    form.resetFields()
    onReset()
  }

  return state === 'loading' ? (
    <Spin />
  ) : (
    <Row gutter={16}>
      {contextHolder}
      <Col span={24}>
        <SearchForm
          onSearchHandler={onSearchHandler}
          onResetHandler={onResetHandler}
          canBeReset={!!searchText}
          form={form}
        />
      </Col>
      <Col span={24}>
        <SearchList
          onPaginationChange={onPaginationChange}
          deleteUser={deleteUser}
          totalUsersCount={totalUsersCount}
          limit={limit}
          cursor={cursor}
          users={users}
          onUserSelect={onUserSelect}
          selectedUser={selectedUser}
        />
      </Col>
    </Row>
  )
}

export default UserSearch
