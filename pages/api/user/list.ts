// import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '@prisma/client'

import authorize from 'backend/middleware/authorize'
import checkUnsupportedKeys from 'backend/dtoIn/check-unsupported-keys'
import listUserDtoIn from 'backend/dtoIn/list-user'

import {
  listUsers,
  listUsersByFirstnameAndSurname,
  countUsers,
  countByFirstnameAndSurname,
} from 'backend/dao/user'
import { ErrorDtoOut, Warnings } from 'types/api-types'

type ListUsersRequest = NextApiRequest & {
  query: { searchUserString?: string; limit?: number; cursor?: number }
}


export type listUsersDtoOut = {
  users: User[]
  totalUsersCount: number
  warnings?: Warnings
} | ErrorDtoOut

async function listUsersMiddleware(
  req: ListUsersRequest,
  res: NextApiResponse<listUsersDtoOut>
) {
  // 1. Check httpMethod
  // The method must be post because an array is being sent in dtoIn
  if (req.method === 'GET') {
    const isAuthorized = await authorize(req, res, 'ADMIN')

    //2. Check if the user has rights to call this endpoint
    if (isAuthorized) {
      //3. Check dtoIn
      if (
        typeof req?.query !== 'object' ||
        !(await listUserDtoIn.isValid(req?.query))
      ) {
        //3.1. dtoIn is not valid
        return res.status(400).json({
          errorCode: 'wrong_dto_in',
        })
      }
      //3.2. dtoIn contains keys beyond the scope of dtoInType
      const warnings = checkUnsupportedKeys(
        ['searchUserString', 'limit', 'cursor'],
        req?.query
      )

      let users: User[] = []
      let totalUsersCount = 0

      const { searchUserString, limit = 5, cursor = 0 } = req.query
      // 4. Check if searchUserString contains a space
      if ((searchUserString as string)?.includes(' ')) {
        //4.1. If it contains a space, it is a compound of two words(names and surnames).It is therefore necessary to approach the search differently
        const splitedString = (searchUserString as string).split(' ')
        const splitedStringHasCorrectLength = splitedString.length === 2
        try {
          if (splitedStringHasCorrectLength) {
            //4.1.1. The database is searched to see if there are users whose first and last name could match the searched string
            users = await listUsersByFirstnameAndSurname(
              splitedString[0],
              splitedString[1],
              Number(limit) || 0,
              Number(cursor) || 0
            )
          } else {
            //4.1.2. The searched string contains more than 2 spaces, in this case an empty field is returned
            users = []
          }
        } catch (err) {
          //4.1.3. Failed to get data from the database and an error was thrown. return server_error error
          console.error(err)
          return res.status(500).json({
            errorCode: 'server_error',
            warnings: warnings,
          })
        }

        //4.2. Checks if searchUserString contains only one space
        if (splitedStringHasCorrectLength) {
          try {
            //4.2.1. Gets the count of all users matching searchUserString from the database
            totalUsersCount = await countByFirstnameAndSurname(
              splitedString[0],
              splitedString[1]
            )
          } catch (err) {
            //4.2.2. ERROR - Failed to get data from the database and an error was thrown. return server_error error
            return res.status(500).json({
              errorCode: 'server_error',
              warnings: warnings,
            })
          }
        } else {
          //4.2.3. If it contains more than one space return count of all user as 0
          totalUsersCount = 0
        }
      } else {
        //4.3. If it do not contains a space
        try {
          //4.3.1. Gets a list of users from the database
          users = await listUsers(
            searchUserString,
            Number(limit) || 0,
            Number(cursor) || 0
          )
        } catch (err) {
          //4.3.1.1. ERROR - Failed to get data from the database and an error was thrown. return server_error error
          return res.status(500).json({
            errorCode: 'server_error',
            warnings: warnings,
          })
        }

        try {
          //4.3.2. Gets the number of users that match the given search
          totalUsersCount = await countUsers(searchUserString)
        } catch (err) {
          //4.3.2.1 ERROR - Failed to get data from the database and an error was thrown. return server_error error
          return res.status(500).json({
            errorCode: 'server_error',
            warnings: warnings,
          })
        }
      }
      //5. Returns properly filled dtoOut.
      return res.status(200).json({
        users,
        totalUsersCount,
        warnings: warnings,
      })
    } else {
      //2.1. ERROR - user has not right to call this endpoint. return not_authorize error
      return res.status(401).json({
        errorCode: 'not_authorize',
      })
    }
  } else {
    //1.1. ERROR - If httpMethod is not POST return not_found error
    return res.status(404).json({
      errorCode: 'endpoint_not_found',
    })
  }
}

export default listUsersMiddleware
