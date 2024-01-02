import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  gap: 16px;
  position: fixed;
  z-index: 998;
  top: 10px;
  justify-content: space-between;
  width: calc(100vw - 20px);
  height: 60px;
  padding: 0px 15px;
  border-radius: ${({ theme }) => theme.radius.secondary};
  margin: 0px 10px;
  box-shadow: 0px 5px 40px 0px rgb(58, 58, 58);

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`
