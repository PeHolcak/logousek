import React from 'react'

import { useTranslateFunctions } from '@hooks/useTranslateFunctions'
import { FIELDS } from '../form'

import Form from '../form'

type OnFormFilledHandlerType = {
  nickName: string
  password: string
  type: "registredUser"
}

type LoginUserFormProps = {
  onFormFilledHandler: ({
    nickName,
    password,
    type
  }: OnFormFilledHandlerType) => void
}

type FormValues = { nickName: string; password: string }

const LoginUserForm: React.FC<LoginUserFormProps> = ({ onFormFilledHandler }) => {
  const { tCommon } = useTranslateFunctions()

  const handleSubmit = (values: FormValues) => {
    onFormFilledHandler({
      nickName: values.nickName,
      password: values.password,
      type: "registredUser"
    })
  }

  return (
    <Form
      onFormFilledHandler={handleSubmit}
      fields={{
        nickName: FIELDS.nickName,
        password: FIELDS.password
      }}
      name="LoginForm"
      buttonName={tCommon('buttons.send')}
    />)
}

export default LoginUserForm
