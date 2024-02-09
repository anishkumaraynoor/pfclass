import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"







//register
export const registerAPI = async (user)=>{
    return await commonAPI("POST", `${SERVER_URL}/register`, user, "")
}
//login
export const loginAPI = async (user)=>{
    return await commonAPI("POST", `${SERVER_URL}/login`, user, "")
}

export const addProjectAPI = async (reqBody, reqHeader)=>{
    return await commonAPI("POST", `${SERVER_URL}/add-project`, reqBody, reqHeader)
}

export const getHomeProjectsAPI = async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/get-home-projects`, "", "")
}

export const getAllProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVER_URL}/get-all-projects`, "", reqHeader)
}

export const getUserProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVER_URL}/get-user-projects`, "", reqHeader)
}