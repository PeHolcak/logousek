import { object, string } from 'yup'

const listUserDtoIn = object({
  searchUserString: string(),
  limit: string().required(),
  cursor: string().required(),
}).strict()

export default listUserDtoIn
