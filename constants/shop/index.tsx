import publicImages from '@constants/public-images'

export enum AurasEnum {
  red = 'red',
  green = 'green',
  blue = 'blue',
  orange = 'orange',
  purple = 'purple',
  transparent = 'transparent',
}

export enum CharacterEnum {
  beaver = 'beaver',
  rabbit = 'rabbit',
  raccoon = 'raccoon',
  cat = 'cat',
  fox = 'fox',
  hippo = 'hippo',
  seaLion = 'seaLion',
  deer = 'deer',
  bear = 'bear',
  elephant = 'elephant',
  lion = 'lion',
}

export type AuraType = {
  name: AurasEnum
  label: string
  cost: number
  color: string
}

export type CharacterType = {
  name: CharacterEnum
  label: string
  cost: number
  imageSrc: string
}

export type ItemType = AuraType | CharacterType

export const CHARACTERS_CONFIG: CharacterType[] = [
  {
    name: CharacterEnum.beaver,
    label: 'Bobr',
    cost: 0,
    imageSrc: publicImages.characters.beaver,
  },
  {
    name: CharacterEnum.rabbit,
    label: 'Králík',
    cost: 5,
    imageSrc: publicImages.characters.rabbit,
  },
  {
    name: CharacterEnum.raccoon,
    label: 'Mýval',
    cost: 10,
    imageSrc: publicImages.characters.raccoon,
  },
  {
    name: CharacterEnum.cat,
    label: 'Kočka',
    cost: 16,
    imageSrc: publicImages.characters.cat,
  },
  {
    name: CharacterEnum.fox,
    label: 'Liška',
    cost: 23,
    imageSrc: publicImages.characters.fox,
  },
  {
    name: CharacterEnum.hippo,
    label: 'Hroch',
    cost: 32,
    imageSrc: publicImages.characters.hippo,
  },
  {
    name: CharacterEnum.seaLion,
    label: 'Lachtan',
    cost: 41,
    imageSrc: publicImages.characters.seaLion,
  },
  {
    name: CharacterEnum.deer,
    label: 'Jelen',
    cost: 51,
    imageSrc: publicImages.characters.deer,
  },
  {
    name: CharacterEnum.bear,
    label: 'Medvěd',
    cost: 62,
    imageSrc: publicImages.characters.bear,
  },
  {
    name: CharacterEnum.elephant,
    label: 'Slon',
    cost: 80,
    imageSrc: publicImages.characters.elephant,
  },
  {
    name: CharacterEnum.lion,
    label: 'Lev',
    cost: 100,
    imageSrc: publicImages.characters.lion,
  },
]

export const AURAS_CONFIG: AuraType[] = [
  {
    name: AurasEnum.red,
    label: 'Červená',
    cost: 0,
    color: 'red',
  },
  {
    name: AurasEnum.green,
    label: 'Zelená',
    cost: 10,
    color: 'green',
  },
  {
    name: AurasEnum.blue,
    label: 'Modrá',
    cost: 20,
    color: 'blue',
  },
  {
    name: AurasEnum.orange,
    label: 'Oranžová',
    cost: 35,
    color: 'orange',
  },
  {
    name: AurasEnum.purple,
    label: 'Fialová',
    cost: 55,
    color: 'purple',
  },
  {
    name: AurasEnum.transparent,
    label: 'Průhledná',
    cost: 80,
    color: 'transparent',
  },
]

export const DEFAULT_AURA = 'red'
export const DEFAULT_CHARACTER = 'beaver'
