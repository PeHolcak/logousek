import styled from 'styled-components'
import { devices } from '@constants/screens-conf'

export const AuthorWrapper = styled.article<{ minimized: boolean }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: scale(1);

  @media ${devices.laptop} {
    transform: scale(${({ minimized }) => (minimized ? '0.95' : '1')});
  }
`

export const AuthorContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 280px;
  align-self: center;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.wtiteTransparent};
  box-shadow: 0px 2px 16px ${({ theme }) => theme.colors.seventy};
  border-radius: ${({ theme }) => theme.radius.secondary};
`

export const PictureWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    width: 100%;
    height: calc(50% + 24px);
    position: absolute;
    background: linear-gradient(
      347deg,
      ${({ theme }) => theme.colors.blue} 0%,
      ${({ theme }) => theme.colors.orrange} 100%
    );
    z-index: ${({ theme }) => theme.zIndex.negative};
    border-radius: ${({ theme }) => theme.radius.secondary}
      ${({ theme }) => theme.radius.secondary} 0 0;
  }
`

type PictureProps = { src: string }

export const Picture = styled.div<PictureProps>`
  width: 100%;
  aspect-ratio: 1;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.tertialy};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  width: 160px;
  aspect-ratio: 1;
  margin: 40px 0 0 0;
  border: 3px solid ${({ theme }) => theme.colors.white};

  @media ${devices.tablet} {
    width: 120px;
  }
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  & > p {
    padding: 0px;
    margin: 0px;
    text-align: center;
  }

  & > h4 {
    margin: 0px;
    text-align: center;
  }
`

export const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
