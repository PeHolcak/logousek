import { object, string } from 'yup'

const buyItemDtoIn = object({
  itemName: string().required(),
}).strict()

export default buyItemDtoIn
