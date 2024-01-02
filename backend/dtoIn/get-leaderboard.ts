import { object, string } from 'yup'

const getLeaderboardDtoIn = object({
  userId: string().required(),
}).strict()

export default getLeaderboardDtoIn
