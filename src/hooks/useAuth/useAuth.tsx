import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('UseAuth must be used within AuthProvider');
    }
    return context;
};