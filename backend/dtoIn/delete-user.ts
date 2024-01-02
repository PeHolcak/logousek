import { object, string } from 'yup'

const deleteUserDtoIn = object({
  userId: string().required(),
}).strict()

export default deleteUserDtoIn
