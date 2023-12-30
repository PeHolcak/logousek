import styled from 'styled-components'
import { Form } from 'antd'

import { FormValues } from '.'

export const LoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledForm = styled(Form<FormValues>)`
  width: 100%;
  padding: 1rem 2rem 0rem 2rem;
`
