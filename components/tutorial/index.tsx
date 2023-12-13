import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'

import Bubble from '@components/bubble'
import { useTutorial, TutorialConfigType } from '@hooks/useTutorial'
import Button, { ButtonSizesEnum } from '@components/button'
import Blob from '@components/svg/blob/blob'
import Reference from '@components/reference'
import { IMAGES_REFERENCE } from '@constants/character-conf'
import publicImages from '@constants/public-images'

import { OffsetType } from '@components/route-wrapper'
import * as S from './styled'
import UserSettingsContext from '@contexts/user-settings-context'
import { CHARACTERS_CONFIG } from '@constants/shop'
import CharacterPart from './character-part'
import BubblePart from './bubble-part'

const config: TutorialConfigType = [
    {
        text: 'Ahoj, vítej v aplikaci Logoušek.',
        sound: '',
        confirm: false,
        waitMilis: 4000,
    },
    {
        text: 'Nejdříve tě seznámím s tutorialem',
        sound: '',
        confirm: false,
        waitMilis: 4000,
    },
    {
        text: 'Pokud chceš v tutorialu zobrazit dalsi napovedu, klikni na zelené tlačítko. Pojdme si to vyzkoušet',
        sound: '',
        confirm: true,
    },
    {
        text: 'Pro zavření tutorialu stačí kliknout na červené tlačítko. Na to zatím neklikej',
        sound: '',
        confirm: false,
        waitMilis: 5000,
    },
    {
        text: 'Pro hraní hry, klikni na tlačítko hrát. Je označené žlutou barvou.',
        sound: '',
        higlighttedIds: [
            'navbarPlayButton',
            'mainPlayButton',
            'secondaryPlayButton',
        ],
        confirm: false,
    },
]

type TutorialProps = {
    mobileOffset?: OffsetType
    desktopOffset?: OffsetType
}

const Tutorial: React.FC<TutorialProps> = ({
    mobileOffset = 'none',
    desktopOffset = 'none',
}) => {
    const { text, runTutorial, isTutorialOpened, reset, next, canBeConfirmed } =
        useTutorial(config)

    const startTutorial = () => {
        runTutorial()
    }

    return (
        <S.TutorialWrapper
            isTutorialOpened={isTutorialOpened}
            mobileOffset={mobileOffset}
            desktopOffset={desktopOffset}
        >
            <S.TutorialContainer>
                <CharacterPart
                    startTutorial={startTutorial}
                    isTutorialOpened={isTutorialOpened}
                />
                {text ? (
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
