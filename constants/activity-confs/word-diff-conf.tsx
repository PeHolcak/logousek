import { AudioDiffConfType } from '@helpers/sound-helper'
import { NamedImage, wordDifferentiationSrcs } from '@helpers/image-helper'
import {
  archery,
  hourglass,
  pouring,
  roseHip,
  spring,
  zipperTool,
  woman,
  groupOfMen,
  grass,
  cow,
  pencil,
  sniper,
  chalks,
  training,
  honey,
  iceCube,
  scales,
  vase,
  mouse,
  bowl,
} from './sounds'

const Images = {
  archery: <NamedImage src={wordDifferentiationSrcs.archery} name="archery" />,
  hourglass: (
    <NamedImage src={wordDifferentiationSrcs.hourglass} name="hourglass" />
  ),
  pouring: <NamedImage src={wordDifferentiationSrcs.pouring} name="pouring" />,
  roseHip: <NamedImage src={wordDifferentiationSrcs.roseHip} name="roseHip" />,
  spring: <NamedImage src={wordDifferentiationSrcs.spring} name="spring" />,
  zipperTool: (
    <NamedImage src={wordDifferentiationSrcs.zipperTool} name="zipperTool" />
  ),
  woman: <NamedImage src={wordDifferentiationSrcs.woman} name="woman" />,
  groupOfMen: (
    <NamedImage src={wordDifferentiationSrcs.groupOfMen} name="groupOfMen" />
  ),
  grass: <NamedImage src={wordDifferentiationSrcs.grass} name="grass" />,
  cow: <NamedImage src={wordDifferentiationSrcs.cow} name="cow" />,
  pencil: <NamedImage src={wordDifferentiationSrcs.pencil} name="spring" />,
  sniper: <NamedImage src={wordDifferentiationSrcs.sniper} name="sniper" />,
  chalks: <NamedImage src={wordDifferentiationSrcs.chalks} name="chalks" />,
  training: (
    <NamedImage src={wordDifferentiationSrcs.training} name="training" />
  ),
  honey: <NamedImage src={wordDifferentiationSrcs.honey} name="honey" />,
  iceCube: <NamedImage src={wordDifferentiationSrcs.iceCube} name="iceCube" />,
  vase: <NamedImage src={wordDifferentiationSrcs.vase} name="vase" />,
  scales: <NamedImage src={wordDifferentiationSrcs.scales} name="scales" />,
  bowl: <NamedImage src={wordDifferentiationSrcs.bowl} name="bowl" />,
  mouse: <NamedImage src={wordDifferentiationSrcs.mouse} name="mouse" />,
}

const wordDiffConf = {
  training: {
    name: 'training',
    svg: Images.training,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/conference_7185806#fromView=keyword&term=Presentation&page=1&position=69&uuid=7022f7fe-aaa0-4978-93da-54a37f450ff7"
        >
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },
  chalks: {
    name: 'chalks',
    svg: Images.chalks,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/chalks_4100269">
          Image by iconixar
        </a>{' '}
        on Freepik
      </>
    ),
  },

  iceCube: {
    name: 'iceCube',
    svg: Images.iceCube,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/ice-cube_2458102"
        >
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },
  honey: {
    name: 'honey',
    svg: Images.honey,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/honey_3274277#fromView=resource_detail&position=2"
        >
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },
  archery: {
    name: 'archery',
    svg: Images.archery,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/free-vector/crossed-arrows-vector-illustration-medieval-weapon-war-battle-accessory_11235613.htm#query=archer%20weapon&position=3&from_view=keyword&track=ais&uuid=a069751f-6c26-4fe8-8cea-c12ad37d8a3c"
        >
          Image by pch.vector
        </a>{' '}
        on Freepik
      </>
    ),
  },
  bowl: {
    name: 'bowl',
    svg: Images.bowl,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/noodles_216365">
          Image by Trinh Ho
        </a>{' '}
        on Freepik
      </>
    ),
  },

  cow: {
    name: 'cow',
    svg: Images.cow,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/cow_2395796">
          Image by surang
        </a>{' '}
        on Freepik
      </>
    ),
  },
  grass: {
    name: 'grass',
    svg: Images.grass,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/plant_704809">
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },
  groupOfMen: {
    name: 'groupOfMen',
    svg: Images.groupOfMen,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/teamwork_2583237#fromView=search&term=group-of-men&track=ais&page=1&position=0&uuid=4f4e0fb1-b87d-4f04-9bab-bc8f568e9930"
        >
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },
  hourglass: {
    name: 'hourglass',
    svg: Images.hourglass,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/hourglass_3073484#fromView=resource_detail&position=28"
        >
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },

  mouse: {
    name: 'mouse',
    svg: Images.mouse,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/mouse_1682033">
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },
  pencil: {
    name: 'pencil',
    svg: Images.pencil,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/free-vector/illustration-pen-icon_2606110.htm"
        >
          Image by rawpixel.com
        </a>{' '}
        on Freepik
      </>
    ),
  },
  pouring: {
    name: 'pouring',
    svg: Images.pouring,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/pouring_7923244#fromView=resource_detail&position=6"
        >
          Image by Freepik
        </a>{' '}
        on Freepik
      </>
    ),
  },

  roseHip: {
    name: 'roseHip',
    svg: Images.roseHip,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/rose-hip_5402444#fromView=resource_detail&position=3"
        >
          Image by popo2021
        </a>{' '}
        on Freepik
      </>
    ),
  },
  scales: {
    name: 'scales',
    svg: Images.scales,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/free-vector/vintage-scale-design_1029758.htm"
        >
          Image by macrovector
        </a>{' '}
        on Freepik
      </>
    ),
  },
  sniper: {
    name: 'sniper',
    svg: Images.sniper,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/sniper_7068285">
          Image by Fathema Khanom
        </a>{' '}
        on Freepik
      </>
    ),
  },

  spring: {
    name: 'spring',
    svg: Images.spring,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/extension_565505"
        >
          Image by Google
        </a>{' '}
        on Freepik
      </>
    ),
  },
  vase: {
    name: 'vase',
    svg: Images.vase,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/vase_812233">
          Image by Those Icons
        </a>{' '}
        on Freepik
      </>
    ),
  },

  woman: {
    name: 'woman',
    svg: Images.woman,
    reference: (
      <>
        <a rel="noreferrer" href="https://www.freepik.com/icon/woman_949635">
          Image by dDara
        </a>{' '}
        on Freepik
      </>
    ),
  },

  zipperTool: {
    name: 'zipperTool',
    svg: Images.zipperTool,
    reference: (
      <>
        <a
          rel="noreferrer"
          href="https://www.freepik.com/icon/zipper_3461269#fromView=search&term=zipper-tool&track=ais&page=1&position=39&uuid=003deeac-8b2e-414e-9cd4-9bb500e400f1"
        >
          Image by iconixar
        </a>{' '}
        on Freepik
      </>
    ),
  },
}

const getWordDiffConf = (): AudioDiffConfType => ({
  '1': [
    {
      name: 'chalks',
      incorrect: [wordDiffConf.training],
      correct: wordDiffConf.chalks,
      sound: chalks,
    },
    {
      name: 'training',
      incorrect: [wordDiffConf.chalks],
      correct: wordDiffConf.training,
      sound: training,
    },
    {
      name: 'honey',
      incorrect: [wordDiffConf.iceCube],
      correct: wordDiffConf.honey,
      sound: honey,
    },
    {
      name: 'iceCube',
      incorrect: [wordDiffConf.honey],
      correct: wordDiffConf.iceCube,
      sound: iceCube,
    },
    {
      name: 'woman',
      incorrect: [wordDiffConf.groupOfMen],
      correct: wordDiffConf.woman,
      sound: woman,
    },
    {
      name: 'groupOfMen',
      incorrect: [wordDiffConf.woman],
      correct: wordDiffConf.groupOfMen,
      sound: groupOfMen,
    },
    {
      name: 'grass',
      incorrect: [wordDiffConf.cow],
      correct: wordDiffConf.grass,
      sound: grass,
    },
    {
      name: 'cow',
      incorrect: [wordDiffConf.grass],
      correct: wordDiffConf.cow,
      sound: cow,
    },
    {
      name: 'pencil',
      incorrect: [wordDiffConf.sniper],
      correct: wordDiffConf.pencil,
      sound: pencil,
    },
    {
      name: 'sniper',
      incorrect: [wordDiffConf.pencil],
      correct: wordDiffConf.sniper,
      sound: sniper,
    },
    {
      name: 'archery',
      incorrect: [wordDiffConf.roseHip],
      correct: wordDiffConf.archery,
      sound: archery,
    },
    {
      name: 'spring',
      incorrect: [wordDiffConf.hourglass],
      correct: wordDiffConf.spring,
      sound: spring,
    },
    {
      name: 'hourglass',
      incorrect: [wordDiffConf.spring],
      correct: wordDiffConf.hourglass,
      sound: hourglass,
    },
    {
      name: 'pouring',
      incorrect: [wordDiffConf.zipperTool],
      correct: wordDiffConf.pouring,
      sound: pouring,
    },
    {
      name: 'roseHip',
      incorrect: [wordDiffConf.archery],
      correct: wordDiffConf.roseHip,
      sound: roseHip,
    },
    {
      name: 'zipperTool',
      incorrect: [wordDiffConf.pouring],
      correct: wordDiffConf.zipperTool,
      sound: zipperTool,
    },

    {
      name: 'vase',
      incorrect: [wordDiffConf.scales],
      correct: wordDiffConf.vase,
      sound: vase,
    },
    {
      name: 'scales',
      incorrect: [wordDiffConf.vase],
      correct: wordDiffConf.scales,
      sound: scales,
    },
    {
      name: 'mouse',
      incorrect: [wordDiffConf.bowl],
      correct: wordDiffConf.mouse,
      sound: mouse,
    },
    {
      name: 'bowl',
      incorrect: [wordDiffConf.mouse],
      correct: wordDiffConf.bowl,
      sound: bowl,
    },
  ],
})

export default getWordDiffConf
