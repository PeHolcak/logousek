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
import { animalImagesConf, animalImages } from '@constants/image-confs/animal-conf'



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
    { name: 'crumpledPaper', svg: NormalImages.crumpledPaper, },
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
            incorrect: getIncorectItems('sheep', animalImagesConf),
            correct: {
                name: 'sheep',
                svg: animalImages.sheep,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
            sound: sheep,
        },
        {
            name: 'snake',
            incorrect: getIncorectItems('snake', animalImagesConf),
            correct: {
                name: 'snake',
                svg: animalImages.snake,
                reference: <><a href="https://www.freepik.com/free-vector/snakes-wild-tropical-serpents-isolated-white_13778464.htm#query=snake&position=11&from_view=search&track=sph">Image by upklyak</a> on Freepik</>
            },
            sound: snake,
        },
        {
            name: 'horse',
            incorrect: getIncorectItems('horse', animalImagesConf),
            correct: {
                name: 'horse',
                svg: animalImages.horse,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
            sound: horse,
        },
        {
            name: 'goat',
            incorrect: getIncorectItems('goat', animalImagesConf),
            correct: {
                name: 'goat',
                svg: animalImages.goat,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
            sound: goat,
        },
        {
            name: 'fly',
            incorrect: getIncorectItems('fly', animalImagesConf),
            correct: {
                name: 'fly',
                svg: animalImages.fly,
                reference: <><a href="https://www.freepik.com/free-vector/design-with-seamless-pattern-housefly_7033958.htm#query=fly&position=18&from_view=search&track=sph">Image by brgfx</a> on Freepik</>
            },
            sound: fly,
        },
        {
            name: 'elephant',
            incorrect: getIncorectItems('elephant', animalImagesConf),
            correct: {
                name: 'elephant',
                svg: animalImages.elephant,
                reference: <><a href="https://www.freepik.com/free-vector/cute-baby-elephant-butterfly-outline-drawing-color_7038521.htm#query=elephant&position=5&from_view=search&track=sph">Image by user2104819</a> on Freepik</>
            },
            sound: elephant,
        },
        {
            name: 'dog',
            incorrect: getIncorectItems('dog', animalImagesConf),
            correct: {
                name: 'dog',
                svg: animalImages.dog,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
            sound: dog,
        },
        {
            name: 'cow',
            incorrect: getIncorectItems('cow', animalImagesConf),
            correct: {
                name: 'cow',
                svg: animalImages.cow,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
            sound: cow,
        },
        {
            name: 'chicken',
            incorrect: getIncorectItems('chicken', animalImagesConf),
            correct: {
                name: 'chicken',
                svg: animalImages.chicken,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
            sound: chicken,
        },
        {
            name: 'cat',
            incorrect: getIncorectItems('cat', animalImagesConf),
            correct: {
                name: 'cat',
                svg: animalImages.cat,
                reference: <><a href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">Image by macrovector</a> on Freepik</>
            },
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

export default getSoundConf
