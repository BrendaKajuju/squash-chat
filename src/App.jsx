import { useHistory, useState, useEffect } from 'react'
import {BrowserRouter  as Router, Switch, Route } from "react-router-dom"
import './App.css'
import { AuthenticationProvider } from './context/AuthenticationContext'
import Login from "./components/Login"
import Chat from './components/Chat'

// Tasks;
//   1. import context component
//   2. import login component
//   3. import chat component

function App() {
  return (
 <div>
  <Router>
    <AuthenticationProvider>
      <switch>
      {/* //render either one of the components below */}
      <Route path="/" component={Chat} />
      <Route path="/" component={Login} />
      </switch>
    </AuthenticationProvider>
  </Router>
 </div>
  )
}

export default App;
