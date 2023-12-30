import styled, { css } from 'styled-components'


export const MobileMenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  `

export const Stripe = styled.div`
  width: 32px;
  height: 3px;
  background-color: black;

  transition-duration: 0.5s;

  margin: 6px 0;
`

export const MenuButton = styled.button<{ isMenuOpen: boolean }>`
  height: 48px;
  width: 48px;
  padding: 5px 6px;
  margin: 6px 0;
  background-color: ${({ theme }) => theme.colors.white};

  position: relative;

  z-index: ${({ theme }) => theme.zIndex.xxl};

  transition-duration: 0.5s;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;



  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          border: 2px solid red;
          & > div:first-child {
            transform: rotate(45deg);
            width: 32px;
            margin: 0;    
            margin-top: 1px;
            background-color: red;
          }

          & > div:nth-child(2) {
            opacity: 0;
          }

          & > div:nth-child(3) {
            width: 32px;
            transform: rotate(-45deg);
            margin: 0;
            margin-top: -18px;
            background-color: red;
          }
        `
      : css``}
`
