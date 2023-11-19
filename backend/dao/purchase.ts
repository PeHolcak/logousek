import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getPurchaseByUserId = async (
    userId: string
): Promise<{ purchase?: string[] } | null> => {
    const purchase = await prisma.purchase.findUnique({
        where: {
            userId: userId,
        },
    })

    return { purchase: purchase ? purchase.itemNames : undefined }
}

export const updatePurchase = async (
    userId: string,
    itemNames: string[]
): Promise<void> => {
    await prisma.purchase.update({
        where: { userId: userId },
        data: {
            itemNames: itemNames,
        },
    })
}

export const createPurchase = async (
    userId: string,
    itemNames: string[]
): Promise<void> => {
    await prisma.purchase.create({
        data: {
            userId: userId,
            itemNames: itemNames,
        },
    })
}

