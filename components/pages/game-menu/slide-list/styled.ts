import styled from 'styled-components'

type ContentWrapper = {
  currentSlide: number
}

export const ContentWrapper = styled.main<ContentWrapper>`
  display: flex;
  transition-duration: 0.6s;
  transform: ${({ currentSlide }) => `translateX(${-currentSlide * 100}vw)`};
`
