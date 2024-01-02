import { SizesObject } from 'types/styles-types'

export type ZIndexType = SizesObject & { negative: string }

export const zIndex: ZIndexType = {
  negative: '-1',
  xs: '1',
  sm: '2',
  md: '5',
  lg: '10',
  xl: '100',
  xxl: '999',
}
