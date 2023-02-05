import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Account from './components/pages/Account'
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'
import { AuthContextProvider } from './Context/AuthContext'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App