import { listUsersDtoOut } from 'pages/api/user/list'
import { callApi } from './calls'
import { listScoreCreditDtoOut } from 'pages/api/activity/list-score'
import { deleteUsersDtoOut } from 'pages/api/user/delete'

export const activityGetScore = (
    selectUser?: string,
    from?: string,
    to?: string,
    activityTypes?: string[]
) => {
    return callApi<listScoreCreditDtoOut>(
        'activity/list-score',
        {
            userId: selectUser,
            from,
            to,
            activityTypes,
        },
        'POST'
    )
}

export const userList = (
    limit: number,
    cursor: number,
    searchUserString?: string,
) => {
    return callApi<listUsersDtoOut>(
        'user/list',
        {
            params: {
                searchUserString: searchUserString,
                limit,
                cursor,
            }
        },
        'GET'
    )
}

export const userDelete = (
    selectedUser: string,
) => {
    return callApi<deleteUsersDtoOut>(
        'user/delete',
        { userId: selectedUser },
        'POST'
    )
}
