import React from 'react'
import { List } from 'antd'

import { User } from '@prisma/client'

import Paggination from '../../paggination'
import SearchListItem from './search-list-item'

type SearchListProps = {
  onPaginationChange: (index: number) => void
  deleteUser: (userId: string) => void
  totalUsersCount: number
  limit: number
  cursor: number
  users: User[]
  onUserSelect: (userId: string) => void
  selectedUser?: string
}

const SearchList: React.FC<SearchListProps> = ({
  onPaginationChange,
  deleteUser,
  totalUsersCount,
  limit,
  cursor,
  users,
  onUserSelect,
  selectedUser,
}) => {
  return (
    <List
      itemLayout="horizontal"
      loadMore={
        <Paggination
          maxIndexes={Math.ceil(totalUsersCount / limit)}
          onLinkClick={onPaginationChange}
          currentList={cursor / limit}
        />
      }
      dataSource={users}
      renderItem={(item: User) => (
        <SearchListItem
          deleteUser={deleteUser}
          item={item}
          onUserSelect={onUserSelect}
          selectedUser={selectedUser}
        />
      )}
    />
  )
}

export default SearchList
