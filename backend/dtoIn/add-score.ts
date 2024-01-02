import { object, string, number, array, boolean } from 'yup'

const addScoreDtoIn = object({
  userId: string().required(),
  points: number().required().positive().integer(),
  activityType: string().required(),
  results: array().of(boolean().required()),
  difficulty: string().required(),
}).strict()

export default addScoreDtoIn
