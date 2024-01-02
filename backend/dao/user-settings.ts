import { DEFAULT_AURA, DEFAULT_CHARACTER } from '@constants/shop'
import { PrismaClient, UserSettings } from '@prisma/client'

const prisma = new PrismaClient()

export const getUserSettings = async (
  userId: string
): Promise<UserSettings | null> => {
  return await prisma.userSettings.findUnique({
    where: { userId },
  })
}

export const setSettingsToUserSettings = async (
  userId: string,
  aura?: string,
  character?: string
): Promise<UserSettings | null> => {
  return await prisma.userSettings.update({
    where: { userId },
    data: {
      aura,
      character,
    },
  })
}

export const createUserSettings = async (
  userId: string,
  aura?: string,
  character?: string
): Promise<UserSettings | null> => {
  return await prisma.userSettings.create({
    data: {
      userId,
      aura: aura ?? DEFAULT_AURA,
      character: character ?? DEFAULT_CHARACTER,
    },
  })
}
