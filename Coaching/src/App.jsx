import { useState } from 'react'
import { Routes, Route, useSearchParams } from 'react-router'
import LandingPage from './pages/landing-page/LandingPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<LandingPage />}/>
    </Routes>
  )
}

export default App
