import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const SlideWrapper = styled.div`
  width: 100vw;
  min-width: 100vw;
  height: fit-content;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.8rem 1.5rem;
  padding-bottom: 100px;
  user-select: none;
  margin-top: 70px;

  @media ${devices.laptop} {
    padding: 0.8rem 6rem;
    flex-direction: row;
  }

  @media ${devices.laptopL} {
    padding: 0.8rem 8rem;
  }
`

export const GameTypeDetail = styled.section`
  display: flex;
  max-height: 80vh;
  flex-direction: column;
  justify-content: center;
  margin: 0rem;

  @media ${devices.laptop} {
    max-height: auto;
    margin: 1rem;
    flex: 2;
  }
  @media ${devices.laptopL} {
    margin: 7rem;
  }
`

export const GamesTypeHeader = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};

  @media ${devices.laptop} {
    margin-bottom: 3rem;
  }
`

export const LabelWrapper = styled.div`
  display: flex;
`

export const GamesTypeContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
`

export const CitationParagraph = styled.cite`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-align: end;
`

export const GameList = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 1.4rem;

  @media ${devices.laptop} {
    flex: 3;
  }

  @media ${devices.laptopL} {
    gap: 0rem;
  }
`
