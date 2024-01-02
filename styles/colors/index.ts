export enum ColorsEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  fourty = 'fourty',
  fifty = 'fifty',
  sixty = 'sixty',
  seventy = 'seventy',
  eighty = 'eighty',
  ninghty = 'ninghty',
  tenth = 'tenth',
  white = 'white',
  lightGrey = 'lightGrey',
  wtiteTransparent = 'wtiteTransparent',
  lightGreen = 'lightGreen',
  darkGreen = 'darkGreen',
  black = 'black',
  alert = 'alert',
  success = 'success',
  blue = 'blue',
  yellow = 'yellow',
  orrange = 'orrange',
  red = 'red',
  transparent = 'transparent',
}

export type ColorsType = {
  [key in keyof typeof ColorsEnum]: string
}

export const lightColors: ColorsType = {
  primary: '#84E065',
  secondary: '#F0E400',
  tertiary: '#E0681B',
  fourty: '#26A5E0',
  fifty: '#CE36F7',
  sixty: '#FA4238',
  seventy: '#696969',
  eighty: '#fff',
  ninghty: '#696969',
  tenth: '#000',

  white: '#fff',
  lightGrey: '#aaa',
  wtiteTransparent: '#ffffffaa',
  lightGreen: '#C9FF6D',
  darkGreen: '#008000',

  black: '#000',
  alert: '#FA4238',
  success: '#84E065',
  blue: '#26A5E0',
  yellow: '#F0E400',
  orrange: '#E0681B',
  red: '#FA4238',

  transparent: 'transparent',
}

export const darkColors: ColorsType = {
  primary: '#696969',
  secondary: '#696969',
  tertiary: '#696969',
  fourty: '#696969',
  fifty: '#000000',
  sixty: '#84E065',
  seventy: '#696969',
  eighty: '#696969',
  ninghty: '#fff',
  tenth: '#fff',

  white: '#fff',
  lightGrey: '#ccc',
  wtiteTransparent: '#ffffff77',
  lightGreen: '#696969',
  darkGreen: '#696969',

  black: '#000',
  alert: '#FA4238',
  success: '#84E065',
  blue: '#26A5E0',
  yellow: '#F0E400',
  orrange: '#E0681B',
  red: '#FA4238',

  transparent: 'transparent',
}
