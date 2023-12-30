import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../services/reactQuery/queryClient";
import { AuthProvider } from "./AuthContext";

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </QueryClientProvider>


    )
}