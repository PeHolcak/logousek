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
