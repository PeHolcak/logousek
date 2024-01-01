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
import { animalImagesConf } from '@constants/image-confs/animal-conf'



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

const getAudioMemoryConf = (): AudioDiffConfType => ({
    '1': [
        {
            name: 'sheep',
            incorrect: getIncorectItems('sheep', Object.values(animalImagesConf)),
            correct: animalImagesConf.sheep,
            sound: sheep,
        },
        {
            name: 'snake',
            incorrect: getIncorectItems('snake', Object.values(animalImagesConf)),
            correct: animalImagesConf.snake,
            sound: snake,
        },
        {
            name: 'horse',
            incorrect: getIncorectItems('horse', Object.values(animalImagesConf)),
            correct: animalImagesConf.horse,
            sound: horse,
        },
        {
            name: 'goat',
            incorrect: getIncorectItems('goat', Object.values(animalImagesConf)),
            correct: animalImagesConf.goat,
            sound: goat,
        },
        {
            name: 'fly',
            incorrect: getIncorectItems('fly', Object.values(animalImagesConf)),
            correct: animalImagesConf.fly,
            sound: fly,
        },
        {
            name: 'elephant',
            incorrect: getIncorectItems('elephant', Object.values(animalImagesConf)),
            correct: animalImagesConf.elephant,
            sound: elephant,
        },
        {
            name: 'dog',
            incorrect: getIncorectItems('dog', Object.values(animalImagesConf)),
            correct: animalImagesConf.dog,
            sound: dog,
        },
        {
            name: 'cow',
            incorrect: getIncorectItems('cow', Object.values(animalImagesConf)),
            correct: animalImagesConf.cow,
            sound: cow,
        },
        {
            name: 'chicken',
            incorrect: getIncorectItems('chicken', Object.values(animalImagesConf)),
            correct: animalImagesConf.chicken,
            sound: chicken,
        },
        {
            name: 'cat',
            incorrect: getIncorectItems('cat', Object.values(animalImagesConf)),
            correct: animalImagesConf.cat,
            sound: cat,
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
        },
        {
            name: 'doorKnocking',
            incorrect: getIncorectItems('doorKnocking', secondLevelImages),
            correct: {
                name: 'doorKnocking',
                svg: NormalImages.doorKnocking,
            },
            sound: doorKnocking,
        },
        {
            name: 'dripingFaucet',
            incorrect: getIncorectItems('dripingFaucet', secondLevelImages),
            correct: {
                name: 'dripingFaucet',
                svg: NormalImages.dripingFaucet,
            },
            sound: dripingFaucet,
        },
        {
            name: 'flowingFaceut',
            incorrect: getIncorectItems('flowingFaceut', secondLevelImages),
            correct: {
                name: 'flowingFaceut',
                svg: NormalImages.flowingFaceut,
            },
            sound: flowingFaceut,
        },
        {
            name: 'nailHammering',
            incorrect: getIncorectItems('nailHammering', secondLevelImages),
            correct: {
                name: 'nailHammering',
                svg: NormalImages.nailHammering,
            },
            sound: nailHammering,
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
        },
        {
            name: 'ringingPhone',
            incorrect: getIncorectItems('ringingPhone', thirdLevelImages),
            correct: {
                name: 'ringingPhone',
                svg: NormalImages.ringingPhone,
            },
            sound: ringingPhone,
        },
        {
            name: 'river',
            incorrect: getIncorectItems('river', thirdLevelImages),
            correct: {
                name: 'river',
                svg: NormalImages.river,
            },
            sound: river,
        },
        {
            name: 'storm',
            incorrect: getIncorectItems('storm', thirdLevelImages),
            correct: {
                name: 'storm',
                svg: NormalImages.storm,
            },
            sound: storm,
        },
        {
            name: 'wind',
            incorrect: getIncorectItems('wind', thirdLevelImages),
            correct: {
                name: 'wind',
                svg: NormalImages.wind,
            },
            sound: wind,
        },
    ],
})

export default getAudioMemoryConf
