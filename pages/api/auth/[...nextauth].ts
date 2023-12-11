/* eslint-disable */

import bcrypt from 'bcryptjs'

import { getUserByName } from 'backend/dao/user'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                nickName: {
                    label: 'NickName',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
                type: {
                    label: 'type',
                },
            },

            authorize: async (credentials): Promise<any> => {
                if (credentials?.type === 'registredUser') {
                    const { nickName, password } = credentials || {}
                    if (nickName && password) {
                        const user = (await getUserByName(nickName))[0]
                        console.log("user22", user, process.env.URL)
                        if (!user || !user.password || !bcrypt.compareSync(password, user.password)) {
                            throw new Error('wrong_password')
                        }

                        return {
                            id: user.id,
                            name: `${user.firstName} ${user.surName}`,
                            role: user.type,
                        }
                    } else {
                        throw new Error('Wrong dtoIn')
                    }
                } else {
                    const { nickName } = credentials ?? {}
                    if (nickName) {
                        const user = (await getUserByName(nickName))[0]
                        console.log("user22", user, process.env.URL)
                        return {
                            id: user.id,
                            name: `${user.firstName}`,
                            role: user.type || 'nic',
                        }
                    }
                    return {}
                }
            },
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/auth/signIn',
        error: '/auth/error',
    },
    callbacks: {
        jwt({ token, user }: any) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        async session({ session, token }: any) {
            const updatedUser = {
                ...session.user,
                role: token?.role || "",
                id: token?.sub || '',
            }

            return { ...session, user: updatedUser }
        },
    },
}

export default NextAuth(authOptions)
