import { useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router'
import LandingPage from './pages/landing-page/LandingPage'
import ServicesPage from './pages/services-page/ServicesPage'
import SingleServicePage from './pages/single-service-page/SingleServicePage'
import ProfilePage from './pages/profile-page/ProfilePage'
import UserProvider from './providers/UserProvider'
import './App.css'

function App() {

  return (
    <UserProvider>
      <Routes>
        <Route index element={<LandingPage />}/>
        <Route path='/services' element={<ServicesPage/>}/>
        {/* <Route path='/services/serviceId' element={<SingleServicePage/>}/> */}
        <Route path='/service' element={<SingleServicePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </UserProvider>
  )
}

export default App
