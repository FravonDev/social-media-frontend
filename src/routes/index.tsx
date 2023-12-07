import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>feed </div>} />
                <Route path="/register" element={<div>register</div>} />
                <Route path="/login" element={<div>login</div>} />
            </Routes>
        </BrowserRouter>
    )
}