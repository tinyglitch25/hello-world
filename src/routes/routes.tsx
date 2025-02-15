import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginIndex from '../views/auth/login/LoginIndex.tsx'
import {Suspense} from 'react'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginIndex/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;