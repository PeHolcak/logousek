import React, { useContext } from "react"
import { ThemeContext } from 'styled-components'

import Bubble from '@components/bubble'
import { useTutorial, TutorialConfigType } from "@hooks/useTutorial"
import Button, { ButtonSizesEnum } from "@components/button"
import Blob from "@components/svg/blob/blob"
import publicImages from "@constants/public-images"

import * as S from './styled'

const config: TutorialConfigType = [{
    text: "Ahoj, já jsem Logoušek",
    sound: "",
    confirm: true,
    waitMilis: 5000
},
{
    text: "Pro hraní hry, klikni na tlačítko hrát",
    sound: "",
    higlighttedIds: ["navbarPlayButton", "mainPlayButton", "secondaryPlayButton"],
    confirm: true,
    waitMilis: 5000
}]


const Tutorial: React.FC = () => {
    const { text, runTutorial, isTutorialOpened, reset, next } = useTutorial(config)
    const themeContext = useContext(ThemeContext)


    const startTutorial = () => {
        runTutorial();
    }

    return (
        <S.TutorialWrapper isTutorialOpened={isTutorialOpened}>
            <S.TutorialContainer>
                <Blob color={themeContext.colors.red} isBlobShowed={isTutorialOpened}>
                    <S.BlobContainer isTutorialOpened={isTutorialOpened}>
                        <S.CharacterWrapper onClick={startTutorial} isTutorialOpened={isTutorialOpened}>
                            <S.Character src={publicImages.tutorial.character} />
                        </S.CharacterWrapper>
                    </S.BlobContainer>
                </Blob>
                {text &&
                    (<S.BubbleWrapper>
                        <Bubble leftSide={true} desc={text} fillWidth={true} />
                        <S.ButtonRow>
                            <Button backgroundColor={themeContext.colors.darkGreen} color={themeContext.colors.white} size={ButtonSizesEnum.xs} onClick={next}>Další</Button>
                            <Button backgroundColor={themeContext.colors.red} color={themeContext.colors.white} size={ButtonSizesEnum.xs} onClick={reset}>Zavřít</Button>
                        </S.ButtonRow>
                    </S.BubbleWrapper>)
                }
            </S.TutorialContainer>
        </S.TutorialWrapper>
    )
}

export default Tutorial
