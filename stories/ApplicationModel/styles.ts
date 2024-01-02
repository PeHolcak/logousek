import { styled } from '@storybook/theming'
import { zIndex } from 'styles'
import { lightColors } from 'styles/colors'

export const MermaidWrapper = styled.div`
  // background: red;

  .nodes g > line {
    display: none !important;
  }

  .label .classTitle > div {
    margin-top: 12px !important;
  }

  .classTitle {
    height: 48px !important;
  }

  rect {
    fill: ${lightColors.lightGrey} !important;
    stroke: ${lightColors.lightGrey} !important;
  }

  .green > rect {
    fill: ${lightColors.lightGreen} !important;
    stroke: ${lightColors.lightGreen} !important;
  }

  .blue > rect {
    fill: ${lightColors.blue} !important;
    stroke: ${lightColors.blue} !important;
  }

  .oval > rect {
    rx: 50%;
    ry: 50%;
  }

  .edgeLabels > .edgeTerminals > foreignObject {
    overflow: visible;
  }

  .edgeTerminals > .inner > foreignObject {
    overflow: visible;
  }

  .edgeTerminals > .inner > foreignObject span,
  .edgeTerminals > foreignObject span {
    overflow: visible;
    font-weight: 900;
    color: ${lightColors.lightGrey};

    position: relative;
    z-index: ${zIndex.xxl};
  }
`
