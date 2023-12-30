import styled from 'styled-components'

export const CashContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &>span{
    max-width: 60px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const CashWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.i`
  padding: 0px 7px;
`