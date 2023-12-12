import styled from 'styled-components'

export const TopPlayerWrapper = styled.div`
  display: flex;
  gap: 40px;

  & > *:nth-child(2) {
    transform: scale(1.15) translateY(32px);
  }

  margin: 16px;
`

export const LeaderboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Others = styled.div`
  width: 100%;
`

export const LoadingWrap = styled.div`
  margin-top: 16px;
`