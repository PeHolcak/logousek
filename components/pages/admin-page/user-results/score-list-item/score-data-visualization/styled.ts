import styled from 'styled-components'

export const ScoreDataVisualizationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`

export const ScoreDataItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

export const ScoreDataItemSpan = styled.span<{ color?: string }>`
  color: ${({ color }) => {
    return color || 'none'
  }};
  text-align: center;
`

export const ScoreDataVisualizationWrapper = styled.div`
  margin-top: 32px;
`
