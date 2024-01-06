import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import LoginAgain from './pages/login-again'
import Additional from './pages/additional'
import MailAdditional from './pages/eadditional'
import Grats from './pages/grats'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/error' element={<LoginAgain/>}/>
            <Route path='/login/confirm' element={<Additional/>}/>
            <Route path='/login/contact' element={<MailAdditional/>}/>
            <Route path='/success' element={<Grats/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}