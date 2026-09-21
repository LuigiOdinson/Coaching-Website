import { useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router'
import LandingPage from './pages/landing-page/LandingPage'
import ServicesPage from './pages/services-page/ServicesPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<LandingPage />}/>
      <Route path='/services' element={<ServicesPage/>}/>
    </Routes>
  )
}

export default App
