import useTranslation from 'next-translate/useTranslation'


export const useTranslateFunctions = () => {
    const { t: tHome } = useTranslation('home')
    const { t: tCommon } = useTranslation('common')
    const { t: tNotFound } = useTranslation('notFound')
    const { t: tLogin } = useTranslation('login')
    const { t: tGameMenu } = useTranslation('gameMenu')
    const { t: tActivity } = useTranslation('activity')
    const { t: tAdmin } = useTranslation('admin')
    const { t: tError } = useTranslation('error')
    return { tHome, tCommon, tNotFound, tActivity, tGameMenu, tLogin, tAdmin, tError }
};