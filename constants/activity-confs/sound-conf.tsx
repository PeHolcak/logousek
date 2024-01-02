import {
  sheep,
  snake,
  horse,
  goat,
  fly,
  elephant,
  dog,
  cow,
  chicken,
  cat,
  wind,
  storm,
  river,
  ringingPhone,
  nailHammering,
  flowingFaceut,
  dripingFaucet,
  doorKnocking,
  paperCut,
  crumpledPaper,
} from 'constants/activity-confs/sounds'
import { AudioDiffConfType } from '@helpers/sound-helper'
import { NamedImage, normalSrcs } from '@helpers/image-helper'
import { getIncorectItems } from '@helpers/array-helper'
import {
  animalImagesConf,
  animalImages,
} from '@constants/image-confs/animal-conf'

const NormalImages = {
  crumpledPaper: (
    <NamedImage src={normalSrcs.crumpledPaper} name="crumpled-paper" />
  ),
  doorKnocking: (
    <NamedImage src={normalSrcs.doorKnocking} name="doorKnocking" />
  ),
  dripingFaucet: (
    <NamedImage src={normalSrcs.dripingFaucet} name="dripingFaucet" />
  ),
  flowingFaceut: (
    <NamedImage src={normalSrcs.flowingFaceut} name="flowingFaceut" />
  ),
  nailHammering: (
    <NamedImage src={normalSrcs.nailHammering} name="nailHammering" />
  ),
  paperCut: <NamedImage src={normalSrcs.paperCut} name="paperCut" />,
  ringingPhone: (
    <NamedImage src={normalSrcs.ringingPhone} name="ringingPhone" />
  ),
  river: <NamedImage src={normalSrcs.river} name="river" />,
  storm: <NamedImage src={normalSrcs.storm} name="storm" />,
  wind: <NamedImage src={normalSrcs.wind} name="wind" />,
}

const secondLevelImages = [
  { name: 'crumpledPaper', svg: NormalImages.crumpledPaper },
  { name: 'doorKnocking', svg: NormalImages.doorKnocking },
  { name: 'dripingFaucet', svg: NormalImages.dripingFaucet },
  { name: 'flowingFaceut', svg: NormalImages.flowingFaceut },
  { name: 'nailHammering', svg: NormalImages.nailHammering },
]

const thirdLevelImages = [
  { name: 'paperCut', svg: NormalImages.paperCut },
  { name: 'ringingPhone', svg: NormalImages.ringingPhone },
  { name: 'river', svg: NormalImages.river },
  { name: 'storm', svg: NormalImages.storm },
  { name: 'wind', svg: NormalImages.wind },
]

const getSoundConf = (): AudioDiffConfType => ({
  '1': [
    {
      name: 'sheep',
      incorrect: getIncorectItems(
        'sheep',
        Object.values(Object.values(animalImagesConf))
      ),
      correct: animalImagesConf.sheep,
      sound: sheep,
      soundReference:
        'innov8ting. Sheep_Lambs_Rhos_Wales_7pm_April_2.wav. Online. In: Freesound. 2022. Dostupné z: https://freesound.org/people/innov8ting/sounds/627859/. Available under Creative Commons 0 License. [cit. 2024-01-01]. ',
    },
    {
      name: 'snake',
      incorrect: getIncorectItems('snake', Object.values(animalImagesConf)),
      correct: animalImagesConf.snake,
      sound: snake,
      soundReference:
        'florianreichelt. Snarling Snake. Online. In: Freesound. 2018. Dostupné z: https://freesound.org/people/florianreichelt/sounds/423454/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'horse',
      incorrect: getIncorectItems('horse', Object.values(animalImagesConf)),
      correct: animalImagesConf.horse,
      sound: horse,
      soundReference:
        'UEPCOMANAM2011. Cavall.mp3. Online. In: Freesound. 2017. Dostupné z: https://freesound.org/people/UEPCOMANAM2011/sounds/394831. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'goat',
      incorrect: getIncorectItems('goat', Object.values(animalImagesConf)),
      correct: animalImagesConf.goat,
      sound: goat,
      soundReference:
        'satoristudios3. Nigerian Dwarf Buck Goat. Online. In: Freesound. 2023. Dostupné z: https://freesound.org/people/satoristudios3/sounds/677220/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'fly',
      incorrect: getIncorectItems('fly', Object.values(animalImagesConf)),
      correct: animalImagesConf.fly,
      sound: fly,
      soundReference:
        'Benboncan. Fly 1.wav. Online. In: Freesound. 2009. Dostupné z: https://freesound.org/people/Benboncan/sounds/82077/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'elephant',
      incorrect: getIncorectItems('elephant', Object.values(animalImagesConf)),
      correct: animalImagesConf.elephant,
      sound: elephant,
      soundReference:
        'D.jones. Elephant Trumpets Growls.flac. Online. In: Freesound. 2020. Dostupné z: https://freesound.org/people/D.jones/sounds/527845/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'dog',
      incorrect: getIncorectItems('dog', Object.values(animalImagesConf)),
      correct: animalImagesConf.dog,
      sound: dog,
      soundReference:
        'Jace. Dog Barking. Online. In: Freesound. 2012. Dostupné z: https://freesound.org/people/Jace/sounds/155312/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'cow',
      incorrect: getIncorectItems('cow', Object.values(animalImagesConf)),
      correct: animalImagesConf.cow,
      sound: cow,
      soundReference:
        ' spurioustransients. Cow moo #8. Online. In: Freesound. 2020. Dostupné z: https://freesound.org/people/spurioustransients/sounds/513565/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'chicken',
      incorrect: getIncorectItems('chicken', Object.values(animalImagesConf)),
      correct: animalImagesConf.chicken,
      sound: chicken,
      soundReference:
        'tom_woysky. Polish hen cackling.wav. Online. In: Freesound. 2014. Dostupné z: https://freesound.org/people/tom_woysky/sounds/232495/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'cat',
      incorrect: getIncorectItems('cat', Object.values(animalImagesConf)),
      correct: animalImagesConf.cat,
      sound: cat,
      soundReference:
        'nekoninja. Cat meowing. Online. In: Freesound. 2017. Dostupné z: https://freesound.org/people/nekoninja/sounds/414042/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
  ],
  '2': [
    {
      name: 'crumpledPaper',
      incorrect: getIncorectItems('crumpledPaper', secondLevelImages),
      correct: {
        name: 'crumpledPaper',
        svg: NormalImages.crumpledPaper,
      },
      sound: crumpledPaper,
      soundReference:
        '12beesinatrenchcoat. Paper crumpling.wav. Online. In: Freesound. 2022. Dostupné z: https://freesound.org/people/12beesinatrenchcoat/sounds/653952/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'doorKnocking',
      incorrect: getIncorectItems('doorKnocking', secondLevelImages),
      correct: {
        name: 'doorKnocking',
        svg: NormalImages.doorKnocking,
      },
      sound: doorKnocking,
      soundReference:
        'SubwaySandwitch420. Door knock. Online. In: Freesound. 2020. Dostupné z: https://freesound.org/people/SubwaySandwitch420/sounds/540770/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'dripingFaucet',
      incorrect: getIncorectItems('dripingFaucet', secondLevelImages),
      correct: {
        name: 'dripingFaucet',
        svg: NormalImages.dripingFaucet,
      },
      sound: dripingFaucet,
      soundReference:
        'BeeProductive. Dripping tap.wav. Online. In: Freesound. 2017. Dostupné z: https://freesound.org/people/BeeProductive/sounds/381650/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'flowingFaceut',
      incorrect: getIncorectItems('flowingFaceut', secondLevelImages),
      correct: {
        name: 'flowingFaceut',
        svg: NormalImages.flowingFaceut,
      },
      sound: flowingFaceut,
      soundReference:
        'OwlStorm. Tap Water 1. In: Freesound [online]. 2013. Dostupné z: https://freesound.org/people/OwlStorm/sounds/212177/. Available under Creative Commons 0 License. [cit. 2024-01-01]',
    },
    {
      name: 'nailHammering',
      incorrect: getIncorectItems('nailHammering', secondLevelImages),
      correct: {
        name: 'nailHammering',
        svg: NormalImages.nailHammering,
      },
      sound: nailHammering,
      soundReference:
        'deleted_user_7146007. Construction Sounds Hammering a Nail. Online. In: Freesound. 2017. Dostupné z: https://freesound.org/people/deleted_user_7146007/sounds/383726/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
  ],
  '3': [
    {
      name: 'paperCut',
      incorrect: getIncorectItems('paperCut', thirdLevelImages),
      correct: {
        name: 'paperCut',
        svg: NormalImages.paperCut,
      },
      sound: paperCut,
      soundReference:
        'Jagadamba. Sound of scissors cutting paper. Online. In: Freesound. 2014. Dostupné z: https://freesound.org/people/Jagadamba/sounds/257032/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'ringingPhone',
      incorrect: getIncorectItems('ringingPhone', thirdLevelImages),
      correct: {
        name: 'ringingPhone',
        svg: NormalImages.ringingPhone,
      },
      sound: ringingPhone,
      soundReference:
        'BennettFilmTeacher. Old Phone Ringing. Online. In: Freesound. 2021. Dostupné z: https://freesound.org/people/BennettFilmTeacher/sounds/610191/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'river',
      incorrect: getIncorectItems('river', thirdLevelImages),
      correct: {
        name: 'river',
        svg: NormalImages.river,
      },
      sound: river,
      soundReference:
        'Tom_Kaszuba. River flowing. Online. In: Freesound. 2022. Dostupné z: https://freesound.org/people/Tom_Kaszuba/sounds/660265/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'storm',
      incorrect: getIncorectItems('storm', thirdLevelImages),
      correct: {
        name: 'storm',
        svg: NormalImages.storm,
      },
      sound: storm,
      soundReference:
        'Soojay. Distant storm 2.WAV. Online. In: Freesound. 2015. Dostupné z: https://freesound.org/people/Soojay/sounds/319567/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
    {
      name: 'wind',
      incorrect: getIncorectItems('wind', thirdLevelImages),
      correct: {
        name: 'wind',
        svg: NormalImages.wind,
      },
      sound: wind,
      soundReference:
        'craigsmith. R03-03-Cold Wind on Ship.wav. Online. In: Freesound. 2019. Dostupné z: https://freesound.org/people/craigsmith/sounds/481139/. Available under Creative Commons 0 License. [cit. 2024-01-01].',
    },
  ],
})

export default getSoundConf
