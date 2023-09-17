import { AudioDiffConfType } from "@helpers/sound-helper";
import { NamedImage, wordDifferentiationSrcs } from "@helpers/image-helper";
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
    cowWord,
    pencil,
    sniper,
    chalks,
    training,
    honey,
    iceCube,
    scales,
    vase,
    mouse,
    bowl
} from "./sounds";



const Images = {
    archery: <NamedImage src={wordDifferentiationSrcs.archery} name="archery" />,
    hourglass: <NamedImage src={wordDifferentiationSrcs.hourglass} name="hourglass" />,
    pouring: <NamedImage src={wordDifferentiationSrcs.pouring} name="pouring" />,
    roseHip: <NamedImage src={wordDifferentiationSrcs.roseHip} name="roseHip" />,
    spring: <NamedImage src={wordDifferentiationSrcs.spring} name="spring" />,
    zipperTool: <NamedImage src={wordDifferentiationSrcs.zipperTool} name="zipperTool" />,
    woman: <NamedImage src={wordDifferentiationSrcs.woman} name="woman" />,
    groupOfMen: <NamedImage src={wordDifferentiationSrcs.groupOfMen} name="groupOfMen" />,
    grass: <NamedImage src={wordDifferentiationSrcs.grass} name="grass" />,
    cow: <NamedImage src={wordDifferentiationSrcs.cow} name="cow" />,
    pencil: <NamedImage src={wordDifferentiationSrcs.pencil} name="spring" />,
    sniper: <NamedImage src={wordDifferentiationSrcs.sniper} name="sniper" />,
    chalks: <NamedImage src={wordDifferentiationSrcs.chalks} name="chalks" />,
    training: <NamedImage src={wordDifferentiationSrcs.training} name="training" />,
    honey: <NamedImage src={wordDifferentiationSrcs.honey} name="honey" />,
    iceCube: <NamedImage src={wordDifferentiationSrcs.iceCube} name="iceCube" />,
    vase: <NamedImage src={wordDifferentiationSrcs.vase} name="vase" />,
    scales: <NamedImage src={wordDifferentiationSrcs.scales} name="scales" />,
    bowl: <NamedImage src={wordDifferentiationSrcs.bowl} name="bowl" />,
    mouse: <NamedImage src={wordDifferentiationSrcs.mouse} name="mouse" />,
}

const getWordDiffConf = (): AudioDiffConfType => ({
    "1": [
        {
            name: "chalks",
            incorrect: [{ name: "training", svg: Images.training, reference: "" }],
            correct: {
                name: "chalks", svg: Images.chalks, reference: ""
            },
            sound: chalks,
        },
        {
            name: "training",
            incorrect: [{ name: "chalks", svg: Images.chalks }],
            correct: {
                name: "training", svg: Images.training
            },
            sound: training,
        },
        {
            name: "honey",
            incorrect: [{ name: "iceCube", svg: Images.iceCube }],
            correct: {
                name: "honey", svg: Images.honey
            },
            sound: honey,
        },
        {
            name: "iceCube",
            incorrect: [{ name: "honey", svg: Images.honey }],
            correct: {
                name: "iceCube", svg: Images.iceCube
            },
            sound: iceCube,
        },
        {
            name: "woman",
            incorrect: [
                { name: "groupOfMen", svg: Images.groupOfMen }],
            correct: {
                name: "woman", svg: Images.woman
            },
            sound: woman,
        },
        {
            name: "groupOfMen",
            incorrect: [{ name: "woman", svg: Images.woman }],
            correct: {
                name: "groupOfMen", svg: Images.groupOfMen
            },
            sound: groupOfMen,
        },
        {
            name: "grass",
            incorrect: [{ name: "cow", svg: Images.cow }],
            correct: {
                name: "grass", svg: Images.grass
            },
            sound: grass,
        },
        {
            name: "cow",
            incorrect: [{ name: "grass", svg: Images.grass }],
            correct: {
                name: "cow", svg: Images.cow
            },
            sound: cowWord,
        },
        {
            name: "pencil",
            incorrect: [{ name: "sniper", svg: Images.sniper }],
            correct: {
                name: "pencil", svg: Images.pencil
            },
            sound: pencil,
        },
        {
            name: "sniper",
            incorrect: [{ name: "pencil", svg: Images.pencil }],
            correct: {
                name: "sniper", svg: Images.sniper
            },
            sound: sniper,
        },
        {
            name: "archery",
            incorrect: [
                { name: "roseHip", svg: Images.roseHip, reference: <><a href="https://www.flaticon.com/free-icons/rose-hip" title="rose hip icons">Rose hip icons created by popo2021 - Flaticon</a></> }],
            correct: {
                name: "archery", svg: Images.archery, reference: <><a href="https://www.freepik.com/free-vector/crossed-arrows-vector-illustration-medieval-weapon-war-battle-accessory_11235613.htm#query=archery&position=2&from_view=search&track=sph">Image by pch.vector</a> on Freepik</>
            },
            sound: archery,
        },
        {
            name: "spring",
            incorrect: [{ name: "hourglass", svg: Images.hourglass }],
            correct: {
                name: "spring", svg: Images.spring
            },
            sound: spring,
        },
        {
            name: "hourglass",
            incorrect: [{ name: "spring", svg: Images.spring }],
            correct: {
                name: "hourglass", svg: Images.hourglass
            },
            sound: hourglass,
        },
        {
            name: "pouring",
            incorrect: [{ name: "zipperTool", svg: Images.zipperTool }],
            correct: {
                name: "pouring", svg: Images.pouring
            },
            sound: pouring,
        },
        {
            name: "roseHip",
            incorrect: [{ name: "archery", svg: Images.archery, reference: <><a href="https://www.freepik.com/free-vector/crossed-arrows-vector-illustration-medieval-weapon-war-battle-accessory_11235613.htm#query=archery&position=2&from_view=search&track=sph">Image by pch.vector</a> on Freepik</> }],
            correct: {
                name: "roseHip", svg: Images.roseHip, reference: <><a href="https://www.flaticon.com/free-icons/rose-hip" title="rose hip icons">Rose hip icons created by popo2021 - Flaticon</a></>
            },
            sound: roseHip,
        },
        {
            name: "zipperTool",
            incorrect: [{ name: "pouring", svg: Images.pouring }],
            correct: {
                name: "zipperTool", svg: Images.zipperTool
            },
            sound: zipperTool,
        },

        {
            name: "vase",
            incorrect: [{ name: "scales", svg: Images.scales }],
            correct: {
                name: "vase", svg: Images.vase
            },
            sound: vase,
        },
        {
            name: "scales",
            incorrect: [{ name: "vase", svg: Images.vase }],
            correct: {
                name: "scales", svg: Images.scales
            },
            sound: scales,
        },
        {
            name: "mouse",
            incorrect: [{ name: "bowl", svg: Images.bowl }],
            correct: {
                name: "mouse", svg: Images.mouse
            },
            sound: mouse,
        },
        {
            name: "bowl",
            incorrect: [{ name: "mouse", svg: Images.mouse }],
            correct: {
                name: "bowl", svg: Images.bowl
            },
            sound: bowl,
        },
    ],
});


export default getWordDiffConf