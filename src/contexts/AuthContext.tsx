import { ReactNode, createContext, useState } from "react";
import api from "../services/http/axios";
import { useQuery } from "@tanstack/react-query";
import { SimpleUser } from "../interfaces";
import { AxiosError } from "axios";


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

interface LoginResponse {
    access_token: string;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<SimpleUser | undefined>();
    const isAuthenticated = !!user;

    const login = async (email: string, password: string) => {
        try {
            const { data } = await api.post<LoginResponse>('accounts/login', {
                email,
                password
            });

            localStorage.setItem("access_token", data.access_token);

            await getUserData();
        } catch (error) {
            console.log(error);
            alert('Error on login');
        }
    }

    const logout = () => {
        alert('logout');
        localStorage.removeItem('access_token');
        api.defaults.headers['Authorization'] = null;
        setUser(undefined);
    }

    const getUserData = async () => {
        try {
            const acess_token = localStorage.getItem('access_token');
            api.defaults.headers['Authorization'] = `Bearer ${acess_token}`;

            const { data } = await api.get<SimpleUser>('accounts/summary');
            setUser(data);

        } catch (error: any) {
            if (error.response?.status === 401) {
                logout();
                return;
            }
            console.log(error);
        }
    }

    const { isLoading: isLoadingUser } = useQuery({
        queryKey: ['user'],
        queryFn: getUserData,
        // refetchInterval: 1000 * 60 * 5,
    });

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