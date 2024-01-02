import styled from 'styled-components'
import { DatePicker, Col } from 'antd'

const { RangePicker } = DatePicker

export const StyledRangePicker = styled(RangePicker)`
  width: 100%;
`

export const FilterButtonRow = styled(Col)`
  display: flex;
  justify-content: end;
  gap: 16px;
`
