import React, { useContext, useState, useEffect, useMemo } from 'react'
import { ThemeContext } from 'styled-components'
import { Form, Input } from 'antd';

import Button, { ButtonSizesEnum } from '@components/button/index'
import ButtonRow from '@components/button-row/button-row'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions';

import * as S from './styled'

export type FieldsType = { [key: string]: { name: string, minLength: number, maxLength: number } }

type LoginFormProps = {
    onFormFilledHandler: (data: FormValues) => void
    fields: FieldsType
    name: string
    buttonName: string
}

export type FormValues = {
    firstName: string
    surName: string
    nickName: string
    password: string
}

export const FIELDS = {
    firstName: { name: 'firstName', minLength: 3, maxLength: 25 },
    surName: { name: 'surName', minLength: 4, maxLength: 25 },
    nickName: { name: 'nickName', minLength: 7, maxLength: 30 },
    password: { name: 'password', minLength: 10, maxLength: 35 },
}


const LoginForm: React.FC<LoginFormProps> = ({ onFormFilledHandler, fields, name, buttonName }) => {
    const { tLogin } = useTranslateFunctions()
    const [form] = Form.useForm();
    const themeContextData = useContext(ThemeContext)
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);

    const handleSubmit = (values: FormValues) => {
        onFormFilledHandler(values)
    }

    const getFields = useMemo(() => {
        return Object.values(fields).map((field) => (
            <Form.Item
                key={`form_item_${field.name}`}
                label={tLogin(`modals.registerUser.${field.name}`)}
                name={field.name}
                rules={[
                    {
                        required: true,
                        message: tLogin(`modals.registerUser.rules.notEntry.${field.name}`),
                    },
                    {
                        min: field.minLength,
                        message: tLogin(
                            `modals.registerUser.rules.insufficientLength`,
                            { value: field.minLength }
                        ),
                    },
                    {
                        max: field.maxLength,
                        message: tLogin(`modals.registerUser.rules.moreThenMaxLength`, {
                            value: field.maxLength,
                        }),
                    },
                ]}
            >
                {field.name === FIELDS.password.name ? <Input.Password /> : <Input />}
            </Form.Item>
        ))
    }, [fields, tLogin])

    return (
        <S.LoginFormWrapper>
            <S.StyledForm
                form={form}
                name={name}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
            >
                {getFields}
                <ButtonRow>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                type="submit"
                                color={themeContextData.colors.white}
                                size={ButtonSizesEnum.xs}
                                backgroundColor={themeContextData?.colors?.tertiary}
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                {buttonName}
                            </Button>)}
                    </Form.Item>
                </ButtonRow>
            </S.StyledForm>
        </S.LoginFormWrapper>
    )
}

export default LoginForm
