import { registerGuessDtoOut } from 'pages/api/user/register-guess'
import { callApi } from './calls'
import bcrypt from 'bcryptjs'
import { registerUserDtoOut } from 'pages/api/user/register-user'

export const registerUserCall = (
    firstName: string,
    surName: string,
    nickName: string,
    password: string
) => {
    return callApi<registerUserDtoOut>(
        'user/register-user',
        { firstName, surName, nickName, password: bcrypt.hashSync(password, 10) },
        'POST'
    )
}

export const registerGuessCall = () => {
    return callApi<registerGuessDtoOut>('user/register-guess', {}, 'POST')
}
