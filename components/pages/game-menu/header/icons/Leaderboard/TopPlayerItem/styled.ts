import { devices } from '@constants/screens-conf'
import styled from 'styled-components'


export const TopPlayerItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 40px;
`


export const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`


export const Image = styled.img`
    width: 100%;
    max-width: 160px;

    @media ${devices.tablet} {
        width: 144px;
    } 
`