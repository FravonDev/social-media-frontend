import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const AuthenticatedRoutes = () => {
  const { isLoadingUser, isAuthenticated } = useAuth()
  const location = useLocation()

  if (isLoadingUser && !isAuthenticated) {
    return <h1>Loading...</h1>
  }

  if (!isLoadingUser && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return (
    <Outlet />
  )
}
