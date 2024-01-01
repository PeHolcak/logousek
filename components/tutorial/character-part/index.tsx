import React, { useContext, useMemo } from 'react'
import { ThemeContext } from 'styled-components'

import Blob from '@components/svg/blob/blob'
import Reference from '@components/reference'
import { IMAGES_REFERENCE } from '@constants/character-conf'
import publicImages from '@constants/public-images'

import * as S from './styled'
import UserSettingsContext from '@contexts/user-settings-context'
import { CHARACTERS_CONFIG } from '@constants/shop'


type CharacterPartProps = {
    isTutorialOpened: boolean
    startTutorial: () => void
}

const CharacterPart: React.FC<CharacterPartProps> = ({
    isTutorialOpened,
    startTutorial
}) => {
    const themeContext = useContext(ThemeContext)
    const userSettingsContext = useContext(UserSettingsContext)


    const DEFAULT_AURA = useMemo(() => themeContext.colors.lightGreen, [themeContext.colors.lightGreen])
    const DEFAULT_CHARACTER = useMemo(() => publicImages.characters.beaver, [])

    const characterImgSrc = useMemo(() => {
        const foundCharacter = CHARACTERS_CONFIG.find(character => userSettingsContext?.character === character.name)
        return foundCharacter?.imageSrc ?? DEFAULT_CHARACTER
    }, [DEFAULT_CHARACTER, userSettingsContext?.character])

    const aura = useMemo(() => userSettingsContext?.aura ?? DEFAULT_AURA, [DEFAULT_AURA, userSettingsContext?.aura])

    return (
        <Blob
            color={aura}
            isBlobShowed={true}
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
    )
}

export default CharacterPart
