import styled from 'styled-components'

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`

export const NamedImage: React.FC<{ src: string; name: string }> = ({
  src,
  name,
}) => <CardImage src={src} alt={`card-image-${name}`} />

const path = '/static'
const animalPath = `${path}/audio-pictures/animals`
const normalPath = `${path}/audio-pictures`
const serialityPath = `${path}/seriality-svgs`

export const animalsSrcs = {
  cat: `${animalPath}/cat.png`,
  chicken: `${animalPath}/chicken.png`,
  cow: `${animalPath}/cow.png`,
  dog: `${animalPath}/dog.png`,
  elephand: `${animalPath}/elephand.png`,
  fly: `${animalPath}/fly.png`,
  goat: `${animalPath}/goat.png`,
  horse: `${animalPath}/horse.png`,
  sheep: `${animalPath}/sheep.png`,
  snake: `${animalPath}/snake.png`,
  elephant: `${animalPath}/elephant.png`,
  earthworm: `${animalPath}/earthworm.png`,
}

export const normalSrcs = {
  crumpledPaper: `${normalPath}/crumpled-paper.svg`,
  doorKnocking: `${normalPath}/door-knocking.svg`,
  dripingFaucet: `${normalPath}/driping-faucet.svg`,
  flowingFaceut: `${normalPath}/flowing-faceut.svg`,
  nailHammering: `${normalPath}/nail-hammering.svg`,
  paperCut: `${normalPath}/paper-cut.svg`,
  ringingPhone: `${normalPath}/ringing-phone.svg`,
  river: `${normalPath}/river.svg`,
  storm: `${normalPath}/storm.svg`,
  wind: `${normalPath}/wind.svg`,
}

export const serialitySrcs = {
  banana: `${serialityPath}/banana/banana-1.svg`,
  banana2: `${serialityPath}/banana/banana-2.svg`,
  banana3: `${serialityPath}/banana/banana-3.svg`,

  paper: `${serialityPath}/paper/paper-1.svg`,
  paper2: `${serialityPath}/paper/paper-2.svg`,
  paper3: `${serialityPath}/paper/paper-3.svg`,

  vase: `${serialityPath}/vase/vase-1.svg`,
  vase2: `${serialityPath}/vase/vase-2.svg`,
  vase3: `${serialityPath}/vase/vase-3.svg`,

  snowman: `${serialityPath}/snowman/snowman-1.svg`,
  snowman2: `${serialityPath}/snowman/snowman-2.svg`,
  snowman3: `${serialityPath}/snowman/snowman-3.svg`,

  banknote: `${serialityPath}/banknote/banknote-1.svg`,
  banknote2: `${serialityPath}/banknote/banknote-2.svg`,
  banknote3: `${serialityPath}/banknote/banknote-3.svg`,

  plate: `${serialityPath}/plate/plate-1.svg`,
  plate2: `${serialityPath}/plate/plate-2.svg`,
  plate3: `${serialityPath}/plate/plate-3.svg`,
}

export const wordDifferentiationSrcs = {
  archery: `${normalPath}/word-diff/archery.png`,
  hourglass: `${normalPath}/word-diff/hourglass.png`,
  pouring: `${normalPath}/word-diff/pouring.png`,
  roseHip: `${normalPath}/word-diff/rose-hip.png`,
  zipperTool: `${normalPath}/word-diff/zipper-tool.png`,
  spring: `${normalPath}/word-diff/spring.png`,
  woman: `${normalPath}/word-diff/woman.png`,
  groupOfMen: `${normalPath}/word-diff/group-of-men.png`,
  grass: `${normalPath}/word-diff/grass.png`,
  cow: `${normalPath}/word-diff/cow.png`,
  pencil: `${normalPath}/word-diff/pencil.png`,
  sniper: `${normalPath}/word-diff/sniper.png`,
  chalks: `${normalPath}/word-diff/chalks.png`,
  training: `${normalPath}/word-diff/training.png`,
  honey: `${normalPath}/word-diff/honey.png`,
  iceCube: `${normalPath}/word-diff/ice-cube.png`,
  vase: `${normalPath}/word-diff/vase.png`,
  scales: `${normalPath}/word-diff/scales.jpg`,
  bowl: `${normalPath}/word-diff/bowl.png`,
  mouse: `${normalPath}/word-diff/mouse.png`,
}

export const syllablesSrcs = {
  apple: `${normalPath}/syllables/apple.jpg`,
  cow: `${normalPath}/syllables/cow.jpg`,
  goat: `${normalPath}/syllables/goat.jpg`,
  grandmother: `${normalPath}/syllables/grandmother.jpg`,
  horse: `${normalPath}/syllables/horse.jpg`,
  rabbit: `${normalPath}/syllables/rabbit.jpg`,
  roller: `${normalPath}/syllables/roller.jpg`,
}
