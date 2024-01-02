import React, { useMemo } from 'react'
import { List, Skeleton } from 'antd'

import { P5 } from '@components/typography/paragraph'
import { User } from '@prisma/client'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

type SearchListItemProps = {
  deleteUser: (userId: string) => void
  item: User
  onUserSelect: (userId: string) => void
  selectedUser?: string
}

const SearchListItem: React.FC<SearchListItemProps> = ({
  deleteUser,
  item,
  onUserSelect,
  selectedUser,
}) => {
  const { tAdmin, tCommon } = useTranslateFunctions()

  const createDate = useMemo(
    () =>
      item.createdAt
        ? new Date(item.createdAt).toDateString()
        : tAdmin('userList.item.notSpecified'),
    [item.createdAt, tAdmin]
  )

  const userType = useMemo(() => {
    switch (item.type) {
      case 'ADMIN':
        return tAdmin('userType.admin')
      case 'REGISTRED':
        return tAdmin('userType.registred')
      default:
        return tAdmin('userType.host')
    }
  }, [item.type, tAdmin])

  const onDeleteButtonClickHandler = () => {
    deleteUser(item.id)
  }

  return (
    <List.Item
      actions={[
        <a key="list-loadmore-edit" onClick={onDeleteButtonClickHandler}>
          {tCommon('buttons.delete')}
        </a>,
      ]}
    >
      <Skeleton avatar title={false} active loading={false}>
        <List.Item.Meta
          title={
            <S.ItemTitleWrapper
              isSelected={selectedUser === item.id}
              onClick={() => onUserSelect(item.id)}
            >
              {`${item.firstName} ${item.surName || ''}`}
            </S.ItemTitleWrapper>
          }
          description={
            <S.ItemDescriptionWrapper>
              <P5>
                {tAdmin('userList.item.nicknameParagraph', {
                  nickName: item.nickName,
                })}
              </P5>
              <P5>
                {tAdmin('userList.item.userTypeParagraph', {
                  type: userType,
                })}
              </P5>
              <P5>
                {tAdmin('userList.item.dateParagraph', {
                  date: createDate,
                })}
              </P5>
              <P5>
                {tAdmin('userList.item.userId', {
                  id: item.id,
                })}
              </P5>
            </S.ItemDescriptionWrapper>
          }
        />
      </Skeleton>
    </List.Item>
  )
}

export default SearchListItem
