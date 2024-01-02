const checkHttpMethod = (requestedMethod, method) => {
  return method && method === requestedMethod
}

export default checkHttpMethod
