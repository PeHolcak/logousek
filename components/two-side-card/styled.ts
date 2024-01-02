import styled from 'styled-components'

interface InnedCardProps {
  isDiffSiteShown: boolean
}

export const Side = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const DescriptionSideWrapper = styled(Side)`
  cursor: default;
  transform: rotateY(180deg);
`

export const MainSideWrapper = styled(Side)`
  cursor: pointer;
`

export const InnedCard = styled.div<InnedCardProps>`
  position: relative;
  width: 100%;
  height: 15rem;
  border-radius: ${({ theme }) => theme.radius.primary};
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isDiffSiteShown }) =>
    isDiffSiteShown ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  box-shadow: 0px 2px 16px ${({ theme }) => theme.colors.seventy};
`

export const CardWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 12rem;
  height: 15rem;
  perspective: 1000px;
  margin: 1.5rem;

  border-radius: ${({ theme }) => theme.radius.primary};

  @media only screen and (max-width: 1280px) {
    margin: 0.7rem;
  }

  @media only screen and (max-width: 720px) {
    margin: 0.7rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`

//common styled components for children
export const Description = styled.p`
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 0.5rem 0;
  font-weight: 600;
  text-align: 'center';
  color: ${({ theme }) => theme.colors.seventy};
`

export const InformIcon = styled.div`
  cursor: help;
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  z-index: 1;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.secondary};
  color: ${({ theme }) => theme.colors.seventy};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.45s linear;
    background: ${({ theme }) => theme.colors.seventy};
  }

  & > i {
    position: relative;
    width: 24px;
  }
`
