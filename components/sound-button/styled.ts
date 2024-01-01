import styled from "styled-components";

export const SoundButtonWrapper = styled.div`
  position: relative;

  transition-duration: .5s;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ReferenceWrapper = styled.div`
  cursor: pointer;
  
  position: absolute;
  bottom: 0;
  right: 0;
`;