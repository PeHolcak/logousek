import { SizesObject } from 'types/styles-types'

type ResponsibleSizeValue = {
  mobile: string
  desktop: string
}

type TypographySizesObject = SizesObject & {
  pageTitle: ResponsibleSizeValue
}

export type FontSizeType = TypographySizesObject

export type LineHeightType = TypographySizesObject

export type LetterSpacingType = TypographySizesObject

export type FontWeightType = {
  sm: string
  md: string
  lg: string
}

export const fontSize: FontSizeType = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '27px',
  pageTitle: { mobile: '48px', desktop: '80px' },
}

export const lineHeight: LineHeightType = {
  xs: '14px',
  sm: '16px',
  md: '18px',
  lg: '22px',
  xl: '28px',
  xxl: '31px',
  pageTitle: { mobile: '56px', desktop: '88px' },
}

export const letterSpacing: LetterSpacingType = {
  xs: '.4px',
  sm: '.4px',
  md: '.4px',
  lg: '.4px',
  xl: '1px',
  xxl: '3px',
  pageTitle: { mobile: '5px', desktop: '5px' },
}

export const fontWeight: FontWeightType = {
  sm: '300',
  md: '400',
  lg: '700',
}
