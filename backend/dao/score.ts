import { PrismaClient, Score } from '@prisma/client'
import { getEndOfDay, getStartOfDay } from '@helpers/date-helper'
import { isEmptyArray } from '@helpers/array-helper'

const prisma = new PrismaClient()

type GetScoreByUserIdArgs = {
  userId: string
  activityTypes?: string[]
  from?: string
  to?: string
}

export const getScoreByUserId = async ({
  userId,
  activityTypes,
  from,
  to,
}: GetScoreByUserIdArgs): Promise<Score[]> => {
  const activityType = isEmptyArray(activityTypes)
    ? { in: activityTypes }
    : undefined

  return await prisma.score.findMany({
    where: {
      userId,
      activityType,
      createdAt: {
        lte: to ? getEndOfDay(to) : undefined,
        gte: from ? getStartOfDay(from) : undefined,
      },
    },
  })
}


export const addScore = async (
  userId: string,
  score: number,
  activityType: string,
  difficulty: string,
  data: any
): Promise<Score> => {
  return await prisma.score.create({
    data: { userId, points: score, activityType, difficulty, data },
  })
}
