import styled from "styled-components";

export const GameSamples = styled.section``

type GameSamplesImageProps = {
  src: string
}


export const GameSamplesImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const GameSamplesImage = styled.div<GameSamplesImageProps>`
  width: 300px;
  height: 600px;
  display: flex;
  justify-content: center;
  background-image: url("${({ src }) => src}");
  background-size: cover;
`

export const StyledVideo = styled.video`
  padding: 10px;
  border-radius: ${({ theme }) => theme.radius.tertialy};
  width: 100%;
  height: auto;
  z-index: ${({ theme }) => theme.zIndex.negative};
`