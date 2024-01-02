const checkUnsupportedKeys = (
  supportedKeys: string[],
  dtoIn: { [key: string]: any }
) => {
  const unSupportedKeys = Object.keys(dtoIn).filter((dtoInAttr) => {
    if (supportedKeys.includes(dtoInAttr)) {
      return false
    }
    return true
  })

  return [
    unSupportedKeys.length
      ? { code: 'unsupported_keys', unSupportedKeys: unSupportedKeys }
      : {},
  ]
}

export default checkUnsupportedKeys
