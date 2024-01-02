import { NextApiRequest, NextApiResponse } from 'next'
import checkDtoIn from './checkDtoIn'
import checkHttpMethod from './checkHttpMethod'

const handleRequests = async (
  req,
  res,
  requestedMethod,
  dtoInScheme,
  middlewareCallback
) => {
  if (checkHttpMethod(requestedMethod, req.method)) {
    if (checkDtoIn(req.body, dtoInScheme)) {
      res.status(200).send(await middlewareCallback(req.body, res))
    } else {
      res.status(405).send({ message: 'Wrong dtoOut!' })
    }
  } else {
    res.status(405).send({ message: 'Wrong method!' })
  }
}

export default handleRequests
