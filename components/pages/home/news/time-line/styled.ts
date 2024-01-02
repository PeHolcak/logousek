import styled from 'styled-components'
import { devices } from 'constants/screens-conf'

export const Wrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 1.2rem;
  width: 100%;
`

export const CenterLine = styled.div`
  position: absolute;
  top: 5%;
  bottom: 5%;
  display: none;
  height: 90%;
  width: 5px;
  left: 50%;
  background: rgb(138, 140, 137);

  @media ${devices.laptop} {
    display: block;
  }
`
