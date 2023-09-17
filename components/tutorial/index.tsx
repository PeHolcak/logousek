import React, { useContext } from "react"
import { ThemeContext } from 'styled-components'

import Bubble from '@components/bubble'
import Bear from '@components/svg/templates/bear'
import { useTutorial, TutorialConfigType } from "@hooks/useTutorial"
import Button, { ButtonSizesEnum } from "@components/button"
import Blob from "@components/svg/blob/blob"

import * as S from './styled'

const config: TutorialConfigType = [{
    text: "Ahoj, vítej v aplikaci Logoušek.",
    sound: "",
    confirm: false,
    waitMilis: 4000
},
{
    text: "Nejdříve tě seznámím s tutorialem",
    sound: "",
    confirm: false,
    waitMilis: 4000
},
{
    text: "Pokud chceš v tutorialu zobrazit dalsi napovedu, klikni na zelené tlačítko. Pojdme si to vyzkoušet",
    sound: "",
    confirm: true
},
{
    text: "Pro zavření tutorialu stačí kliknout na červené tlačítko. Na to zatím neklikej",
    sound: "",
    confirm: false,
    waitMilis: 5000
},
{
    text: "Pro hraní hry, klikni na tlačítko hrát. Je označené žlutou barvou.",
    sound: "",
    higlighttedIds: ["navbarPlayButton", "mainPlayButton", "secondaryPlayButton"],
    confirm: false,
}

]


const Tutorial: React.FC = () => {
    const { text, runTutorial, isTutorialOpened, reset, next, canBeConfirmed } = useTutorial(config)
    const themeContext = useContext(ThemeContext)


    const startTutorial = () => {
        runTutorial();
    }
    console.log("text", text)
    return (
        <S.TutorialWrapper isTutorialOpened={isTutorialOpened}>
            <S.TutorialContainer>
                <Blob color={themeContext.colors.lightGreen} isBlobShowed={isTutorialOpened}>
                    <S.BlobContainer isTutorialOpened={isTutorialOpened}>
                        <S.LogosekWrapper onClick={startTutorial} isTutorialOpened={isTutorialOpened}>
                            <Bear customViewBox={""} />
                        </S.LogosekWrapper>
                    </S.BlobContainer>
                </Blob>
                {text ?
                    (<S.BubbleWrapper>
                        <Bubble hideBeak leftSide desc={text} fillWidth={true} />
                        <S.ButtonRow>
                            {canBeConfirmed ? <Button backgroundColor="green" color="white" size={ButtonSizesEnum.xs} onClick={next}>Další</Button> : null}
                            <Button backgroundColor="red" color="white" size={ButtonSizesEnum.xs} onClick={reset}>Zavřít</Button>
                        </S.ButtonRow>
                    </S.BubbleWrapper>)
                    : null}
            </S.TutorialContainer>
        </S.TutorialWrapper>
    )
}

export default Tutorial
