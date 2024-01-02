import { object, string } from 'yup'

const listScoreDtoIn = object({
  userId: string().required(),
}).strict()

export default listScoreDtoIn
