import styled from "styled-components";

import { devices } from '@constants/screens-conf'

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.laptop} {
    flex-direction: row;
    gap: 8px;
  }
`;
