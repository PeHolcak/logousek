import React from 'react'
import { Col, Row } from 'antd'

import { useScore } from '@hooks/useScore'
import { P4 } from '@components/typography/paragraph'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import ScoreListItem from './score-list-item'
import Chart from './chart'
import Filter from './filter'

type UserResultsProps = {
  selectedUser?: string
}

const UserResults: React.FC<UserResultsProps> = ({ selectedUser }) => {
  const { onFilterChange, scoreList } = useScore(selectedUser)
  const { tAdmin } = useTranslateFunctions()
  return (
    <Row style={{ gap: '16px' }}>
      <Col span={24}>
        <Filter
          key={`selected_user_${selectedUser}`}
          onFilterChange={onFilterChange}
          isUserSelected={!!selectedUser}
        />
      </Col>
      {Array.isArray(scoreList) && scoreList.length ? (
        <>
          <Col span={24}>
            <Chart scoreList={scoreList} />
          </Col>
          <Col span={24}>
            <ScoreListItem scoreList={scoreList} />
          </Col>
        </>
      ) : (
        <Col span={24}>
          <P4 align="center">{tAdmin('noData')}</P4>
        </Col>
      )}
    </Row>
  )
}

export default UserResults
