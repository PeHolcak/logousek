import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })

  res.json({ message: '' })
}

export default handler
