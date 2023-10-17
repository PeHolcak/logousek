import styled from 'styled-components'


export const BlobContainer = styled.div`
  position: relative;    
`

export const Figure = styled.div`

`

type BlobContainerInnerProps = {
  position: "absolute" | "static"
}

export const BlobContainerInner = styled.div<BlobContainerInnerProps>`
  position: ${({ position }) => position};
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`