import styled from 'styled-components'
import { devices } from '../../constants/screens-conf'
import React from 'react'

interface ModalWrapperType { show?: boolean }

interface ModalContainerProps {
  children: Array<React.ReactElement | undefined>
  autoWidth: boolean
}

export const ModalWrapper = styled.div<ModalWrapperType>`
  position: fixed;
  display: flex;
  z-index: 1002;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  align-items: center;
  width: 100vw;
  height: 100vh;


  transform: scale(0);
  opacity: 0;
  animation: ${({ show }) =>
    show ? 'popup' : show === undefined ? 'none' : 'dump'}
    1s forwards;
  @keyframes popup {
    from {
      transform: scale(0);
      opacity: 0;
    }

    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes dump {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      display: none;
      transform: scale(0);
      opacity: 0;
    }
  }
`

export const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  padding: 0.5rem 1rem;
  width: ${({ autoWidth }) => autoWidth ? "auto" : "100vw"};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.4);
  border-radius: ${({ theme }) => theme.radius.primary};

  max-height: 100vh;

  overflow: auto;

  @media ${devices.mobileM} {
    margin: 8px;
    padding: 0.5rem 1rem;
  }

  @media ${devices.mobileL} {
    margin: 1rem;
  }

  @media ${devices.tablet} {
    width: ${({ autoWidth }) => autoWidth ? "auto" : "70vw"};
  }

  @media ${devices.laptop} {
    width:  ${({ autoWidth }) => autoWidth ? "auto" : "60vw"};
  }

  @media ${devices.laptopL} {
    width:  ${({ autoWidth }) => autoWidth ? "auto" : "50vw"};
  }

  @media ${devices.desktop} {
    width:  ${({ autoWidth }) => autoWidth ? "auto" : "40vw"};
  }

  @media ${devices.desktopL} {
    width:  ${({ autoWidth }) => autoWidth ? "auto" : "25vw"};
  }
`

export const Modalheader = styled.div`
  display: flex;
  border-top-left-radius: ${({ theme }) => theme.radius.primary};
  border-top-right-radius: ${({ theme }) => theme.radius.primary};
`

export const ModalTitle = styled.h3`
  margin: 0px;  
  font-weight: 500;
  font-size: 20pt;
  flex: 1;
  padding: 0.5rem 2rem; 
  color: ${({ theme }) => theme.colors.black};
`

export const ModalContent = styled.div`
  flex: 1;
`

export const CloseIconWrapper = styled.span`
  margin: 0.5rem;
`