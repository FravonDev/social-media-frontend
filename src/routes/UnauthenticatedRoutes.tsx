import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";

export const UnauthenticatedRoutes = () => {
    const { isAuthenticated, isLoadingUser } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    if (isLoadingUser) {
        return <div>Verifying authentication</div>
    }

    if (isAuthenticated) {
        navigate(location.state?.from.pathname || '/', { state: { from: location } });
    }

    return (
        <Outlet />
    )
}
