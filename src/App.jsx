import { useNavigate, useState, useEffect } from 'react'
import {BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { AuthenticationProvider } from './context/AuthenticationContext'
import Login from "./components/Login"
import Chat from './components/Chats'

// Tasks;
//   1. import context component

// import Login from "./components/Login"

import Chats from "./components/Chats"

function App() {
  return (
 <div>
  <Router>
    <AuthenticationProvider>
      <Routes>
      {/* //render either one of the components below */}
      <Route path="/" component={Chats} />
      <Route path="/" component={Login} />
    </Routes>
    </AuthenticationProvider>
  </Router>
 </div>
  )
}

export default App;
