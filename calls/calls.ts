import axios from 'axios'

export const callApi = async <T>(endpoint: string, data: object, method: "POST" | "GET") => {
    const usedFunction = method === "GET" ? axios.get : axios.post
    return await usedFunction<T>(`${process.env.NEXT_PUBLIC_URL}api/${endpoint}`, data)
}