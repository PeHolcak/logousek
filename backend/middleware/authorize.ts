import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'


export default async function handler(req: NextApiRequest, res: NextApiResponse, role: string) {
  const session = await getSession({ req })

  if (session) {
    switch (role) {
      case "ADMIN":
        if ((session?.user as any)?.role === "ADMIN") {
          return true;
        }
        return false;
      default:
        return true;
    }
  }
  return false

}
