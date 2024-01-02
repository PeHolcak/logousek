import React, { useMemo, useCallback } from 'react'
import { Button, Form, Col, Row, Select } from 'antd'
import { Moment } from 'moment'

import activityConf, {
  ActivityType,
} from '@constants/activity-confs/activity-conf'
import { getEndOfDay, getStartOfDay } from '@helpers/date-helper'
import { TODAY_MIDNIGHT_ISO, NOW_ISO } from '@hooks/useScore'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import * as S from './styled'

const getActivities = () =>
  activityConf.reduce(
    (result: { value: string; label: string }[], activities: ActivityType) => {
      return [
        ...result,
        ...activities.games.map((game) => ({
          value: game.name,
          label: game.title,
        })),
      ]
    },
    []
  )

type FormType = {
  activityTypes?: string[]
  dateRange?: (Moment | undefined)[]
}

type FilterProps = {
  onFilterChange: ({
    from,
    to,
    activityTypes,
  }: {
    from?: string
    to?: string
    activityTypes?: string[]
  }) => void
  isUserSelected: boolean
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const { tCommon } = useTranslateFunctions()
  const [form] = Form.useForm()
  const activities = useMemo(() => getActivities(), [])

  const onFilterReset = useCallback(() => {
    form.resetFields()
    onFilterChange({ from: TODAY_MIDNIGHT_ISO, to: NOW_ISO })
  }, [onFilterChange, form])

  const handleFormSubmit = () => {
    const formValues: FormType = form.getFieldsValue()
    const [from, to] = formValues.dateRange || []
    onFilterChange({
      from: from ? getStartOfDay(from.toDate().toISOString()) : undefined,
      to: to ? getEndOfDay(to.toDate().toISOString()) : undefined,
      activityTypes: formValues.activityTypes,
    })
  }

  return (
    <Form<FormType> form={form}>
      <Row style={{ gap: '16px' }}>
        <Col span={24}>
          <Form.Item name="activityTypes">
            <Select
              mode="multiple"
              showArrow
              options={activities}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item name="dateRange">
            <S.StyledRangePicker />
          </Form.Item>
        </Col>

        <S.FilterButtonRow span={24}>
          <Button type="primary" onClick={handleFormSubmit}>
            {tCommon('buttons.filter')}
          </Button>
          <Button type="default" onClick={onFilterReset}>
            {tCommon('buttons.reset')}
          </Button>
        </S.FilterButtonRow>
      </Row>
    </Form>
  )
}

export default Filter
