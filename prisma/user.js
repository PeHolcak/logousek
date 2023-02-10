// /prisma/user.js
import prisma from './prisma'

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUserByName = async ({ nickName }) => {
  console.log('nickName', nickName)
  const user = await prisma.user.findMany({
    where: { nickName },
  })
  return user
}

export const getUserById = async ({ userId }) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })
  return user
}

// CREATE
export const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
  })
  return user
}

// UPDATE
export const updateUser = async (id, updateData) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  })
  return user
}

// DELETE
export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  })
  return user
}
