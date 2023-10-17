import axios from 'axios'

export const callApi = async (endpoint: string, data: object, method: "POST" | "GET") => {
    const usedFunction = method === "GET" ? axios.get : axios.post
    return await usedFunction(`/api/${endpoint}`, data)
}