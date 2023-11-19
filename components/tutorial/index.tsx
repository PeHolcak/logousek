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
    const themeContext = useContext(ThemeContext)
    const userSettingsContext = useContext(UserSettingsContext)

    const startTutorial = () => {
        runTutorial()
    }

    const DEFAULT_AURA = useMemo(() => themeContext.colors.lightGreen, [themeContext.colors.lightGreen])
    const DEFAULT_CHARACTER = useMemo(() => publicImages.characters.beaver, [])

    const characterImgSrc = useMemo(() => {
        const foundCharacter = CHARACTERS_CONFIG.find(character => userSettingsContext?.character === character.name)
        return foundCharacter?.imageSrc ?? DEFAULT_CHARACTER
    }, [DEFAULT_CHARACTER, userSettingsContext?.character])

    const aura = useMemo(() => userSettingsContext?.aura ?? DEFAULT_AURA, [DEFAULT_AURA, userSettingsContext?.aura])

    return (
        <S.TutorialWrapper
            isTutorialOpened={isTutorialOpened}
            mobileOffset={mobileOffset}
            desktopOffset={desktopOffset}
        >
            <S.TutorialContainer>
                <Blob
                    color={aura}
                    isBlobShowed={isTutorialOpened}
                    name="TutorialBlob"
                >
                    <S.BlobContainer isTutorialOpened={isTutorialOpened}>
                        <S.CharacterWrapper
                            onMouseDown={startTutorial}
                            isTutorialOpened={isTutorialOpened}
                        >
                            <S.CharacterImage src={characterImgSrc} />
                            {isTutorialOpened ? (
                                <Reference reference={IMAGES_REFERENCE} />
                            ) : null}
                        </S.CharacterWrapper>
                    </S.BlobContainer>
                </Blob>
                {text ? (
                    <S.BubbleWrapper>
                        <Bubble hideBeak leftSide desc={text} fillWidth={true} />
                        <S.ButtonRow>
                            {canBeConfirmed ? (
                                <Button
                                    backgroundColor={themeContext.colors.darkGreen}
                                    color={themeContext.colors.white}
                                    size={ButtonSizesEnum.xs}
                                    onClick={next}
                                >
                                    Další
                                </Button>
                            ) : null}
                            <Button
                                backgroundColor={themeContext.colors.red}
                                color={themeContext.colors.white}
                                size={ButtonSizesEnum.xs}
                                onClick={reset}
                            >
                                Zavřít
                            </Button>
                        </S.ButtonRow>
                    </S.BubbleWrapper>
                ) : null}
            </S.TutorialContainer>
        </S.TutorialWrapper>
    )
}

export default Tutorial
