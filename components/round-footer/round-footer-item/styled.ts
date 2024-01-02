import styled from 'styled-components'

type FooterLinkType = { background?: string }

export const FooterLink = styled.a<FooterLinkType>`
  min-width: 60px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color 0.7s ease-in-out;
  user-select: none;

  color: ${({ theme }) => theme.colors.seventy};
  background: ${({ background }) => background || 'none'};

  &:hover {
    background: #eeeeee;
  }

  &:last-child {
    border-bottom-right-radius: ${({ theme }) => theme.radius.secondary};
    border-top-right-radius: ${({ theme }) => theme.radius.secondary};
  }

  &:first-child {
    border-bottom-left-radius: ${({ theme }) => theme.radius.secondary};
    border-top-left-radius: ${({ theme }) => theme.radius.secondary};
  }
`

export const Icon = styled.i`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`
