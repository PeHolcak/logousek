import { TutorialConfigType } from "@hooks/useTutorial"
import { sounds } from "./sounds-paths"


export const ActivityPageConf: TutorialConfigType = [
    {
        text: '',
        sound: sounds.welcome,
        confirm: false,
        minimize: true,
        waitMilis: 5000,
        higlighttedIds: ["soundButton"]
    },
    {
        text: '',
        sound: sounds.solution,
        confirm: false,
        minimize: true,
        waitMilis: 4000,
        higlighttedClassNames: ["activityCard"]
    },
]