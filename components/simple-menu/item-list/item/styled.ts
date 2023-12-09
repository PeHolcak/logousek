import styled from "styled-components";

export const ItemWrap = styled.li`
  display: flex;
  justify-content: flex-start;
  padding-right: 2rem;
  transition-duration: 0.5s;
  border-radius: ${({ theme }) => theme.radius.primary};
  cursor: pointer;

  &:hover {
    box-shadow: 0 3rem 5rem rgb(0 0 0 / 8%);
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const ItemLink = styled.a`
  display: flex;
  width: 100%;

  & > p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${({ theme }) => theme.colors.tenth};
  }
`;

export const ItemIcon = styled.i<{ isMenuShow: boolean }>` 
   font-size: 2.5rem;
   padding: 0.75rem;
   color: ${({ theme, isMenuShow }) => isMenuShow ? theme.colors.blue : theme.colors.black};
`;
