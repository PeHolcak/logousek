import { object, string } from 'yup';

const setSettingsDtoIn = object({
    auraName: string().required(),
    characterName: string().required(),
}).strict();

export default setSettingsDtoIn