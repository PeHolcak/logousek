import React, { useState, useMemo } from 'react'
import { Collapse, Table } from 'antd'
import { Score } from '@prisma/client'

import { games, GameType } from 'constants/activity-confs/activity-conf'
import { getFormatedDateTime } from '@helpers/date-helper'
import { useTranslateFunctions } from '@hooks/useTranslateFunctions'

import Paggination from '../../paggination'
import ScoreDataVisualization from './score-data-visualization'

const { Panel } = Collapse

type ScoreListItemType = {
    scoreList?: Score[]
}
type ScoreListItemTableType = {
    score: number
    activityTypeTitle: string
    activityTypeName: string
    difficulty: string | null
}

const MAX_ITEMS_IN_LIST = 10

const ScoreListItem: React.FC<ScoreListItemType> = ({ scoreList }) => {
    const [currentList, setCurrentList] = useState(0)
    const { tAdmin } = useTranslateFunctions()

    const maxIndexes = Math.ceil((scoreList?.length || 0) / 10)

    const getActivityTitle = (activityType: string) => {
        const allGames = Object.values(games).reduce(
            (result: GameType[], currentGameArray: GameType[]) => {
                return [...result, ...currentGameArray]
            },
            []
        )
        return allGames.find((activity) => activity.name === activityType)?.title
    }

    const columns = useMemo(
        () => [
            {
                title: tAdmin('scoreList.item.tableHeader.score') || '',
                dataIndex: 'score',
                key: 'score',
            },
            {
                title: tAdmin('scoreList.item.tableHeader.activityTypeTitle') || '',
                dataIndex: 'activityTypeTitle',
                key: 'activityType',
            },
            {
                title: tAdmin('scoreList.item.tableHeader.activityTypeName') || '',
                dataIndex: 'activityTypeName',
                key: 'activityType',
            },
            {
                title: tAdmin('scoreList.item.tableHeader.difficulty') || '',
                dataIndex: 'difficulty',
                key: 'difficulty',
            },
        ],
        [tAdmin]
    )

    const getTableDataSource = (scoreList: Score) => {
        return [
            {
                score: scoreList.points,
                activityTypeTitle:
                    getActivityTitle(scoreList.activityType) ||
                    tAdmin('scoreList.item.withoutName') ||
                    '',
                activityTypeName: scoreList.activityType,
                difficulty: scoreList.difficulty,
            },
        ]
    }

    return (
        <Collapse>
            {(scoreList || [])
                .slice(
                    currentList * MAX_ITEMS_IN_LIST,
                    (currentList + 1) * MAX_ITEMS_IN_LIST
                )
                .map((score) => (
                    <Panel
                        header={getFormatedDateTime(new Date(score.createdAt))}
                        key={`score-list-item-${score.id}`}
                    >
                        <Table<ScoreListItemTableType>
                            dataSource={getTableDataSource(score)}
                            pagination={false}
                            columns={columns}
                        />
                        <ScoreDataVisualization data={score.data} />
                    </Panel>
                ))}
            <Paggination
                maxIndexes={maxIndexes}
                currentList={currentList}
                onLinkClick={setCurrentList}
            />
        </Collapse>
    )
}

export default ScoreListItem
