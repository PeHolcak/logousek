import { devices } from '@constants/screens-conf'
import styled from 'styled-components'

export const StoreWrap = styled.div`
  margin-top: 16px;

  max-height: calc(100vh - 67px);
`

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  background-color: rgba(155,155,155, 0.4);
  padding: 4px;
  border-radius: 16px;

  @media ${devices.mobileM} {
    padding: 12px;
  gap: 16px;
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const StoreContent = styled.div`
  max-height: 80vh;
  height: 100%;
  
  overflow-x: hidden;
  overflow-y: auto;
  
`

export const StoreContainer = styled.div`
  position: relative;

  border-radius: ${({ theme }) => theme.radius.primary};
`

export const LoadingWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(128,128,128,0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: ${({ theme }) => theme.zIndex.xxl};
`