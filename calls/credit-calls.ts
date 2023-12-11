import { GetLeaderBoardDtoOut } from 'pages/api/credit/get-leaderboard'
import { callApi } from './calls'
import { getUserCreditDtoOut } from 'pages/api/credit/get-user-credit'


export const getLeaderboard = (
    userId: string,
) => {
    return callApi<GetLeaderBoardDtoOut>(
        'credit/get-leaderboard',
        { params: { userId } },
        'GET'
    )
}

export const getUserCredit = (
    userId: string,
) => {
    return callApi<getUserCreditDtoOut>(
        'activity/get-score-count',
        { params: { userId } },
        'GET'
    )
}
