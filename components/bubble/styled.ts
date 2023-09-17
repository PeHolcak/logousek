import styled, { css } from "styled-components";
import { devices } from "constants/screens-conf";
import { zIndex } from "styles";

type TimeLineItemWrapperProps = { leftSide: boolean };
type BeakProps = { leftSide: boolean };

export const TimeLineItemWrapper = styled.div<TimeLineItemWrapperProps>`
  display: flex;
  margin: 16px 0;
  ${({ leftSide }) =>
    leftSide
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
  @media ${devices.laptop} {
    margin: 0rem;
  }
`;

export const Container = styled.article<{ fillWidth?: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.primary};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  padding: 1rem;

  @media ${devices.laptop} {
    width: ${({ fillWidth }) => fillWidth ? "100%" : "calc(50% - 40px)"};
  }
`;

export const Beak = styled.div<BeakProps>`
  @media ${devices.laptop} {
    position: absolute;
    z-index: ${zIndex.negative};
    height: 32px;
    width: 32px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: calc(50% - 16px);
    transform: rotate(45deg);
    ${({ leftSide }) =>
    leftSide
      ? css`
            left: -0.75rem;
          `
      : css`
            right: -0.75rem;
          `}
  }
`;

export const Content = styled.div`
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 0.3rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;
