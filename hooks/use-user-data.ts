import { useState, useEffect, useMemo, useCallback } from 'react'
import { MessageInstance } from 'antd/es/message/interface'
import { User } from '@prisma/client'

import { userList, userDelete } from 'calls/admin-page-calls'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

const useUserData = (messageApi: MessageInstance) => {
  const [users, setUsers] = useState<User[]>([])
  const limit = useMemo(() => 5, [])
  const [cursor, setCursor] = useState(0)
  const [searchText, setSearchText] = useState<string>('')
  const [totalUsersCount, setTotalUsersCount] = useState<number>(0)
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')
  const { tAdmin } = useTranslateFunctions()

  const getData = useCallback(async () => {
    try {
      const res = await userList(limit, cursor, searchText)
      if (res.status === 200 && 'users' in res.data) {
        setUsers(res?.data?.users)
        setTotalUsersCount(res?.data?.totalUsersCount)
        setState('ready')
      } else {
        messageApi.open({
          type: 'error',
          content: tAdmin('errors.userListError'),
        })
      }
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: tAdmin('errors.userListError'),
      })
    }
  }, [cursor, limit, messageApi, searchText, tAdmin])

  useEffect(() => {
    setState('loading')
    getData()
  }, [getData])

  const search = (searchUserString: string) => {
    setCursor(0)
    setSearchText(searchUserString)
  }

  const onPaginationChange = (index: number) => {
    setCursor(index * limit)
  }

  const onReset = () => {
    setCursor(0)
    setSearchText('')
  }

  const deleteUser = (userId: string) => {
    userDelete(userId)
      .then((data) => {
        if (data.status === 200) {
          messageApi.open({
            type: 'success',
            content: tAdmin('successMessages.userDeleteSuccess'),
          })
          getData()
        } else {
          messageApi.open({
            type: 'error',
            content: tAdmin('errors.userDeleteError'),
          })
        }
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: tAdmin('errors.userDeleteError'),
        })
      })
  }

  return {
    users,
    state,
    search,
    totalUsersCount,
    limit,
    cursor,
    onPaginationChange,
    searchText,
    deleteUser,
    onReset,
  }
}

export default useUserData
