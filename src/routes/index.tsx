import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthenticatedRoutes } from './AuthenticatedRoutes'
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes'
import { Login } from '../pages/Auth/Login/Login'
import { Register } from '../pages/Auth/Register/Register'

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route element={< UnauthenticatedRoutes />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                {/* private routes */}
                <Route element={< AuthenticatedRoutes />}>
                    <Route path="/" element={<div>feed </div>} />
                    <Route path="/profile/:username" element={<div>profile</div>} />
                    <Route path="/post/:id" element={<div>post</div>} />
                    <Route path="/chat" element={<div>chat</div>} />
                </Route>

                {/* not found */}
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    )
}