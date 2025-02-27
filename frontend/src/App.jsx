import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/start'
import Home from './pages/Home'
import UserProtectedWrappper from './pages/UserProtectedWrappper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrappper from './pages/CaptainProtectedWrapper'
import Riding from './pages/Riding'
import CaptainLogout from './pages/CaptainLogout'
import CaptainRiding from './pages/CaptainRiding'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path='/home' element={
          <UserProtectedWrappper>
           <Home/>
          </UserProtectedWrappper>
          }/>
        <Route path='/user/logout' element={
          <UserProtectedWrappper>
           <UserLogout/>
          </UserProtectedWrappper>
          }/>
           <Route path='/captain-home' element={
          <CaptainProtectedWrappper>
           <CaptainHome/>
           </CaptainProtectedWrappper>
          }/>
         <Route path='/captain/logout' element={
          <CaptainProtectedWrappper>
            <CaptainLogout />
          </CaptainProtectedWrappper>
        } />
        
      </Routes>
    </div>
  )
}

export default App