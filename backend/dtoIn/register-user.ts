import { object, string } from 'yup'

const registerUserDtoIn = object({
  firstName: string().required(),
  nickName: string().required(),
  password: string().required(),
  surName: string().required(),
}).strict()

export default registerUserDtoIn
