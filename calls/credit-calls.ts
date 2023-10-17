import { callApi } from './calls'


export const getLeaderboard = (
    userId: string,
) => {
    return callApi(
        'credit/get-leaderboard',
        { params: { userId } },
        'GET'
    )
}
