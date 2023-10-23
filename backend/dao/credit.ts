import { PrismaClient, Credit } from '@prisma/client'

const prisma = new PrismaClient()

// READ

export type CreditWithRank = Credit & { rank: number }

export const listCredit = async (upTo: number): Promise<Credit[]> => {
  return await prisma.credit.findMany({
    orderBy: [
      {
        amount: 'desc',
      },
      {
        createdAt: 'asc',
      },
    ],
    take: upTo,
  })
}

export const getCreditByUserIdWithRank = async (
  userId: string
): Promise<Credit | null> => {
  return await prisma.credit.findUnique({
    where: {
      userId,
    },
  })
}

export const getRankByUserId = async (
  userCreditAmount: number,
  userId: string
): Promise<{ rank: number } | null> => {
  const creditsWithSameOrHigherAmount = await prisma.credit.findMany({
    where: {
      amount: {
        gte: userCreditAmount,
      },
    },
    orderBy: [
      {
        amount: 'desc',
      },
      {
        userId: 'asc',
      },
    ],
  })
  const rank = creditsWithSameOrHigherAmount.findIndex(
    (credit) => credit.userId === userId
  )
  return { rank }
}

export const getCreditByUserId = async (
  userId: string
): Promise<Credit | null> => {
  return await prisma.credit.findUnique({
    where: {
      userId,
    },
  })
}

export const addCredit = async (
  userId: string,
  creditAmount: number
): Promise<Credit> => {
  return await prisma.credit.update({
    where: { userId: userId },
    data: {
      amount: {
        increment: creditAmount,
      },
    },
  })
}

export const createCredit = async (
  userId: string,
  creditAmount: number
): Promise<Credit> => {
  return await prisma.credit.create({
    data: {
      userId: userId,
      amount: creditAmount,
    },
  })
}
