import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client'

import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'

import { getUserById, getUsersByIds } from 'backend/dao/user'
import {
  listCredit,
  getCreditByUserId,
  CreditWithRank,
  getRankByUserId,
} from 'backend/dao/credit'
import getLeaderboardDtoIn from 'backend/dtoIn/get-leaderboard'
import { Credit } from '@prisma/client'
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from 'next-auth'

const APP_TO = 8

type Warnings = {
  code?: string
  unSupportedKeys?: string[]
}[]

export type UserWithCredit = {
  nickName: string
  amount?: number
  index?: number
  userId?: string
  creditId?: string
  rank?: number
}

export type GetLeaderBoardDtoOut = {
  currentUser?: UserWithCredit
  errorCode?: string
  warnings?: Warnings
  users?: UserWithCredit[]
}

type GetLeaderboadApiRequest = NextApiRequest

const getNickname = (user?: User) => {
  if (!user) {
    return ''
  }
  return user?.type === 'HOST' ? 'Host' : user?.nickName ?? ''
}

const getUsersDtoOut = (users: User[], credit: CreditWithRank) => {
  const searchedUser = users.find((user) => user.id === credit.userId)
  return {
    amount: credit.amount,
    index: 1,
    nickName: getNickname(searchedUser),
    userId: searchedUser?.id,
    creditId: credit.id,
    rank: credit.rank,
  }
}

const getUserIdsByCredit = (credits: CreditWithRank[]) =>
  credits.map((credit) => credit.userId)

const getCurrentUser = (
  currentUserCredit?: Credit,
  currentUserData?: User,
  currentUserRank?: number
) => {
  const nickName = getNickname(currentUserData)
  if (currentUserData) {
    if (currentUserCredit) {
      return {
        index: 1,
        amount: currentUserCredit.amount,
        nickName,
        userId: currentUserData.id,
        creditId: currentUserCredit.id,
        rank: currentUserRank,
      }
    }
    return {
      nickName,
      userId: currentUserData.id,
      rank: currentUserRank,
    }
  }

  return undefined
}

export default async function handler(
  req: GetLeaderboadApiRequest,
  res: NextApiResponse<GetLeaderBoardDtoOut>
) {
  const session = await getServerSession(req, res, authOptions)
  const currentUserId = (session as any)?.user?.id

  // 1. Check httpMethod
  if (req.method === 'GET') {
    //2. Check dtoIn
    if (
      typeof req?.query !== 'object' ||
      !(await getLeaderboardDtoIn.isValid(req?.query))
    ) {
      //2.1. dtoIn is not valid
      return res.status(400).json({
        errorCode: 'wrong_dto_in',
      })
    }
    //2.2. dtoIn contains keys beyond the scope of dtoInType
    const warnings = checkUnsupportedKeys(['userId'], req.body)

    //3. Check if the userId from dtoIn exists
    let currentUserData: User | null = null
    try {
      if (currentUserId) {
        currentUserData = await getUserById(currentUserId)
      }
    } catch (err) {
      //3.1. Failed to get data from the database and an error was thrown
      console.error(err)
      return res.status(400).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    //3.2. UserId from dtoIn does not exists. return user_not_found error
    if (!currentUserData) {
      return res.status(400).json({
        errorCode: 'user_not_found',
        warnings: warnings,
      })
    }

    // 4. Gets credit for the logged-in user
    let currentUserCredit
    if (currentUserId) {
      try {
        currentUserCredit = await getCreditByUserId(currentUserId)
      } catch (err) {
        //4.1. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(400).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    }

    // 5. Get the placement of the registered user in the tournament
    let currentUserRank
    if (currentUserId) {
      try {
        currentUserRank = await getRankByUserId(
          currentUserCredit?.amount ?? 0,
          currentUserId
        )
      } catch (err) {
        //5.1. Failed to get data from the database and an error was thrown
        console.error(err)
        return res.status(400).json({
          errorCode: 'server_error',
          warnings: warnings,
        })
      }
    }

    // 6. Gets the credit records with the highest value
    let theBiggestCredits: Credit[] = []
    try {
      theBiggestCredits = await listCredit(APP_TO)
    } catch (err) {
      //6.1. Failed to get data from the database and an error was thrown. return server_error error
      console.error(err)
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 7. Gets the ids of users with the highest credit value
    const theBiggestCreditsWithRanks: CreditWithRank[] = theBiggestCredits.map(
      (credit, index) => ({
        ...credit,
        rank: index,
      })
    )

    let theBestUsers: User[] = []
    try {
      const userIds = getUserIdsByCredit(theBiggestCreditsWithRanks)
      theBestUsers = await getUsersByIds(userIds)
    } catch (error) {
      // 7.1. Failed to get data from the database and an error was thrown. return server_error error
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 8. Creates a structure that contains the user's data and their credit value
    const users: UserWithCredit[] = theBiggestCreditsWithRanks.map((credit) => {
      return getUsersDtoOut(theBestUsers, credit)
    })

    // 9. Gets the data of users with the highest credit value
    try {
      const userIds = getUserIdsByCredit(theBiggestCreditsWithRanks)
      theBestUsers = await getUsersByIds(userIds)
    } catch (error) {
      return res.status(500).json({
        errorCode: 'server_error',
        warnings: warnings,
      })
    }

    // 10. Create a structure for the current user's data, his or her credit amount and ranking
    const currentUser = getCurrentUser(
      currentUserCredit ?? undefined,
      currentUserData ?? undefined,
      currentUserRank?.rank ?? undefined
    )

    // 11. Returns properly filled dtoOut.
    return res.status(200).json({
      users,
      currentUser,
    })
  } else {
    //1.1. ERROR - If httpMethod is not POST return not_found error
    return res.status(404).json({
      errorCode: 'endpoint_not_found',
    })
  }
}
