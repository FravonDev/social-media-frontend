import { ReactNode, createContext, useState } from "react";
import api from "../services/httpClient/axios";
import { useQuery } from "@tanstack/react-query";
import { SimpleUser } from "../interfaces/user";
import { fetchUserSummary, postLoginData } from "../services/userRequests";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextInterface {
    user: SimpleUser | undefined;
    isAuthenticated: boolean;
    isLoadingUser: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}


export const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<SimpleUser | undefined>();
    const isAuthenticated = !!user;

    const login = async (email: string, password: string) => {
        try {
            const { data } = await postLoginData(email, password);

            localStorage.setItem("access_token", data.access_token);

            await getUserData();
        } catch (error) {
            console.log(error);
            alert('Error on login');
        }
    }

    const logout = () => {
        console.log('toast');
        localStorage.removeItem('access_token');
        api.defaults.headers['Authorization'] = null;
        setUser(undefined);
    }

    const getUserData = async () => {
        const acess_token = localStorage.getItem('access_token');
        api.defaults.headers['Authorization'] = `Bearer ${acess_token}`;

        const { data } = await fetchUserSummary()
        setUser(data);

    }

    const { isLoading: isLoadingUser, error, isError } = useQuery({
        queryKey: ['user'],
        queryFn: getUserData,
        // refetchInterval: 1000 * 60 * 5,
        retryDelay: 1000,
        retry: 3
    });

    // if (isError) {
    //     if (axios.isAxiosError(error)) {
    //         if (error.response?.status === 401) {
    //             logout();
    //             return;
    //         }
    //     }
    //     console.log(error);
    // }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            isLoadingUser,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}