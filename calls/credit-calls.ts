import { GetLeaderBoardDtoOut } from 'pages/api/credit/get-leaderboard'
import { callApi } from './calls'


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
    return callApi<any>(
        '/activity/get-score-count',
        { params: { userId } },
        'GET'
    )
}
