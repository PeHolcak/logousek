import React from 'react'

import { useTutorial } from '@hooks/useTutorial'

import { OffsetType } from '@components/route-wrapper'
import * as S from './styled'
import CharacterPart from './character-part'
import BubblePart from './bubble-part'

type TutorialProps = {
  mobileOffset?: OffsetType
  desktopOffset?: OffsetType
}

const Tutorial: React.FC<TutorialProps> = ({
  mobileOffset = 'none',
  desktopOffset = 'none',
}) => {
  const {
    text,
    runTutorial,
    isTutorialOpened,
    reset,
    next,
    canBeConfirmed,
    minimize,
  } = useTutorial()

  const startTutorial = () => {
    if (!isTutorialOpened) {
      runTutorial()
    }
  }

  const showTutorial = minimize ? false : isTutorialOpened

  return (
    <S.TutorialWrapper
      isTutorialOpened={showTutorial}
      mobileOffset={mobileOffset}
      desktopOffset={desktopOffset}
    >
      <S.TutorialContainer id="character">
        <CharacterPart
          startTutorial={startTutorial}
          isTutorialOpened={showTutorial}
        />
        {text && !minimize ? (
          <BubblePart
            text={text}
            canBeConfirmed={canBeConfirmed}
            next={next}
            reset={reset}
          />
        ) : null}
      </S.TutorialContainer>
    </S.TutorialWrapper>
  )
}

export default Tutorial
