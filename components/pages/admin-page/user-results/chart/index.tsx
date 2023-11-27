import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import { Score } from '@prisma/client'
import {
  LineChart, XAxis, Tooltip, CartesianGrid, Line,
  ResponsiveContainer
} from 'recharts'


type ChartProps = { scoreList?: Score[] }

const Chart: React.FC<ChartProps> = ({ scoreList }) => {
  const themeData = useContext(ThemeContext);

  return (
    <ResponsiveContainer aspect={1.2}>
      <LineChart
        data={scoreList}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke={themeData.colors.lightGrey} />
        <Line type="monotone" dataKey="points" stroke={themeData?.colors?.primary} yAxisId={0} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart