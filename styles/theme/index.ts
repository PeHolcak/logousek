import {
  type FontSizeType,
  type LineHeightType,
  type LetterSpacingType,
  type FontWeightType,
  type RadiusType,
  type ColorsType,
  type ZIndexType,
} from '../'

export type ThemeType = {
  typography: {
    fontSize: FontSizeType
    lineHeight: LineHeightType
    letterSpacing: LetterSpacingType
    fontWeight: FontWeightType
  }
  radius: RadiusType
  colors: ColorsType
  zIndex: ZIndexType
}
