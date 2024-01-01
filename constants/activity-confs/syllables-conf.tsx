import { NamedImage, syllablesSrcs } from '@helpers/image-helper'
import { PictureType } from '@helpers/sound-helper'
import { serialitySrcs, wordDifferentiationSrcs } from '@helpers/image-helper'
import Bear from '@components/svg/templates/bear'
import LadyBug from '@components/svg/templates/ladybug'

const NormalImages = {
    banana: <NamedImage src={serialitySrcs.banana} name="banana" />,
    grandmother: (
        <NamedImage src={syllablesSrcs.grandmother} name="grandmother" />
    ),
    bear: <Bear changeConfig={{}} customViewBox="" />,
    honey: <NamedImage src={wordDifferentiationSrcs.honey} name="honey" />,
    goat: <NamedImage src={syllablesSrcs.goat} name="goat" />,
    ladyBug: <LadyBug changeConfig={{}} customViewBox="" />,

    apple: <NamedImage src={syllablesSrcs.apple} name="apple" />,
    cow: <NamedImage src={syllablesSrcs.cow} name="cow" />,
    rabbit: <NamedImage src={syllablesSrcs.rabbit} name="rabbit" />,

    roller: <NamedImage src={syllablesSrcs.roller} name="roller" />,
    vase: <NamedImage src={serialitySrcs.vase} name="vase" />,
    banknote: <NamedImage src={serialitySrcs.banknote} name="banknote" />,

    pencil: <NamedImage src={wordDifferentiationSrcs.pencil} name="pencil" />,
}

export type Syllable = {
    name: string,
    pairs: { first: PictureType; second: PictureType }[]
}

export type SyllablesConfType = {
    [key: string]: Syllable[]
}

const getSyllblesConf = (): SyllablesConfType => ({
    '1': [
        {
            name: "01",
            pairs: [
                {
                    first: { name: 'banana', svg: NormalImages.banana },
                    second: {
                        name: 'grandmother',
                        svg: NormalImages.grandmother,
                        reference: (
                            <>
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/cute-grandmother-reading-book-sofa-cartoon-vector-icon-illustration-people-education-isolated_32669688.htm#query=grandma&position=29&from_view=search&track=robertav1">
                                    Image by catalyststuff
                                </a>{' '}
                                on Freepik
                            </>
                        ),
                    },
                },
                {
                    first: { name: 'bear', svg: NormalImages.bear },
                    second: {
                        name: 'honey', svg: NormalImages.honey, reference: (
                            <>
                                <a rel="noreferrer" href="https://www.freepik.com/icon/honey_3274277#fromView=resource_detail&position=2">
                                    Image by Freepik
                                </a>{' '}
                                on Freepik
                            </>
                        ),
                    },
                },
                {
                    first: { name: 'ladyBug', svg: NormalImages.ladyBug },
                    second: {
                        name: 'goat',
                        svg: NormalImages.goat,
                        reference: (
                            <>
                                Image by{' '}
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/sheeps-goats-illustration_791924.htm#page=5&query=ram%20animal%20drawing%20sheep&position=0&from_view=search&track=robertav1">
                                    Freepik
                                </a>
                            </>
                        ),
                    },
                },
            ],
        },
        {
            name: "02",
            pairs: [
                {
                    first: {
                        name: 'cow',
                        svg: NormalImages.cow,
                        reference: (
                            <>
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/farm-animals-cartoon-icons-set-hen-gobbler-cow-horse-ram-cat-bunny-isolated-vector-illustration_4188523.htm#query=farm%20animals&position=1&from_view=search&track=sph">
                                    Image by macrovector
                                </a>{' '}
                                on Freepik
                            </>
                        ),
                    },
                    second: {
                        name: 'rabbit',
                        svg: NormalImages.rabbit,
                        reference: (
                            <>
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/cartoon-rabbits-set_9649167.htm#query=bunny&position=19&from_view=search&track=robertav1">
                                    Image by pch.vector
                                </a>{' '}
                                on Freepik
                            </>
                        ),
                    },
                },
                {
                    first: { name: 'vase', svg: NormalImages.vase },
                    second: {
                        name: 'roller',
                        svg: NormalImages.roller,
                        reference: (
                            <>
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/wooden-marble-stone-rolling-pins-vector_5900544.htm#page=6&query=baking%20tools&position=3&from_view=search&track=robertav1">
                                    Image by vectorpocket
                                </a>{' '}
                                on Freepik
                            </>
                        ),
                    },
                },
                {
                    first: { name: 'banknote', svg: NormalImages.banknote },
                    second: {
                        name: 'pencil', svg: NormalImages.pencil, reference: (
                            <>
                                <a rel="noreferrer" href="https://www.freepik.com/free-vector/illustration-pen-icon_2606110.htm">
                                    Image by rawpixel.com
                                </a>{' '}
                                on Freepik
                            </>
                        ),
                    },
                },
            ],
        },
    ],
})

export default getSyllblesConf
