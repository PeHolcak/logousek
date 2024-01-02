import { useMemo } from 'react'
import { getRandomSvgs } from '@helpers/svg-helpers'

import { shuffle, getEmptyArray } from '@helpers/array-helper'

import { SvgWrapper } from '@contexts/seriality-context/seriality-context-provider/styled'
type ViewBoxSettingType = {
  [settingKey: string]: string
}
type ViewBoxConfType = { [key: number]: ViewBoxSettingType }
type SvgHashType = { [key: number]: string[] }

export type CardType = {
  img: React.ReactNode
  keyImage: string
  reference?: React.ReactNode
}

const VIEWBOX_CONF: ViewBoxConfType = {
  2: {
    leftTop: '0 0 512 1024',
    rightTop: '512 0 512 1024',
  },
  4: {
    leftTop: '0 0 512 1024',
    rightTop: '512 0 512 1024',
    leftBottom: '0 512 512 1024',
    rightBottom: '512 512 512 1024',
  },
  6: {
    leftTop: '0 0 512 1024',
    rightTop: '512 0 512 1024',
    leftMiddle: '0 341 512 1024',
    rightMiddle: '512 341 512 1024',
    leftBottom: '0 682 512 1024',
    rightBottom: '512 682 512 1024',
  },
}

export const SVGS_HASH: SvgHashType = {
  2: ['leftTop', 'rightTop'],
  4: ['leftTop', 'rightTop', 'leftBottom', 'rightBottom'],
  6: [
    'leftTop',
    'rightTop',
    'leftMiddle',
    'rightMiddle',
    'leftBottom',
    'rightBottom',
  ],
}

const useGetCards = (count: number) => {
  const getCards = (): CardType[] => {
    const [Svg] = getRandomSvgs(1)
    return shuffle(
      getEmptyArray(count).map((_, index) => {
        const keyImage = SVGS_HASH[count][index]
        return {
          img: (
            <SvgWrapper>
              <Svg customViewBox={VIEWBOX_CONF[count][keyImage]} />
            </SvgWrapper>
          ),
          keyImage,
        }
      })
    )
  }

  const cards: CardType[] = useMemo(getCards, [count])

  return { cards }
}

export default useGetCards
