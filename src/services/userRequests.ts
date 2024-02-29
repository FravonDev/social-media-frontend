import { LoginResponse, SimpleUser } from "../interfaces/user";
import api from "./httpClient/axios";

//
export const postLoginData = async (email: string, password:string) => {
   return await api.post<LoginResponse>('accounts/login', {
        email,
        password
    });
}

export const fetchUserSummary = async () => {
    return await api.get<SimpleUser>('accounts/summary');
}