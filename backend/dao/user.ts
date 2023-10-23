import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export const countUsers = async (
  searchUserString?: string
): Promise<number> => {
  if (searchUserString) {
    return await prisma.user.count({
      where: {
        OR: [
          {
            nickName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            firstName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            surName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
  }
  return await prisma.user.count({})
}

export const countByFirstnameAndSurname = async (
  firstString: string,
  secondString: string
): Promise<number> => {
  return await prisma.user.count({
    where: {
      OR: [
        {
          AND: [
            {
              firstName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
          ],
        },
        {
          AND: [
            {
              firstName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
          ],
        },
      ],
    },
  })
}

export const listUsersByFirstnameAndSurname = async (
  firstString: string,
  secondString: string,
  limit: number,
  cursor: number
): Promise<User[]> => {
  return await prisma.user.findMany({
    skip: cursor,
    take: limit,
    where: {
      OR: [
        {
          AND: [
            {
              firstName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
          ],
        },
        {
          AND: [
            {
              firstName: {
                contains: secondString,
                mode: 'insensitive',
              },
            },
            {
              surName: {
                contains: firstString,
                mode: 'insensitive',
              },
            },
          ],
        },
      ],
    },
  })
}

export const listUsers = async (
  searchUserString?: string,
  limit?: number,
  cursor?: number
): Promise<User[]> => {
  if (searchUserString) {
    return await prisma.user.findMany({
      skip: cursor,
      take: limit,
      where: {
        OR: [
          {
            nickName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            firstName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
          {
            surName: {
              contains: searchUserString,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
  }

  return prisma.user.findMany({
    skip: cursor,
    take: limit,
  })
}

export const getUserByName = async (nickName: string): Promise<User[]> => {
  return await prisma.user.findMany({
    where: { nickName },
  })
}

export const getUserById = async (userId: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id: userId },
  })
}

export const getUsersByIds = async (userId: string[]): Promise<User[]> => {
  return await prisma.user.findMany({
    where: { id: { in: userId } },
  })
}

export const createUser = async (userData: Omit<User, 'id'>): Promise<User> => {
  return await prisma.user.create({
    data: userData,
  })
}

export const deleteUser = async (id: string): Promise<User> => {
  return await prisma.user.delete({
    where: { id },
  })
}
