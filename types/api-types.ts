export type Warnings = {
    code?: string
    unSupportedKeys?: string[]
}[]

export type ErrorDtoOut = {
    errorCode?: string
    warnings?: Warnings
}