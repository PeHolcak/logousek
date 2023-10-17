import { object, string } from 'yup';

const getScoreCountdtoIn = object({
    userId: string().required(),
}).strict();

export default getScoreCountdtoIn