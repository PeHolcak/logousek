import Flower from '../components/svg/templates/flower'
import Lolipop from '../components/svg/templates/lolipop'
import Logousek from '../components/svg/templates/logousek'
import Bear from '../components/svg/templates/bear'
import Cloud from '../components/svg/templates/cloud'
import Sun from '../components/svg/templates/sun'
import Ladybug from '../components/svg/templates/ladybug'
import Car from '../components/svg/templates/car'
import Lego from '../components/svg/templates/lego'
import { getRandomElementFromList } from './array-helper'

const svgList = [
  {
    name: 'flower',
    component: Flower,
    hideSettings: [
      'hideFirstLeaf',
      'hideSecondLeaf',
      'hideThirdLeaf',
      'hideFourthLeaf',
      'hideFithLeaf',
      'hideSixthLeaf',
      'hideSeventhLeaf',
      'hideEightLeaf'
    ],
    hideDetailsSettings: ['scaleFlower']
  },
  {
    name: 'lolipop',
    component: Lolipop,
    hideSettings: ['hideProtrusion'],
    hideDetailsSettings: []
  },
  {
    name: 'logousek',
    component: Logousek,
    hideSettings: [],
    hideDetailsSettings: []
  },
  {
    name: 'bear',
    component: Bear,
    hideSettings: ['hideLeftFoot', 'hideRightFoot'],
    hideDetailsSettings: ['hideRightEarFilling', 'hideLeftEarFilling']
  },
  {
    name: 'cloud',
    component: Cloud,
    hideSettings: ['changeColor', 'twoColorPicture'],
    hideDetailsSettings: []
  },
  {
    name: 'sun',
    component: Sun,
    hideSettings: [
      'hideFirstFlash',
      'hideSecondFlash',
      'hideThirdFlash',
      'hideFourthFlash',
      'hideFithFlash',
      'hideSixthFlash',
      'hideSeventhFlash',
      'hideEightFlash',
      "rotate"
    ],
    hideDetailsSettings: []
  },
  {
    name: 'ladybug',
    component: Ladybug,
    hideSettings: [
      'hideFirstDot',
      'hideSecondDot',
      'hideThirdDot',
      'hideFourthDot',
      'hideFifthDot',
      'hideSixthDot',
      'hideSeventhDot',
      'hideEighthDot'
    ],
    hideDetailsSettings: ['hideLeftFeeler', 'hideRightFeeler']
  },
  {
    name: 'car',
    component: Car,
    hideSettings: ['hideDoor', 'changeDoorColor'],
    hideDetailsSettings: ['hideFirstHandle', 'hideSecondHandle']
  },
  {
    name: 'lego',
    component: Lego,
    hideSettings: []
  }
]

// export const getSvgHideSettingsFromName = (name, useDetailConfig) => {
//   return [...((useDetailConfig ? hideDetailsSettings : hideSettings)[name.toLowerCase()] || [])];
// };

export const getRandomSvgs = (count, usedPictures) => {
  const usedSvgList = [
    ...(usedPictures ? getUsedPicturesConf(usedPictures) : svgList)
  ]
  return getRandomElementFromList(usedSvgList, count).map(
    (elementConf) => elementConf.component
  )
}

export const getRandomSvgsWithChangeConfig = (count, usedPictures) => {
  const usedSvgList = [
    ...(usedPictures ? getUsedPicturesConf(usedPictures) : svgList)
  ]
  return getRandomElementFromList(usedSvgList, count)
}

const getUsedPicturesConf = (usedPictures) => {
  return svgList.filter((svg) => usedPictures.includes(svg.name))
}

export const getHideConfig = (elementsToHideList = []) => {
  const elementsToHideObject = elementsToHideList.reduce((result, element) => {
    result[element] = false
    return result
  }, {})
  elementsToHideObject[getRandomElementFromList(elementsToHideList, 1)] = true
  return elementsToHideObject
}
