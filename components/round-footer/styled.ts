import styled from "styled-components";
import { motion } from "framer-motion";

import { devices } from '@constants/screens-conf'

type NavProps = { customHeight?: string }

type FooterLinkType = { background?: string }

export const AnimatedFooterContent = styled(motion.div)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  z-index: 999;
`;

export const FooterContainer = styled.nav<NavProps>`
  display: flex;
  height: 4rem;
  width: ${({ customHeight }) => customHeight || "100%"};
  box-shadow: 0px 5px 40px 0px rgb(58, 58, 58);
  max-width: 640px;
  position: relative;
  background-color: #ffffff;
  border-radius: ${({ theme }) => theme.radius.secondary};

  @media ${devices.mobileL} {
    margin: 0px 10px;
  }
`;


export const FooterLink = styled.a<FooterLinkType>`
  min-width: 60px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  transition: background-color 0.7s ease-in-out;
  user-select: none;
  
  color: ${({ theme }) => theme.colors.seventy};
  background: ${({ background }) => background || "none"};

&:hover {
  background: #eeeeee;
}

&:last-child {
  border-bottom-right-radius: ${({ theme }) => theme.radius.secondary};
  border-top-right-radius: ${({ theme }) => theme.radius.secondary};
}

&:first-child {
  border-bottom-left-radius: ${({ theme }) => theme.radius.secondary};
  border-top-left-radius: ${({ theme }) => theme.radius.secondary};
}

`;


export const Icon = styled.i`
 font-size: 18px;
`;

export const FooterWrap = styled.footer`
`