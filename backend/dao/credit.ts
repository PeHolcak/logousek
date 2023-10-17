
import { PrismaClient, Credit } from "@prisma/client";

const prisma = new PrismaClient();

// READ

export const listCredit = async (upTo: number): Promise<Credit[]> => {
  return await prisma.credit.findMany({
    orderBy: {
      amount: 'desc',
    },
    take: upTo,
  });
}

export const getCreditByUserId = async (userId: string): Promise<Credit | null> => {
  return await prisma.credit.findUnique({
    where: {
      userId,
    },
  });
}

export const addCredit = async (userId: string, creditAmount: number): Promise<Credit> => {
  return await prisma.credit.update({
    where: { userId: userId },
    data: {
      amount: {
        increment: creditAmount,
      },
    },
  });
}

export const createCredit = async (userId: string, creditAmount: number): Promise<Credit> => {
  return await prisma.credit.create({
    data: {
      userId: userId,
      amount: creditAmount,
    },
  });
}